var intervalo;

function scroll_Right() {

	intervalo = setInterval(function() {

		document.getElementById('scroller').scrollLeft += 1 }, 5

	);
};

function scroll_Left() {

	intervalo = setInterval(function() {

		document.getElementById('scroller').scrollLeft -= 1 }  , 5

	);

};

function clear_Scroll() {

	clearInterval(intervalo);

};
