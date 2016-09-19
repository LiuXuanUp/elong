// JavaScript Document
addLoadEvent(Tupian);
addLoadEvent(BackGround);
addLoadEvent(binx);
addLoadEvent(headfunc);
addLoadEvent(loginshow);
function addLoadEvent(fuc){
	var oldonload=window.onload;
	if(typeof oldonload != 'function'){
		window.onload=fuc;
	}else{
		window.onload=function (){
			oldonload();
			fuc();
		}
	}
}



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



function Tupian()
{
	var oDiv=document.getElementById("box");
	var oImg=document.getElementById("pic");
	var aLink=oDiv.getElementsByTagName("a");
	var num=0;
	var timer=null;
	var arrimg=['images/head01_20150619.jpg','images/head02_20150624.jpg','images/head01.jpg','images/head02.jpg','images/head03.jpg','images/head01_20150701.jpg'];
	oImg.setAttribute("src",arrimg[num]);
	aLink[num].className+=' active';
	for(var i=0; i<aLink.length;i++)
	{	
		clearInterval(timer);
		aLink[i].index=i;
		aLink[i].onclick=function()
		{	clearInterval(timer);
			num=this.index;
			suo();
			timer=setInterval(move,2000);
		}	
	}
	function suo()
	{
			oImg.src=arrimg[num];
			for(var i=0; i<aLink.length;i++)
			{
			aLink[i].className='bin'+i;
			}aLink[num].className+=' active';
	}
	function move()
	{
			num++;
			if(num==6){num=0};
			suo();
	}
	timer=setInterval(move,2000);
}
function BackGround()
{
  	var oUl=document.getElementById("div4_ul");
	var aLink=oUl.getElementsByTagName("a");
	for( var i=0; i<aLink.length; i++)
	{
		var num=0;
		aLink[num].className='active1';
		aLink[i].onclick=function()
		{
			for(var j=0;j<aLink.length;j++)
			{
				aLink[j].className="";
			}
			this.className='active1';
		}
	}
}
function binx()
{
  var oDiv5=document.getElementById("div5");
  var aLink5=oDiv5.getElementsByTagName("a");
  var img_1=document.getElementById("img_1");
  var num=0;
  aLink5[num].className+=" active2";
  var arrimg5=['images/0000cTHy.jpg','images/0000b7s4.jpg','images/0000kFZe.jpg','images/0000cg9z.jpg'];
  img_1.setAttribute("src",arrimg[num]);
  for( var i=0; i<aLink5.length;i++)
  {
  		aLink5[i].index=i;
		aLink5[i].onclick=function()
		{	
			num=this.index;
			img_1.src=arrimg5[num];
			this.className='active2';
			
		}	
  }
}