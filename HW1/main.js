
var msg = "ただ今より、何かトラブルが起こっているようです。少々お待ちください。" +
    "Sorry, it has some problem. Please wait a second."
var interval = 170;
var index = 0;
var n = 1;

function marquee() {
    document.myForm.myText.value = msg.substring(index, msg.length) + msg.substring(0, msg.length);
    index += n;
    if (index > msg.length) {
        index = 1;
        n = 1;
    }
    if (index > 34) n = 2;
    window.setTimeout("marquee();", interval);
}
