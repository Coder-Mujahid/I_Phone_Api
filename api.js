function loadData(){
  fetch('https://openapi.programming-hero.com/api/phones?search=samsung')
  .then(Response=>Response.json())
  .then(data=>displaydata({data}))
}
function displaydata(data){
const display=document.getElementById('display')
data.data.data.forEach(element => {
    const div=document.createElement('div')
    const {phone_name:name,brand,slug:model,image}=element
    div.innerHTML=`
  
<div class="w-full bg-white border border-gray-200 mb-5 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center justify-center">
    <img id="img" class="p-8 rounded-t-lg w-full md:w-auto" src="${image}" alt="product image" />
    </div>
<div class="px-5 pb-5">
        <h5 id="name" class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${name}</h5>
    <div class="flex items-center mt-2.5 mb-5">
    <ul class="flex gap-2 text-xl text-orange-500">
      <li><i class='bx bxs-star'></i></li>
      <li><i class='bx bxs-star'></i></li>
      <li><i class='bx bxs-star'></i></li>
      <li><i class='bx bxs-star'></i></li>
      <li><i class='bx bxs-star-half' ></i></li>
    </ul>
        <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
    </div>
    <div class="flex items-center justify-between">
        <span class="text-3xl font-bold text-gray-900 dark:text-white">$<span id="price"> 599</span></span>
        <a onclick="cart()"  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
    </div>
</div>
</div>

    
    `
    display.appendChild(div)
    
  });
 }

loadData();




function cart(){
  
  const list=document.getElementById('list')

  const price=document.getElementById('price')
  const pricevalue=parseFloat(price.innerText)

  const img=document.getElementById('img').src

  const name=document.getElementById('name')
  const namevalue=name.innerText

  const total_price=document.getElementById('total_price')
  const total_pricevalu=parseFloat(total_price.innerText)
  console.log(total_pricevalu);

  total_price.innerText=pricevalue+total_pricevalu
  


  const li = document.createElement('li')
    li.innerHTML = `
   <div id="card" class="w-full flex gap-5 items-center  shadow-md shadow-black p-2 bg-slate-300 rounded mb-2">
   <aside>
       <img class="w-16" src="${img}" alt="image">
   </aside>
   <h2 class="text-lg font-semibold text-black capitalize"> ${namevalue}</h2>
   <h2 class="card-title ">Price $ <span class="text-red-500">${pricevalue}</span></h2>
    </div>
   `
   list.appendChild(li)

   window.scroll({
    top: 100,
    left: 100,
    behavior: "smooth",
  });
}