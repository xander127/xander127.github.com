//obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");

//recorrerlos
links.forEach(function(link) {

//agregar un evento click a cada uno de ellos
    link.addEventListener("click", function(ev) {
        //evitar que el evento siga su comportamiento por defecto
        ev.preventDefault();
        //return false;

        let content = document.querySelector('.content');
        //quitar las clases de animacion
        content.classList.remove("animate__animated");
        content.classList.remove("animate__fadeInDown"); 
        //agregar clases para animar la salida
        content.classList.add("animate__animated");
        content.classList.add("animate__fadeOutUp"); 
        
        //timers
        setTimeout(function(){
            //location.href="/";
            location.href="/boletines";
        },1000);

        return false;

    });
});

//quitar y agregar clases a un elemento con javascript
/*let iconos = document.querySelectorAll("i");
iconos.forEach(function(icono){
    icono.classList.remove("fa-star");//remove - add
});*/