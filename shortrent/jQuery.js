// JavaScript Document
$(document).ready(function(e) {
    $('#beijing').click(function()
		{
			$('#beijing_son').show();
			$('#shanghai_son').hide();	
			$('#guangzhou_son').hide();
			$('#sanya_son').hide();
			$('#wuhan_son').hide();
			$('#qingdao_son').hide();
		}
	)
	$('#shanghai').click(function()
		{
			$('#beijing_son').hide();
			$('#shanghai_son').show();	
			$('#guangzhou_son').hide();
			$('#sanya_son').hide();
			$('#wuhan_son').hide();
			$('#qingdao_son').hide();
		}
	)
	$('#guangzhou').click(function()
		{
			$('#beijing_son').hide();
			$('#shanghai_son').hide();	
			$('#guangzhou_son').show();
			$('#sanya_son').hide();
			$('#wuhan_son').hide();
			$('#qingdao_son').hide();
		}
	)
	$('#sanya').click(function()
		{
			$('#beijing_son').hide();
			$('#shanghai_son').hide();	
			$('#guangzhou_son').hide();
			$('#sanya_son').show();
			$('#wuhan_son').hide();
			$('#qingdao_son').hide();
		}
	)
	$('#wuhan').click(function()
		{
			$('#beijing_son').hide();
			$('#shanghai_son').hide();	
			$('#guangzhou_son').hide();
			$('#sanya_son').hide();
			$('#wuhan_son').show();
			$('#qingdao_son').hide();
		}
	)
	$('#qingdao').click(function()
		{
			$('#beijing_son').hide();
			$('#shanghai_son').hide();	
			$('#guangzhou_son').hide();
			$('#sanya_son').hide();
			$('#wuhan_son').hide();
			$('#qingdao_son').show();
		}
	)
});