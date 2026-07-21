const available= `
■ Elise
■ Higuchi Ichiyou
■ Kajii Motojirou
■ Ozaki Kouyou
■ Gin Akutagawa
■ Tachihara Michizou
■ Yumeno Kyuusaku 
■ Ryuro Hirotsu
■ Paul Verlaine 
■ Arthur Rimbaud 
■ Ace
■ Karma `;

const taken=`
■ Nakahara Chuuya
■ Dazai Osamu PM
■ Mori Ougai
■ Akutagawa Ryuunosuke
■ Oda Sakunosuke
`;

const guild=`
 Francis Scott Key Fitzgerald
Louisa May Alcott
Lucy Maud Montgomery
John Steinbeck
Nathaniel Hawthorne
Margaret Mitchell
Herman Melville
Mark Twain`;

const guildtaken=`
■ Edgar Allan Poe 
`;

const decay=`
■ Bram Stoker`

const decaytaken= `
■ Fyodor Dostoevsky 
■ Nikolai Gogol 
■ Sigma `

const hunting=`
 Fukuchi Ouchi
Teruko Okura
 Jouno Saigiku
 Suehiro Tecchou
 Tachihara Michizou`

 const huntingtaken=`
 -
 `
 
 document.getElementById("available-hunting").innerHTML=hunting
.trim()
.split("\n")
.map(name => `<p><h3>■ ${name} <h3></p>`)
.join("");

document.getElementById("taken-hunting").innerHTML=huntingtaken
.trim()
.split("\n")
.map(name => `<p><h3>■ ${name} <h3></p>`)
.join("");

document.getElementById("available-decay").innerHTML=decay
.trim()
.split("\n")
.map(name => `<p><h3> ${name} <h3></p>`)
.join("");

document.getElementById("taken-decay").innerHTML=decaytaken
.trim()
.split("\n")
.map(name => `<p><h3> ${name} </h3></p>`)
.join("");

document.getElementById("available-Port-Mafia").innerHTML=available
.trim()
.split("\n")
.map(name => `<p><h3> ${name} <h3></p>`)
.join("");

document.getElementById("taken-Port-Mafia").innerHTML=taken
.trim()
.split("\n")
.map(name => `<p><h3> ${name} </h3></p>`)
.join("");

document.getElementById("available-guild").innerHTML=guild
.trim()
.split("\n")
.map(name => `<p><h3>■ ${name} <h3></p>`)
.join("");

document.getElementById("taken-guild").innerHTML=guildtaken
.trim()
.split("\n")
.map(name => `<p><h3> ${name} </h3></p>`)
.join("");


const divi=`
 Taneda Santouka
 Mizuki Tsujimura 
 Yachiyo Murakoso 
Takuichi Aoki `

const divitaken=`
Ango Sakaguchi`

const flags=`
Piano Man
Lippman 
Albatross
Doc
`
const flagstaken=`
Ice Man`

document.getElementById("available-flags").innerHTML=flags
.trim()
.split("\n")
.map(name => `<p><h3>■ ${name} <h3></p>`)
.join("");

document.getElementById("taken-flags").innerHTML=flagstaken
.trim()
.split("\n")
.map(name => `<p><h3>■ ${name} <h3></p>`)
.join("");

document.getElementById("available-divi").innerHTML=divi
.trim()
.split("\n")
.map(name => `<p><h3>■ ${name} <h3></p>`)
.join("");

document.getElementById("taken-divi").innerHTML=divitaken
.trim()
.split("\n")
.map(name => `<p><h3>■ ${name} <h3></p>`)
.join("");

const other=`
Gide Andre (mimic)
Adam Frankenstein (storm bringer)
 Ivan Goncharov
 Alexander Pushkin
 Agatha Christie (order of the clock tower)
Aya Koda 
 Rokuzo Taguchi 
  Nobuko Sasaki 
 Kosuke
 Katsumi
 Yu 
 Shinji 
 Sakura
 Mushitaro Oguri
`
const othertaken=`
Dazai Osamu (beast)
 Oda Sakunosuke (beast)
 Nakahara Chuuya (beast)
 Tatsuhiko Shibusawa (draconia)
`


document.getElementById("available-other").innerHTML=other
.trim()
.split("\n")
.map(name => `<p><h3>■ ${name} <h3></p>`)
.join("");

document.getElementById("taken-other").innerHTML=othertaken
.trim()
.split("\n")
.map(name => `<p><h3>■ ${name} <h3></p>`)
.join("");