module.exports = {
  name:"youtube",
  code:`
  $title[Bulunan Sonuç]
  $color[ffd700]
$description[$thumbnail[$jsonRequest[https://api.somecool.repl.co/yt-search?search=$replaceText[$message; ;%20;-1];thumbnail;]]

[$jsonRequest[https://api.somecool.repl.co/yt-search?search=$replaceText[$message; ;%20;-1];title;]\\]($jsonRequest[https://api.somecool.repl.co/yt-search?search=$replaceText[$message; ;%20;-1];url;])

**Süre** = $jsonRequest[https://api.somecool.repl.co/yt-search?search=$replaceText[$message; ;%20;-1];duration;]

**Toplam İzlenme** = $jsonRequest[https://api.somecool.repl.co/yt-search?search=$replaceText[$message; ;%20;-1];views;]

**Yükleyen Kişi** = $jsonRequest[https://api.somecool.repl.co/yt-search?search=$replaceText[$message; ;%20;-1];uploader_name;]]
  $onlyIf[$message!=;Bir İsim Gir!]
  `
}
