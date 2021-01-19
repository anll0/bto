module.exports = { 
name: "döviz",
code: ` 
$color[ffd700]
$title[Güncel Döviz]
$description[
**Güncelleme Tarihi**: $jsonRequest[https://dreambotapii.glitch.me/api/doviz;güncellemetarihi]

**Dolar Alış**: $jsonRequest[https://dreambotapii.glitch.me/api/doviz;dolaralis]$ | **Dolar Satış**: $jsonRequest[https://dreambotapii.glitch.me/api/doviz;dolarsatis]$

**Euro Alış**: $jsonRequest[https://dreambotapii.glitch.me/api/doviz;euroalis]€ | **Euro Satış**: $jsonRequest[https://dreambotapii.glitch.me/api/doviz;eurosatis]€]
$footer[İsteyen Kişi $username[$authorID];$authorAvatar]` } 