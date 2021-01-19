var dbd = require(`dbd.js`);
var emoji = require(`./emojiler.json`)
var fs = require("fs");
var bot = new dbd.Bot({
  token: "NzY3MzMzNjE3NzM0NTE2NzM4.X4wZHg.Yh2lGy5qfqIjX17VTr48QpHdjD4",
  prefix: "!!"
});

bot.onMessage();
var reader = fs.readdirSync("./komutlar").filter(file => file.endsWith(".js"));
for (const file of reader) {
  const command = require(`./komutlar/${file}`);
  bot.command({
    name: command.name,
    code: command.code
  });
}
//durum
bot.status({
  text: "yeni dile geçtik kullanmayın pls",
  type: "PLAYING",
  status: "idle",
  time: 12
});
//platform
bot.command({
  name: "platform",

  code: `$username[$mentioned[1;yes]] 

  $replaceText[$replaceText[$replaceText[$replaceText[$platform[$mentioned[1;yes]];mobile;Telefon'dan !;-1];desktop;Masaüstün'den;-1];none;Adam Çevrimdışı Lan ?;-1];web;İnternet Tarayıcısın'dan;-1] Discorda giriyor.`
});

//veriableler
bot.variables({
  level: "1",
  exp: "0",
  req: "10",
  xp: "0",
  levelsistem: "kapalı",
  custombg: "",
  renk: "5AFFFE",
  afkmsg: "hayır",
  cekilis: "undefiened",
  kanal: "yok",
  süre: "",
  mesaj: "",
  para: "200",
  banka: "0",
  muterol: "",
  mutelog: "",
  mutedurum: "hayır",
  enerji: "100",
  meslek: "mesleğin yok",
  banka: "0",
  balta: "Baltan yok",
  çanta: "no",
  kazma: "kazman yok",
  kask: "kaskın yok",
  altın: "0",
  demir: "0",
  taş: "0",
  odun: "0",
  su: "0",
  eiçecek: "0",
  pizza: "0",
  et: "0",
  snipe: "",
  snipek: "",
  snipekk: "",
  modlog: "",
  lengel: "kapalı",
  can: "100",
  düel: "hayır",
  düelaç: "kapalı",
  düelkişi: "",
  düelkişi2: ""
});
//avatar
bot.command({
  name: "avatar",
  code: `
  $author[$username[$mentioned[1;yes]] Kişisinin Avatarı;$userAvatar[$mentioned[1;yes]]]
  $image[$userAvatar[$mentioned[1;yes]]?size=2048]
  $footer[İsteyen Kişi $username;$authorAvatar]
  $color[ffd700] `
});
//muzikçal
bot.command({
  name: "çal", //Müzik Çalma Komududur.
  code: `$color[ffd700]
$author[Müzik Çalınıyor;https://images-ext-2.discordapp.net/external/Uh0IK6-7uLa0shXbCzMGc9FuXLL_dGQwT_sRWZsOtKQ/https/cdn.discordapp.com/avatars/767333617734516738/59304a7c576a21d40a4597057fe82035.png]
$description[Şuanda Oynatılan Müzik **$songInfo[title]**
Müzik Uzunluğu **$songInfo[duration]** Saniyedir.

Müzik Linki $songInfo[url]
Sıradaki Müzik Sayısı: $queueLength]
$footer[Müziği Çalan Kişi $username;$authorAvatar]
$playSong[$message;Böyle bir müzik bulamadım tekrar denermisin]
$onlyIf[$voiceID!=;Ses Kanalına Girmelisin]
$onlyIf[$message!=;Bir Müzik İsmi Girmelisin]`
});
//müzikçal
//sahip-tepki
bot.command({
  name: "$alwaysExecute",
  code: `
  
<a:taccc:789630250329440256> İşte Benim **Sahibim** Burda Aç Yolu! 
  $cooldown[1h;]
  $deleteIn[6s]
  $onlyIf[$authorID==552538970177929244;]
  
  `
});
//sahip-tepki
//fakemesaj
bot.command({
  name: "fake-mesaj",
  code: `
  $deletecommand
$deleteWebhook[$splitText[1];$splitText[2]]
$sendWebhook[$splitText[1];$splitText[2];$message[2] $message[3] $message[4] $message[5] $message[6] $message[7] $message[8] $message[9] $message[10] $message[11]]
$textSplit[$createWebhook[$channelID;$username[$mentioned[1]];$userAvatar[$mentioned[1]];yes];/]
  $cooldown[3s;Biraz Bekle !]
  $onlyIf[$checkContains[$message;everyone;here;https://;www.;discord.gg/]!=true; $deletecommand Boş yapma aq]
 $suppressErrors[Webhookları yönet yetkim yok.]
 `
});
//cekilis
bot.command({
  name: "çekiliş",
  code: `
$editMessage[$getServerVar[cekilis];{title:Çekiliş Bitti 🎉}{description:Ödül: \`$sliceMessage[1]\` 🎉
Yapan Kişi: **$userTag[$authorID]**
Kazanan: $replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;hiçbiri, yeterli katılımcı yoktu.];false;<@$randomText[$joinSplitText[;]]>.]}{color:RANDOM}{footer: Çekiliş Sona Erdi.:$authorAvatar}]
$channelSendMessage[$channelID;$replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;Yeterli katılımcı yoktu.];false;Ödülün sahibi: \`$sliceMessage[1]\` is: <@$randomText[$joinSplitText[;]]>, Tebrikler!]]
$textSplit[$replaceText[$getReactions[$channelID;$getServerVar[cekilis];🎉;id];$clientID,;];,]
$wait[$message[1]]
$setServerVar[cekilis;$sendMessage[{title: Çekilişe Katılmak için  🎉 Emojisine Tıkla !.}{description: 🎉 Ödül: \`$sliceMessage[1]\` 🎉
Yapan Kişi: **$userTag[$authorID]**
Süre: **$message[1]**}{timestamp}{color:RED}{reactions:🎉};yes]]
$onlyIf[$sliceMessage[1]!=;{title:Argümanlar Aranıyor}{description:Çekiliş için herhangi bir ödül koymadınız Bu Formatı Takip Edin: 
\`\`\`
- !!çekiliş <süre> <ödül>.\`\`\`
\`<> Yazmayın \`
}{color:ORANGE}]
$onlyIf[$isNumber[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];s;];m;];h;];d;]]!=false;{title: Yanlış Kullanım}{description:Yeni girdiğiniz saat biçimi geçersiz. Bu örneği izleyin:
\`\`\`
1s 1 saniye 
1m  dakika
1h 1 saat
1d 1 gün
\`\`\`}{color:RED}]

$onlyPerms[admin;{title:Yetkin Yok}{description:Senin \`YÖNETİCİ\` Yetkin Yok.}{color:RED}]
`
});


