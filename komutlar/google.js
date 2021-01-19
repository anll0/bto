module.exports = {
  name:"google",
  code:`
  $color[ffd700]
  $title[$jsonRequest[https://api.somecool.repl.co/google-search?q=$replaceText[$message; ;%20;-1];title;Böyle Bir Site Bulunamadı!]]
  
  $description[
  
  [Siteye Git !\\]($jsonRequest[https://api.somecool.repl.co/google-search?q=$replaceText[$message; ;%20;-1];link;Böyle Bir Site Bulunamadı!])
  
  **Site Açıklaması**: \`$jsonRequest[https://api.somecool.repl.co/google-search?q=$replaceText[$message; ;%20;-1];description;Böyle Bir Site Bulunamadı!]\`\
  ]
  $onlyIf[$message!=;Bir şey aratmam için yazı yazmalısın !]
  `
}
