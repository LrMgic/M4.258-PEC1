const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();

let tiketPrice = +movieSelect.value;


// Salvar seleccion
function setMovieDate(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex)
    localStorage.setItem('selectedMoviePrice', moviePrice)
}


// Incremento en el texto total y cuenta
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * tiketPrice;
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


// Eventi seleccion de pelicula
movieSelect.addEventListener('change', e => {
    tiketPrice = +e.target.value;
    setMovieDate(e.target.selectedIndex, e.target.value)
    updateSelectedCount();
});

// Evento click
container.addEventListener('click', e => {
    if(
        e.target.classList.contains('seat') &&
        !e.target.classList.contains('occupied')) {
            e.target.classList.toggle('selected');

            updateSelectedCount();
    }
});


// Valors inicials despres de guardat
updateSelectedCount();