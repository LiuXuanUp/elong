// JavaScript Document
addLoadEvent(Option);
addLoadEvent(txtvanish);
addLoadEvent(valuematch);
addLoadEvent(changebanner);
addLoadEvent(changebannerads);
addLoadEvent(checkindate);
addLoadEvent(stretch);
addLoadEvent(changevacation);
addLoadEvent(headfunc);
addLoadEvent(loginshow);
//addLoadEvent(rotateobject);
addLoadEvent(shakeobject);
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
function addClass(targetElement,newClass){
  if(targetElement.className){
     targetElement.className=targetElement.className+" "+newClass;
    }else{
     targetElement.className=newClass;
    }
}

function Option(){
    var oBox_ul1=document.getElementById("box_ul1");
	var oUl1_Lis=oBox_ul1.getElementsByTagName("li");
	var oInside_city=document.getElementById("inside_city");
	var oInside_divs=oInside_city.getElementsByTagName("div");
	/*for(var i=0;i<oUl1_Lis.length;i++){
		oUl1_Lis[i].onclick=function(){
			for(var j=0;j<oInside_divs.length;j++){
				if(j==i){
					oInside_divs[j].style.display="block";	
				}
				oInside_divs[j].style.display="none";
			}
			return false;
        }	
	}*/
	oUl1_Lis[0].onclick=function(){
		for(var j=0;j<oInside_divs.length;j++){
			oInside_divs[j].style.display="none";
		}
		oInside_divs[0].style.display="block";
		for(var k=0;k<oUl1_Lis.length;k++){
			var m=k+1;
			oUl1_Lis[k].className='box_ul1_li'+m;	
		}
		addClass(oUl1_Lis[0],"box_ul1_current");
		return false;	
	}
	oUl1_Lis[1].onclick=function(){
		for(var j=0;j<oInside_divs.length;j++){
			oInside_divs[j].style.display="none";
		}
		oInside_divs[1].style.display="block";	
		for(var k=0;k<oUl1_Lis.length;k++){
			var m=k+1;
			oUl1_Lis[k].className='box_ul1_li'+m;	
		}
		addClass(oUl1_Lis[1],"box_ul1_current");
		
		return false;	
	}
	oUl1_Lis[2].onclick=function(){
		for(var j=0;j<oInside_divs.length;j++){
			oInside_divs[j].style.display="none";
		}
		oInside_divs[2].style.display="block";	
		for(var k=0;k<oUl1_Lis.length;k++){
			var m=k+1;
			oUl1_Lis[k].className='box_ul1_li'+m;	
		}
		addClass(oUl1_Lis[2],"box_ul1_current");
		return false;	
	}
	oUl1_Lis[3].onclick=function(){
		for(var j=0;j<oInside_divs.length;j++){
			oInside_divs[j].style.display="none";
		}
		oInside_divs[3].style.display="block";
		for(var k=0;k<oUl1_Lis.length;k++){
			var m=k+1;
			oUl1_Lis[k].className='box_ul1_li'+m;	
		}
		addClass(oUl1_Lis[3],"box_ul1_current");
		return false;		
	}
	oUl1_Lis[4].onclick=function(){
		for(var j=0;j<oInside_divs.length;j++){
			oInside_divs[j].style.display="none";
		}
		oInside_divs[4].style.display="block";
		for(var k=0;k<oUl1_Lis.length;k++){
			var m=k+1;
			oUl1_Lis[k].className='box_ul1_li'+m;	
		}
		addClass(oUl1_Lis[4],"box_ul1_current");
		return false;		
	}
	oUl1_Lis[5].onclick=function(){
		for(var j=0;j<oInside_divs.length;j++){
			oInside_divs[j].style.display="none";
		}
		oInside_divs[5].style.display="block";	
		for(var k=0;k<oUl1_Lis.length;k++){
			var m=k+1;
			oUl1_Lis[k].className='box_ul1_li'+m;	
		}
		addClass(oUl1_Lis[5],"box_ul1_current");
		return false;	
	}
	
}
function txtvanish(){
	var oCitytxt=document.getElementById("citytxt");
	var oInside_city=document.getElementById("inside_city");
	var oInside_divs=oInside_city.getElementsByTagName("div");
	var oInside_links=oInside_city.getElementsByTagName("a");
	var oInter_txt=document.getElementById("inter_txt");
	var oInside_spots=document.getElementById("inside_spots");
	oCitytxt.onblur=function(){
		oInside_city.style.display="none";	
		return false;
	}	
	oCitytxt.onfocus=function(){
		oInside_city.style.display="block";	
		return false;
	}
	oInside_city.onmousedown=function(){
		oInside_city.style.display="block";
		return false;
	}
	oInter_txt.onblur=function(){
		oInside_spots.style.display="none";	
		return false;
	}	
	oInter_txt.onfocus=function(){
		oInside_spots.style.display="block";	
		return false;
	}
	
	
}
function valuematch(){
	var oCitytxt=document.getElementById("citytxt");
	var oInside_city=document.getElementById("inside_city");
	var oInside_divs=oInside_city.getElementsByTagName("div");
	var oInside_links=oInside_city.getElementsByTagName("a");
	for(var i=6;i<oInside_links.length;i++){
	  oInside_links[i].onclick=function(){ 
		  oCitytxt.setAttribute("value",this.innerHTML);
		  return false;
	  }
	}	
}
var i=0;
function changebanner(){	

	var oInter_banner1=document.getElementById("inter_banner1");
	var imgarr=['url(images/banner_big_1.jpg)','url(images/banner_big_2.jpg)','url(images/banner_big_3.jpg)'];
	oInter_banner1.style.backgroundImage=imgarr[i];
	i++;
	if(i==3){
	  i=0;	
	}
}
setInterval("changebanner()",10000);

