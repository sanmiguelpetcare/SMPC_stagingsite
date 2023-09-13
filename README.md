# NC-React-Rebuild

## Steps to run locally

Here is a step-by-step guide to run the app in your local machine:

### `run npm install`

This will install all packages required for the app via package.json

### `create .env file`

This will serve as environment variables for your local machine. See sample values below:

DO_SPACES_BUCKET=sanmiguelpetcare-space
DO_SPACES_ACCESS_KEY_ID=DO00F6L2MWJW3PF3UYQ8
DO_SPACES_ACCESS_SECRET_KEY=MyxaLkZ2U7ahn/7VdH4aJyEAusIjRx3y7rFp3UqSzEI
PORT=3001
SERVER_PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_NAME=nc
DB_USERNAME=root
DB_PASSWORD=password
SWELL_STOREFRONT_PK=pk_p2aI2WSztUyecuubPrt5xrM1x6lEfepy
SHOPIFY_NC_API_KEY=58e26756c4f2ebe2f5a7a2dcdb560627
SHOPIFY_STOREFORNT_ACCESS_KEY=dde9e10b909f34804f4a6144f7731c3b
# DO NOT DELETE 
SHOPIFY_ADMIN_API_ACCESS_TOKEN=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
SHOPIFY_APP_URL=https://nutri-chunks.myshopify.com
REACT_APP_IMAGE_PATH=files

### `run node server.js (for backend)`

This will run the server

### `run npm start (for frontend)`

This will run the static files