module.exports = {
  name:"muterol",
  code:`
  Mute Rol Ayarlanmıştır $roleName[$mentionedRoles[1]]
  
  $setServerVar[muterol;$mentionedRoles[1]]
  $suppressErrors[Rol Hatalı!]
  $onlyIf[$hasPerms[$authorID;admin]!=false;Yetkin yok!]
  $onlyIf[$message!=;Mute Rol İçin Bir Rol Etiketle!]
  `
} 