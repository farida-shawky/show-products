let myproducts = document.querySelector(".showproducts");
let btn = document.querySelector(".btn");

async function getproducts() {
  try {
    myproducts.innerHTML = `<h5 class="text-center">Loading...</h5>`;
    let res = await fetch("https://dummyjson.com/products");
    let data = await res.json();
    myproducts.innerHTML = "";

    data.products.forEach((products) => {
      myproducts.innerHTML += `
      <div class=" col-lg-3 col-md-4 col-sm-6 col-12" >
      <div class="card h-100 shadow-2" >
  <img src="${products.thumbnail}" class="card-img-top p-2 image" alt="...">
  <div class="card-body d-flex flex-column ">
  <h5 class="card-title">${products.title}</h5>
  <p class="card-text text-secondary">${products.category}</p>
    <p class="card-text description">${products.description}</p>
    <h5 class="text-success mt-auto">$${products.price}</h5>
    <a class="btn btn-primary w-100">view product</a>
  </div>
 </div>
 </div>
      `;
    });
  } catch {}
}
btn.addEventListener("click", async () => {
  await getproducts();
});
