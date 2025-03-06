require('dotenv').config();
const express = require('express'); // CJS
const viewEngineConfig = require('./configs/viewEngine');
const webRoutes = require('./routes/web');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

viewEngineConfig(app); //config template engine + static files

app.use('/', webRoutes); // khai bao route, params '/v1' tao ra cac version link mac dinh  

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})