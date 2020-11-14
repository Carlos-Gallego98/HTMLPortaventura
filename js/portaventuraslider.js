$(function(){	//Esta funcion está disponible en el apartado basic de la pagina web "slidesjs.com"
      		$(".slides").slidesjs({	//$ se refiere a la clase .slides, y añade el slides que hemos edscargado de la web
        		play:{		//Todo esto se encuentra en el apartado Play object de la pagina web.
					active:true,
					//[boolean] Generate the play and stop buttons
					//You cannot use your own buttons. Sorry
					effect:"slide",
					//[String] Can be either "slide" or "fade"
					interval:5000,
					//[number] Time spent on each slide in milliseconds
					auto:true,
					//[boolean] Start playing the slideshow on load
					swap:true,
					//[boolean] show/hide stop and play buttons
					pauseOnHover: false,
					//[boolean] pause a playing slideshow on hover
					restartDelay: 2500
					//[number] restart delay on inactive slideshow
				}
      		});
		function demoVisibility() {
			document.getElementById("barramenus").style.visibility = "hidden";
		}
    	});	//Esta función es fundamental, ya que previamente a ejecutar un script, carga el html y el css, es decir, el contenido del body.