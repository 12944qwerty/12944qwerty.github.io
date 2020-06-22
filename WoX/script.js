document.getElementById("welcoming-btn").addEventListener("click", () => {
       	var title = document.getElementById("welcoming-title").value;
	var message = document.getElementById("welcoming-message").value;
	var link = document.getElementById("welcoming-link");
	var output = "javascript:(function(a){a.value=a.value.slice(0,a.selectionStart)+\"" + message.trim() +  "\"+a.value.slice(a.selectionEnd);document.querySelectorAll('[value="Send"]')[0].click();})(document.getElementById("post"));";
	
	link.innerText = title;
	link.href = output;
});

document.getElementById("rainbow-ify").addEventListener("click", () => {
	var text = document.getElementById("rainbow-text").value;
	var output = '<span class="username-popup profile-link color--awesome">';
  for (var i=0; i<text.length; i++) {
    output += '<span>';
    output += text.charAt(i);
    output += '</span>';
    console.log(i);
  };
  output += '</span>';
  console.log(text);
  document.getElementById('rainbow-html').value = output;
});
