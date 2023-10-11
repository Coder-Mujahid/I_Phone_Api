function loadData(){
  fetch('https://openapi.programming-hero.com/api/phones?search=iphone&fbclid=IwAR3Hm5vHUp2yIQvqPBWdEf-I5UPT2W6B-z3B5ZQpubDTn_2wlLPy2eOEIwM/iPhone%2013%20mini')
  .then(Response=>Response.json())
  .then(data=>displaydata(data))
}
function displaydata(data){
const display=document.getElementById('display')
  Object.values(data).forEach(element => {
    const div=document.createElement('div')
    console.log(element);
    div.innerHTML=`
    <h2>mujahid</h2>
    
    `
    display.appendChild(div)
  });
 }

loadData();