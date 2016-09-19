// JavaScript Document
window.onload=function(){
	var oPasswrap=document.getElementById("passwrap");
	var oPic_pass=document.getElementById("pic_pass");
	var oCircles=document.getElementById("circle");
	var oCircle=oCircles.getElementsByTagName("li");
	//初始化
	var arrImg=["image/big1.jpg","image/big2.jpg","image/big3.jpg","image/big4.jpg","image/big5.jpg","image/big6.jpg","image/big7.jpg","image/big8.jpg","image/big9.jpg",];
	var num=0;
	var timer=null;
	oPlayPic.setAttribute("src",arrImg[num]);//DOM核心写法
	oCircle[num].className+=' active';
	//设置小矩形点击、自动循环切换
	for(var i=0;i<oCircle.length;i++){
		oCircle[i].index=i;//自定义属性
		oCircle[i].onclick=function(){
			clearInterval(timer);//点击之前清除自动切换
			num=this.index;
			common();
			timer=setInterval(automove,3000);//点击之后再加载自动切换
		}
	}
	//设置图片自动循环切换
	timer=setInterval(automove,3000);
	function automove(){
		num++;
		if(num==8){
			num=0;
		}
		common();
	}
	//提取修改图片地址、小矩形颜色切换的相同代码
	function common(){
		oPic_pass.setAttribute("src",arrImg[num]);
		for(var i=0;i<oCircle.length;i++){
			oCircle[i].className='circle'+i;
		}
		oCircle[num].className+=' active';
	}
}
