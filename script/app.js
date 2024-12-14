let button1 =document.querySelector('.button1');
let h1 = document.querySelector('h1');
let b = true;
let l = 0

button1.onclick = function(){
    if (b) {
        b = false
        button1.innerHTML = `<i class="fa-solid fa-stop"></i>`
    }
    else {
        l++
        h1.textContent = l
        b = true
         button1.innerHTML = `<i class="fa-solid fa-play"></i>`
    }
}