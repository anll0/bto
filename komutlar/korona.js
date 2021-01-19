module.exports = {
  name:"korona",
  code:`
  $title[Korona İstatistikleri]
  $color[ffd700]
  $description[$thumbnail[https://cdn.discordapp.com/avatars/767333617734516738/59304a7c576a21d40a4597057fe82035.png?size=1024]
  
<a:ykleniyor:782885486452015124> Vaka Sayısı: $jsonRequest[https://corona.lmao.ninja/v2/countries/turkey;cases;]
<a:ykleniyor:777544018023809095> Bugün ki Vaka: $jsonRequest[https://corona.lmao.ninja/v2/countries/turkey;todayCases;Yayınlanmamış]
  
<a:ykleniyor:782885486452015124> Vefat Sayısı: $jsonRequest[https://corona.lmao.ninja/v2/countries/turkey;deaths;]
<a:ykleniyor:777544018023809095> Bugün ki  Vefat: $jsonRequest[https://corona.lmao.ninja/v2/countries/turkey;todayDeaths;Yayınlanmamış]


<a:ykleniyor:782885486452015124> İyileşmiş: $jsonRequest[https://corona.lmao.ninja/v2/countries/turkey;recovered;]
<a:ykleniyor:777544018023809095> Bugün ki İyileşmiş: $jsonRequest[https://corona.lmao.ninja/v2/countries/turkey;todayRecovered;Yayınlanmamış]

<a:ykleniyor:777544018023809095> Test Sayısı: $jsonRequest[https://corona.lmao.ninja/v2/countries/turkey;tests;]
  
  
  
  
  ]
  
  `
}
