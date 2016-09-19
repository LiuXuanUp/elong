// JavaScript Document


$(document).ready(function(e) {
    $("#nav_section_hotcity").click(function()
	{
		$("#section1").show();
		$("#section2").hide();
		$("#content_hotcity").show();
		$("#content_ad").hide();
		$("#content_eh").hide();
		$("#nav_section_hotcity").css({"border-top":"#FF6633 1px solid","border-right":"1px #f63 solid","border-left":"1px #f63 solid","height":"30px","color":"#f63"});
		$("#abcd_1").css({"border-top":"none","border-right":"none","border-left":"none"});
		$("#efgh_1").css({"border-top":"none","border-right":"none","border-left":"none"});
		});
	$("#abcd_1").click(function(){
		$("#section1").hide();
		$("#section2").show();
		$("#content_hotcity").hide();
		$("#content_ad").show();
		$("#content_eh").hide();
		$("#nav_section_hotcity").css({"border-top":"none","border-right":"none","border-left":"none"});
		$("#abcd_1").css({"border-top":"#FF6633 1px solid","border-right":"1px #f63 solid","border-left":"1px #f63 solid","height":"30px","color":"#f63"});
		$("#efgh_1").css({"border-top":"none","border-right":"none","border-left":"none"});
		});
	$("#efgh_1").click(function(){
		$("#section1").hide();
		$("#section2").show();
		$("#content_hotcity").hide();
		$("#content_ad").hide();
		$("#content_eh").show();
		$("#nav_section_hotcity").css({"border-top":"none","border-right":"none","border-left":"none"});
		$("#abcd_1").css({"border-top":"none","border-right":"none","border-left":"none"});
		$("#efgh_1").css({"border-top":"#FF6633 1px solid","border-right":"1px #f63 solid","border-left":"1px #f63 solid","height":"30px","color":"#f63"});
		});
});
$(document).ready(function() {
    $(".search").children("#city").click(function(){
		$(".pop-up-div").toggle();
		});

});


