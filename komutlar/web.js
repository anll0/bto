module.exports = {
  name: "web",
  code: ` 
 $argsCheck[>1;Site ismi gir cnm]

$onlyIfMessageContains[$message;https://;Doğru Kullanım: !!web https://siteismi.com/]

$title[Site Görüntüleyici]
$description[[Siteyi aç\\]($message)]
$footer[]
$color[ffd700]
$image[https://image.thum.io/get///$message/]
`}
