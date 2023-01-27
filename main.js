let contenido=90;
function invertir(texto=""){
    if(texto==""){
        console.info("La cadena esta vasia")
    }else if(typeof texto=='string'){
        let contenido=texto.split("");
        let revertir=contenido.reverse();
        let unir_contenido=revertir.join();
        console.log(unir_contenido);
    }else if(typeof texto=='number'){
        console.error("El contendo ingresado es tipo numero");
    }
}
invertir(contenido);