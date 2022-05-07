// 点击展开的方法
function visible1() {
    if (document.getElementById("text1").style.display != "block") {
        document.getElementById("text1").style.display = "block";
        document.getElementById("text2").style.display = "none";
        document.getElementById("text3").style.display = "none";
        document.getElementById("text4").style.display = "none";
        document.getElementById("text5").style.display = "none";
    }
    else
        document.getElementById("text1").style.display = "none";
}
function visible2() {
    if (document.getElementById("text2").style.display != "block") {
        document.getElementById("text1").style.display = "none";
        document.getElementById("text2").style.display = "block";
        document.getElementById("text3").style.display = "none";
        document.getElementById("text4").style.display = "none";
        document.getElementById("text5").style.display = "none";
    }
    else
        document.getElementById("text2").style.display = "none";
}
function visible3() {
    if (document.getElementById("text3").style.display != "block") {
        document.getElementById("text1").style.display = "none";
        document.getElementById("text2").style.display = "none";
        document.getElementById("text3").style.display = "block";
        document.getElementById("text4").style.display = "none";
        document.getElementById("text5").style.display = "none";
    }
    else
        document.getElementById("text3").style.display = "none";
}
function visible4() {
    if (document.getElementById("text4").style.display != "block") {
        document.getElementById("text1").style.display = "none";
        document.getElementById("text2").style.display = "none";
        document.getElementById("text3").style.display = "none";
        document.getElementById("text4").style.display = "block";
        document.getElementById("text5").style.display = "none";
    }
    else
        document.getElementById("text4").style.display = "none";
}
function visible5() {
    if (document.getElementById("text5").style.display != "block") {
        document.getElementById("text1").style.display = "none";
        document.getElementById("text2").style.display = "none";
        document.getElementById("text3").style.display = "none";
        document.getElementById("text4").style.display = "none";
        document.getElementById("text5").style.display = "block";
    }
    else
        document.getElementById("text5").style.display = "none";
}