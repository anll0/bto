module.exports = {
name: "odun-sat",
code: `
$color[ffd700]
$onlyIf[$getGlobalUserVar[meslek;$authorID]!=Madenci 🌄;Şuanki Mesleğin Olan $getGlobalUserVar[meslek;$authorID].Ayrılmadan Giremezsin]
$onlyIf[$getGlobalUserVar[meslek;$authorID]!=mesleğin yok;Şuan İşsizsin! Oduncu Ol Gel]

$onlyIf[$getGlobalUserVar[odun;$authorID]>0;Yeterli Odunun Yok! ]
$description[$customEmoji[sandikmq] Çantandakiler

$customEmoji[odunmq] $getGlobalUserVar[odun;$authorID] Odun (Tanesi 20 PB) = $multi[$getGlobalUserVar[odun;$authorID];20] PB

]

$setGlobalUserVar[para;$multi[$getGlobalUserVar[odun;$authorID];20];$authorID]
$setGlobalUserVar[odun;$getGlobalUserVar[odun];$authorID]`
}
