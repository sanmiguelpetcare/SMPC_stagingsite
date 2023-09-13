const express = require('express');
const router = express.Router();
const controller = require('../controllers/order');

router
    .post('/pupstar/subscription', (req, res) => {
        const client = require("@mailchimp/mailchimp_marketing");
        const query = req.body;

        client.setConfig({
            apiKey: "9065abcd705a9a72ec8eaddafb9939c7-us2",
            server: "us2",
        });

        const run = async () => {
            const response = await client.lists.addListMember("867fc26f88", {
                email_address: query.email,
                status: "subscribed",
                merge_fields: {
                    FIRSTNAME: query.firstName,
                    LASTNAME: query.lastName,
                    PETNAME: query.petName,
                    PETBREED: query.petBreed,
                    MERGE5: query.petAge
                },
                tags: ["Pup Star"],
            });

            return response;
        };

        run().then( response => {
            if( response ) {
                res.status(200).send( response );
            }
        });
    })

    .post('/nc-protect/subscription', (req, res) => {
        const client = require("@mailchimp/mailchimp_marketing");
        const query = req.body;

        client.setConfig({
            apiKey: "9065abcd705a9a72ec8eaddafb9939c7-us2",
            server: "us2",
        });

        const run = async () => {
            const response = await client.lists.addListMember("cd93ab548e", {
                email_address: query.email,
                status: "subscribed",
                merge_fields: {
                    FNAME: query.firstName,
                    LNAME: query.lastName,
                    ADDRESS: query.address,
                    PHONE: query.phone,
                    ZIP: query.zip
                },
                tags: ["NC protect orders"],
            });

            return response;
        };

        run().then( response => {
            if( response ) {
                res.status(200).send( response );
            }
        });
    })

module.exports = router;
