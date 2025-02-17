const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "VAJIRA-MD=mVV3HS7B#Bn7YqRC-JlvFvy9gPeTkWw3BXr0UB9aDkKtKnxgecWo",
MONGODB: process.env.MONGODB || "mongodb://mongo:YszgdBxTcgmCsigakakedaIIcsBhNGOU@junction.proxy.rlwy.net:11394",

BOT_NUMBER: process.env.BOT_NUMBER || "94711262551"
};
