function menuShow(){
    let menuMobile = document.querySelector('.nav__container__lista');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "Assets/navegacao/Menu.png";
    } else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "Assets/navegacao/menu_Aberto.png";
    }
}

function menuTablet(){
    let Tablet = document.querySelector('.nav__container__lista');
    let Categoria = document.querySelector('.tablet-nav__button');

    if(Categoria.classList.contains('categoria')){
        Categoria.classList.remove('categoria');
    }else{
        Categoria.classList.add('categoria');
    }


    if(Tablet.classList.contains('open')){
        Tablet.classList.remove('open');
    }else{
        Tablet.classList.add('open');
    }
}



