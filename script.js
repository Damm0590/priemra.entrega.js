document.addEventListener("keyup", listener, e=>{
    if (e.target.matches("#buscador")){

        document.querySelectorAll( selectors, ".articulo").forEach (callbackfn, comida => {

            comida.textContent.tolowerCase().include(e.target.value.tolowerCase())
            ?comida.classlist.remove ( token, "filtro")
            :comida.classlist.add("filtro")
        })
    }
})