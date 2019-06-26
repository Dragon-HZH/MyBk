let objs = {
    msg: ''
}

// 判断用户信息的真实性
function getuser() {
    if (!uname.value) {
        s1.innerHTML = '用户名不能为空';
        return;
    }
    if (!email.value) {
        s2.innerHTML = 'email不能为空';
        return;
    }
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let obj = JSON.parse(xhr.responseText);
            if (obj.code == 1) {
                s1.style.color = "#0f0";
                s2.style.color = "#0f0";
                s1.innerHTML = '✔';
                s2.innerHTML = '✔';
                s1.style.left = '385px';
                s2.style.left = '385px';
            } else {
                s1.innerHTML = obj.msg1;
                s2.innerHTML = obj.msg2;
                s1.style.left = '300px';
                s2.style.left = '300px';
            }
            objs.msg = obj.code;
        }
    }
    xhr.open('get', '/ajax/v1/resmsg/' + uname.value + '&' + email.value, true);

    xhr.send();
}



function getAll() {
    let p1 = pwd.value;
    let p2 = upwd.value;
    let u1 = uname.value;
    let e1 = email.value;
    if (!p1 || !p2 || !u1 || !e1) {
        alert('信息不完整,请重新填写!')
        return;
    }
    if (objs.msg != 1) {
        alert('用户不存在！')
        return;
    }

    if (p1 == p2) {
        s3.innerHTML = '✔';
        s4.innerHTML = '✔';
        s3.style.left = '385px';
        s4.style.left = '385px';
        s3.style.color = '#0f0';
        s4.style.color = '#0f0';
    } else {
        pwd.value = '';
        upwd.value = '';
        s3.innerHTML = '两次密码不一致';
        s4.innerHTML = '两次密码不一致';
        s3.style.left = '300px';
        s4.style.left = '300px';
        return;
    }
    
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let obj = JSON.parse(xhr.responseText);

        }
    }
    xhr.open('put', '/ajax/v1/respwd', true);

    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    let formdata = 'uname=' + u1 + '&email=' + e1 + '&upwd=' + p1;

    xhr.send(formdata);
}
