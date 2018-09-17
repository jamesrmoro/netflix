var intervalo;

function scrollRight() {

	intervalo = setInterval(function() {

		document.getElementById('scroller').scrollLeft += 1 }, 5

	);
};

function scrollLeft() {

	intervalo = setInterval(function() {

		document.getElementById('scroller').scrollLeft -= 1 }  , 5

	);

};

function clearScroll() {

	clearInterval(intervalo);

};
