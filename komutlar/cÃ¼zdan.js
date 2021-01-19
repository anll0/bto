module.exports = {
  name:"param",
  code:`
$color[ffd700]
  $description[
    $thumbnail[$userAvatar[$mentioned[1;yes]]]
   <a:para:785546005856649226> **$username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]] Kişisinde
    Bulunan Toplam Para**: \`\`\`$getGlobalUserVar[para;$mentioned[1;yes]]\`\`\`
  ]
  $footer[İsteyen kişi $username;$authorAvatar]
  `
} 