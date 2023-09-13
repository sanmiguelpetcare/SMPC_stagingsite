const AWS = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const path = require("path");
const { v4: uuid } = require("uuid");

/* use to format sequelize response */
exports.paginate = (res, page, limit, extras = {}) => {
    return {
        count: {
            total: res.count,
            page: page,
            lastPage: Math.ceil( res.count / limit ),
        },
        result: res.rows,
        ...extras
    }
}

/* use to upload media files to local/prod server */
exports.uploader = (params) => {
    const fieldname = (f) => {
        const images = ["images"];

        if(images.indexOf(f.fieldname) > -1) {
            return "images";
        }

        return f.fieldname;
    }

    if(process.env.NODE_ENV === "production" || process.env.NODE_ENV === "staging") {
        const endpoint = new AWS.Endpoint('sgp1.digitaloceanspaces.com');
        const s3 = new AWS.S3({
            endpoint: endpoint,
            accessKeyId: process.env.DO_SPACES_ACCESS_KEY_ID,
            secretAccessKey: process.env.DO_SPACES_ACCESS_SECRET_KEY
        });

        return multer({
            storage: multerS3({
                s3: s3,
                bucket: process.env.DO_SPACES_BUCKET,
                acl: 'public-read',
                key: (req, file, cb) => {
                    cb(null, `${fieldname(file)}/${uuid()}${path.extname(file.originalname)}`);
                }
            })
        }).fields(params.fields);
    }

    const storage = multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, path.resolve(`public/files/${fieldname(file)}`));
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname);
        }
    });

    return multer({ storage: storage }).fields(params.fields);
}