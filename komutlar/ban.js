module.exports = {
       name:"ban",
       code:`
$ban[$mentioned[1]]
\`$username[$mentioned[1]]\` kullanıcısı banlanmıştır.
$onlyIf[$hasPerms[$authorID;ban]!=false;Yetkin Yok!]
$onlyIf[$message!=;!!ban @etiket <sebep>]
$onlyIf[$mentioned[1]!=$authorID; Gerçekten kendini banlayabileceğini düşündün mü?]
$suppressErrors[Hata!]`
}
 