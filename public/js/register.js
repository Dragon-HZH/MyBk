let data = {
    code: 1,
    mcode: 1
}


function funRef() {
    location.href = '/index.html'
}


function vif() {
    let pw1 = upwd.value;
    let pw2 = npwd.value;
    if (pw1 !== pw2) {
        u_pwd2.innerHTML = '*两次密码不一致!';
        data.mcode = 1;
    } else {
        data.mcode = 0;
    }
    // 判断是否可以提交注册信息
    if (data.code != 1 && data.mcode != 1) {
        bon_1.disabled = false;
    } else {
        bon_1.disabled = true;
    }
}

// 验证用户名可用
function right_name() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let obj = JSON.parse(xhr.responseText);
            u_name.innerHTML = obj.msg;
            data.code = obj.code;
    // 判断是否可以提交注册信息
            if (data.code != 1 && data.mcode != 1) {
                bon_1.disabled = false;
            } else {
                bon_1.disabled = true;
            }
        }
    }
    xhr.open('get', '/ajax/v1/regname/' + uname.value, true);
    xhr.send();
}

// function setabled() {
//     console.log(data)
//     if(data.code !=1 && data.mcode != 1){
//         bon_1.disabled = false;
//     }
// }