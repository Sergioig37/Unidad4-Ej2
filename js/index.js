window.addEventListener("load", init)


function add(){
    if(document.querySelector("ul")==null){
        let lista = document.createElement("ul");
        document.body.appendChild(lista);
    }
    else{
      
        let lista = document.querySelector("ul");
        let listItem = document.createElement("li");
        let texto = document.createTextNode(document.getElementById("caja").value);
        listItem.appendChild(texto);
        lista.appendChild(listItem); 
         document.getElementById("caja").value = "";
    }
}

function quitar(){
    let listaPadre = document.querySelector("ul");
    let listas = document.querySelectorAll("li");
   listas.forEach(element => {
        if(element.innerHTML===document.getElementById("caja").value){
            listaPadre.removeChild(element);
        }
   });
   document.getElementById("caja").value = "";
}

function init(){
    document.getElementById("botonAdd").addEventListener("click", add);
    document.getElementById("botonQuitar").addEventListener("click",quitar);
}