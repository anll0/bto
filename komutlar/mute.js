module.exports = {
  name:"mute",
  code:`
  <@$mentioned[1]> Kişisi Mutelenmiştir Açmak İçin !!unmute Yazın!
  $setUserVar[mutedurum;evet;$mentioned[1]]
  $giveRoles[$mentioned[1];$getServerVar[muterol]]
  $onlyIf[$hasPerms[$authorID;admin]!=;Yetkin Yok!]
$suppressErrors[Lütfen yönetici yetkisi ve Pika Bot rolünü üye rolünün üstüne alın!]
  $onlyIf[$message!=;Birini Etiketle!]
  `
} 
