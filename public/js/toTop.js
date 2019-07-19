window.addEventListener('load', function () {
    toTop.onclick = function (e) {
        e.stopPropagation();
        let y = window.scrollY;

        e.preventDefault();
        let sid = setInterval(function () {
            if (y <= 0) {
                clearInterval(sid);
                sid = null;
            } else {
                y -= 20;
                if (y < 0) {
                    y = 0;
                }
                window.scrollTo(0, y);
            }
        }, 1);
    }
})