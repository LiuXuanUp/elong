// JavaScript Document
$(document).ready(function(e) {
    $(".lastrightnav1").click(function(){$(".lastrightnav1").css("background","rgb(138,105,75)");
  });
  $(".lastrightnav1").click(function(){$(".lastrightnav2").css("background","rgb(204,188,177)");
  });
  $(".lastrightnav1").click(function(){$(".lastrightnav3").css("background","rgb(204,188,177)");
  });
  $(".lastrightnav2").click(function(){$(".lastrightnav2").css("background","rgb(138,105,75)");
  });
  $(".lastrightnav2").click(function(){$(".lastrightnav1").css("background","rgb(204,188,177)");
  });
  $(".lastrightnav2").click(function(){$(".lastrightnav3").css("background","rgb(204,188,177)");
  });
  $(".lastrightnav3").click(function(){$(".lastrightnav3").css("background","rgb(138,105,75)");
  });
  $(".lastrightnav3").click(function(){$(".lastrightnav1").css("background","rgb(204,188,177)");
  });
  $(".lastrightnav3").click(function(){$(".lastrightnav2").css("background","rgb(204,188,177)");
  });
   $(".lastrightnav1").click(function(){$(".lastrightnava1").css("color","#fff");
  });
  $(".lastrightnav1").click(function(){$(".lastrightnava2").css("color","rgb(138,105,75)");
  });
  $(".lastrightnav1").click(function(){$(".lastrightnava3").css("background","url(images/xsqIndex_bg.png) -320px -240px");
  });
  $(".lastrightnav2").click(function(){$(".lastrightnava2").css("color","#fff");
  });
  $(".lastrightnav2").click(function(){$(".lastrightnava1").css("color","rgb(138,105,75)");
  });
  $(".lastrightnav2").click(function(){$(".lastrightnava3").css("background","url(images/xsqIndex_bg.png) -320px -240px");
  });
  $(".lastrightnav3").click(function(){$(".lastrightnava3").css("background","url(images/xsqIndex_bg.png) -345px -240px");
  });
  $(".lastrightnav3").click(function(){$(".lastrightnava1").css("color","rgb(138,105,75)");
  });
  $(".lastrightnav3").click(function(){$(".lastrightnava2").css("color","rgb(138,105,75)");
  });
  $(".lastrightnav1").click(function(){$("#flashsale-article1-palceblock").hide();});
  $(".lastrightnav2").click(function(){$("#flashsale-article1-palceblock").hide();});
  $(".lastrightnav3").click(function(){$("#flashsale-article1-palceblock").hide();});
  $(document).bind("click",function(e){ 
		var target = $(e.target); 
		if(target.closest("#flashsale-article1-palceblock").length == 0){ 
		$("#flashsale-article1-palceblock").hide(); 
		} 
	})
	 
	
});
 function clock(){
        $("#redbox ul").animate({marginTop:"-12px"},500,function(){
            $(this).css({marginTop:"0px"}).find("li:first").appendTo(this);                                                         
        })
    }
	$(function(){
       
       setInterval("clock()",2000);
    })
$(function() {
		$( "#flashsale-article1-date1" ).datepicker();
		$( "#flashsale-article1-date2" ).datepicker();
	});