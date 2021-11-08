$(function () {
    var $mybook = $('#mybook');
    var $bttn_next = $('#next_page_button');
    var $bttn_prev = $('#prev_page_button');
    var $loading = $('#loading');
    var $mybook_images = $mybook.find('img');
    var cnt_images = $mybook_images.length;
    var loaded = 0;

    $mybook_images.each(function () {
        var $img = $(this);
        var source = $img.attr('src');
        $('<img/>').load(function () {
            ++loaded;
            if (loaded == cnt_images) {
                $loading.hide();
                $bttn_next.show();
                $bttn_prev.show();
                $mybook.show().booklet({
                    name: null,                            //  
                    width: 900,                             //ancho  
                    height: 700,                             //alto
                    speed: 600,                             //  
                    direction: 'LTR',                           //  
                    //  
                    next: $bttn_next,          			//  
                    prev: $bttn_prev,          			//  

                });
                Cufon.refresh();
            }
        }).attr('src', source);
    });

});

const boton1 = document.querySelector(".boton1");
const boton2 = document.querySelector(".boton2");
const sombra = document.querySelector(".sombra");

const esconderSombra = () => {
    let contador = 0.5;
    var intervalo;
    setTimeout(() => {
        intervalo = setInterval(() => {
            if (contador > 0) {
                sombra.style.opacity = `${contador -= 0.1}`;
            }
        }, 10);
    }, 300);

    setTimeout(() => {
        clearInterval(intervalo);
        let intervalo2 = setInterval(() => {
            if (contador < 0.5) {
                sombra.style.opacity = `${contador += 0.05}`;
            }
        }, 10);
    }, 550);
}

boton1.addEventListener("click", () => {
    esconderSombra();
});
boton2.addEventListener("click", () => {
    esconderSombra();
});