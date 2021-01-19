module.exports = {
  name:"unmute",
  code:`
  <@$mentioned[1]> Kişisinin Mutesi Açılmıştır
  $setUserVar[mutedurum;hayır;$mentioned[1]]
  $takeRoles[$mentioned[1];$getServerVar[muterol]]
  $onlyIf[$hasPerms[$authorID;admin]!=;Yetkin Yok ! ]
  $onlyIf[$message!=;Birini Etiketle!]
  `
} 