//kaskalmq
bot.command({
  name: "kask-al",
  code: `
$setGlobalUserVar[kask;1;$authorID]
$onlyIf[$getGlobalUserVar[kask;$authorID]!=1;1 Kask Yeterlidir]
Kaskını Aldın Madenci Olmak İstersen !!madenci-ol

Üstünden 500 PB Kesildi
$setGlobalUserVar[para;$sub[$getGlobalUserVar[para;$authorID];500];$authorID]
$onlyIf[$getGlobalUserVar[para;$authorID]>499;Yeterli Paran Yok]
`
});
//kazmaal
bot.command({
  name: "kazma-al",
  code: `
$setGlobalUserVar[kazma;1;$authorID]
$onlyIf[$getGlobalUserVar[kazma;$authorID]!=1;1 Kazma Yeterlidir]
Kazmayı Aldın Madenci Olmak İstersen !!madenci-ol

Üstünden 350 PB Kesildi
$setGlobalUserVar[para;$sub[$getGlobalUserVar[para;$authorID];350];$authorID]
$onlyIf[$getGlobalUserVar[para;$authorID]>349;Yeterli Paran Yok]
`
});
//baltall
bot.command({
  name: "balta-al",
  code: `
$setGlobalUserVar[balta;1;$authorID]
$onlyIf[$getGlobalUserVar[balta;$authorID]!=1;1 Balta Yeterlidir]
Baltayı Aldın Oduncu Olmak İstersen !!oduncuol

Üstünden 200 PB Kesildi
$setGlobalUserVar[para;$sub[$getGlobalUserVar[para;$authorID];200];$authorID]
$onlyIf[$getGlobalUserVar[para;$authorID]>199;Yeterli Paran Yok]
`
});
//oduncuolab
bot.command({
  name: "oduncuol",
  code: `
$onlyIf[$getGlobalUserVar[meslek;$authorID]!=Madenci 🌄;Şuanki Mesleğin Olan $getUserVar[meslek;$authorID].Ayrılmadan Giremezsin]
$onlyIf[$getGlobalUserVar[balta;$authorID]!=Baltan Yok;NPC: Hey! $username Baltan Olmadan Olmaz Git Ve Kendine Bir Balta Al!]
$color[ffd700]
$description[
NPC ; Baltan Var Ve İşe Uygunsun Git Ve Odun Topla Satmak İçin Bana Gel (!!odunsat)]
$setGlobalUserVar[meslek;Oduncu 🌲;$authorID]
`
});
//oduntoplaa
bot.command({
  name: "odun-topla",
  code: `
$color[ffd700]
$onlyIf[$getGlobalUserVar[meslek;$authorID]!=Madenci 🌄;Şuanki Mesleğin Olan $getGlobalUserVar[meslek;$authorID].Ayrılmadan Giremezsin]
$onlyIf[$getGlobalUserVar[meslek;$authorID]!=mesleğin yok;Şuan İşsizsin!]

$cooldown[3s;Dinlenmelisin]
$onlyIf[$getGlobalUserVar[enerji;$authorID]>0;Enerjin Yok Biraz Yemek Felan Yesen?]

$setGlobalUserVar[enerji;$sub[$getGlobalUserVar[enerji;$authorID];20];$authorID]

$onlyIf[$getGlobalUserVar[meslek;$authorID]!=;Mesleğin Oduncu Değil]

$description[
Ormanlıkta Odun Topluyorsun

$random[5;25] Odun Topladın !]
$setGlobalUserVar[odun;$sum[$getGlobalUserVar[odun;$authorID];$random[5;25]];$authorID]
`
});
//denemekomutu
bot.command({
  name: "deneme",
  code: `
 $resetGlobalUserVar[enerji]
 
 `
});
//evalmqq
bot.command({
		name: "eval",
		code: `$eval[$message]
$onlyForIDs[552538970177929244; Geliştiricim Değilsin]`
})
//snipe mqqqqq
bot.deletedCommand({
channel:"$channelID",
code:`
$setServerVar[snipek;$channelUsed]
$setServerVar[snipe;$message]
$setServerVar[snipekk;$authorID]
`
})
bot.onMessageDelete()
bot.command({
  name:"snipe",
  code:`
  $color[ffd700]
  $description[
  En Son Silinen Mesaj : $getServerVar[snipe]
  
  Kanal : <#$getServerVar[snipek]>
  
  Kişi : <@$getServerVar[snipekk]> $username[$getServerVar[snipekk]]#$discriminator[$getServerVar[snipekk]]
  ]
$onlyIf[$isBot[$authorID]!=true;]
  $suppressErrors[Silinen Mesaj Yok]
  `
}) 
//modlog
bot.updateCommand({
        channel: "$getServerVar[modlog]", 
        code: `
        $color[ffd700]
        $author[$username[$authorID] Mesaj Düzenledi !;$authorAvatar]
$description[$thumbnail[$serverIcon]
Eski Mesaj : \`\$oldMessage\`\

Yeni Mesaj : \`\$message\`\

Mesajın Editlendiği Kanal : <#$channelUsed>

Editleyen kişi : $username]
 $onlyIf[$isBot[$authorID]!=true;]`
})
bot.onMessageUpdate()

