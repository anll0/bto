module.exports = {
  name:"vur",
  code:`
$image[https://api.no-api-key.com/api/v2/shoot?image=$userAvatar[$mentioned[1;yes]]]
$argsCheck[1;Birisini Etiketlemen Lazım!] 
$color[ffd700]
$footer[İsteyen Kişi $username#$discriminator;$authorAvatar]




  `
}
