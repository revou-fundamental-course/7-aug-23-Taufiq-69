function Luas(){
    let tinggi = document.getElementById("tinggi-input").value;
    let alas = document.getElementById("alas-input").value;

    hasil.innerText = (1/2*parseInt(alas)*parseInt(tinggi));
}

function Keliling(){
    let sisiA = document.getElementById("sisi-A").value;
    let sisiB = document.getElementById("sisi-B").value;
    let sisiC = document.getElementById("sisi-C").value;
    hasil.innerText = (parseInt(sisiA)+parseInt(sisiB)+parseInt(sisiC));
}
function reset(){
    let tinggi = document.getElementById("tinggi-input").value = ("");
    let alas = document.getElementById("alas-input").value = ("");
    let sisiA = document.getElementById("sisi-A").value = ("");
    let sisiB = document.getElementById("sisi-B").value = ("");
    let sisiC = document.getElementById("sisi-C").value = ("");

    hasil.innerText = ("?");
    
}

