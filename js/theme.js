$('.theme-toggler').click(function(){
    $('.theme-switcher').toggleClass('open');
})

function setActiveTheme(theme) {
    $('.alternate-theme').attr("disabled", "true");
    $('.alternate-theme[title='+theme+']').removeAttr("disabled")
}