module.exports = {
name: "maden-sat",
code: `
$onlyIf[$getGlobalUserVar[meslek;$authorID]!=Oduncu 🌲;Şuanki Mesleğin Olan $getGlobalUserVar[meslek;$authorID].Ayrılmadan Giremezsin]
$onlyIf[$getGlobalUserVar[meslek;$authorID]!=İşsizsin;Şuan İşsizsin ! Madenci Ol Gel]

$onlyIf[$getGlobalUserVar[taş;$authorID]>0;Yeterli Taşın Yok !]
$onlyIf[$getGlobalUserVar[demir;$authorID]>0;Yeterli Demirin Yok !]
$onlyIf[$getGlobalUserVar[altın;$authorID]>0;Yeterli Altının Yok !]
$color[ffd700]
$description[$customEmoji[sandikmq] Çantandakiler

<:tasmq:795980762142605323> $getGlobalUserVar[taş;$authorID] Taş (Tanesi 5 PB) = $multi[$getGlobalUserVar[taş;$authorID];5]

<:demirmq:795975322952007701> $getGlobalUserVar[demir;$authorID] Demir
(Tanesi 10 PB) = $multi[$getGlobalUserVar[demir;$authorID];10]

<:altinmq:795975339133108224> $getGlobalUserVar[altın;$authorID] Altın
(Tanesi 25 PB) = $multi[$getGlobalUserVar[altın;$authorID];25]
]
`
}