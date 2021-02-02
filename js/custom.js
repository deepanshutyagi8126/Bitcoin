$(document).on('click' ,'.hamburger' ,function(){
//	alert('okk');
//	$('.hamburger').addClass('active');
	
	if($('.hamburger').hasClass('active')){
		$(this).removeClass('active');
		$('.headerRight').animate({'left':'-250px'});
	}
	else{
		$(this).addClass('active');
			$('.headerRight').animate({'left':'0px'});
	}
});

$(window).scroll(function () {

    if ($(window).scrollTop() >= 1) {
        $('.header').addClass('fixedHeader');
    } else {
        $('.header').removeClass('fixedHeader');
    }
});

$(document).on('click','.headerRightlIn ul li a',function(){
	$('.headerRightlIn ul li a').removeClass('active');
	$(this).addClass('active');
});

$(document).on('click','.headerRightrIn ul li a',function(){
	$('.headerRightrIn ul li a').removeClass('active');
	$(this).addClass('active');
});


$(document).on('click','.serviceRel a',function(){
	$('.serviceDown').slideDown();
});

document.addEventListener("mousedown", function (event) {
    if (event.target.closest(".serviceRel a ,.serviceDown"))
        return;
    $('.serviceDown').slideUp();
});

$(document).on('click','.blackArrow ,.blackAl' ,function(){
	$('.blackArrow').addClass('active');
	$('.blackAl').addClass('active');
	$('.usd').slideDown();
});
$(document).on('click','.blackArrow.active ,.blackAl.active' ,function(){
	$('.blackArrow').removeClass('active');
	$('.blackAl').removeClass('active');
	$('.usd').slideUp();
});

$(document).on('click','.usd li' ,function(){
	var x = $(this).text();
$('.blackAl').attr('value',x);
		$('.usd').slideUp();
});

document.addEventListener("mousedown", function (event) {
    if (event.target.closest(".blackAl "))
        return;
    $('.usd').slideUp();
});

$(document).on('click','.blackArrow2 ,.blackAl2' ,function(){
	$('.blackArrow2').addClass('active');
	$('.blackAl2').addClass('active');
	$('.btc').slideDown();
});
$(document).on('click','.blackArrow2.active ,.blackAl2.active' ,function(){
	$('.blackArrow2').removeClass('active');
	$('.blackAl2').removeClass('active');
	$('.btc').slideUp();
});

$(document).on('click','.btc li' ,function(){
	var x = $(this).text();
$('.blackAl2').attr('value',x);
		$('.btc').slideUp();
});

document.addEventListener("mousedown", function (event) {
    if (event.target.closest(".blackAl2 "))
        return;
    $('.btc').slideUp();
});

$(document).on('click' ,'.whyUs .row .col-sm-4 .whyBox' ,function(){
	$('.whyUs .row .col-sm-4 .whyBox').removeClass('active');
	$(this).addClass('active');
});



$(document).on('click','.faqContent a',function(){
	
	
	if($(this).hasClass('active')){
		$(this).removeClass('active');	
			$(this).siblings('p').slideUp();
		$(this).children('span').css("transform",'rotate(0deg)')
	}
	else{
	$(this).addClass('active');	
		$(this).siblings('p').slideDown();
			$(this).siblings('p').slideDown();
		$(this).children('span').css("transform",'rotate(180deg)')
	}
});