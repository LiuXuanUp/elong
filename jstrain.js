// JavaScript Document
addLoadEvent(headfunc);
addLoadEvent(loginshow);
addLoadEvent(positionMessage);
addLoadEvent(calendar);
addLoadEvent(startStation);
addLoadEvent(endStation);
addLoadEvent(changeStation);
addLoadEvent(getdate);
function addLoadEvent(fuc)
{
	var oldonload=window.onload;
	if(typeof oldonload != 'function'){
		window.onload=fuc;
		
	}
	else{
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
	if(!oNav_secul1){return false;}
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
function getdate(){
	var d=new Date();
	var day=d.getDate();
	var month=d.getMonth()+1;
	var year=d.getFullYear();
	var date=document.getElementById("txtdate");
	date.setAttribute("value",year+"/"+month+"/"+day);	
}

function positionMessage(){

	var show=document.getElementById("show");
	var popup=document.getElementById("popup");
	var angleCode=document.getElementById("angle-code");
	var angle=document.getElementById("angle-content");
	var i=true;
	angle.onclick=function(){
	  if(i){	
		  popup.style.left="0px";	
		  angleCode.style.display="none";
		  i=false;
	  }
	  else{
		  popup.style.left="-117px";
		  angleCode.style.display="block";	
		  i=true;	
	  }
	  return false;
  } 
}

function startStation()
{   
	var start=document.getElementById("train-start-station");
	var station=document.getElementById("searchContainer1");
	var station1=document.getElementById("all-station1");
	var links=station1.getElementsByTagName("li");
	var num=true;
	start.onclick=function()
	{
		if(num==true){
		station.style.display="block";
		num=false;
		}else{
			station.style.display="none";
			num=true;
		}
		station.style.position="absolute";
		station.style.left="330px";
		station.style.top="130px";
	}
	for(var i=0;i<links.length;i++)
	{
	  links[i].onclick=function()
	  {
	  start.setAttribute("value",this.innerHTML);
	  //start.value=this.innerHTML;
	  station.style.display="none";	
	    return false;
	  }
    }
}

function endStation()
{
	var num=0;
	var end=document.getElementById("train-end-station");
    var station=document.getElementById("searchContainer2");
	var station2=document.getElementById("all-station2");
	var links=station2.getElementsByTagName("li");
	//alert(station);
	end.onclick=function()
	{
		
		if(num%2==0){
		station.style.display="block";
		}else{
			station.style.display="none";
		}
		num++;
		station.style.position="absolute";
		station.style.left="568px";
		station.style.top="130px";
	}
	for(var i=0;i<links.length;i++)
	{
	  links[i].onclick=function()
	  {
		
	  end.setAttribute("value",this.innerHTML);
	  //start.value=this.innerHTML;
	  station.style.display="none";	
	    return false;
	  }
    }
}
function changeStation()
{
	
	var start=document.getElementById("train-start-station");
    var end=document.getElementById("train-end-station");
	var change=document.getElementById("btnChangeStation");
	var i;
	change.onclick=function()
	{
		i=start.value;
		start.value=end.value;
		end.value=i;

		
	}
}
function calendar()
{
	var show=document.getElementById("showca");
	if(!show){return false;}
	var oul=show.getElementsByTagName("ul")[0];
	var btn1=document.getElementById("canlenderrightbutton01");
	var btn2=document.getElementById("canlenderleftbutton01");
	var i=1;
	btn1.onclick=function()
	{
		btn2.style.display="block";
		oul.style.left=-840*i+"px";
		if(i==8)
		{
			oul.style.left="-6240px";
			btn1.style.display="none";
		}
		i++;
	}
	btn2.onclick=function()
	{
		i=i-2;
		btn1.style.display="block";
		oul.style.left=-840*i+"px";
		
		if(i==0)
		{
			oul.style.left="0px";
			btn2.style.display="none";
		}
		i++;
	}	
}

