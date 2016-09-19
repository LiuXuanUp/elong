// JavaScript Document
/*addLoadEvent(positionElement);*/
addLoadEvent(flashsalecsstab);
addLoadEvent(pusharrcsstab);
addLoadEvent(headfunc);
addLoadEvent(dateday);
addLoadEvent(loginshow);
/*addLoadEvent(flashsalecsstab2);*/
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
function insertAfter(newElement,targetElement){
   var parent=targetElement.parentNode;
   if(targetElement==parent.lastChild){
       parent.appendChild(newElement);
   }else{
       parent.insertBefore(newElement,targetElement.nextSibling);
   }
}
function addClass(targetElement,newClass){
  if(targetElement.className){
     targetElement.className=targetElement.className+" "+newClass;
    }else{
     targetElement.className=newClass;
    }
}
function flashsalecsstab(){
	var aclick=document.getElementById("flashsale-article1-close");
	var bigwhite=document.getElementById("flashsale-article1-palceblock");
	aclick.onclick=function(){
	bigwhite.style.display='none';	
    return false;
	}
    var oul=document.getElementById("flashsale-article1-palceblock-palceindex");
	var links=oul.getElementsByTagName("a");
	var content=document.getElementById("flashsale-divcontent1");
	var oDiv=document.getElementsByClassName("flashsale-divcontentdiv");
	var oLinks=content.getElementsByTagName("a");
	var oInput=document.getElementById("flashsale-article1-palce");
	var oEvent=null;
	var binglook=document.getElementById("flashsale-article1-palceblock");
	oInput.onclick=function(ev){
		oEvent=ev||event;
		binglook.style.display='block';
		binglook.style.position='absolute';
		binglook.style.top='185px';
		oEvent.stopPropagation();
	}
	
	/*document.onclick=function()
	{
		binglook.style.display='none';
	}*/
	for(var z=0;z<oLinks.length;z++){
		
		oLinks[z].onclick=function(){
			oInput.value=this.innerHTML;
			binglook.style.display='none';	
			return false;
		}
	}
	for(var i=0;i<links.length;i++){
		links[i].ljid=i;//给链接自定义一个属性，把i值存放进去
		links[i].onclick=function(){
			showtab(this.ljid);
			return false;
			}
	}
	function showtab(lj){
			for(var j=0;j<oDiv.length;j++){
				
				if(lj==j){
				    oDiv[j].style.display="block";
					links[j].style.color="#000";
					addClass(links[j],'borders');
					
				}else{
					
					oDiv[j].style.display="none";
					links[j].style.color="rgb(0,32,111)";
					links[j].className='';
					}
				}
	}
}
function pusharrcsstab(){
	var binglook=document.getElementById("flashsale-article1-palceblock");
	var blockdiv=document.getElementById("flashsale-section1-block");
	var aLinks=blockdiv.getElementsByTagName("a");
	var bigbigdiv=document.getElementById("flashsale-section1-div3");
	var oDiv=bigbigdiv.getElementsByClassName("flashblock");
	for(var i=0;i<aLinks.length;i++){
		aLinks[0].style.background="rgb(170,130,101)";
		aLinks[0].style.color="rgb(77,37,7)";
		aLinks[i].ljid=i;//给链接自定义一个属性，把i值存放进去
		aLinks[i].onclick=function(){
			binglook.style.display='none';
			showtab(this.ljid);
			return false;
			}
		}
		function showtab(lj){
			for(var j=0;j<oDiv.length;j++){
				if(lj==j){
				    oDiv[j].style.display="block";
					aLinks[j].style.background="#f00";
					aLinks[j].style.background="rgb(170,130,101)";
					aLinks[j].style.color="rgb(77,37,7)";
				}else{
					oDiv[j].style.display="none";
					aLinks[j].style.background="none";
					aLinks[j].style.color="#fff";
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
/*function flashsalecsstab2(){
	var lookmore=document.getElementById("flashsale-section1-div2-a1");
	var binglook=document.getElementById("flashsale-article1-palceblock");
	lookmore.onclick=function(){
		binglook.style.display='block';
		binglook.style.position='absolute';
		binglook.style.top='1020px';
		return false;
	}
}*/
function dateday(){
	var now=new Date();
	var year=now.getFullYear();
	var month=now.getMonth()+1;
	var date=now.getDate();
	var date2=now.getDate()+3;
	var day=document.getElementById("flashsale-article1-date1");
	var day2=document.getElementById("flashsale-article1-date2");
	day.value=year+"-"+month+"-"+date;
	day2.value=year+"-"+month+"-"+date2;
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