var j=0;
function changebannerads(){
	var oBanner_ads=document.getElementById("banner_ads");
	var oAds_links=oBanner_ads.getElementsByTagName("a");
	var imgarr2=['url(images/Tokyo_ad1.jpg)','url(images/Phuket_ad2.jpg)','url(images/1200-100.jpg)','url(images/0529_01.jpg)','url(images/150611.jpg)'];
	oBanner_ads.style.opacity="0";
	oBanner_ads.style.backgroundImage=imgarr2[j];
	oBanner_ads.style.opacity="1";
	for(var i=0;i<oAds_links.length;i++){
		oAds_links[i].style.background="#fff";
	}
	oAds_links[j].style.background="rgb(0,102,204)";
	j++;
	if(j==5){
	  j=0;	
	}
	for(var i=0;i<oAds_links.length;i++){
		oAds_links[i].index=i;
		oAds_links[i].onclick=function(){
			for(var k=0;k<oAds_links.length;k++){
		        oAds_links[k].style.background="#fff";
	        }
			this.style.background="rgb(0,102,204)";	
			oBanner_ads.style.backgroundImage=imgarr2[this.index];
			j=this.index;
		};
	}
} 
setInterval("changebannerads()",3000); 
function checkindate(){
	var oCheckindate=document.getElementById("checkindate");
	var oCheckoutdate=document.getElementById("checkoutdate");
	var oFulldate=new Date();
	var time=oFulldate.getTime();
	time+=1000*60*60*24*3;//加上3天
	oFulldate.setTime(time);
	var oOutdate=new Date();
	var time2=oFulldate.getTime();
	time2+=1000*60*60*24*1;//加上1天
	oOutdate.setTime(time2);
	var checkyear=oFulldate.getFullYear();
	var checkmonth=oFulldate.getMonth()+1;
	var checkdate=oFulldate.getDate();
	var Outcheckyear=oOutdate.getFullYear();
	var Outcheckmonth=oOutdate.getMonth()+1;
	var Outcheckdate=oOutdate.getDate();
	oCheckindate.setAttribute("value",checkyear+'-'+checkmonth+'-'+checkdate);
	oCheckoutdate.setAttribute("value",Outcheckyear+'-'+Outcheckmonth+'-'+Outcheckdate);
}
var a=1
function stretch(){
	var oSearch_browse=document.getElementById("yoursearch_browse");
	var oShowsearch=document.getElementById("showsearch_before");
	var oShowsearch_a=oShowsearch.getElementsByTagName("a")[0];
	oShowsearch.onclick=function(){
		if(a==1){
			$("#yoursearch_browse").slideDown();
			oShowsearch_a.className="updirecta";
			a=0;
			return false;
		}
		if(a==0){
			$("#yoursearch_browse").slideUp();
			oShowsearch_a.className="downdirecta";
			a=1;	
			return false;
		}
	}	
}
function changevacation(){
	var oVacationdiv1=document.getElementById("vacation_div1");
	var oVacationlinks=oVacationdiv1.getElementsByTagName("a");
	var oVacationdiv2=document.getElementById("vacation_div2");
	var oVacationdiv3=document.getElementById("vacation_div3");
	var oVacationdiv4=document.getElementById("vacation_div4");
	var oVacationdiv5=document.getElementById("vacation_div5");
	var oVacationdiv6=document.getElementById("vacation_div6");
	var oInter_vacation=document.getElementById("inter_vacation");
	//var oVacation_box=document.getElementById("vacation_divbox");
	var oVacation_box=document.getElementsByClassName("vacation_divbox")[0];
	var Vdivarr=[];
	Vdivarr.push(oVacationdiv2);
	Vdivarr.push(oVacationdiv3);
	Vdivarr.push(oVacationdiv4);
	Vdivarr.push(oVacationdiv5);
	Vdivarr.push(oVacationdiv6);
	oVacation_box.style.position="absolute";
	oVacation_box.style.top="0";
	oVacation_box.style.left="0";
	for(var i=0;i<oVacationlinks.length;i++){
		oVacationlinks[i].index=i;
		oVacationlinks[i].onclick=function(){
			for(var j=0;j<oVacationlinks.length;j++){
				oVacationlinks[j].className='vacation_a'+(j+1);
			}
			/*for(var k=0;k<Vdivarr.length;k++){
				Vdivarr[k].style.display="none";	
			}
			Vdivarr[this.index].style.display="block";*/
			
			addClass(this,"vacation_currenta");
			if(this.index==0){
				moveElement("vacation_divbox",0,0,10);	
			}
			if(this.index==1){
				moveElement("vacation_divbox",-1349,0,10)	
			}
			if(this.index==2){
				moveElement("vacation_divbox",-2698,0,10)	
			}
			if(this.index==3){
				moveElement("vacation_divbox",-4047,0,10)	
			}
			if(this.index==4){
				moveElement("vacation_divbox",-5396,0,10)	
			}
			
			return false;
		}	
		
	}
}
function moveElement(elementID,finalX,finalY,interval){
	var img=document.getElementById(elementID);
	var xpos=parseInt(img.style.left);
	var ypos=parseInt(img.style.top);
	if((xpos==finalX)&&(ypos==finalY)){return false;}
	if(img.init){clearTimeout(img.init);}
	if(xpos<finalX){var dist=Math.ceil((finalX-xpos)/10); xpos+=dist;}
	if(xpos>finalX){var dist=Math.ceil((xpos-finalX)/10); xpos-=dist;}
	if(ypos<finalY){var dist=Math.ceil((finalY-ypos)/10); ypos+=dist;}
	if(ypos>finalY){var dist=Math.ceil((ypos-finalY)/10); ypos-=dist;}
	img.style.left=xpos+"px";
	img.style.top=ypos+"px";
	var repeat="moveElement('"+elementID+"',"+finalX+","+finalY+","+interval+")"
	
	img.init=setTimeout(repeat,interval);
}
var angel=0;

