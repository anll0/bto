module.exports = {
  name:"sunucubilgi",
  code:`
  $color[ffd700]
$author[**$serverName[$guildID]** Sunucu Analizi;$serverIcon]
$description[$thumbnail[$serverIcon]
 
 $addField[<a:emoji_47:791268959457771600> Sunucudaki Emoji Sayısı **$emojiCount**;!!emojiler İle Bakabilirsiniz]
 $addField[<a:ykleniyor:777544018023809095> Sunucudaki Rol Sayısı **$roleCount**;!!roller İle Bakabilirsiniz]
 $addField[<:boost:794964259582902292> Sunucudaki Takviye Sayısı;**$serverBoostCount**;yes]
 $addField[<:kullanc:791072641942683648> Kullanıcı Bilgi **$membersCount**;<:cevrimisi:792857486625210388> $membersCount[$guildID;$membersCount] <:bosta:792857519763882035> $membersCount[$guildID;idle] <:rahatsz:792857504354271253> $membersCount[$guildID;dnd] <:emoji_57:792859909162008608> $sum[$membersCount[$guildID;online];$membersCount[$guildID;dnd];$membersCount[$guildID;idle]] <:offline:793135351177674772> $membersCount[$guildID;offline] <:bot:791072315680489513> $botCount;no]
 $addField[<a:59:791072440608096316> Sunucu Kuruluş Tarihi;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$guildID;time];and;ve;-1];seconds;Saniye;-1];minutes;Dakika;-1];hours;Saat;-1];days;Gün;-1];months;Ay;-1];weeks;Hafta;-1];years;Yıl;-1];yes] $addField[<a:discord:781992844482445343> Sunucunun Bölgesi;**$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$serverRegion;us-west; Batı Amerika;1];us-east; Doğu Amerika;1];us-central;Amerika;1];us-south; Güney Amerika;1];singapore;Singapur;1];southafrica; Güney Afrika;1];sydney;Sydney;1];europe;Avrupa;1];brazil;Brazilya;1];hongkong;Hong Kong;1];russia;Rusya;1];japan;Japonya;1];india; Hindistan;1]**;yes]
 $addField[<:owner:782883497105686529> Sunucu Sahibi;<@$ownerID>;yes] $addField[Kanallar **$sub[$channelCount;$channelCount[category]]**;<:text:786002355832225802> **$channelCount[text]** <:sesli:786002393375440927> **$channelCount[voice]** <:kategori:786002421599699024> **$channelCount[category]**;yes]
]
`
}