bot.deletedCommand({
channel:"$getServerVar[modlog]",
code:`
$color[ffd700]
$author[$username[$authorID] Mesaj Sildi !;$authorAvatar]
$description[$thumbnail[$serverIcon]
Silinen Mesaj : $message

Mesajın Silindiği Kanal : <#$channelUsed>

Silen kişi : $username]
$onlyIf[$isBot[$authorID]!=true;]
`
})
bot.onMessageDelete()

bot.command({
  name:"modlog-aç",
  code:`
  $setServerVar[modlog;$mentionedChannels[1]]
  Mod-Log Güncellendi. Güncel Kanal <#$mentionedChannels[1]>
  $onlyPerms[admin;Bu Komut İçin Yönetici Yetkiniz Olmalıdır !]
  $onlyIf[$message!=;Kullanım !!modlog-aç #kanal]
  `
})
bot.command({
  name:"modlog-kapat",
  code:`
  $resetServerVar[modlog]
  Mod-Log Kapatıldı.
  $onlyPerms[admin;Bu Komut İçin Yönetici Yetkiniz Olmalıdır !]
  `
})
//otomesajj
bot.command({
  name:"$alwaysExecute",
  code:`
  $wait[$getServerVar[süre]]
  $useChannel[$getServerVar[kanal]]
  $getServerVar[mesaj]
  $cooldown[$getServerVar[süre];]
  $onlyForIDs[$ownerID;]
  $onlyIf[$getServerVar[kanal]!=yok;]`
})
//odunsat2
bot.command({
name: "odun-sat",
code: `
$onlyIf[$getGlobalUserVar[meslek;$authorID]!=Madenci 🌄;]
$onlyIf[$getGlobalUserVar[meslek;$authorID]!=mesleğin yok;]

$onlyIf[$getGlobalUserVar[odun;$authorID]>0;]
$setGlobalUserVar[odun;0;$authorID]
`
})
//playspotifyy
bot.command({
  name: "spotify", //Müzik Çalma Komududur.
  code: `$color[ffd700]
$author[Müzik Çalınıyor;https://images-ext-2.discordapp.net/external/Uh0IK6-7uLa0shXbCzMGc9FuXLL_dGQwT_sRWZsOtKQ/https/cdn.discordapp.com/avatars/767333617734516738/59304a7c576a21d40a4597057fe82035.png]
$description[Şuanda Oynatılan Müzik **$songInfo[title]**
Müzik Uzunluğu **$songInfo[duration]** Saniyedir.

Müzik Linki $songInfo[url]
Sıradaki Müzik Sayısı: $queueLength]
$footer[Müziği Çalan Kişi $username;$authorAvatar]
$playSpotify[$message;Böyle bir müzik bulamadım tekrar denermisin]
$onlyIf[$voiceID!=;Ses Kanalına Girmelisin]
$onlyIf[$message!=;Bir Müzik Linki Girmelisin]`
});
//madencioll
bot.command({
name: "madenciol",
code: `
$onlyIf[$getGlobalUserVar[meslek;$authorID]!=Oduncu 🌲;Şuanki Mesleğin Olan **$getGlobalUserVar[meslek;$authorID]**.Ayrılmadan Giremezsin !!istifa]
$onlyIf[$getGlobalUserVar[kazma;$authorID]!=Kazman Yok;NPC: Hey Kazman Olmadan Olmaz Git Ve Kendine Bir Kazma Al !]

$onlyIf[$getGlobalUserVar[kask;$authorID]!=Kaskın Yok;NPC: Hey Kaskın Olmadan Olmaz Git Ve Kendine Bir Kask Al !]

$color[ffd700]
$description[
NPC ; Kaskın Ve Kazman Var Ve İşe Uygunsun Git Ve Maden Topla Satmak İçin Bana Gel (!!madensat)]
$setGlobalUserVar[meslek;Madenci 🌄;$authorID]` 
})
//istifaa
bot.command({
name: "istifa",
code: `
Meslekten Başarıyla İstifa Ettiniz.

$setGlobalUserVar[meslek;mesleğin yok;$authorID]
$onlyIf[$getGlobalUserVar[meslek;$authorID]!=mesleğin yok;Zaten işşizsin.]`
})

