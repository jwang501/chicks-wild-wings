// Get the modal
			//var modal = document.getElementById('wingModal');
			var modal = document.getElementByClassName('wModal');
			// Get the button that opens the modal
			//var btn = document.getElementById("wing");
			var btn = document.getElementByClassName("wbutton");
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("wclose")[0];
			//var span = document.getElementById('wingClose');
			// When the user clicks the button, open the modal 
			btn.onclick = function() {
    				modal.style.display = "block";
			}
			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
    				modal.style.display = "none";
			}
			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
    				if (event.target == modal) {
        			modal.style.display = "none";
    				}
			}
