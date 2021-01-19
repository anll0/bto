module.exports = {
  name:"cmm",
  code:`
$image[https://vacefron.nl/api/changemymind?text=$replaceText[$message; ;+;-1]]
$color[ffd700]
$footer[İsteyen Kişi $username#$discriminator;$authorAvatar]
$argsCheck[>1;Bişe yaz lan]



  `
}
