TweenMax.from('h1', 1, {x: -400});
TweenMax.from('p', 1.3, {x: 400});
TweenMax.staggerFrom('li', .5, {y: 200}, .2);
TweenMax.to('#seperator', 1, {width: '75%', ease: Power1.easeInOut});

$('#return').hover(over, out);

function over() {
	TweenMax.to($(this).find('img'), .5, {scale: 1.3, ease: Back.easeOut});
}

function out() {
	TweenMax.to($(this).find('img'), .5, {scale: 1, ease: Back.easeOut});
}