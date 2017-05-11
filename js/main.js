$(function() {
	//Logo
	TweenMax.from('.circle', 2, {rotation: 360, y: -500, ease: Bounce.easeOut});

	$('#fullpage').fullpage({
		anchors: ['homepage', 'features', 'team', 'contact'],
		menu: '#menu',
		navigation: true,
		navigationTooltips: ['Accueil', 'Services', 'Team', 'Contact'],

		afterLoad: function(anchorLink, index) {

			if(index == 2) {
				TweenMax.set('.category', {visibility: 'visible'});
				TweenMax.from('.year', .5, {y: 50});
				TweenMax.from('.hashtag', .5, {x: -70});
				TweenMax.from('h3, .description, .line', .8, {x: 100, y: 100});
				TweenMax.from('.category', .6, {x: 150, y: 150});
				TweenMax.set($('#features_title'), {visibility: 'visible'});
				TweenMax.from('#features_title', .8, {y: -100, ease: Back.easeOut});
			}

			if(index == 3) {
				TweenMax.set('.team_member', {visibility: 'visible'});
				TweenMax.staggerFrom('.team_member', .3, {y: 400, scale: 2, rotation: 180}, .2);
				TweenMax.to('.team_member', 1.5, {opacity: 0.6,  delay: .6});
				TweenMax.set($('#team_title'), {visibility: 'visible'});
				TweenMax.from('#team_title', .8, {y: -100, ease: Back.easeOut});
			}

			if(index == 4) {
				TweenMax.set($('#contact_title'), {visibility: 'visible'});
				TweenMax.from('#contact_title', .8, {y: -100, ease: Back.easeOut});
				TweenMax.set('#form-div', {visibility: 'visible'});
				TweenMax.from('#form-div', .5, {y: 200});
				TweenMax.set('.name', {visibility: 'visible'})
				TweenMax.from('.name', .7, {y: -50, x: -100, ease: Back.easeOut});
				TweenMax.set('.email', {visibility: 'visible'});
				TweenMax.from('.email', .7, {y: -50, x: 100, ease: Back.easeOut});
				TweenMax.set('.text', {visibility: 'visible'});
				TweenMax.from('.text', .7, {y: -50, x: -100, ease: Back.easeOut});
				TweenMax.set('.submit', {visibility: 'visible'});
				TweenMax.from('.submit', .7, {y: -50, x: 100, ease: Back.easeOut});

			}
		},

		onLeave: function(index, nextIndex, direction) {
			if (index == 2) {
				TweenMax.set('.category, #features_title', {visibility: 'hidden'});
			}
			if (index == 3) {
				TweenMax.set('.team_member, #team_title', {visibility: 'hidden'});
				TweenMax.set('.team_member', {opacity: 1});
			}
			if (index == 3) {
				TweenMax.set('#contact_title, #form-div, .name, .email, .text, .submit', {visibility: 'hidden'});
			}
		}
	});

	//Hover category
	$('.category').hover(cat_over, cat_out);

	function cat_over() {
		var id = '#' + $(this).attr('id');

		TweenMax.to($(id + ' .year'), 0.2, {rotation: 0, x: 60, y: 15});
		TweenMax.to($(id + ' h2'), 0.2, {x: 30});
		TweenMax.to($(id + ' .description'), 0.2, {x: 70});
		TweenMax.to($(id + ' .hashtag'), 0.2, {x: -30});
		TweenMax.to($(id + ' .card'), 0.2, {rotation: -5});
		TweenMax.to($(id + ' .line'), 0.2, {width: 100, rotation: 45, x: -160, y: -40});
	}

	function cat_out() {
		var id = '#' + $(this).attr('id');

		TweenMax.to($(id + ' .year'), 0.2, {rotation: -90, x: 0, y: 0});
		TweenMax.to($(id + ' h2'), 0.2, {x: 0});
		TweenMax.to($(id + ' .description'), 0.2, {x: 0});
		TweenMax.to($(id + ' .hashtag'), 0.2, {x: 0});
		TweenMax.to($(id + ' .card'), 0.2, {rotation: 0});
		TweenMax.to($(id + ' .line'), 0.2, {width: 80, rotation: 0, x: 0, y: 0});
	}

	//Hover team
	$('.team_member').hover(team_over, team_out);

	function team_over(e) {
		TweenMax.to(this, 0.3, {opacity: 1, scale: 1.3});
		TweenMax.set($(this).find('p'), {visibility: 'visible'});
		TweenMax.from($(this).find('p'), 0.3, {x: -40, y: 15});
	}

	function team_out() {
		TweenMax.to(this, 0.3, {opacity: 0.6, scale: 1});
		TweenMax.set($(this).find('p'), {visibility: 'hidden'});
	}

	//Click category
	$('.category').on('click', function(e) {
		var id = $(this).attr('id');
		TweenMax.set(this, {zIndex: 100});
		TweenMax.to($(this).find('.card'), .8, {scale: 15, zIndex: 1000, onComplete: goTo, onCompleteParams: [id]});
	});

	function goTo(location) {
		window.location.href = '/category/' + location + '.html';
	}

	//prevent Defalt submit form
	$('#button-blue').on('click', function(e) {
		e.preventDefault();
	});
});