const colors = document.querySelector(".colors")
const colourTamplete = document.querySelector(".colour");
const compileTamplete = Handlebars.compile(colourTamplete.innerText);


axios.get("http://api-tutor.herokuapp.com/v1/colors")
.then(function (response) {
    
    colors.innerHTML = compileTamplete({
      colors: response.data
    })
    // handle success
    console.log(response.data);
  })

  const brands = document.querySelector(".brands")
const brandsTamplete = document.querySelector(".brandsTamplete");
const tampleteBrands = Handlebars.compile(brandsTamplete.innerText);


axios.get("http://api-tutor.herokuapp.com/v1/makes")
.then(function (response) {
    
    brands.innerHTML = tampleteBrands({
      brands: response.data
    })
    // handle success
    console.log(response.data);
  })

  const cars =document.querySelector(".cars")
  const carsTamplete = document.querySelector(".carsTamplete");
  const tampleteCars = Handlebars.compile(carsTamplete.innerText);
  
  
  axios.get("http://api-tutor.herokuapp.com/v1/cars")
  .then(function (response) {
      
      cars.innerHTML = tampleteCars({
        cars: response.data
      })
      // handle success
      console.log(response.data);
    })