module.exports = {
name: "kiss",
code: ` 
$color[ffd700]
$title[$username, $username[$mentioned[1]]' i öptü]
$image[https://leref.ga/api/public/kiss/$random[1;37].gif]
 $footer[İsteyen kişi $username;$authorAvatar] 
 $onlyIf[$message!=;Birini etiketlemen lazım!]
 $onlyIf[$mentioned[1]!=$authorID;Kendini mi öpeceksin.]
 $onlyIf[$isBot[$mentioned[1]]!=true;<:yoo:786622857014149172> Bota da yapmazsın.]
 $suppressErrors[Birini etiketlemen lazım!]` }