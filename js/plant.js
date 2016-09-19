// JavaScript Document

$(document).ready(function(e) {
function addclass()
	{
		for(i=0;i<$("#main_pic div").length;i++)
		{
			if($("#main_pic div").eq(i).attr("class")=="activebehind")
			{
				$("#main_pic div").eq(i).removeClass("activebehind");
				
			}
			if($("#main_pic div").eq(i).attr("class")=="active")
			{
				$("#main_pic div").eq(i).removeClass("active")
				.addClass("activebehind");
			}
		}		
	}
timer=setInterval(abc,3000);
var num=0;
function abc()
{
	if(num==8)
	{
		num=0;
		$("#main_ctrl a").removeClass("hover").eq(0).addClass("hover");
		$("#main_pic div").removeClass("active").eq(0).addClass("active");
	}
	else
	{
		for(i=0;i<$("#main_pic div").length;i++)
		{
			if($("#main_pic div").eq(i).attr("class")=="active")
			{
				num=i;
			}
		}
		if($("#main_pic div").eq(num).attr("class")=="active")
		{
			$("#main_ctrl a").removeClass("hover").eq(num+1).addClass("hover");
			$("#main_pic div").removeClass("active").eq(num+1).addClass("active");
			$("#main_pic div").removeClass("activebehind").eq(num).addClass("activebehind");
		}
	}
	num++;
}
$("#main_ctrl a").click(function(){
	    num=$(this).index();
		addclass();
		$("#main_pic div").eq(num).addClass("active")
		.siblings().removeClass("active");
		$(this).addClass("hover")
		.siblings().removeClass("hover");
	return false;
	})
 $(".menu li").eq(0).click(function(){
	$(this).addClass("ahover").siblings().removeClass("bhover");
	$(".box div").eq(0).css("display","block").siblings().css("display","none");
	});
 $(".menu li").eq(1).click(function(){
	$(this).addClass("bhover").siblings().removeClass("ahover");
	$(".box div").eq(1).css("display","block").siblings().css("display","none");
	});	
//判断往返还是单程返回日期变灰色


setInterval(function(){
	if($(".menu li").eq(0).attr("class")=="ahover")
	{$(".flight_type :radio[name=type]").eq(1).attr("checked",false);
		$(".flight_type :radio[name=type]").eq(0).attr("checked",'10');
	}
	else
	{$(".flight_type :radio[name=type]").eq(0).attr("checked",false);
		$(".flight_type :radio[name=type]").eq(1).attr("checked",'10');
	}
					if($(".flight_type :radio:checked").attr("id")=="single")
					{
						$(".flight_infor li label").eq(3).addClass("gery");
					}
					else
					{
						$(".flight_infor li label").eq(3).removeClass("gery");
					}
			},1000);
//下拉更多搜索
	var on=true;
$(".highsearch").click(function(){
	if(on)
	{
		
		$(".highsearch span b").addClass("hover");
		$("#flevel").css("display","block");
		on=false;
	}
	else
	{ 
		$(".highsearch span b").removeClass("hover");
		$("#flevel").css("display","none");
		on=true;
	}
	
	});
//打开经济舱ul
$(".droplist").click(function(){
	$(".droplist ul").css("display","block");
	$(".droplist ul li").click(function(){
		$g=$(this).html();
		$(".droplist span").html($g);
		});
	});
//热门城市插入
var arrhotcity=["北京","上海","广州","深圳","杭州","成都","南京","武汉","重庆","三亚","大连","青岛"];
for(i=0;i<arrhotcity.length;i++)
{
	$("<span></span>").appendTo($(".hotcity"));
	$(".hotcity span").eq(i).html(arrhotcity[i]);
	$(".hotcity span").eq(0).addClass("active");
	
}
//点击改变热门城市便宜机票
$(".hotcity span").click(function(){
		judge($(this).index());
		$(this).addClass("active").siblings().removeClass("active");
		
		});
function judge(index)
{
	switch(index)
	{
		case 0:beijing();break;
		case 1:shanghai();break;
		case 2:alert(2);break;
		case 3:alert(3);break;
		case 4:alert(4);break;
				
		
		
	}
	
}
//北京到各地的便宜机票
var dateB=[{date:"9.7",end:"青岛",price:190,dtc:"(1.4折)"},
{date:"9.12",end:"合肥",price:310,dtc:"(1.7折)"},
{date:"9.9",end:"常州",price:300,dtc:"(1.8折)"},
{date:"9.12",end:"太原",price:200,dtc:"(1.8折)"},
{date:"10.4",end:"南京",price:350,dtc:"(1.9折)"},
{date:"9.6",end:"杭州",price:400,dtc:"(2折)"},
{date:"9.30",end:"大连",price:139,dtc:"(2折)"},
{date:"9.5",end:"宜昌",price:330,dtc:"(2.3折)"},
{date:"9.7",end:"青岛",price:190,dtc:"(1.4折)"},
{date:"9.12",end:"合肥",price:310,dtc:"(1.7折)"},
{date:"9.9",end:"常州",price:300,dtc:"(1.8折)"},
{date:"9.12",end:"太原",price:200,dtc:"(1.8折)"},
{date:"10.4",end:"南京",price:350,dtc:"(1.9折)"},
{date:"9.6",end:"杭州",price:400,dtc:"(2折)"},
{date:"9.30",end:"大连",price:139,dtc:"(2折)"}
];
function beijing()
{$(".fcity_list ul").empty();
	for(i=0;i<dateB.length;i++)
	{
		$("<li><p class='f_name'><span class='f_begin'>北京</span>"+"<span class='date'>"+dateB[i].date+"</span>"+
	"<span class='f_end'>"+dateB[i].end+"</span></p><p class='f_price'><span class='sign'>￥</span>"+"<span class='num'>"+dateB[i].price+"</span>"+
	"<span class='dct'>"+dateB[i].dtc+"</span></p></li>")
		.appendTo($(".fcity_list ul"));
	}
}
beijing();
//上海到各地的便宜机票
var dateS=[{date:"9.6",end:"南京",price:150,dtc:"(1.4折)"},
{date:"9.8",end:"天津",price:280,dtc:"(1.7折)"},
{date:"9.21",end:"武汉",price:250,dtc:"(1.8折)"},
{date:"9.12",end:"贵阳",price:240,dtc:"(1.8折)"},
{date:"9.8",end:"昆明",price:300,dtc:"(1.9折)"},
{date:"9.9",end:"温州",price:400,dtc:"(1.7折)"},
{date:"9.8",end:"三亚",price:300,dtc:"(1.8折)"},
{date:"9.8",end:"福州",price:400,dtc:"(2.9折)"},
{date:"9.15",end:"阜阳",price:160,dtc:"(1.9折)"},
{date:"9.19",end:"南昌",price:140,dtc:"(1.9折)"},
{date:"9.20",end:"银川",price:150,dtc:"(1.9折)"},
{date:"9.10",end:"深圳",price:360,dtc:"(1.9折)"},
{date:"9.12",end:"西安",price:280,dtc:"(2折)"},
{date:"9.8",end:"海口",price:280,dtc:"(2折)"},
{date:"9.8",end:"大连",price:350,dtc:"(2折)"}
];
function shanghai()
{
	$(".fcity_list ul").empty();
	for(i=0;i<dateS.length;i++)
	{
		
		$("<li><p class='f_name'><span class='f_begin'>上海</span>"+"<span class='date'>"+dateS[i].date+"</span>"+
	"<span class='f_end'>"+dateS[i].end+"</span></p><p class='f_price'><span class='sign'>￥</span>"+"<span class='num'>"+dateS[i].price+"</span>"+
	"<span class='dct'>"+dateS[i].dtc+"</span></p></li>")
		.appendTo($(".fcity_list ul"));
	}
}
//添加机场的图标
var icon=[{name:"中国国航",position:"-232px -58px"},
{name:"南方航空",position:"-145px -87px"},
{name:"东方航空",position:"-145px -261px;"},
{name:"吉祥航空",position:"-116px -145px"},
{name:"海南航空",position:"-174px -145px"},
{name:"四川航空",position:"-29px 0px"},
{name:"祥鹏航空",position:"-87px 0px"},
{name:"奥凯航空",position:"-174px -58px"},
{name:"成都航空",position:"-59px -116px"},
{name:"上海航空",position:" -145px -116px"},
];
for(i in icon)
{
	$("<li><span class='air_icon'></span><span class='air_name'>"+icon[i].name+"</span></li>")
	.appendTo($(".div1 ul").eq(0));
	$(".div1 ul li .air_icon").eq(i).css("background-position",icon[i].position);
}
var icon2=[{name:"天津航空",position:"-145px -203px"},
{name:"首都航空",position:"-87px -174px"},
{name:"幸福航空",position:"-175px -203px"},
{name:"中国联航",position:"-87px -203px"},
{name:"昆明航空",position:"0px -435px"},
{name:"厦门航空",position:"0px -261px"},
{name:"河北航空",position:"-203px -261px"},
{name:"西部航空",position:"-87px -174px"},
{name:"西藏航空",position:"-206px -203px"},
{name:"深圳航空",position:"-261px -406px"},
];
for(i in icon)
{
	$("<li><span class='air_icon'></span><span class='air_name'>"+icon2[i].name+"</span></li>")
	.appendTo($(".div2 ul"));
	$(".div2 ul li .air_icon").eq(i).css("background-position",icon2[i].position);
}
//添加机场航班信息
var airinforbg=[
{start:"北京",end:"广州",date:"09-07",dis:"3.9",price:"760"},
{start:"广州",end:"北京",date:"09-07",dis:"5.6",price:"1110"},
{start:"北京",end:"广州",date:"09-08",dis:"3.5",price:"670"},
{start:"广州",end:"北京",date:"09-08",dis:"3.4",price:"643"},
{start:"北京",end:"广州",date:"09-09",dis:"5",price:"960"},
{start:"广州",end:"北京",date:"09-09",dis:"4.2",price:"830"},
];
var airinforbw=[
{start:"北京",end:"乌鲁木齐",date:"09-07",dis:"3.9",price:"760"},
{start:"乌鲁木齐",end:"北京",date:"09-07",dis:"5.6",price:"1110"},
{start:"北京",end:"乌鲁木齐",date:"09-08",dis:"3.5",price:"670"},
{start:"乌鲁木齐",end:"北京",date:"09-08",dis:"3.4",price:"643"},
{start:"北京",end:"乌鲁木齐",date:"09-09",dis:"5",price:"960"},
{start:"乌鲁木齐",end:"北京",date:"09-09",dis:"4.2",price:"830"},
];
for(i in airinforbg)
{
	$("<li><a href=''><span class='city'>"+airinforbg[i].start+"<i></i>"+airinforbg[i].end+"</span><span class='date'>"+airinforbg[i].date+"</span><span class='dis'>"+airinforbg[i].dis+"折</span><span class='pri'>￥<b>"+airinforbg[i].price+"</b></span></a></li>")
	.appendTo($(".city_list"));
}
//滑动改变航班信息
$(".div1 ul li").eq(1).mouseover(function(){
	$(".city_list").empty();
	for(i in airinforbw)
  {
	  $("<li><a href=''><span class='city'>"+airinforbw[i].start+"<i></i>"+airinforbw[i].end+"</span><span class='date'>"+airinforbw[i].date+"</span><span class='dis'>"+airinforbw[i].dis+"折</span><span class='pri'>￥<b>"+airinforbw[i].price+"</b></span></a></li>")
	.appendTo($(".city_list"));
  }
	
	});
$(".div1 ul li").eq(0).mouseover(function(){
	$(".city_list").empty();
	for(i in airinforbg)
{
	$("<li><a href=''><span class='city'>"+airinforbg[i].start+"<i></i>"+airinforbg[i].end+"</span><span class='date'>"+airinforbg[i].date+"</span><span class='dis'>"+airinforbg[i].dis+"折</span><span class='pri'>￥<b>"+airinforbg[i].price+"</b></span></a></li>")
	.appendTo($(".city_list"));
}});


//左右滑动按钮
$("#next").click(function(){
		$(".div1").css("left","-100%");
		$(".div2").css("left","35px");
		return false;
	});
$("#prov").click(function(){
		$(".div2").css("left","-100%");
		$(".div1").css("left","35px");
		return false;
	});	








});