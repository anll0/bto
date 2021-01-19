module.exports = {
name: "hug",
code: ` 
$color[ffd700]
$title[$username, $username[$mentioned[1]]' e sarıldı] 
$image[https://leref.ga/api/public/hug/$random[1;37].gif]
 $footer[İsteyen kişi $username;$authorAvatar] 
 $onlyIf[$message!=;Birini etiketlemen lazım!]
 $onlyIf[$mentioned[1]!=$authorID;Kendine mi sarılacaksın.]` }