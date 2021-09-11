/* created by 🆈🅰🆂🅸🆁 🆂🅸🅰🅻
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const Ln = "*Bot SETVAR SETTING COMMADS* "
 const code = "*Hi it's yasir sial here to help you*\n\n*these are setvar commands to change bot settings without visiting heroku*\n\n*SIAL setvar commads here*\n👇👇👇👇👇👇👇\n*.setvar SUDO:92xxxxxxxxx,0 Add sudo number*\n*.setvar ALIVE_MESSAGE:to set alive message*\n*.setvar ALL_CAPTION:to set all image/video caption*\n*. setvar BAN_MESSAGE:for setting ban message*\n*.setvar BOT_NAME:for setting name of bot*\n*.setvar KICKME_MESSAGE:to change leave group message*\n*.setvar MUTE_MESSAGE:to set mute group message*\n*.setvar OWNER_NAME:change bot owner name*\n*.setvar PROMOTE_MESSAGE:set text for greetings for new admin*\n*.setvar TAG_HEADER:set message for tag all (e.g. listen to me )*\n*.setvar TAG_REPLY:reply when somene tag you set your jid ex 92xxxxxxxxxx@s.whatsapp.net*\n\n\n*true and false*\n\n*true=on*\n*false=off*\n\n*.setvar ALL_LINK_BAN:*\n*.setvar ANTİ_LİNK:*\n*.setvar AUTO_BİO:*\n*.setvar BGM_FILTER:*\n*.setvar BLOCK_CHAT:*\n*.setvar DEBUG:*\n*.setvar FULL_EVA:*\n*.setvar NO_LOG:*\n*.setvar NO_ONLINE:*\n*.setvar SEND_READ:*\n*.setvar STICKER_REPLY:*\n*.setvar THERI_KICK:*\n\n *WORK TYPE CHANGE METHOD*\n*.setvar WORK_TYPE:private*\n*.setvar WORK_TYPE:public*\n *easy way*\n*.mlink on/off*\n*.theri no/yes*\n*.fulleva on/off*\n\n\n\n*🆈🅰🆂🅸🆁*\n*🆂🅸🅰🅻*" 
{
    
      Asena.addCommand({pattern: 'setvar', fromMe: false, desc: Ln,}, (async (message, match) => {

    await message.client.sendMessage(
  
      message.jid,code, MessageType.text);
  
  }));
  }

    
