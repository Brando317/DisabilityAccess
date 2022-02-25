const dotenv = require("dotenv")

const envFound = dotenv.config();

if (!envFound) throw new Error("Cannot load env variables")

module.exports = {
    port: parseInt(process.env.PORT)
}