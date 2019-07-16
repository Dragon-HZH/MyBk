toTop.onclick = function (e) {
    e.stopPropagation();
    var y = window.scrollY;

    e.preventDefault();
    var sid = setInterval(function () {
        if (y <= 0) {
            clearInterval(sid);
            console.log('over')
        } else {
            y -= 20;
            if (y < 0) {
                y = 0;
            }
            window.scrollTo(0, y);
        }
    }, 1);
}