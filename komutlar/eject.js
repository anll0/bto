module.exports = {
  name:"eject",
  code:`
$title[$username, $username[$mentioned[1]] kullanıcısının oylayarak astı.]
$image[https://vacefron.nl/api/ejected?name=$replaceText[$username[$mentioned[1]]; ;+;-1]&impostor=$randomText[true;false]&crewmate=$randomText[black;blue;brown;cyan;darkgreen;lime;orange;pink;purple;red;white;yellow]]
$color[ffd700]
$footer[İsteyen Kişi $username#$discriminator;$authorAvatar]
$argsCheck[>1;Birini etiketle cnm]



  `
}
