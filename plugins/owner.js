/* Copyright (C) 2021 Yasir Sial
CODDED Yasir Sial
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Pikachu
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'owner', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://www.pixelstalk.net/wp-content/uploads/2016/06/Dark-Knight-Game-Photos-free-computer-desktop.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Sial*
owner name :  *Yasirsial*

Partners :  *Baala *
*Youtube : https://youtube.com/channel/UCukP4xTkzkJh_XOaLXZ4SZA

*Follow o. Facebook : https://www.facebook.com/Yasirsial786*

`}) 

}));
