// JavaScript Document




window.onload=csstab;
var dian=document.getElementById("city");
var ying=document.getElementById("popUpDiv");
dian.onclick=show;
function show(){
	ying.style.display="block";







}
function csstab(){
	var nav=document.getElementById("popUpDiv");
	var links=nav.getElementsByTagName("a");
	for(var i=0; i<links.length; i++){
		var nrid=links[i].getAttribute("href").split("#")[1];
		var nrid0=links[0].getAttribute("href").split("#")[1];
		document.getElementById(nrid).style.display="none";
		document.getElementById(nrid0).style.display="block";
		links[i].destination=nrid;
		links[i].onclick=function(){
			showtab(this.destination);
			return false;
		}
	}
}
function showtab(id){
	var nav=document.getElementById("popUpDiv");
	var div=nav.getElementsByTagName("div");
	for(var i=0; i<div.length; i++){
		if(div[i].getAttribute("id")==id){
			div[i].style.display="block";
		}else{
			div[i].style.display="none";
		}
	}
}