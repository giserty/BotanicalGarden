// 获取
var items = document.getElementsByClassName('item');
var goPreBtn = document.getElementById('goPre');
var goNextBtn = document.getElementById('goNext');
var points = document.getElementsByClassName('point');
// 图片、point需使用的标记变量
var index = 0;
// 跳转前将所有classname置为相同
var clearActive = function () {
    for (var i = 0; i < items.length; i++) {
        items[i].className = 'item';
    }
    for (var i = 0; i < points.length; i++) {
        points[i].className = 'point';
    }
}
// 跳转图片的方法
var goIndex = function () {
    clearActive();
    console.log(index)
    items[index].className = 'item active';
    points[index].className = 'point active';
}
// 下一张的方法
var goNext = function () {
    if (index < 3) {
        index++;
    } else {
        index = 0;
    }

    goIndex();
}
// 上一张的方法
var goPre = function () {
    if (index == 0) {
        index = 3;

    } else {
        index--;
    }
    goIndex();
}
// 绑定监听事件
goNextBtn.addEventListener('click', function () {
    goNext();
})
goPreBtn.addEventListener('click', function () {
    goPre();
})
// 遍历绑定图片与点的index
for (var i = 0; i < points.length; i++) {
    points[i].addEventListener('click', function () {
        var pointIndex = this.getAttribute('data-index');
        console.log(pointIndex)
        index = pointIndex;
        goIndex();
    })
}