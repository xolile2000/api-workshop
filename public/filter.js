const display = document.querySelector(".display");
const tampleteDisplay = document.querySelector(".tampleteDisplay");
const compileDisplay = Handlebars.compile(tampleteDisplay.innerText)

const tampleteBrand = document.querySelector(".tampleteBrand");
const compileBrand = Handlebars.compile(tampleteBrand.innerText)

document.addEventListener("click", function(){
    document.getElementById("brand").innerHTML = " ";
    document.getElementById("colors").innerHTML = " ";
  });


axios.get("http://api-tutor.herokuapp.com//v1/cars/color/:color")
.then(function (response) {
    
      

    
    display.innerHTML = compileDisplay({
        display: response.data
    })
    // handle success
    console.log(response.data);
  })

