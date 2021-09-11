const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://www.pixelstalk.net/wp-content/uploads/2016/05/Amazing-spider-man-spiderman-webs-comics-video-superhero-wallpapers-768x480.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*creater Baala*
*owner number wa.me/923207371452*
*
*githublink       https://github.com/itxammy/pikachu*
*audio commads    https://github.com/itxammy/pikachu/tree/master/uploads*
*sticker commads  https://github.com/itxammy/pikachu/tree/master/uploads*
`}) 

}));
