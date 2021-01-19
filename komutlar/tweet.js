module.exports = {
  name:"tweet",
  code:`
$title[Donald Trump Tweetledi]
$image[https://api.no-api-key.com/api/v2/trump?message=$replaceText[$message; ;%20;-1]]
$color[ffd700]
$argsCheck[>1;Trump Hangi Tweet'i atsın?]
$footer[İsteyen Kişi $username#$discriminator;$authorAvatar]
$suppressErrors[Bir Hata Oluştu;Lütfen Tekrar Deneyiniz. ]


  `
}
