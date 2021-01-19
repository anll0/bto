module.exports ={
  name:"otomesaj",
  code:`
  Artık \`\`\`$channelName[$mentionedChannels[1]]\`\`\` Kanalına $message[2] süresi içinde $message[3] $message[4] $message[5] $message[6] $message[7] $message[8] $message[9] $message[10] $message[11] $message[12] $message[13] $message[14]  $message[15] $message[16] $message[17] $message[18] $message[19] $message[20] Yazacağım $setServerVar[süre;$message[2]]
  $setServerVar[mesaj;$message[3] $message[4] $message[5] $message[6] $message[7] $message[8] $message[9] $message[10] $message[11] $message[12] $message[13] $message[14]  $message[15] $message[16] $message[17] $message[18] $message[19] $message[20]]
  $setServerVar[kanal;$mentionedChannels[1]]
  $setServerVar[süre;$message[2]]]
  $onlyIf[$message[3]!=;Mesaj Gir]
  $onlyIf[$message[2]!=;Süre Gir]
  $onlyIf[$message[1]!=;Bir Kanal Etiketleyiniz]
  $onlyPerms[admin;Yetkin Yok !]
  `
}