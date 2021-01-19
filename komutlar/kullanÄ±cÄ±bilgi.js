module.exports = {
  name:"kullanıcı-bilgi",
  code:`
  $color[ffd700]
  $description[$thumbnail[$userAvatar[$mentioned[1;yes]]]
  **KULLANICI BİLGİ**
  
  <:kullanci:781990341712543774> **Kullanıcı İsmi**: $username[$mentioned[1;yes]]
  
  <:tag:791072371837894658> **Tag**: #$discriminator[$mentioned[1;yes]]
  
  <:kullanc:791072641942683648> **Sunucudaki İsmi**: $nickname[$mentioned[1;yes]]

  <a:zill:782890952884879421> **Oynuyor Kısmı**: $replaceText[$getCustomStatus[$mentioned[1;yes]];none;Bir Şey Oynamıyor;-1]

  <:premium:784828665681805412> **Rozetleri**: $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getUserBadges[$mentioned[1;yes]];House Brilliance;$customEmoji[hype3];-1];House Bravery;$customEmoji[hype2];-1];House Balance;$customEmoji[hype1];-1];Early Supporter;$customEmoji[destekci];-1];Verified Bot;$customEmoji[onaylimq];-1];Early Verified Developer;$customEmoji[developer];-1];Verified Developer;$customEmoji[developer];-1];
  
  <a:yuklenio:791702138718912562> **Discord Kimliği**: $mentioned[1;yes] 

  <a:Kitapp:788344315260174336> **Discord'a Gİrdiği Yer**: $replaceText[$replaceText[$replaceText[$replaceText[$platform[$mentioned[1;yes]];mobile;📱 Telefon;-1];desktop;
💻 Masaüstü;-1];none;Kişi Çevrimdışı;-1];web;İnternet Tarayıcısı;-1]

  <:bot:791072315680489513> **Bot mu**: $replaceText[$replaceText[$isBot[$mentioned[1;yes]];false;Hayır;-1];true;Evet;-1]
  
  <a:discord:781992844482445343> **Hesap Kurulma Tarihi**: $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$mentioned[1;yes];time];years;Yıl;-1];months;Ay;-1];week;Hafta;-1];days;Gün;-1];hours;Saat;-1];minutes;Dakika;-1];and;ve;-1];seconds;Saniye Önce Kuruldu !;-1]
  
  <a:ykleniyor:777544018023809095> **Rolleri**:
  $userRoles[$mentioned[1;yes];mentions]
  ]
  `
}
