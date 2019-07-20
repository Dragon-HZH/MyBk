window.addEventListener('load', function () {
    let i = 0; //当前图片位置
    let sum = 4;  //img数量
    let stime = 500;  //设置时间
    // 获取图片列表元素
    let uImgs = document.getElementById("ul-imgs");
    let idxs = document.getElementById("ul-idxs");
    let lis = idxs.children;
    // console.log(uImgs,idxs,lis);
    let curTo = function (to) {
        //如果用户没有传入要跳到第几张图，就默认跳到当前图的下一个张
        //当前图片位置
        if (to == undefined) {
            to = i + 1;
        }
        if (i == 0) {//如果滚动从头开始，再重新加上transition
            if (to > i) {
                uImgs.className = "transition";
            } else { //如果点击左侧按钮到最后一张图片
                uImgs.className = '';
                uImgs.style.marginLeft = -sum * 100 + '%';
                setTimeout(function () {
                    curTo(sum - 1);
                }, 100);
                return;
            }

        }
        i = to;//先将表示第几张图片的变量i变为目标位置
        //再用i计算uImgs的marginLeft距离
        uImgs.style.marginLeft = `${-i * 100}%`;
        //先删除所有小圆点的class
        for (var li of lis) {
            li.className = "";
        }
        if (i == sum) {
            i = 0;
            //当transition动画播放完之后，才
            setTimeout(function () {
                uImgs.className = "";//清掉transition属性
                uImgs.style.marginLeft = 0;//将uImgs拉回0位置
            }, stime)
        }
        //再给当前位置的小圆点添加class active
        lis[i].className = "active";
    }

    // 获取左右按钮控件
    let btnLeft = document.getElementById("btn-left");
    let btnRight = document.getElementById("btn-right");
    let canClick = true; //控制不能让按钮连续点击
    function move(n) {
        if (canClick) {
            curTo(i + n);
            canClick = false;
            setTimeout(function () {
                canClick = true;
            }, stime + 100)
        }
    }
    btnRight.onclick = function () {
        move(1)
    }
    btnLeft.onclick = function () {
        move(-1);
    }

    // 定义循环定时器调用轮播下一个
    var timer = setInterval(function () {
        curTo();
    }, stime * 5)

    // 绑定鼠标事件,进入图片区域时清除定时器,暂停轮播
    var main = document.getElementById("main");
    main.onmouseover = function () {
        clearInterval(timer);
    }
    main.onmouseout = function () {
        timer = setInterval(function () {
            curTo();
        }, stime * 5);
    }

    // 点击圆点是跳到该图片
    idxs.onclick = function (e) {
        if (canClick) {
            canClick = false;
            let li = e.target;
            if (li.nodeName == 'LI') {
                if (li.className !== 'active') {
                    for (var i = 0; i < lis.length; i++) {
                        if (lis[i] == li) {
                            break;
                        }
                    }
                    //确定当前圆点的位置 i的数值,调用控制轮播函数 控制跳转
                    curTo(i);
                    setTimeout(function () {
                        canClick = true;
                    }, stime);
                }
            }
        }
    }
});