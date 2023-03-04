/*跑馬燈文字，因為公司是日本的，所以加了日文*/
var msg = "ただ今より、何かトラブルが起こっているようです。少々お待ちください。" +
    "We are sorry,it seems something went wrong. Please wait a second."
var interval = 170;
var index = 0;
var n = 1;

function marquee() {
    document.myForm.myText.value = msg.substring(index, msg.length) + msg.substring(0, msg.length);
    /*因為日文一個字比英文寬，為了讓速度統一，英文的部分一次跑兩個字母，日文的部分一次跑一個字母，用 n 來分別*/
    index += n;
    /*如果文字到底了就重新*/
    if (index > msg.length) {
        index = 1;
        n = 1;
    }
    if (index > 34) n = 2;
    window.setTimeout("marquee();", interval);
}
