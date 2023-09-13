if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const cors = require('cors');
const path = require('path');
const models = require('./server/models');
const app = express();
const port = process.env.SERVER_PORT || 3000;

console.log("process.env.SERVER_PORT----------------------", process.env.SERVER_PORT)

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/api/product', require('./server/routes/product'));
app.use('/api/cart', require('./server/routes/cart'));
app.use('/api/order', require('./server/routes/order'));
app.use('/api/user', require('./server/routes/user'));
app.use('/api/distributor', require('./server/routes/distributor'));
app.use('/api/coupon', require('./server/routes/coupon'));
app.use('/api/subscription', require('./server/routes/subscription'));
app.use('/api/mailchimp', require('./server/routes/mailchimp'));

if(process.env.NODE_ENV === "production" || process.env.NODE_ENV === "staging") {
    console.log("Building application. Please wait...");

    app.use(express.static(path.join(__dirname, 'build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'build', 'index.html'))
    });
}

console.log("Database schemas syncing. Please wait...");
    
models.sequelize.sync()
    .then(response => {
        console.log("Done syncing database schemas...");

        app.listen(port, () => {
            console.log(`App listening to port ${port}...`)
        });
    })
    .catch(err => {
        console.log(err);
    })
