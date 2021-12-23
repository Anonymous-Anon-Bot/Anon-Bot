/* codded by Anonymous
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// PLK Special Functions
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
 REMOVE2: process.env.THERI_KICK_PM === undefined ? 'false' : process.env.THERI_KICK_PM,
 PLKAFN: process.env.THERI_LIST_PM === undefined ? false : process.env.THERI_LIST_PM,
 PHONE: process.env.NUMBER === undefined ? '+919961515992' : process.env.NUMBER,   
 OA_NAME: process.env.DEPLOYER === undefined ? 'Anonymous Bot Owner' : process.env.DEPLOYER,    

};
