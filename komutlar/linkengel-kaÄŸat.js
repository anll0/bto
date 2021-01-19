module.exports = ({
    name:"linkengel-kapat",
    code: `
    $onlyPerms[admin;Bunun İçin Yetkiniz Bulunmamaktadır!]
    $setServerVar[lengel;kapalı]
    $onlyIf[$getServerVar[lengel]!=kapalı;Bu Sistem Zaten Kapalı!]
    Link Engel Sistemi Başarıyla Kapatıldı.
    Açmak İçin Lütfen !!linkengel-aç Yazınız!
    `
    })