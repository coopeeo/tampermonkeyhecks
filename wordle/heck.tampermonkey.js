// ==UserScript==
// @name Wordle Heck
// @version 0.0.8.1
// @description A  Wordle Hack that enters the solution for u
// @author CoopPlayzz
// @homepage https://github.com/CoopPlayzz/tampermonkeyhecks
// @icon https://www.google.com/s2/favicons?domain=https://www.nytimes.com/games/wordle/index.html
// @updateURL https://raw.githubusercontent.com/CoopPlayzz/tampermonkeyhecks/main/wordle/heck.tampermonkey.js
// @downloadURL https://raw.githubusercontent.com/CoopPlayzz/tampermonkeyhecks/main/wordle/heck.tampermonkey.js
// @match https://www.nytimes.com/games/wordle*
// ==/UserScript==

(async function ()  {
var wordleLetters = {
    lettersRow: {
        q:0,
        w:0,
        e:0,
        r:0,
        t:0,
        y:0,
        u:0,
        i:0,
        o:0,
        p:0,
        a:1,
        s:1,
        d:1,
        f:1,
        g:1,
        h:1,
        j:1,
        k:1,
        l:1,
        z:2,
        x:2,
        c:2,
        v:2,
        b:2,
        n:2,
        m:2
    }
}
var arrayrowkeys = await document.getElementsByTagName("game-app")[0].$keyboard.$keyboard.getElementsByClassName("row")

for (let eeeee = 0; eeeee <= 3; eeeee++) {
    var rowe032 = await arrayrowkeys[eeeee]
    if (rowe032 != undefined && rowe032 != null){var rowe = rowe032.getElementsByTagName("button")
    for (let lop = 0; lop <= rowe.length; lop++) {
        var element = await rowe[lop];
        //if(element == undefined || element == null) return;
        console.log(rowe)
        console.log(element)
        console.log("row: " + eeeee + " | keynum: " + lop + " | Element: " + element)
        if(element != undefined && element != null) {await element.classList.add("letter_" + await element.getAttribute("data-key"))}
    }}
}

document.getElementsByTagName("game-app")[0].shadowRoot.children.item(1).getElementsByTagName("header")[0].getElementsByClassName("menu-right")[0].innerHTML = "<button onclick=\"if(confirm('Are you. sure you want to do hacks?')){dohacks()}\" id=\"hacks-button\" style=\"color:#fff;\" class=\"icon\" aria-label=\"Hacks\" tabindex=\"-1\">do Answer</button>" + await document.getElementsByTagName("game-app")[0].shadowRoot.children.item(1).getElementsByTagName("header")[0].getElementsByClassName("menu-right")[0].innerHTML;

function dohacks(){alert("test | coming soon")}

})();