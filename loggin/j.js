const field= document.queryselector('.passwd')
const showbtn= document.queryselector('.show')
showbtn.addEventListener('click',function(){
	if(field.type === "password"){
		field.type = "text";
	    showbtn.textContent = "Hide";
	    showbtn.style.color = "red";
    } else {
    	field.type ="password";
	    showbtn.textContent = "Show";
	    showbtn.style.color = "white"
    }
});