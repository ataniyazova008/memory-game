let box = document.querySelector(".box")
let header = document.querySelector("header")
let data = [
    "photos/ananas.png",
    "photos/banan.png",
    "photos/anjir.jpg",
    "photos/uzum3.jpg",
    "photos/zebra.jpg",
    "photos/basseyn.jpg",
    "photos/behi.jpg",
    "photos/bori.jpg",
    "photos/jip.jpg",
    "photos/kaft.jpg",
    "photos/velosiped.jpg",
    "photos/yaxta.jpg",
 
]

header.onclick = () => {
    box.remove()
}
for (let i = 0; i <= 11; i++) {
    let num = document.createElement("div")
    let img = document.createElement("img");
    num.classList.add("numbers")
    num.textContent = i + 1;
    num.onclick = ()=> {
        img.src = data[i]; 
        num.textContent =""
        // img.alt = `Image ${i + 1}`;
        num.appendChild(img); 
    }
    box.appendChild(num)
}