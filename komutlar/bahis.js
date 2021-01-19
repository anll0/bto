module.exports = {
  name:"bahis",
  code:`
<a:coin:789566512314581062> Yükleniyor...
$editIn[3s; $replaceText[$replaceText[$randomText[helal;go];helal; Tebrikler, **$multi[$message[1];2]** PB kazandın!;25];go; Üzgünüm ancak **$message[1]** PB kaybettin.;50]]
  $setGlobalUserVar[para;$replaceText[$replaceText[$randomText[helal;go];helal;$sum[$getGlobalUserVar[para;$authorID];$multi[$message[1];2]];25];go;$sub[$getGlobalUserVar[para;$authorID];$message[1]];50];$authorID]
  $onlyIf[$message[1]<=$getGlobalUserVar[para;$authorID];Yeterli PB yok!]
  $onlyIf[$isNumber[$message[1]]!=false;Sayı mı o]
  $onlyIf[$message[1]>0;Düzgün yaz lan!]
  `
}