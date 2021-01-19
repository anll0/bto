module.exports = {
name: "slap",
code: `
$color[ffd700]
$image[https://vacefron.nl/api/batmanslap?text1=$message[2]&text2=$message[3]&batman=$authorAvatar&robin=$userAvatar[$mentioned[1;yes]]]
$footer[isteyen kişi $username#$discriminator;$authorAvatar]
$argsCheck[>1; Doğru kullanım !!batman @üye mesaj 1 Mesaj 2]`}