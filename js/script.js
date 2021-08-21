//====================================Bascet: checkbox=================================================
$(document).ready(function(){ 
	$.each($('.subscribe__flag'), function(index, val){
		if($(this).find('input').prop('checked')==true){
			$(this).addClass('active');
		}
	});

	$(document).on('click', '.subscribe__flag', function(event){ 
		if($(this).hasClass('active')){
			$(this).find('input').prop('checked',false);
		}else{
			$(this).find('input').prop('checked',true);
		}
		$(this).toggleClass('active');
		
		return false;
	});
});

//====================================Bascet: regions==============================================
$(document).ready(function(){ //spoiler
	$('.data__button-fast').click(function(event) {
		$('.data__button-fast,.data__contacts-fast').addClass('active');
		$('.data__button-moscow,.data__button-russia,.data__contacts-moscow,.data__contacts-russia').removeClass('active');
	});
	$('.data__button-moscow').click(function(event) {
		$('.data__button-moscow,.data__contacts-moscow').addClass('active');
		$('.data__button-fast,.data__button-russia,.data__contacts-fast,.data__contacts-russia').removeClass('active');
	});
	$('.data__button-russia').click(function(event) {
		$('.data__button-russia,.data__contacts-russia').addClass('active');
		$('.data__button-fast,.data__button-moscow,.data__contacts-fast,.data__contacts-moscow').removeClass('active');
	});
});

//====================================CATALOG: description/properties==============================================
$(document).ready(function(){ //spoiler
	$('.info__button_description').click(function(event) {
		$('.info__button_description,.info__description').addClass('active');
		$('.info__button_properties,.info__properties').removeClass('active');
	});
	$('.info__button_properties').click(function(event) {
		$('.info__button_properties,.info__properties').addClass('active');
		$('.info__button_description,.info__description').removeClass('active');
	});
});
//==================================================================================================================
$(document).ready(function(){
	$('.icon-menu').click(function(event){
		$('.icon-menu,.menu__body').toggleClass('active');
		$('body').toggleClass('lock');
	});


	$('.head__menu').click(function(event) {
			$('.icon-menu,.menu__body').removeClass('active');
			$('body').removeClass('lock');
	});
});



$(document).ready(function(){
	$('.top-header__mobile-contacts').click(function(event){
		$('.top-header__mobile-contacts,.contacts-header').toggleClass('active');
		$('body').toggleClass('lock');
	});


	$('.head__menu').click(function(event) {
			$('.top-header__mobile-contacts,.contacts-header').removeClass('active');
			$('body').removeClass('lock');
	});
});



$(document).ready(function(){


	$('.head__menu').click(function(event) {
			$('.top-header__mobile-contacts,.icon-menu.active').removeClass('active');
	});


	$('.top-footer__button').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
	
	$('.delivery-footer__button').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});

	$('.bottom-footer__social-spoiler').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
});


/*------------------------------Для фильтров------------------------------------------------*/
$(document).ready(function(){	
	$('.find__filter-button').click(function(event){
		$('.find__filter-button,.find__filters,.find__form').toggleClass('active');
	});




	$('.find__filter').click(function(event) {
			$('.find__filter-button,.find__filters,.find__form').removeClass('active');
	});
});

/*------------------------------SIDE-BAR------------------------------------------------*/
$(document).ready(function(){ //БУРГЕР
	$('.catalog__burger').click(function(event) {
		$('.catalog__top').toggleClass('active').next().slideToggle(300);
	});
});



$(document).ready(function(){	//хуйня в катлоге
	$('.catalog__point-popap1').click(function(event){
		$('.popap,.catalog__point-popap1').toggleClass('active');
		$('.popap').click(function(event) {
			$('.popap,.catalog__point-popap1').removeClass('active');
	});
	});
	
	$('.catalog__point-popap2').click(function(event){
		$('.popap,.catalog__point-popap2').toggleClass('active');
		$('.popap').click(function(event) {
			$('.popap,.catalog__point-popap2').removeClass('active');
	});
	});
	$('.catalog__point-popap3').click(function(event){
		$('.popap,.catalog__point-popap3').toggleClass('active');
		$('.popap').click(function(event) {
			$('.popap,.catalog__point-popap3').removeClass('active');
	});
	});
	$('.catalog__point-popap4').click(function(event){
		$('.popap,.catalog__point-popap4').toggleClass('active');
		$('.popap').click(function(event) {
			$('.popap,.catalog__point-popap4').removeClass('active');
	});
	});
	$('.catalog__point-popap5').click(function(event){
		$('.popap,.catalog__point-popap5').toggleClass('active');
		$('.popap').click(function(event) {
			$('.popap,.catalog__point-popap5').removeClass('active');
	});
	});
	$('.catalog__point-not').click(function(event) {
			$('.popap,.catalog__point').removeClass('active');
	});

});
/*====================================SLIDERs=============================================================*/
$(document).ready(function(){
	$('.slider').slick({
		dots:true,
		adaptiveHeight:true
	});
});

