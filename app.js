const form = document.querySelector(".form");
const id = document.querySelector(".id");
const ad = document.querySelector(".ad");
const soyad = document.querySelector(".soyad");
const parol = document.querySelector(".parol");
const submit = document.querySelector(".submit");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    let obj = {};

obj.id =id.value;
obj.ad = ad.value;
obj.soyad = soyad.value;
obj.parol = parol.value;

console.log (obj);

axios.post("http://localhost:3000/", obj)

})