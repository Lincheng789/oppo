// JQuery代码
$(window).scroll(function(){//用$监听鼠标滚轮
    var scrollT=document.documentElement.scrollTop||document.body.scrollTop//定义一个参数：获得一个竖直方向的鼠标滚轮参数。//
    // console.log(scrollT);
    var backTop1=$("#accessory").offset().top - $(window).height()/2;//获得距离值
    var backTop2=$("#star").offset().top - $(window).height();//获得距离值
    var backTop=$("#world").offset().top - $(window).height()/2;//获得距离值
    //console.log(backTop);
    if (scrollT > backTop2){
        //获取a1位置，然后添加效果类名和 显示 然后移除隐藏的类
        $(".b1").addClass("animated bounceInRight show").removeClass("fade");
        $(".b2").addClass("animated bounceInDown show").removeClass("fade");
        $(".b3").addClass("animated bounceInUp show").removeClass("fade");
        $(".b4").addClass("animated bounceInLeft show").removeClass("fade");
    }
    if (scrollT > backTop1){
        //获取a1位置，然后添加效果类名和 显示 然后移除隐藏的类
        $(".c1").addClass("animated bounceInRight show").removeClass("fade");
        $(".c2").addClass("animated bounceInDown show").removeClass("fade");
        $(".c3").addClass("animated bounceInUp show").removeClass("fade");
        $(".c4").addClass("animated bounceInLeft show").removeClass("fade");
    }
    if (scrollT > backTop){
        //获取a1位置，然后添加效果类名和 显示 然后移除隐藏的类
        $(".a1").addClass("animated bounceInRight show").removeClass("fade");
        $(".a2").addClass("animated bounceInDown show").removeClass("fade");
        $(".a3").addClass("animated bounceInUp show").removeClass("fade");
        $(".a4").addClass("animated bounceInLeft show").removeClass("fade");
    }
    //吸顶灯效果
    var cs =document.getElementById("cs");
    var csTop =cs.offsetTop;
    console.log(csTop);
       
    if(scrollT>=csTop){
        nav.style.position = "fixed";
        nav.style.top="0";
        nav.style.left="0";
    //设置显示的层级
        nav.style.zIndex="100";
    }
    else{
        nav.style.position="";
    } 
}); 
//tab 切换栏
window.onload = function() {
    var titleName = document.getElementById("world_title").getElementsByTagName("li");
    var tabContent = document.getElementById("world_title2").getElementsByTagName("div");
    for (var index = 0; index < titleName.length; index++) {
        titleName[index].id = index;
        titleName[index].onmouseover = function () {
            for (var j = 0; j < titleName.length; j++) {
                titleName[j].className = "";
                tabContent[j].style.display = "none"
            }
            this.className = "select";
            tabContent[this.id].style.display = "block";
        }
    }
    //找到页面的按钮  返回顶部的功能
    var totop = document.getElementById("fhdb");
    totop.style.display="none";
    var timer=null;
    //点击事件
    totop.onclick=function(){
        //周期性定时器
        timer=setInterval(function(){
            //获取滚动条距离浏览器顶端的距离
            var backTop=document.documentElement.scrollTop||document.body.scrollTop;
            //越滚越慢
            var speedTop = backTop/5;
            document.documentElement.scrollTop=backTop-speedTop;//往上移动  缓冲
            if(backTop==0){
                clearInterval(timer);// 关闭定时器
            }
        },30);//每30毫秒执行一次
    }
    //设置临界值 控制 返回顶部图标显示
    var pag=700;
        //返回顶部 是否显示功能
     window.onscroll=function(){
        var backTop=document.documentElement.scrollTop||document.body.scrollTop;
        if(backTop>pag){
            totop.style.display="block";
        }
        else{
            totop.style.display="none";
        }
        
     }
}
