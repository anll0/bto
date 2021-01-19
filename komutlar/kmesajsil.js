module.exports = {
  name:"ksil",
  code:`
  \`\$username[$mentioned[1]]#$discriminator[$mentioned[1]]\`\ Kişisinin \`\$noMentionMessage\`\ Kadar Mesaji Silindi
$clear[$noMentionMessage;$mentioned[1]]
$onlyIf[$hasPerms[$authorID;admin]!=false;Yetkiniz Yok]
$onlyIf[$message[2]!=; Kullanıcı !!ksil @kisi miktar]
`
} 
