let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function updatemenu() {
  if (document.getElementById('responsive-menu').checked == true) {
    document.getElementById('menu').style.borderBottomRightRadius = '0';
    document.getElementById('menu').style.borderBottomLeftRadius = '0';
  }else{
    document.getElementById('menu').style.borderRadius = '10px';
  }
}

//  https://fakestoreapi.com/products

  let grid = document.querySelector(".products");
  let filterInput = document.getElementById("filterInput");
  
  fetch('https://fakestoreapi.com/products?limit=8')
      .then(res => res.json())
      .then(json =>{
  
          // iterating products
          for (let value of json){
              addElement(grid, value)
          }
          
      });
  
  
  // add event listener
  filterInput.addEventListener('keyup', filterProducts);
  
  // callback function 
  function filterProducts(){
      let filterValue = filterInput.value.toUpperCase();
      let item = grid.querySelectorAll('.item')
      // console.log(filterValue);
  
      for (let i = 0; i < item.length; i++){
          let span = item[i].querySelector('.title');
  
          if(span.innerHTML.toUpperCase().indexOf(filterValue) > -1){
              item[i].style.display = "initial";
          }else{
              item[i].style.display = "none";
          }
  
      }
  }
    
  // get value from the api create dynamic element
  function addElement(appendIn, value){
      let div = document.createElement('div');
      div.className = "item justify-self-center";
  
      let { image, title, category, price, id } = value;
  
      div.innerHTML = `
              <img src="${image}" class="bg-cover img mx-auto" alt="img1">
              <div class="text-center py-3 font-poppins">
                  <h1 class="text-lg title">${title}</h1>
                  <a href="#product/${id}" class="block"><span class="text-sm text-red-400">${category}</span></a>
                  <span class="block py-3">$<span class="text-md">${price}</span></span>
                  <button class="border-2 px-8 py-1 bg-yellow-400 border rounded-md">Buy Now</button>
              </div>
      `;
      appendIn.appendChild(div);
  }

main()