$(document).ready(function(){
	$('.gallery__slider').slick({
		dots:true,
		adaptiveHeight:true,
		swipe: false
	});
});


$(document).ready(function(){
	$('.brends__slider').slick({
		dots:false,
		variableWidth: true,
		centerMode: true,
		autoplay: true
	});
});


/*===========================================Спойлеры about======================================================*/

$(document).ready(function(){ 
	$('.about__title-button').click(function(event) {
		$('.about__title-button').toggleClass('active').next().slideToggle(300);
	});
});

$(document).ready(function(){ 
	$('.conception__title-button').click(function(event) {
		$('.conception__title-button,.conception__dots').toggleClass('active').next().slideToggle(300);
	});
});



/*===========================================ФИЛЬТР ЦЕНЫ======================================================*/
var slider = document.getElementById('slider');
var input0 = document.getElementById('price-start');
var input1 = document.getElementById('price-end');
var inputs = [input0, input1];

noUiSlider.create(slider, {
    start: [0, 200000],
    connect: true,
    tooltips: [wNumb({ decimals: 0 ,thousand: ' '}), wNumb({ decimals: 0,thousand: ' ' })],
    range: {
        'min': 0,
        'max': 200000,
    },
    format: wNumb({
    	decimals: 0,
    	thousand: ' '
    })
});

slider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = values[handle];
});

inputs.forEach(function (input, handle) {

    input.addEventListener('change', function () {
        slider.noUiSlider.setHandle(handle, this.value);
    });

    input.addEventListener('keydown', function (e) {

        var values = slider.noUiSlider.get();
        var value = Number(values[handle]);

        // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
        var steps = slider.noUiSlider.steps();

        // [down, up]
        var step = steps[handle];

        var position;

        // 13 is enter,
        // 38 is key up,
        // 40 is key down.
        switch (e.which) {

            case 13:
                slider.noUiSlider.setHandle(handle, this.value);
                break;

            case 38:

                // Get step to go increase slider value (up)
                position = step[1];

                // false = no step is set
                if (position === false) {
                    position = 1;
                }

                // null = edge of slider
                if (position !== null) {
                    slider.noUiSlider.setHandle(handle, value + position);
                }

                break;

            case 40:

                position = step[0];

                if (position === false) {
                    position = 1;
                }

                if (position !== null) {
                    slider.noUiSlider.setHandle(handle, value - position);
                }

                break;
        }
    });
});

/*===========================================CHECKBOXES======================================================*/

$(document).ready(function(){ 
	$.each($('.filter-form__input'), function(index, val){
		if($(this).find('input').prop('checked')==true){
			$(this).addClass('active');
		}
	});

	$(document).on('click', '.filter-form__input', function(event){ 
		if($(this).hasClass('active')){
			$(this).find('input').prop('checked',false);
		}else{
			$(this).find('input').prop('checked',true);
		}
		$(this).toggleClass('active');
		
		return false;
	});
});


$(document).ready(function(){ //spoiler
	$('._spoiler').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
});


$(document).ready(function(){
	$('.filter__title').click(function(event) {
		$(this).next().slideToggle(300);
	});
});

//====================================CATALOG: list/grid==============================================
$(document).ready(function(){ //spoiler
	$('.sorting__grid').click(function(event) {
		$('.gallery__section-grid,.sorting__grid').addClass('active');
		$('.gallery__section-list,.sorting__list').removeClass('active');
	});
	$('.sorting__list').click(function(event) {
		$('.gallery__section-list,.sorting__list').addClass('active');
		$('.gallery__section-grid,.sorting__grid').removeClass('active');
	});
});

