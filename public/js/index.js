// 用户名
function getname(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange=()=>{
        if(xhr.readyState==4 && xhr.status==200){
            let obj = JSON.parse(xhr.responseText);
            if(obj.code!=1){
                bon_1.disabled = true;
                u_name.style.color = "#f00";
                // u_name.style.backgroundColor = "red";
            }else{
                u_name.style.color = "#0f0";
                // u_name.style.backgroundColor = "#aaa";
            }
            u_name.innerHTML = obj.msg;
            
        }
    }
    xhr.open('get','/ajax/v1/uname/'+uname.value,true);
    xhr.send();
}

// 密码
// function getpwd() {
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = ()=>{
//         if(xhr.readyState==4  && xhr.status==200){
//             let obj = JSON.parse(xhr.responseText);
//             u_pwd.innerHTML = obj.msg;
//         }
//     }
//     xhr.open('get','/ajax/v1/upwd/'+uname.value,true);
//     xhr.send();
    
// }