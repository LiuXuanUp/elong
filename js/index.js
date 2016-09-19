// JavaScript Document
addLoadEvent(setNav);
addLoadEvent(fun);
addLoadEvent(fun1);
addLoadEvent(fun2);
addLoadEvent(guonei);
addLoadEvent(guonei2);
addLoadEvent(guonei3);
addLoadEvent(guonei4);
addLoadEvent(raiders);
addLoadEvent(banner_fuxuan);
addLoadEvent(fun3);
addLoadEvent(fun4);
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



function setNav(){
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


var num = -1;
var int = setInterval(fun,5000);
function fun(){
	var banner_firstul = document.getElementById("banner_firstul");
	var links = banner_firstul.getElementsByTagName("li");
	var banner_secondul = document.getElementById("banner_secondul");
	var list = banner_secondul.getElementsByTagName("li");
	if(num == links.length-1){
		num = 0;
	}else{
		num ++;
	}
	for(var i = 0; i < links.length; i++){
		if(i == num){
			links[i].style.display = "block";
			list[i].style.background = "#F90";
		}else{
			links[i].style.display = "none";
			list[i].style.background = "";	
		}
	}	
	
}

function fun1(){
	var banner_firstul = document.getElementById("banner_firstul");
	var links = banner_firstul.getElementsByTagName("li");
	var banner_secondul = document.getElementById("banner_secondul");
	var list = banner_secondul.getElementsByTagName("li");
	for(var i = 0; i < list.length; i++){
		clearInterval(int);
		list[i].dj = i;
		list[i].onclick = function(){
			for(var i = 0; i < list.length; i++){
				if(i == this.dj){
					links[i].style.display = "block";
					num = this.dj;
					list[i].style.background = "#F90";
				}else{
					links[i].style.display = "none";
					list[i].style.background = "";	
				}	
			}		
		}	
	}
	int = setInterval(fun,5000);
}


function fun2(){
	var links = [
	"../image/20150422_ifold1.jpg",
	"../image/20150120_ifold2.jpg",
	"../image/20150120_ifold3.jpg",
	"../image/20150120_ifold4.jpg",
	"../image/20150120_ifold5.jpg",
	"../image/20150120_ifold6.jpg",
	"../image/20150120_ifold7.jpg"
	];
	var section_ul = document.getElementById("section_ul");
	var list = section_ul.getElementsByTagName("li");
	for(var i = 0; i < list.length; i++){
		list[i].dj = i;
		list[i].onmouseover = function (){
			for(var i = 0; i < list.length; i++){
				if( i == this.dj){
					list[i].firstChild.style.width = "400px";
					list[i].firstChild.style.background = links[i];
					list[i].firstChild.style.backgroundPosition = "0px 0px";
					list[i].firstChild.style.transition = "all .5s";
				}else{
					list[i].firstChild.style.width = "133px";
					list[i].firstChild.style.background = links[i];
					list[i].firstChild.style.backgroundPosition = "-133px 0px";
					list[i].firstChild.style.transition = "all .5s";	
				}
			}		
		}
		list[i].onmouseout = function (){
			for(var i = 0; i < list.length; i++){
				list[i].firstChild.style.width = "171px";
				list[i].firstChild.style.background = links[i];
				list[i].firstChild.style.backgroundPosition = "-114px 0px";
				list[i].firstChild.style.transition = "all .5s";
			}	
		}
	}	
}


function guonei(){
	var article_div_ul = document.getElementById("article_div_ul");
	var article_seconddiv = document.getElementById("article_seconddiv");
	var list = article_div_ul.getElementsByTagName("li");
	var list2 = article_seconddiv.getElementsByTagName("ul");
	list[1].style.background = "#f66";
	list[1].style.color = "#fff";
	for(var i = 1; i < list.length; i++){
		list[i].dj = i;
		list[i].onclick = function(){
			for(var i = 1; i < list.length; i++){
				if(i == this.dj){
					list2[i-1].style.display = "block";
					list[i].style.background = "#f66";
					list[i].style.color = "#fff";
				}else{
					list2[i-1].style.display = "none";
					list[i].style.background = "";
					list[i].style.color = "";	
				}
			}	
		}	
	}	
}


function guonei2(){
	var article_div_ul2 = document.getElementById("article_div_ul2");
	var article_seconddiv2 = document.getElementById("article_seconddiv2");
	var list = article_div_ul2.getElementsByTagName("li");
	var list2 = article_seconddiv2.getElementsByTagName("ul");
	list[1].style.background = "#f66";
	list[1].style.color = "#fff";
	for(var i = 1; i < list.length; i++){
		list[i].dj = i;
		list[i].onclick = function(){
			for(var i = 1; i < list.length; i++){
				if(i == this.dj){
					list2[i-1].style.display = "block";
					list[i].style.background = "#f66";
					list[i].style.color = "#fff";
				}else{
					list2[i-1].style.display = "none";
					list[i].style.background = "";
					list[i].style.color = "";	
				}
			}	
		}	
	}	
}

function guonei3(){
	var discount_firstul = document.getElementById("discount_firstul");
	var discount_seconddiv = document.getElementById("discount_seconddiv");
	var list = discount_firstul.getElementsByTagName("li");
	var list2 = discount_seconddiv.getElementsByTagName("ul");
	list[1].style.background = "#49f";
	list[1].style.color = "#fff";
	for(var i = 1; i < list.length; i++){
		list[i].dj = i;
		list[i].onclick = function(){
			for(var i = 1; i < list.length; i++){
				if(i == this.dj){
					list2[i-1].style.display = "block";
					list[i].style.background = "#49f";
					list[i].style.color = "#fff";
				}else{
					list2[i-1].style.display = "none";
					list[i].style.background = "";
					list[i].style.color = "";	
				}
			}	
		}	
	}	
}


function guonei4(){
	var discount_secondul = document.getElementById("discount_secondul");
	var discount_seconddiv2 = document.getElementById("discount_seconddiv2");
	var list = discount_secondul.getElementsByTagName("li");
	var list2 = discount_seconddiv2.getElementsByTagName("ul");
	list[1].style.background = "#49f";
	list[1].style.color = "#fff";
	for(var i = 1; i < list.length; i++){
		list[i].dj = i;
		list[i].onclick = function(){
			for(var i = 1; i < list.length; i++){
				if(i == this.dj){
					list2[i-1].style.display = "block";
					list[i].style.background = "#49f";
					list[i].style.color = "#fff";
				}else{
					list2[i-1].style.display = "none";
					list[i].style.background = "";
					list[i].style.color = "";	
				}
			}	
		}	
	}	
}

function raiders(){
	var links = ["image/wIYBAFXajXiAIIotAABiLQFeX2Q941.jpg","image/v4YBAFW_Nu2ATQwMAABjz2zhBgM672.jpg","image/wIYBAFW_Nu2AHwzVAABc7gEi7kk326.jpg","image/v4YBAFW_Nu2APiUhAABPBQlJhu0803.jpg"];
	var raiders_ul = document.getElementById("raiders_leftdiv_ul");
	var list = raiders_ul.getElementsByTagName("li");
	var img = document.getElementById("raiders_img");
	list[0].style.background = "#89CA00";
	list[0].firstChild.style.color = "#fff";
	list[0].lastChild.style.display = "block";
	img.setAttribute("src",links[0]);	
	for(var i = 0; i < list.length; i++){
		list[i].dj = i;
		list[i].onmouseover = function(){
			for(var i = 0; i < list.length; i++){
				if(i == this.dj){
					list[i].style.background = "#89CA00";
					list[i].firstChild.style.color = "#fff";
					list[i].lastChild.style.display = "block";
					img.setAttribute("src",links[this.dj]);	
				}else{
					list[i].style.background = "";
					list[i].firstChild.style.color = "";
					list[i].lastChild.style.display = "none";	
				}
			}
		}
	}	
}


function banner_fuxuan(){
	var banner_leftul = document.getElementById("banner_leftul");
	var list = banner_leftul.getElementsByTagName("li");
	var banner_rightdiv0 = document.getElementById("banner_rightdiv1");
	var banner_rightdiv1 = document.getElementById("banner_rightdiv2");
	var banner_rightdiv2 = document.getElementById("banner_rightdiv3");
	var banner_rightdiv3 = document.getElementById("banner_rightdiv4");
	list[0].style.background = "#fff";
	list[0].onclick = function(){
		for(var i = 0; i < list.length; i++){
			list[i].style.background = "";
		}
		this.style.background = "#fff";
		banner_rightdiv0.style.display = "block";
		banner_rightdiv1.style.display = "none";
		banner_rightdiv2.style.display = "none";
		banner_rightdiv3.style.display = "none";
	}
	list[1].onclick = function(){
		for(var i = 0; i < list.length; i++){
			list[i].style.background = "";
		}
		this.style.background = "#fff";
		banner_rightdiv0.style.display = "none";
		banner_rightdiv1.style.display = "block";
		banner_rightdiv2.style.display = "none";
		banner_rightdiv3.style.display = "none";
	}
	list[2].onclick = function(){
		for(var i = 0; i < list.length; i++){
			list[i].style.background = "";
		}
		this.style.background = "#fff";
		banner_rightdiv0.style.display = "none";
		banner_rightdiv1.style.display = "none";
		banner_rightdiv2.style.display = "block";
		banner_rightdiv3.style.display = "none";
	}
	list[3].onclick = function(){
		for(var i = 0; i < list.length; i++){
			list[i].style.background = "";
		}
		this.style.background = "#fff";
		banner_rightdiv0.style.display = "none";
		banner_rightdiv1.style.display = "none";
		banner_rightdiv2.style.display = "none";
		banner_rightdiv3.style.display = "block";
	}
}

function fun3(){
	var banner_rightul1 = document.getElementById("banner_rightul1");
	var list = banner_rightul1.getElementsByTagName("li");
	var banner_div1 = document.getElementById("banner_div1");
	var banner_div2 = document.getElementById("banner_div2");
	list[0].onclick = function(){
		banner_div1.style.display = "block";
		banner_div2.style.display = "none";
	}
	list[1].onclick = function(){
		banner_div2.style.display = "block";
		banner_div1.style.display = "none";
	}
}



function fun4(){
	var banner_rightul2 = document.getElementById("banner_rightul2");
	var list = banner_rightul2.getElementsByTagName("li");
	var banner_div3 = document.getElementById("banner_div3");
	var banner_div4 = document.getElementById("banner_div4");
	list[0].onclick = function(){
		banner_div3.style.display = "block";
		banner_div4.style.display = "none";
	}
	list[1].onclick = function(){
		banner_div4.style.display = "block";
		banner_div3.style.display = "none";
	}
}












