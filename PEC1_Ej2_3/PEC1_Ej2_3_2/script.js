const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

const moneda = document.getElementById('moneda');
const currencyEl = document.getElementById ('currency');

var programacio = [
    { "Sala": 1, "Pelicula": "Dune", "Extra": "", "Preu": 7, "Moneda": "EUR"},
    { "Sala": 2, "Pelicula": "Dune", "Extra": "(DOLBY ATMOS)", "Preu": 9, "Moneda": "EUR"},
    { "Sala": 3, "Pelicula": "Dune", "Extra": "(VOS)", "Preu": 7, "Moneda": "EUR"},
    { "Sala": 4, "Pelicula": "FREEGUY", "Extra": "", "Preu": 7, "Moneda": "EUR"},
    { "Sala": 5, "Pelicula": "FREEGUY", "Extra": "(DOLBY ATMOS)", "Preu": 9, "Moneda": "EUR"},
    { "Sala": 6, "Pelicula": "FREEGUY", "Extra": "(3D)", "Preu": 12, "Moneda": "EUR"},
    { "Sala": 7, "Pelicula": "Escape Rppm", "Extra": "", "Preu": 7, "Moneda": "EUR"}
]

console.log(programacio[0]);

populateUI();



let tiketPrice = +movieSelect.value;
let rate = 1;


// Salvar seleccion
function setMovieDate(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex)
    localStorage.setItem('selectedMoviePrice', moviePrice)
}


// Cambiar precio entrada
function calcuTiket() {
    for (let i = 0; i < movie.length; i++) {
        var vellText = `${programacio[i].Pelicula} ${programacio[i].Extra}`;
        var vellPreu = programacio[i].Preu;
        var nouPreu = vellPreu * rate;
        nouPreu = nouPreu.toFixed(2)
        var noutext = `${vellText} -> ${nouPreu} ${currencyEl.value}`;
        document.getElementById('movie')[i].innerHTML = noutext;
    }
}

// Incremento en el texto total y cuenta
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    var total1 = selectedSeatsCount * tiketPrice * rate;
    total.innerText = total1.toFixed(2);
    moneda.innerText = currencyEl.value;
}

// Seleccion de moneda
function calculate() {
    const currency_one = 'EUR';
    const currency_two = currencyEl.value;

    
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            rate = data.rates[currency_two];
            
            updateSelectedCount();
            calcuTiket();
        })
        .catch(error => window.alert(`Algo ha salido mal!,   ${error}`))
}


// Coger datos del localstorage y populate UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if(selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

// Evento seleccion de moneda
currencyEl.addEventListener('change', e => {
    rate = +e.target.value;
    setMovieDate(e.target.selectedIndex, e.target.value)

    calculate();
});


// Evento seleccion de pelicula
movieSelect.addEventListener('change', e => {
    tiketPrice = +e.target.value;
    setMovieDate(e.target.selectedIndex, e.target.value)

    updateSelectedCount();
});

// Evento click asientos
container.addEventListener('click', e => {
    if(
        e.target.classList.contains('seat') &&
        !e.target.classList.contains('occupied')) {
            e.target.classList.toggle('selected');
            calculate();
            updateSelectedCount();
    }
});


// Valors inicials despres de guardat
calcuTiket();
updateSelectedCount();