module.exports = {
  name:"para-ekle",
  code:`
$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$mentioned[1]];$noMentionMessage];$mentioned[1]]
<@$authorID> <@$mentioned[1]> kişisine **$noMentionMessage**PB ekledi!

$onlyForIDs[552538970177929244;271582426558496769;658891248454729739;Hob dur bakalım Yetkili Rozetin yok.]
$argsCheck[1;Doğru yap lan \`\`\`!!para-ekle @üye @miktar\`\`\`
  `
} 