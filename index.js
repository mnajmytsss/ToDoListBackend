const express = require('express')
const dotenv = require ('dotenv')
const useMiddleware = require('./middleware');
const router = require('./routes');
const tokenCookieMiddleware = require('./middleware/tokenCookieMiddleware')

const app = express()
dotenv.config()

useMiddleware(app)

app.use(router)
app.use(tokenCookieMiddleware)

const server_port = (process.env.SERVER_PORT) 

app.listen(server_port, () => {
 console.log(`Running on port http://localhost:${server_port}`);
})
