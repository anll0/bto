module.exports = {
  name: "dbl",
  code: ` 
  $onlyIf[$isNumber[$message]!=false;Bir İD Girmediniz]
$image[https://discordbots.org/api/widget/$message.png]
$author[$username[$message]#$discriminator[$message] Adlı Botun DBL Bilgisi;$userAvatar[$message]]

$title[Hazır Şekilde Buyrun]
$argsCheck[>1;Bir Bot ID'si Giriniz]
$color[ffd700]
`}
