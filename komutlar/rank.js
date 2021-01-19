module.exports = {
name: "rank",
code: ` 
https://vacefron.nl/api/rankcard?username=$replaceText[$username[$mentioned[1;yes]]; ;+;-1]&avatar=$userAvatar[$mentioned[1;yes]]&custombg=$getUserVar[custombg;$mentioned[1;yes]]&level=$getUserVar[level;$mentioned[1;yes]]&rank=&currentxp=$getUserVar[exp;$mentioned[1;yes]]&nextlevelxp=$getUserVar[req;$mentioned[1;yes]]&previouslevelxp=$sub[$getUserVar[req;$mentioned[1;yes]];1000]&xpcolor=$getUserVar[renk]&isboosting=5

$onlyIf[$getServerVar[levelsistem]==kapalı;]`} 