
let refresh = document.getElementById('Refrescar');
refresh.addEventListener('click', _ => {
location.reload();
})

function Comunicación(){
document.getElementById("Medios").innerHTML = "gomezemilio@yahoo.com.ar - 011 4532-5498";
}

const d = new Date();
document.getElementById("Hora").innerHTML = d;