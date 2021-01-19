module.exports = {
  name:"emoji",
  code:`
$color[ffd700]
$description[
[Emojiyi İndir\\](https://cdn.discordapp.com/emojis/$replaceText[$splitText[3];>;;1].$replaceText[$replaceText[*$splitText[1]*;*<*;png;1];*<a*;gif;1])

Emoji ID: $textSplit[$message[1];:]$replaceText[$splitText[3];>;;1]]

$image[https://cdn.discordapp.com/emojis/$replaceText[$splitText[3];>;;1].$replaceText[$replaceText[*$splitText[1]*;*<*;png;1];*<a*;gif;1]]
$footer[Emoji İsmi: $splitText[2]]
$suppressErrors[Hata]
$textSplit[$message[1];:]
$onlyIf[$message!=;<a:yasak:782914088497315870> Emoji Gir Lan]
$onlyIf[$checkContains[$message[1];<]!=false;<a:yasak:782914088497315870> Hatalı emoji cnm.]
  `
}