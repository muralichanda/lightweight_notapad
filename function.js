$(function(){
getData();
function getData()
{
	var data = localStorage.getItem('notepad');
	document.getElementById('notepad').value = data;
}
$("#notepad").bind("keyup", function(){
	saveData();
});

function saveData()
{

	localStorage.setItem('notepad',document.getElementById('notepad').value)	
}
});

