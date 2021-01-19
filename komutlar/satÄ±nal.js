module.exports = {
name: "buy",
code: `
$onlyIf[$checkContains[!!$message[1];su;eiçecek;et;pizza]!=false;Alacağın Şey Market Ürünü Değil !]
$onlyIf[$getGlobalUserVar[para;$authorID]>0;Dükkan Sahibi : Paran Yok.]

$setGlobalUserVar[$message[1];$sum[$getGlobalUserVar[$message[1];$authorID];1];$authorID]
$setGlobalUserVar[para;$sub[$getGlobalUserVar[para;$authorID];$replaceText[$replaceText[$replaceText[$replaceText[$message[1];su;1;-1];eiçecek;7;-1];pizza;15;-1];et;25;-1]];$authorID]
Başarıyla Ürün Satın Alındı.
Giden Para **-$replaceText[$replaceText[$replaceText[$replaceText[$message[1];su;10;-1];eiçecek;20;-1];pizza;35;-1];et;50;-1]**
$suppressErrors[Alacağın Şey Market Ürünü Değil!]
` }
