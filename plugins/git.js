const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/JDAq7br.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Creater Anandh *


*Pinky Bot making video : coming soon😊*

*Pinky githublink : https://github.com/Monuzz-Mkz/Pinky*

*Aswathy githublink : https://github.com/Monuzz-Mkz/aswathyy*

*Aswathy Bot making video : https://youtu.be/7Q01xo8jJw4*

*Public Bot Grp: https://chat.whatsapp.com/Ktg2pOcryOD8T7FmKjauXy*

*Bot Supporting Grp: https://chat.whatsapp.com/Ktg2pOcryOD8T7FmKjauXy*
`}) 

}));
