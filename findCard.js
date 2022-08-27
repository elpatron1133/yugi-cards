const URL = "https://db.ygoprodeck.com/api/v7/cardinfo.php";
fetch(URL)
  .then((res) => res.json())
  .then((data) => {
    const array = data.data;

    const buscar = () => {
      const busquedaUser = document.getElementById("input").value;
      const busquedaMin = busquedaUser.toLowerCase();
      console.log(busquedaUser);

      const palabras = busquedaMin.split(" ");

      let busqueda = palabras
        .map((palabra) => {
          return palabra[0].toUpperCase() + palabra.substring(1);
        })
        .join(" ");

      const resultado = array.filter((item) => item.name.includes(busqueda));
      console.log(resultado);
      resultado.forEach((item, index) => {
        const name = item.name;
        const img = document.createElement('img');
        img.src = item.card_images[0].image_url
        const card = document.createElement("div")
        card.className = "img-item"
        card.innerHTML = `<h3>${name}</h3> <img src="${img.src}" alt="${name}">`

        document.getElementById("resultado").append(card)


      });
    };
    function limpiarBusqueda(){
      const resultado = document.getElementById("resultado");
      resultado.innerHTML = "";
    }




    const btn = document.getElementById("btn");
    input.addEventListener("keypress",(e)=>{
      if(e.key === "Enter"){
        limpiarBusqueda();
          buscar();
      }
    })

    btn.addEventListener("click", () => {
      limpiarBusqueda();  
      buscar();
    });
  })
  .catch((err) => console.log("ocurrio un errorXD" + err));
