function renderBurgerMenu(){
    
    $('.main-nav').on('click', '.hamburger-icon', function(){
        if($(window).width()<=1200){
        $(this).closest('.main-nav').find('.menu').toggle();}
    })
}

function hideBurgerMenu(){
    
    $('.main-nav').on('click', '.main-nav-el', function(){
        if($(window).width()<=1200){
        $(this).closest('.main-nav').find('.menu').toggle();}
    })
}


$(renderBurgerMenu);
hideBurgerMenu();