module.exports = {
  name:"twitter",
  code:`
  $title[Bulunan Sonuç]
  $color[ffd700]
$description[$thumbnail[$jsonRequest[https://api.somecool.repl.co/twitter?username=$replaceText[$message; ;%20;-1];profile_picture]

[$jsonRequest[https://api.somecool.repl.co/twitter?username=$replaceText[$message; ;%20;-1];display_name]\\]($jsonRequest[https://api.somecool.repl.co/twitter?username=$replaceText[$message; ;%20;-1];profile_banner])

**Kullanıcı Adı** = $jsonRequest[https://api.somecool.repl.co/twitter?username=$replaceText[$message; ;%20;-1];display_name]

**Takipçi** = $jsonRequest[https://api.somecool.repl.co/twitter?username=$replaceText[$message; ;%20;-1];followers]

**Takip Edilen** = $jsonRequest[https://api.somecool.repl.co/twitter?username=$replaceText[$message; ;%20;-1];followings]

**Tweetler** = $jsonRequest[https://api.somecool.repl.co/twitter?username=$replaceText[$message; ;%20;-1];tweets]

**Beğeniler** = $jsonRequest[https://api.somecool.repl.co/twitter?username=$replaceText[$message; ;%20;-1];likes]
  $onlyIf[$message!=;Bir İsim Gir!]
  `
}
