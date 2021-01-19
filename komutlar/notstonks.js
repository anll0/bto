module.exports = {
  name:"notstonks",
  code:`
$argsCheck[>1;Lütfen bir cümle yazın]
$title[$message]
$color[ffd700]
$footer[İsteyen Kişi $username#$discriminator;$authorAvatar]
$image[https://vacefron.nl/api/stonks?user=$userAvatar[$mentioned[1;yes]]?size=1024&notstonks=true]

  `
}