function rotateobject(index){
	var oNeedrotates=document.getElementsByClassName("needrotate");
	var oInter_shake=document.getElementById("inter_shake");
	var oShake_divs=oInter_shake.getElementsByTagName("div");
	oNeedrotates[index].style.webkitTransform="rotate("+angel+"deg)";
	oNeedrotates[index].style.transform="rotate("+angel+"deg)";
	if(angel<20){
		angel=20
	}else if(angel=20){
		angel=-20;
	}	
}	
function shakeobject(){
	var oNeedrotates=document.getElementsByClassName("needrotate");
	var oInter_shake=document.getElementById("inter_shake");
	var oShake_divs=oInter_shake.getElementsByTagName("div");
	  for(var i=0;i<oShake_divs.length;i++){
			oShake_divs[i].index=i;
		oShake_divs[i].onmouseover=function asd(){
		    timer=setInterval("rotateobject("+this.index+")",100);
		}
		
		oShake_divs[i].onmouseout=function(){
			clearInterval(timer);
		    for(var i=0;i<oNeedrotates.length;i++){
				oNeedrotates[i].style.transform="rotate(0deg)";
		        oNeedrotates[i].style.webkitTransform="rotate(0deg)";
			}
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

$(function() {
		$( "#checkindate" ).datepicker();
		$( "#checkoutdate" ).datepicker();
	});  
  
  
