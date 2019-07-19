window.addEventListener('load',function(){
    let i = 0; //当前图片位置
    let sum = 4;  //img数量
    let stime = 500;  //设置时间
    // 获取图片列表元素
    let imgs = document.getElementById("ul-imgs");
    let idxs = document.getElementById("ul-idxs");
    let lis=idxs.children;
    // console.log(imgs,idxs,lis);
    let curTo = function (to=undefined){
        //如果用户没有传入要跳到第几张图，就默认跳到当前图的下一个张
        if(to==undefined){
          to=i+1;
        }
        if(i==0){//如果滚动从头开始，再重新加上transition
          imgs.className="transition";
        }
        i=to;//先将表示第几张图片的变量i变为目标位置
        //再用i计算imgs的marginLeft距离
        imgs.style.marginLeft=`${-i*100}%`;
        //先删除所有小圆点的class
        for(var li of lis){
          li.className=""
        }
        if(i==sum){
          i=0;
          //当transition动画播放完之后，才
          setTimeout(function(){
            imgs.className="";//清掉transition属性
            imgs.style.marginLeft=0;//将imgs拉回0位置
          },stime)
        }
        //再给当前位置的小圆点添加class active
        lis[i].className="active";
      }

      function contim() {
        setTimeout(function(){
          curTo();
          contim();
        },stime*5)
      }
      contim();
      
      
      console.log('come in ok')
});