module.exports = {
  name: "oe.dkkr",
  code: `
$title[Aşk Ölçer]
$description[
İşte <@$authorID>'nin <@$mentioned[1]>'e Sevgisi 

$randomText[%0 Hissediyorsun <:bos:795646397336518668><:bos:795646397336518668><:bos:795646397336518668><:bos:795646397336518668><:bos:795646397336518668><:bos:795646397336518668><:bos:795646397336518668><:bos:795646397336518668><:bos:795646397336518668><:bos:795646397336518668> Kalpsiz Canavar Seni !;%10 Hissediyorsun <:dolu:795646460841951253><:bos:795646397336518668><:bos:795646397336518668><:bos:795646397336518668><:bos:795646397336518668><:bos:795646397336518668><:bos:795646397336518668><:bos:795646397336518668><:bos:795646397336518668><:bos:795646397336518668> Herkes Acemi Olabilir;%20 Hissediyorsun <:dolu:795646460841951253><:dolu:795646460841951253><:bos:795646397336518668><:bos:795646397336518668><:bos:795646397336518668><:bos:795646397336518668><:bos:795646397336518668><:bos:795646397336518668><:bos:795646397336518668><:bos:795646397336518668> Hmm;%30 Hissediyorsun <:dolu:795646460841951253><:dolu:795646460841951253><:dolu:795646460841951253><:bos:795646397336518668><:bos:795646397336518668><:bos:795646397336518668><:bos:795646397336518668><:bos:795646397336518668><:bos:795646397336518668><:bos:795646397336518668> e işte;%40 Hissediyorsun <:dolu:795646460841951253><:dolu:795646460841951253><:dolu:795646460841951253><:dolu:795646460841951253><:bos:795646397336518668><:bos:795646397336518668><:bos:795646397336518668><:bos:795646397336518668><:bos:795646397336518668><:bos:795646397336518668> Bişiler Başlıyor;%50 Hissediyorsun <:dolu:795646460841951253><:dolu:795646460841951253><:dolu:795646460841951253><:dolu:795646460841951253><:dolu:795646460841951253><:bos:795646397336518668><:bos:795646397336518668><:bos:795646397336518668><:bos:795646397336518668><:bos:795646397336518668>  Güzel 🙂;%60 Hissediyorsun <:dolu:795646460841951253><:dolu:795646460841951253><:dolu:795646460841951253><:dolu:795646460841951253><:dolu:795646460841951253><:dolu:795646460841951253><:bos:795646397336518668><:bos:795646397336518668><:bos:795646397336518668><:bos:795646397336518668>  Seviyorsun Onu Gibi;%70 Hissediyorsun <:dolu:795646460841951253><:dolu:795646460841951253><:dolu:795646460841951253><:dolu:795646460841951253><:dolu:795646460841951253><:dolu:795646460841951253><:dolu:795646460841951253><:bos:795646397336518668><:bos:795646397336518668><:bos:795646397336518668>  Baya Aşıksın Ha;%80 Hissediyorsun <:dolu:795646460841951253><:dolu:795646460841951253><:dolu:795646460841951253><:dolu:795646460841951253><:dolu:795646460841951253><:dolu:795646460841951253><:dolu:795646460841951253><:dolu:795646460841951253><:bos:795646397336518668><:bos:795646397336518668>  🎉 Mükemmel;%90 Hissediyorsun <:dolu:795646460841951253><:dolu:795646460841951253><:dolu:795646460841951253><:dolu:795646460841951253><:dolu:795646460841951253><:dolu:795646460841951253><:dolu:795646460841951253><:dolu:795646460841951253><:dolu:795646460841951253><:bos:795646397336518668>  Sırılsıklam aşıksın;%100 Hissediyorsun <:dolu:795646460841951253><:dolu:795646460841951253><:dolu:795646460841951253><:dolu:795646460841951253><:dolu:795646460841951253><:dolu:795646460841951253><:dolu:795646460841951253><:dolu:795646460841951253><:dolu:795646460841951253><:dolu:795646460841951253>  Evlenin bence.]]
$argsCheck[1;Birisini Etiketlemen Lazım!] 
$color[ffd700]
$footer[İsteyen Kişi $username#$discriminator;$authorAvatar]

$onlyIf[$mentioned[1]!=$authorID;<:yoo:786622857014149172> Kendine mi **aşıksın?**]


  `
};