//maden-topla
bot.command({
name: "maden-topla",
code: `
$onlyIf[$getGlobalUserVar[meslek;$authorID]!=Oduncu 🌲;Şuanki Mesleğin Olan $getGlobalUserVar[meslek;$authorID].Ayrılmadan Giremezsin]
$onlyIf[$getGlobalUserVar[meslek;$authorID]!=mesleğin yok;Şuan İşsizsin! Madenci Ol Gel]

$cooldown[3s;Dinlenmelisin]
$onlyIf[$getGlobalUserVar[enerji;$authorID]>0;Enerjin Yok Biraz Yemek Felan Yesen?]

$setGlobalUserVar[enerji;$sub[$getGlobalUserVar[enerji;$authorID];20];$authorID]

$onlyIf[$getGlobalUserVar[meslek;$authorID]!=;Mesleğin Madenci Değil]
$color[ffd700]
$description[
<a:pikazma:798152095282102312> Kazı Alanında Maden Topluyorsun

$random[1;10] <:tasmq:795980762142605323> | $random[1;5] <:demirmq:795975322952007701> | $random[0;3] <:altinmq:795975339133108224> Topladın]

$setGlobalUserVar[taş;$sum[$getGlobalUserVar[taş;$authorID];$random[1;10]];$authorID]

$setGlobalUserVar[demir;$sum[$getGlobalUserVar[demir;$authorID];$random[1;5]];$authorID]

$setGlobalUserVar[altın;$sum[$getGlobalUserVar[altın;$authorID];$random[0;3]];$authorID]`
})
//odunsat
bot.command({
name: "maden-sat",
code: `

$onlyIf[$getGlobalUserVar[meslek;$authorID]!=Oduncu 🌲;]
$onlyIf[$getGlobalUserVar[meslek;$authorID]!=mesleğin yok;]

$onlyIf[$getGlobalUserVar[taş;$authorID]>0;]
$onlyIf[$getGlobalUserVar[demir;$authorID]>0;]
$onlyIf[$getGlobalUserVar[altın;$authorID]>0;]

$setGlobalUserVar[taş;0;$authorID]
$setGlobalUserVar[demir;0;$authorID]
$setGlobalUserVar[altın;0;$authorID]`
})
//madensat
bot.command({
name: "maden-sat",
code: `
$setGlobalUserVar[para;$multi[$getGlobalUserVar[demir;$authorID];10];$authorID]
$setGlobalUserVar[demir;$getGlobalUserVar[demir];$authorID]`
})
bot.command({
name: "maden-sat",
code: `
$setGlobalUserVar[para;$multi[$getGlobalUserVar[altın;$authorID];25];$authorID]
$setGlobalUserVar[altın;$getGlobalUserVar[altın];$authorID]`
})
bot.command({
name: "maden-sat",
code: `
$setGlobalUserVar[para;$multi[$getGlobalUserVar[taş;$authorID];5];$authorID]
$setGlobalUserVar[taş;$getGlobalUserVar[taş];$authorID]`
})
//link-engel
bot.command({
    name:"$alwaysExecute",
    code: `
    $deletecommand
    Hob dur bakalım link engel sistemi açık!
    $onlyIf[$checkContains[$toLowercase[$message];https;discord.gg;discord.gift]==true;]
    $onlyIf[$hasPerms[$authorID;admin]!=true;]
    $onlyIf[$getServerVar[lengel]!=kapalı;]
    
    
    `,
nonPrefixed: true
})
//chat
bot.command({
  name: "pika",
  aliases: ['<@767333617734516738>'],
  code: `
 $botTyping`,
   nonPrefixed: true
})
//askolver 
bot.command({

  name: "aşkölçer",

  aliases: ['askolcer'],

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

})
//dnendd
bot.command({
  name: "düello",
  code: `<@$mentioned[1]>, düello isteği geldi kabul ediyormusun? **Evet/Hayır**
  $setUserVar[düelaç;açık;$mentioned[1]]
  $setUserVar[düelkişi;$authorID;$authorID]
  $setUserVar[düelkişi2;$mentioned[1];$mentioned[1]]`})

bot.command({
  name: "Evet",
  code: `
  $onlyIf[$getUserVar[düelaç;$authorID]!=açık;Düello kabul edildi]
  $onlyIf[$getUserVar[düelaç;$authorID]!=kapalı;Hey Düello isteği sana değil!]` })