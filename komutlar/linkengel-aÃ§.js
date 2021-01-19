module.exports = ({
    name: "linkengel-aç",
    code: `
    $onlyPerms[admin;Bunun İçin Yetkiniz Bulunmamaktadır!]
    $setServerVar[lengel;açık]
    $onlyIf[$getServerVar[lengel]!=açık;Bu Sistem Zaten Açık!]
    Link Engel Sistemi Başarıyla Açıldı. Kapatmak İçin Lütfen !!linkengel-kapat yazınız 
    `
    })