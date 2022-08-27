const URL = "https://db.ygoprodeck.com/api/v7/cardinfo.php";
fetch;
fetch(URL)
  .then((res) => res.json())
  .then((data) => {
    const array = data.data;

    const buscar = () => {
      const busquedaUser = document.getElementById("input").value;
      const busquedaMin = busquedaUser.toLowerCase();
      console.log(busquedaUser)
      
     
      const palabras = busquedaMin.split(" ");

      let busqueda = palabras.map((palabra) => {
           
    return palabra[0].toUpperCase() + palabra.substring(1); 
      }).join(" ");

      

      const resultado = array.find((item) => item.name.includes(busqueda));
      console.log(resultado);
      let img = resultado.card_images[0].image_url;
      let mostrarImagen = document.getElementById("img");
      mostrarImagen.src = img;
    };
    const btn = document.getElementById("btn");
    btn.addEventListener("click", () => {
      buscar();
    });
  })
  .catch((err) => console.log("ocurrio un errorXD" + err));
