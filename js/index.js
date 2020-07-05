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
function pageScroll(){
    //把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数）
    window.scrollBy(0,-100);
    //延时递归调用，模拟滚动向上效果
    scrolldelay = setTimeout('pageScroll()',100);
    //获取scrollTop值，声明了DTD的标准网页取document.documentElement.scrollTop，否则取document.body.scrollTop；因为二者只有一个会生效，另一个就恒为0，所以取和值可以得到网页的真正的scrollTop值
    var sTop=document.documentElement.scrollTop+document.body.scrollTop;
   //判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面）
   if(sTop==0) clearTimeout(scrolldelay);
   //按键显示功能
   }
//tab 切换栏
function $(id) {
    return typeof id == "string" ? document.getElementById(id) : id;
}
window.onload = function() {
    var titleName = $("world_title").getElementsByTagName("li");
    var tabContent = $("world_title2").getElementsByTagName("div");
    if (titleName.length != tabContent.length) {
        return;
    }
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
}
