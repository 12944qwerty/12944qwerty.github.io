document.getElementById("welcoming-btn").addEventListener("click", () => {
       	var title = document.getElementById("welcoming-title").value;
	var message = document.getElementById("welcoming-message").value;
	var link = document.getElementById("welcoming-link");
	var output = "javascript:(function(a){a.value=a.value.slice(0,a.selectionStart)+\"" + message.trim() +  "\"+a.value.slice(a.selectionEnd);})(document.activeElement);";
	
	link.innerText = title;
	link.href = output;
});
