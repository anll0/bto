module.exports = {
  name:"mutelog",
  code:`
  Mute Log Ayarlanmıştır $channelName[$mentionedChannels[1]]
  
  $setServerVar[mutelog;$mentionedChannels[1]]
  $suppressErrors[Kanal Hatalı!]
  $onlyIf[$hasPerms[$authorID;admin]!=false;Yetkin yok!]
  $onlyIf[$message!=;Mute Log İçin Bir Kanal Etiketle!]
  `
} 
