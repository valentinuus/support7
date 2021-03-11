// Отправка заявки 
// $(document).ready(function () {
// 	$('#form').submit(function () { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
// 		if (document.form.name.value == '' || document.form.phone.value == '') {
// 			valid = false;
// 			return valid;
// 		}
// 		$.ajax({
// 			type: "POST",
// 			url: "mail.php",
// 			data: $(this).serialize()
// 		}).done(function () {
// 			$('.js-overlay-thank-you').fadeIn();
// 			$(this).find('input').val('');
// 			$('#form').trigger('reset');
// 		});
// 		return false;
// 	});
// 	// Закрыть попап «спасибо»
// 	$('.js-close-thank-you').click(function () { // по клику на крестик
// 		$('.js-overlay-thank-you').fadeOut();
// 	});

// 	$(document).mouseup(function (e) { // по клику вне попапа
// 		var popup = $('.popup');
// 		if (e.target != popup[0] && popup.has(e.target).length === 0) {
// 			$('.js-overlay-thank-you').fadeOut();
// 		}
// 	});

// 	// Маска ввода номера телефона (плагин maskedinput)
// 	$(function ($) {
// 		$('[name="phone"]').mask("+7(999) 999-9999");
// 	});

$(function () {

	let isMobile = {
		Android: function () { return navigator.userAgent.match(/Android/i); },
		BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
		iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
		Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
		Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
		any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
	};
	let body = document.querySelector('body');
	if (isMobile.any()) {
		body.classList.add('touch');
		let arrow = document.querySelectorAll('.arrow');
		for (i = 0; i < arrow.length; i++) {
			let thisLink = arrow[i].previousElementSibling;
			let subMenu = arrow[i].nextElementSibling;
			let thisArrow = arrow[i];

			thisLink.classList.add('parent');
			arrow[i].addEventListener('click', function () {
				subMenu.classList.toggle('open');
				thisArrow.classList.toggle('active');
			});
		}
	} else {
		body.classList.add('mouse');
	}




	$('.burger').click(function (event) {
		$('.burger,.menu').toggleClass('active-burger');
		$('body').toggleClass('lock')
	});


	$('.top-slider').slick({
		arrows: false,
		dots: true,
	});

	$('.comment__slider').slick({
		arrows: false,
		dots: true,
	});

	lightbox.option({
		'resizeDuration': 200,
		'wrapAround': true,
	})

	$('.card__slider').slick({
		arrows: false,
		dots: true,
	});


//--------filter categories--------------

	let filter = $('[data-filter]')
	filter.on('click', function(event){
		event.preventDefault()
		let cat = $(this).data('filter');
		if(cat == 'all') {
			$('[data-cat]').removeClass('hide');
		} else{
			$('[data-cat]').each(function(){
				let workCat = $(this).data('cat');
				if(workCat !=cat){
					$(this).addClass('hide')
				} else{
					$(this).removeClass('hide')
				}
			});
		}
	})






});