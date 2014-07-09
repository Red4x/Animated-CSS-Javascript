
// Animation ryda//
var wss_i = 0;
			var wss_array =["coffee addicted","<u>pixel pusher</u>","119.81 .31.34","ryda.com"];
			var wss_elem;

			function wssNext(){
				wss_i++;
				wss_elem.style.opacity=0;
				if(wss_i > (wss_array.length - 1)){
					wss_i }
					 //window.location.href = 'http://www.iamryda.com/';}
				setTimeout('wssSlide()',1000);
			}

			function wssSlide(){
				wss_elem.innerHTML = wss_array[wss_i];
				wss_elem.style.opacity=1;
				setTimeout('wssNext()',2000);
			}