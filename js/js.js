// JavaScript Document
//用json来存放汽车票的数据
var carticket=[
{begin:"北京",end:"石家庄",price:120},
{begin:"北京",end:"上海",price:20},
{begin:"上海",end:"北京",price:40},
{begin:"天津",end:"上海",price:10},
{begin:"武汉",end:"石家庄",price:120},
{begin:"杭州",end:"石家庄",price:140},
{begin:"南昌",end:"石家庄",price:160},
{begin:"鞍山",end:"石家庄",price:170},
{begin:"武昌",end:"石家庄",price:124},
{begin:"九江",end:"石家庄",price:122}
];

$(document).ready(function(e) {
//出发框的响应
   $("#begin").focus(function(){
		$(".floatbox1").css("display","none");
		$(".floatbox").css("display","block");
		if($(this).val()==this.defaultValue)
		{
			$(this).val("");
		}
		else
		{
			$(this).val("");
		}
	}).blur(function(){
			if($(this).val()=="")
			{
				$(this).val(this.defaultValue);
			}
			else
			{
				$(".floatbox").css("display","none");
			}
		});
//出发框值的判断
function abc(){
	if($("#begin").val()!=""&&$("#begin").val()!="中文/拼音/首字母")
	{
		$val=$("#begin").val();
		$valon=true;
		for(var i=0;i<$("#allcity a").length;i++)
		{
			if($val==$("#allcity a").eq(i).html())
			{
				$valon=false;
			}
			
		}
		if($valon)
		{
		 	$(".floatbox").css("display","none");
			for(var j=0;j<$("#allcity a").length;j++)
			{
				var $city=$("#allcity a").eq(j).html();
			    var $title=$("#allcity a").eq(j).attr("title");
				var $pcity=$("#allcity a").eq(j).parent().siblings().html();
				if($val==$title.substr(0,1))
				{
				
					$(".floatbox_hide2").css("display","block");
					$("<li><i></i><span>"+$city+","+$pcity+"</span></li>").appendTo($(".floatbox_hide2 ul"));
					clearInterval(timer);
					
				}
				if($val==$title.substr(0,2))
				{
					$(".floatbox_hide2").css("display","block");
					$("<li><i></i><span>"+$city+","+$pcity+"</span></li>").appendTo($(".floatbox_hide2 ul"));
					clearInterval(timer);
				}
				if($val==$title.substr(0,3))
				{
					$(".floatbox_hide2").css("display","block");
					$("<li><i></i><span>"+$city+","+$pcity+"</span></li>").appendTo($(".floatbox_hide2 ul"));
					clearInterval(timer);
				}
				else
				{$(".floatbox_hide").css("display","block");
					}	
				//floatbox_hide2点击响应
	  $(".floatbox_hide2 ul li span").click(function(){
		  $(".floatbox_hide2").css("display","none");
		 $(".floatbox_hide").css("display","none");
	  });	
				
			}
		}
		else
		{
			$(".floatbox_hide").css("display","none");
		}
		
		
	}
	else{$(".floatbox_hide").css("display","none");}
}
timer=setInterval(abc,1000);


//到达框的响应
$("#end").focus(function(){
		$(".floatbox").css("display","none");
		$(".floatbox1").css("display","block");
		if($(this).val()==this.defaultValue)
		{
			$(this).val("");
		}
		else
		{
			$(this).val("");
		}
	}).blur(function(){
			if($(this).val()=="")
			{
				$(this).val(this.defaultValue);
			}
			else
			{
				$(".floatbox1").css("display","none");
			}
		});	
//选项卡菜单效果		
var $div_li =$("div.tab_menu ul li");
	$div_li.click(function(){
		$(this).addClass("selected")            //当前<li>元素高亮
			.siblings().removeClass("selected");  //去掉其它同辈<li>元素的高亮
        var index =$div_li.index(this);  // 获取当前点击的<li>元素 在 全部li元素中的索引。
		$("div.tab_box > div")   	//选取子节点。不选取子节点的话，会引起错误。如果里面还有div 
			.eq(index).show()   //显示 <li>元素对应的<div>元素
			.siblings().hide(); //隐藏其它几个同辈的<div>元素
		}).hover(function(){
			$(this).addClass("hover");
		},function(){
			$(this).removeClass("hover");
	});	
	var $div1_li=$(".tab1_menu ul li");
	$div1_li.click(function(){
		$(".tab1_box").css("height","250px");
			$(this).addClass("selected")
				.siblings().removeClass("selected");
			var index=$div1_li.index(this);
			$(".tab1_box >div")
			     .eq(index).show()
				 .siblings().hide();
		}).hover(function(){$(this).addClass("hover");},function(){$(this).removeClass("hover");});	
//第一个选项卡盒子
$(".tab_box a").click(function(){
			var $a_html=$(this).html();
			$("#begin").val($a_html);
			if($("#begin").val()!="")
			{
				$(".floatbox").css("display","none");
			}
		});
	$(".tab1_box a").click(function(){
			var $a_html=$(this).html();
			$("#end").val($a_html);
			if($("#end").val()!="")
			{
				$(".floatbox1").css("display","none");
			}
		});
//给div2添加内容，事件，函数等
function adddiv2()
	{
			$("#div2").empty();
			$(".tab_box").css("height","250px");
			for( var j=0;j<$(".tab_box span").length;j++)
			{
				$("<a></a>").appendTo($(".tab_box #div2"));
				var $province=$(".tab_box span").eq(j).html();
	 		    $(".tab_box #div2 a").eq(j).html($province);
			   	$(".tab_box #div2 a").click(function(){
				for(var i=0;i<$("#allcity span").length;i++)
				{
					if($(this).html()==$("#allcity span").eq(i).html())
					{
						$result=$("#allcity ul").eq(i).html();
						$("#div2").empty();$("<ul></ul>").appendTo($("#div2"));
						$("<sup><sup>").appendTo($("#div2 ul"));
						$($result).appendTo($("#div2 ul"));
						$h=$("#div2 ul").height()+20;
						$(".tab_box").css("height",$h+"px");
						$("#div2 ul sup").click(function(){
							adddiv2();
						});
						$("#div2 a").click(function(){
							$("#begin").val($(this).html());
							if($("#begin").val()!=="")
							{
								$(".floatbox").css("display","none");
							}
							return false;
							});
					
					}
					
				}
				});
			};
	}
	adddiv2();
//按拼音排
function spell()
{
	for(var i=0;i<$("#allcity a").length;i++)
	{
		$href=$("#allcity a").eq(i).attr("href");
	if($href=="a"){$city=$("#allcity a").eq(i).clone();$($city).appendTo($(".indexa li"));}
	if($href=="b"){$city=$("#allcity a").eq(i).clone();$($city).appendTo($(".indexb li"));}
    if($href=="c"){$city=$("#allcity a").eq(i).clone();$($city).appendTo($(".indexc li"));}
    if($href=="d"){$city=$("#allcity a").eq(i).clone();$($city).appendTo($(".indexd li"));}
	if($href=="e"){$city=$("#allcity a").eq(i).clone();$($city).appendTo($(".indexe li"));}
	if($href=="f"){$city=$("#allcity a").eq(i).clone();$($city).appendTo($(".indexf li"));}
	if($href=="g"){$city=$("#allcity a").eq(i).clone();$($city).appendTo($(".indexg li"));}
	if($href=="h"){$city=$("#allcity a").eq(i).clone();$($city).appendTo($(".indexh li"));}
	if($href=="i"){$city=$("#allcity a").eq(i).clone();$($city).appendTo($(".indexi li"));}
	if($href=="j"){$city=$("#allcity a").eq(i).clone();$($city).appendTo($(".indexj li"));}
	if($href=="k"){$city=$("#allcity a").eq(i).clone();$($city).appendTo($(".indexk li"));}
	if($href=="l"){$city=$("#allcity a").eq(i).clone();$($city).appendTo($(".indexl li"));}
	if($href=="m"){$city=$("#allcity a").eq(i).clone();$($city).appendTo($(".indexm li"));}
	if($href=="n"){$city=$("#allcity a").eq(i).clone();$($city).appendTo($(".indexn li"));}
	if($href=="o"){$city=$("#allcity a").eq(i).clone();$($city).appendTo($(".indexo li"));}
	if($href=="p"){$city=$("#allcity a").eq(i).clone();$($city).appendTo($(".indexp li"));}
	if($href=="q"){$city=$("#allcity a").eq(i).clone();$($city).appendTo($(".indexq li"));}
	if($href=="r"){$city=$("#allcity a").eq(i).clone();$($city).appendTo($(".indexr li"));}
	if($href=="s"){$city=$("#allcity a").eq(i).clone();$($city).appendTo($(".indexs li"));}
	if($href=="t"){$city=$("#allcity a").eq(i).clone();$($city).appendTo($(".indext li"));}
	if($href=="u"){$city=$("#allcity a").eq(i).clone();$($city).appendTo($(".indexu li"));}
	if($href=="v"){$city=$("#allcity a").eq(i).clone();$($city).appendTo($(".indexv li"));}
	if($href=="w"){$city=$("#allcity a").eq(i).clone();$($city).appendTo($(".indexw li"));}
	if($href=="x"){$city=$("#allcity a").eq(i).clone();$($city).appendTo($(".indexx li"));}
	if($href=="y"){$city=$("#allcity a").eq(i).clone();$($city).appendTo($(".indexy li"));}
	if($href=="z"){$city=$("#allcity a").eq(i).clone();$($city).appendTo($(".indexz li"));}
	}
	$(".order a").click(function(){
			$("#begin").val($(this).html());
			if($("#begin").val()!=="")
			{
				$(".floatbox").css("display","none");
			}
			return false;});
//上牌按钮绑定事件
$(".ctrl_order li").click(function(){
		$(this).addClass("hover")
		   .siblings().removeClass("hover");
});
 $(".ctrl_order li").eq(4).click(function(){
		 $(".order ul").hide();
		 $(".indexx").show();
		 $(".indexy").show();
		 $(".indexz").show();	 
	 });
 $(".ctrl_order li").eq(3).click(function(){
		 $(".order ul").hide();
		 $(".indexp").show();
		 $(".indexq").show();
		 $(".indexr").show();
		 $(".indexs").show();
		 $(".indext").show();
		 $(".indexw").show();		 	 
	 });
 $(".ctrl_order li").eq(2).click(function(){
		 $(".order ul").hide();
		 $(".indexk").show();
		 $(".indexl").show();
		 $(".indexm").show();
		 $(".indexn").show();		 	 
	 });	 
 $(".ctrl_order li").eq(1).click(function(){
		 $(".order ul").hide();
		 $(".indexe").show();
		 $(".indexf").show();
		 $(".indexg").show();
		 $(".indexh").show();
		 $(".indexj").show();		 		 	 
	 });	 
 $(".ctrl_order li").eq(0).click(function(){
		 $(".order ul").hide();
		 $(".indexa").show();
		 $(".indexb").show();
		 $(".indexc").show();
		 $(".indexd").show();		 		 	 
	 });	
}
spell();
//tab里面的a都不可以跳转
$("#allcity a").click(function(){return false; });

//第二个选项卡的按省份排
function eadddiv1()
	{
		$(".tab1_box").css("height","250px");
			for( var j=0;j<$(".tab_box span").length;j++)
			{
				var $province=$(".tab_box span").eq(j).clone();
				$($province).appendTo($(".tab1_box #ediv1"));
				
	 		    $(".tab1_box #ediv1 span").click(function(){
					
					for(var i=0;i<$("#allcity span").length;i++)
					{
						if($(this).html()==$("#allcity span").eq(i).html())
						{
							$("#ediv1").empty();
							$result=$("#allcity ul").eq(i).html();
						    $("<ul></ul>").appendTo($("#ediv1"));
						    $("<sup><sup>").appendTo($("#ediv1 ul"));
							$($result).appendTo($("#ediv1 ul"));
						    $h=$("#ediv1 ul").height()+20;
						
						$(".tab1_box").css("height",$h+"px");
						$("#ediv1 ul sup").click(function(){
							$("#ediv1").empty();
							eadddiv1();
						});
						$("#ediv1 a").click(function(){
							$("#end").val($(this).html());
							if($("#end").val()!=="")
							{
								$(".floatbox1").css("display","none");
							}
							return false;
							});
					
					}
				}
				});
			};
	}
	eadddiv1();
//第二个选项卡的按拼音排
function spell_tab1()
{
	
	$(".order a").click(function(){
			$("#end").val($(this).html());
			if($("#end").val()!=="")
			{
				$(".floatbox1").css("display","none");
			}
			return false;});
//上牌按钮绑定事件
$(".ctrl_order li").click(function(){
		$(this).addClass("hover")
		   .siblings().removeClass("hover");
});
 $(".ctrl_order li").eq(9).click(function(){
		 $(".order ul").hide();
		 $(".indexx").show();
		 $(".indexy").show();
		 $(".indexz").show();	 
	 });
 $(".ctrl_order li").eq(8).click(function(){
		 $(".order ul").hide();
		 $(".indexp").show();
		 $(".indexq").show();
		 $(".indexr").show();
		 $(".indexs").show();
		 $(".indext").show();
		 $(".indexw").show();		 	 
	 });
 $(".ctrl_order li").eq(7).click(function(){
		 $(".order ul").hide();
		 $(".indexk").show();
		 $(".indexl").show();
		 $(".indexm").show();
		 $(".indexn").show();		 	 
	 });	 
 $(".ctrl_order li").eq(6).click(function(){
		 $(".order ul").hide();
		 $(".indexe").show();
		 $(".indexf").show();
		 $(".indexg").show();
		 $(".indexh").show();
		 $(".indexj").show();		 		 	 
	 });	 
 $(".ctrl_order li").eq(5).click(function(){
		 $(".order ul").hide();
		 $(".indexa").show();
		 $(".indexb").show();
		 $(".indexc").show();
		 $(".indexd").show();		 		 	 
	 });	
}
spell_tab1();
//查询按钮的响应
$("#btn").click(function(){
		$(".floatbox1").css("display","none");
		if($("#begin").val()==$("#end").val())
		{
			alert("地址选择错误，重新选择");
			$("#begin").val("");
			$("#end").val("");
		}
		for(var i=0;i<carticket.length;i++)
		{
			$ctb=carticket[i].begin;
			$cte=carticket[i].end;
			if($("#begin").val()==$ctb)
			{
				if($("#end").val()==$cte)
				{
					alert(carticket[i].price);
				
				}
			}						
		}
	
	}).mouseover(function(){$(".button").css("background","rgb(238,102,0)")})
	.mouseout(function(){$(".button").css("background","#f80")});
	
//去掉banner的最后一个边框
$(".content").eq(2).css("border","none");
//article菜单 点击事件	
$(".art_menu ul li").click(function(){
	$(this).addClass("active")
	.siblings().removeClass("active");
	});
//article show显示
$(".art_menu ul li").eq(1).click(function(){
	var date=[
	{begin:"北京",price:"42.00",end:"密云",img:"hltjq",ival:"黑龙滩景区"},
	{begin:"北京",price:"30.00",end:"天津",img:"wdd",ival:"五大道"},
	{begin:"北京",price:"10.00",end:"廊坊",img:"txdyc",ival:"天下第一城"},
	{begin:"北京",price:"50.00",end:"承德",img:"mlwc",ival:"木兰围场"},
	{begin:"北京",price:"18.00",end:"张家口",img:"zbcy",ival:"张北草原"},
	{begin:"北京",price:"18.00",end:"大同",img:"ygsk",ival:"云冈石窟"},
	{begin:"北京",price:"18.00",end:"保定",img:"ysp",ival:"野三坡"},
	{begin:"北京",price:"29.00",end:"石家庄",img:"zd",ival:"正定"},
	];
	for(i in date)
	{
$(".bs_name_begin").eq(i).replaceWith("<span title='"+date[i].begin+"'class='bs_name_begin'>"+date[i].begin+"</span>");
$(".price").eq(i).replaceWith("<span class='price'>"+date[i].price+"</span>");
$(".bs_name_end").eq(i).replaceWith("<span title='"+date[i].end+"' class='bs_name_end'>"+date[i].end+"</span>");
$(".bs_pic a").eq(i).replaceWith("<a title='"+date[i].ival+"'><img src='images/"+date[i].img+".jpg' width='240' height='190'><i>"+date[i].ival+"</i></a>");
	}	
	});
$(".art_menu ul li").eq(0).click(function(){
	var date=[
	{begin:"上海",price:"20.00",end:"嘉兴",img:"xt",ival:"西塘"},
	{begin:"上海",price:"62.00",end:"临安",img:"dmsfjq",ival:"大明山风景区"},
	{begin:"上海",price:"10.00",end:"苏州",img:"zzy",ival:"拙政园"},
	{begin:"上海",price:"10.00",end:"昆山",img:"zz",ival:"周庄"},
	{begin:"上海",price:"26.00",end:"泰州",img:"qhsdgy",ival:"溱湖湿地公园"},
	{begin:"上海",price:"40.00",end:"潥阳",img:"tmhyswq",ival:"天目湖御水温泉"},
	{begin:"上海",price:"33.00",end:"桐乡",img:"wz",ival:"乌镇"},
	{begin:"上海",price:"10.00",end:"张家港",img:"jyhstyq",ival:"暨阳湖生态园区"},
	];
	for(i in date)
	{
$(".bs_name_begin").eq(i).replaceWith("<span title='"+date[i].begin+"'class='bs_name_begin'>"+date[i].begin+"</span>");
$(".price").eq(i).replaceWith("<span class='price'>"+date[i].price+"</span>");
$(".bs_name_end").eq(i).replaceWith("<span title='"+date[i].end+"' class='bs_name_end'>"+date[i].end+"</span>");
$(".bs_pic a").eq(i).replaceWith("<a title='"+date[i].ival+"'><img src='images/"+date[i].img+".jpg' width='240' height='190'><i>"+date[i].ival+"</i></a>");
	
	}
	});
$(".art_menu ul li").eq(2).click(function(){
//定义武汉为起点的数据
	var date=[{begin:"武汉",price:"20.00",end:"鄂州",img:"xsfjq",ival:"西山风景区"},
	{begin:"武汉",price:"39.00",end:"黄石",img:"hsksgy",ival:"黄石矿山公园"},
	{begin:"武汉",price:"20.00",end:"咸宁",img:"cb",ival:"赤壁"},
	{begin:"武汉",price:"18.00",end:"孝感",img:"sfs",ival:"双峰山"},
	{begin:"武汉",price:"32.00",end:"天门",img:"tms",ival:"天门山"},
	{begin:"武汉",price:"45.00",end:"荆州",img:"mxl",ival:"明显陵"},
	{begin:"武汉",price:"60.00",end:"荆州",img:"jzgc",ival:"荆州古城"},
	{begin:"武汉",price:"70.00",end:"九江",img:"ls",ival:"庐山"},
	];
	for(i in date)
	{
$(".bs_name_begin").eq(i).replaceWith("<span title='"+date[i].begin+"'class='bs_name_begin'>"+date[i].begin+"</span>");
$(".price").eq(i).replaceWith("<span class='price'>"+date[i].price+"</span>");
$(".bs_name_end").eq(i).replaceWith("<span title='"+date[i].end+"' class='bs_name_end'>"+date[i].end+"</span>");
$(".bs_pic a").eq(i).replaceWith("<a title='"+date[i].ival+"'><img src='images/"+date[i].img+".jpg' width='240' height='190'><i>"+date[i].ival+"</i></a>");
	
	}	
	});	
$(".art_menu ul li").eq(3).click(function(){
//定义苏州为起点的数据
	var date=[{begin:"苏州",price:"70.00",end:"南京",img:"zsl",ival:"中山陵"},
	{begin:"苏州",price:"4.00",end:"湖州",img:"mgsjq",ival:"莫干山景区"},
	{begin:"苏州",price:"26.00",end:"嘉兴",img:"xt",ival:"西塘"},
	{begin:"苏州",price:"49.00",end:"扬州",img:"sxh",ival:"瘦西湖"},
	{begin:"苏州",price:"4.00",end:"湖州",img:"nxgz",ival:"湖州"},
	{begin:"苏州",price:"32.00",end:"泰州",img:"qhsdgy",ival:"泰州"},
	{begin:"苏州",price:"12.00",end:"张家港",img:"jyhstyq",ival:"张家港"},
	{begin:"苏州",price:"12.00",end:"昆山",img:"zz",ival:"周庄"},
	];
	for(i in date)
	{
$(".bs_name_begin").eq(i).replaceWith("<span title='"+date[i].begin+"'class='bs_name_begin'>"+date[i].begin+"</span>");
$(".price").eq(i).replaceWith("<span class='price'>"+date[i].price+"</span>");
$(".bs_name_end").eq(i).replaceWith("<span title='"+date[i].end+"' class='bs_name_end'>"+date[i].end+"</span>");
$(".bs_pic a").eq(i).replaceWith("<a title='"+date[i].ival+"'><img src='images/"+date[i].img+".jpg' width='240' height='190'><i>"+date[i].ival+"</i></a>");
	
	}	
	});
//给show2添加几个li
for(var i=0; i<7;i++)
	{
		$(".information li").eq(0).clone().appendTo($(".information"));
	}
//设置广东周边的数据
var dateG=[{start:"广州",end:"佛山",price:"10.00"},
{start:"广州",end:"东莞",price:"25.00"},
{start:"广州",end:"深圳",price:"27.00"},
{start:"广州",end:"惠州",price:"25.00"},
{start:"广州",end:"肇庆",price:"7.00"},
{start:"广州",end:"清远",price:"17.00"},
{start:"广州",end:"中山",price:"12.00"},
{start:"广州",end:"江门",price:"18.00"},
];
for(i in dateG)
{
$(".car_start").eq(i).replaceWith("<span title='"+dateG[i].start+"'class='car_start'>"+dateG[i].start+"</span>");
$(".car_type_priceb").eq(i).replaceWith("<span class='car_type_priceb'>"+dateG[i].price+"</span>");
$(".car_end").eq(i).replaceWith("<span title='"+dateG[i].end+"' class='car_end'>"+dateG[i].end+"</span>");
	
}
//周边数据点击
$(".art_menu ul li").eq(4).click(function(){

for(i in dateG)
{
$(".car_start").eq(i).replaceWith("<span title='"+dateG[i].start+"'class='car_start'>"+dateG[i].start+"</span>");
$(".car_type_priceb").eq(i).replaceWith("<span class='car_type_priceb'>"+dateG[i].price+"</span>");
$(".car_end").eq(i).replaceWith("<span title='"+dateG[i].end+"' class='car_end'>"+dateG[i].end+"</span>");
	
}
});
$(".art_menu ul li").eq(5).click(function(){
	var dateW=[{start:"无锡",end:"泰州",price:"46.00"},
{start:"无锡",end:"昆山",price:"28.00"},
{start:"无锡",end:"南京",price:"3.00"},
{start:"无锡",end:"常州",price:"20.00"},
{start:"无锡",end:"湖州",price:"47.00"},
{start:"无锡",end:"溧阳",price:"28.00"},
{start:"无锡",end:"上海",price:"21.00"},
{start:"无锡",end:"苏州",price:"3.00"},
];
for(i in dateW)
{$(".car_start").eq(i).replaceWith("<span title='"+dateW[i].start+"'class='car_start'>"+dateW[i].start+"</span>");
$(".car_type_priceb").eq(i).replaceWith("<span class='car_type_priceb'>"+dateW[i].price+"</span>");
$(".car_end").eq(i).replaceWith("<span title='"+dateW[i].end+"' class='car_end'>"+dateW[i].end+"</span>");
}});
$(".art_menu ul li").eq(6).click(function(){
var dateS=[{start:"上海",end:"昆山",price:"10.00"},
{start:"上海",end:"苏州",price:"10.00"},
{start:"上海",end:"无锡",price:"27.00"},
{start:"上海",end:"常州",price:"33.00"},
{start:"上海",end:"南通",price:"8.00"},
{start:"上海",end:"常熟",price:"10.00"},
{start:"上海",end:"桐乡",price:"33.00"},
{start:"上海",end:"嘉兴",price:"20.00"},
];
for(i in dateS)
{$(".car_start").eq(i).replaceWith("<span title='"+dateS[i].start+"'class='car_start'>"+dateS[i].start+"</span>");
$(".car_type_priceb").eq(i).replaceWith("<span class='car_type_priceb'>"+dateS[i].price+"</span>");
$(".car_end").eq(i).replaceWith("<span title='"+dateS[i].end+"' class='car_end'>"+dateS[i].end+"</span>");
}});
$(".art_menu ul li").eq(7).click(function(){
var dateX=[{start:"厦门",end:"漳州",price:"18.00"},
{start:"厦门",end:"泉州",price:"35.00"},
{start:"厦门",end:"莆田",price:"50.00"},
{start:"厦门",end:"汕头",price:"90.00"},
{start:"厦门",end:"龙岩",price:"60.00"},
{start:"厦门",end:"三明",price:"60.00"},
{start:"厦门",end:"南平",price:"98.00"},
{start:"厦门",end:"福州",price:"80.00"},
];
for(i in dateX)
{$(".car_start").eq(i).replaceWith("<span title='"+dateX[i].start+"'class='car_start'>"+dateX[i].start+"</span>");
$(".car_type_priceb").eq(i).replaceWith("<span class='car_type_priceb'>"+dateX[i].price+"</span>");
$(".car_end").eq(i).replaceWith("<span title='"+dateX[i].end+"' class='car_end'>"+dateX[i].end+"</span>");
}	
});
//

	
	

	
	
	
});











