module.exports = {
  name:"qr",
  code:`
$argsCheck[<21;21 Kelimeden Fazla Yazamazsın!]
$title[$message]
$image[https://api.qrserver.com/v1/create-qr-code/?size=500x500&color=000&bgcolor=fff&margin=30&data=$message[1]+$message[2]+$message[3]+$message[4]+$message[5]+$message[6]+$message[7]+$message[8]+$message[9]+$message[10]+$message[11]+$message[12]+$message[13]+$message[14]+$message[15]+$message[16]+$message[17]+$message[18]+$message[19]+$message[20]+$message[21]]
$color[ffd700]
$argsCheck[>1;Bir Mesaj Yaz!]
$footer[İsteyen Kişi $username#$discriminator;$authorAvatar]
$deletecommand

  `
}
