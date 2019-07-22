$(function () {
    var top = 0; //到顶部的距离 --- 划过的距离
    var ntp = 0; //当前位置
    var nav = document.getElementsByTagName('nav')[0];
    var banner = document.getElementById('banner');
    window.onscroll = function () {
        top = window.scrollY; //实时获取滑动距离
        if (top > ntp && top > 70) {
            //判断有没有id属性有则移除
            if(nav.getAttribute('id')=='nav1'){
                nav.setAttribute('id','nav2');
            }
            banner.style.marginTop = '5px';
        } else {
            // 添加id属性
            if (nav.getAttribute('id') == 'nav2') {
                nav.setAttribute('id', 'nav1');
            }
            banner.style.marginTop = '0px';
        }
        ntp = top;
    }

    nav.onmousemove = function () {
        if (nav.id == 'nav2') {
            nav.id = 'nav1';
        }
    }
})