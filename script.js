document.addEventListener("keyup", e=>{

   if (e.target.matches("#buscador")){
if (e.key==="Escape")e.target.value = " "

    document.querySelectorAll(".articulo").forEach(comida =>{

        comida.textContent.toLowerCase() .includes(e.target.value.toLowerCase())
         ?comida.classList.remove("filtro")
         :comida.classList.add( "filtro")
    })
   }
}  
)