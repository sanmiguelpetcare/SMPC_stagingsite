const nodemailer = require('nodemailer');

exports.config = ( options ) => {

    console.log("options-----------", options)
    
    const mailer = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "testjuandelacruz64@gmail.com", 
            pass: "xatpzguljxbfwqjo", 
        }
    });

    const params = {
        from: "Nutrichunks <nutrichunks@sanmiguelpetcare.com>",
        replyTo: 'nutrichunksorders@gmail.com',
        to: options.email,
        subject: options.subject,
        html: options.body
    };

    mailer.sendMail( params, ( err, info ) => {
        if ( err ) {
            console.log(err);
            if( options.errcb ) {
                options.errcb();
            }
        } else {
            options.successcb();
        }
    });
};