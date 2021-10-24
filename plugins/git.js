const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "http://imgur.com/a/LqEQujG.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Creater Anandh*

*To check update .update   To update Bot .update now*

*Bot grp* : https://chat.whatsapp.com/Ktg2pOcryOD8T7FmKjauXy

*Pinky Bot making video : Coming soon😊*

*Pinky githublink : https://github.com/Monuzz-Mkz/Pinky*

*Aswathy githublink : https://github.com/Monuzz-Mkz/aswathyy*

*Aswathy Bot making video : https://youtu.be/7Q01xo8jJw4*

`}) 

}));
