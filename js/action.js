// JavaScript Document
window.onload=function(){
	headfunc();
	loginshow();
	function headfunc(){
    var dzl=location.href;
	var nav_firstul = document.getElementById("nav_firstul");
	var list = nav_firstul.getElementsByTagName("li");
	for(var i = 0; i < list.length; i++){
		var ljdz = list[i].firstChild.getAttribute("href");
		if(dzl.indexOf(ljdz) != -1){
			list[i].firstChild.style.background = "#039";
		}
	} 
}
function loginshow(){
	var oNav_secul1=document.getElementById("nav-secondul");
	var oLoginoption=document.getElementById("loginoption");
	oNav_secul1.onmouseover=function(){
		clearTimeout(logtime);
		oLoginoption.style.display='block';
	}
	oNav_secul1.onmouseout=function(){
		logtime=setTimeout(function(){oLoginoption.style.display="none";},500);
		oLoginoption.onmouseover=function(){
			clearTimeout(logtime);	
		}
		oLoginoption.onmouseout=function(){
			logtime=setTimeout(function(){oLoginoption.style.display="none";},500);
			
		}
	}
}
	
	/*导航图片切换*/
	var oPlayBox=document.getElementById("playbox");
	var oPlayPic=document.getElementById("playpic");
	var oSquares=document.getElementById("squares");
	var oSquare=oSquares.getElementsByTagName("li");
	//初始化
	var arrImg=["images/ad1.jpg","images/ad2.jpg","images/ad3.jpg","images/ad4.jpg",
	"images/ad5.jpg","images/ad6.jpg","images/ad7.jpg","images/ad8.jpg"];
	var num=0;
	var timer=null;
	oPlayPic.setAttribute("src",arrImg[num]);//DOM核心写法
	oSquare[num].className+=' active';
	//设置小矩形点击、自动循环切换
	for(var i=0;i<oSquare.length;i++){
		oSquare[i].index=i;//自定义属性
		oSquare[i].onclick=function(){
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
		oPlayPic.setAttribute("src",arrImg[num]);
		for(var i=0;i<oSquare.length;i++){
			oSquare[i].className='square'+i;
		}
		oSquare[num].className+=' active';
	}
	
	/*citycont下拉菜单传地名值*/
	var oSc=document.getElementById("search-city");
	var oCitycont=document.getElementById("citycont");
	var oSi=document.getElementById("search-input");
	var oValue=oSi.getAttribute("value");
	var oCityhz=document.getElementById("cityhz");
	var aCLi=oCityhz.getElementsByTagName("li");
	oSc.onclick=function(){
		oCitycont.style.display='block';
	}
	for(var i=0;i<aCLi.length;i++){
		aCLi[i].onclick=function(){
			oCitycont.style.display='none';
			var oValue2=this.childNodes[0].nodeValue;
			oSi.setAttribute("value",oValue2);
		}
	}
	/*citycont下拉菜单选项卡*/
	var oCitynav=document.getElementById("citynav");
	var aCnLinks=oCitynav.getElementsByTagName("li");
	//var oCityhz=document.getElementById("cityhz");
	var oCityhzc=oCityhz.getElementsByTagName("div");	
	for(var i=0;i<aCnLinks.length;i++){
		aCnLinks[i].index=i;
		aCnLinks[i].onclick=function(){
			for( var i=0;i<oCityhzc.length;i++){
				oCityhzc[i].style.display='none';
				aCnLinks[i].style.background='#F8F8F8';
				aCnLinks[i].style.border='1px solid #F8F8F8';
				aCnLinks[i].style.borderBottom='1px solid #FFF';
				
			}
			oCityhzc[this.index].style.display='block';
			this.style.background='#FFF';
			this.style.border='1px solid #d7d7d7';
			this.style.borderBottom='1px solid #FFF';
			this.style.marginBottom='-1px';
			this.style.position='relative';
			this.style.fontWeight='normal';
			return false;
		}
	}
	
	/*hotelbrand*/
	var oPrev=document.getElementById("prev");
	var oNext=document.getElementById("next");
	var oHotelUl=document.getElementById("hotelul");
	oHotelUl.style.position="absolute";
    oHotelUl.style.left="0px";
	oHotelUl.style.top="0px";
	oPrev.onclick=function(){
		oNext.style.display='block';
		moveul2();
		return false;
	}
	oNext.onclick=function(){
		oPrev.style.display='block';
		moveul1();
		return false;
	}
	var i=1;
	function moveul1(){
		oHotelUl.style.left=-150*i+"px";
		if(i==4)
		{oNext.style.display='none';}
		else{i++;}
	}
	function moveul2(){
		i=i-2;
		oHotelUl.style.left=-150*i+"px";
		if(i==0)
		{oPrev.style.display='none';}
		else{i++};
	}
	
	
		
}

$(document).ready(function(e) {
	
	/*全选text*/
	$("#search-city .search-input").focus(function(){
		this.select();
		/*$("#playbox .citybj").css({"display:block"});*/
	});
	/*清空text*/
	$("#search-word .search-input").focus(function(){
		this.value='';
	});
	$("#search-word .search-input").blur(function(){
		this.value=this.defaultValue;;
	});
	
	/*search选项卡*/
    $(".gnhotel").click(function(e){
		$(this).css({"margin-bottom":"0px","height":"40px"});
		$(".dzhouse").css({"margin-bottom":"1px","height":"39px"});
		$(".gathotel").css({"margin-bottom":"1px","height":"39px"});
		//$(".gnhotel:hover").css("background","rgba(0,0,0,.8)");
		//$(".dzhouse:hover").css("background","#000");
		//$(".gathotel:hover").css("background","#000");
		$(".search-body1").show();
		$(".search-body2").hide();
		$(".search-body3").hide();
	});
	$(".dzhouse").click(function(){
		$(".gnhotel").css({"margin-bottom":"1px","height":"39px"});
		$(this).css({"margin-bottom":"0px","height":"40px"});
		$(".gathotel").css({"margin-bottom":"1px","height":"39px"});
		//$(".gnhotel:hover").css("background","#000");
		//$(".dzhouse:hover").css("background","rgba(0,0,0,.8)");
		//$(".gathotel:hover").css("background","#000");
		$(".search-body1").hide();
		$(".search-body2").show();
		$(".search-body3").hide();
	});
	$(".gathotel").click(function(){
		$(".gnhotel").css({"margin-bottom":"1px","height":"39px"});
		$(".dzhouse").css({"margin-bottom":"1px","height":"39px"});
		$(this).css({"margin-bottom":"0px","height":"40px"});
		//$(".gnhotel:hover").css("background","#000");
		//$(".dzhouse:hover").css("background","#000");
		//$(".gathotel:hover").css("background","rgba(0,0,0,.8)");
		$(".search-body1").hide();
		$(".search-body2").hide();
		$(".search-body3").show();
	});
	
	/*hotelchoose*/
	$("#hotelchoose li").width(160);
	$("#hotelchoose li").eq(0).width(400);//index：索引
	$("#hotelchoose li").mouseover(function(){
		/*$("#hotelchoose li").width(160);//没加动画效果
		$(this).width(400);
		$(this).children("a").children(".mask").hide();*/
		$(":animated").stop(true,false);//加了动画效果
		$(this).animate({width:400}).siblings().animate({width:160});
		$(this).find("a").find(".mask").css({opacity:"0"});
	});
	$("#hotelchoose li").mouseout(function(){
		/*$("#hotelchoose li").width(200);//没加动画效果
		$(this).children("a").children(".mask").show();*/
		$("#hotelchoose li").animate({width:200});//加了动画效果
		$(this).find("a").find(".mask").css({opacity:"1"});
	});
	
	/*清空Email*/
	$("#ylsc .emailtxt").focus(function(){
		this.value='';
	});
	$("#ylsc .emailtxt").blur(function(){
		this.value=this.defaultValue;;
	});
	
});

















