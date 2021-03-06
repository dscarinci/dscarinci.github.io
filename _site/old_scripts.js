// ------ Different background for h1
//
// Get background images
var img_paths = [ 

	"url(http://localhost:4000/assets/img/text-bg-1.png)",

	"url(http://localhost:4000/assets/img/text-bg-2.png)",

	"url(http://localhost:4000/assets/img/text-bg-3.png)",

	"url(http://localhost:4000/assets/img/text-bg-4.png)",

	"url(http://localhost:4000/assets/img/text-bg-5.png)",

	"url(http://localhost:4000/assets/img/text-bg-6.png)",

	"url(http://localhost:4000/assets/img/text-bg-7.png)",

	"url(http://localhost:4000/assets/img/text-bg-8.png)",

	"url(http://localhost:4000/assets/img/text-bg-9.png)",
 ];
// Get h1 elements
var h1s = document.getElementsByTagName("h1");
// Skip first header
for (var i=1; i < h1s.length; i++) {
	var num = Math.floor(Math.random() * (img_paths.length - 1)) + 1;	
	h1s[i].style.backgroundImage = img_paths[num]; 
}



// ------ Go to top button ------
//Get the button:
mybutton = document.getElementById("totoparrow");
console.log(mybutton)
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
