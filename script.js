let pisteet = 0;
let pisteetPerKlikki = 1;
let kehitäKlikkiHinta = 25;
let kehitäAutoklikkiHinta = 50;
let autoklikkiInterval;
let autoklikinTaso = 0;
let autoklikkiAika = 1000;
const maksimiKlikkiTaso = 10;
const maksimiAutoklikkiTaso = 10;

const pisteetElementti = document.getElementById('pisteet');
const pisteetPerKlikkiElementti = document.getElementById('pisteetPerKlikki');
const klikkaaNappi = document.getElementById('klikki');
const kehitäKlikkiNappi = document.getElementById('kehitä');
const kehitäAutoklikkiNappi = document.getElementById('autoklikki');
const kehitäTasoElementti = document.getElementById('kehitäTaso');
const autoklikkiTasoElementti = document.getElementById('autoklikkiTaso');

function päivitäPisteet() {
    pisteetElementti.textContent = `Pisteet: ${pisteet}`;
}

function päivitäTasoTekstit() {
    kehitäTasoElementti.textContent = `Klikin taso: ${pisteetPerKlikki}`;
    autoklikkiTasoElementti.textContent = `Autoklikin taso: ${autoklikinTaso}`;
    pisteetPerKlikkiElementti.textContent = `Pisteet per klikki: ${pisteetPerKlikki}`;
}

klikkaaNappi.addEventListener('click', () => {
    pisteet += pisteetPerKlikki;
    päivitäPisteet();
});

kehitäKlikkiNappi.addEventListener('click', () => {
    if (pisteetPerKlikki >= maksimiKlikkiTaso) {
        alert("Klikki on jo maksimitasolla!");
        return;
    }
    if (pisteet >= kehitäKlikkiHinta) {
        pisteet -= kehitäKlikkiHinta;
        pisteetPerKlikki += 1;
        kehitäKlikkiHinta = Math.ceil(kehitäKlikkiHinta * 2.0);
        kehitäKlikkiNappi.textContent = `Kehitä klikki (${kehitäKlikkiHinta} pistettä)`;
        päivitäPisteet();
        päivitäTasoTekstit();
    } else {
        alert("Ei tarpeeksi pisteitä!");
    }
});

kehitäAutoklikkiNappi.addEventListener('click', () => {
    if (autoklikinTaso >= maksimiAutoklikkiTaso) {
        alert("Autoklikki on jo maksimitasolla!");
        return;
    }
    if (pisteet >= kehitäAutoklikkiHinta) {
        pisteet -= kehitäAutoklikkiHinta;
        autoklikinTaso++;
        autoklikkiAika = 1000 / autoklikinTaso; 
        kehitäAutoklikkiHinta = Math.ceil(kehitäAutoklikkiHinta * 2.0);
        kehitäAutoklikkiNappi.textContent = `Kehitä autoklikki (${kehitäAutoklikkiHinta} pistettä)`;
        clearInterval(autoklikkiInterval);
        käynnistäAutoklikki();
        päivitäPisteet();
        päivitäTasoTekstit();
    } else {
        alert("Ei tarpeeksi pisteitä!");
    }
});

function käynnistäAutoklikki() {
    autoklikkiInterval = setInterval(() => {
        pisteet += pisteetPerKlikki;
        päivitäPisteet();
    }, autoklikkiAika);
}

päivitäPisteet();
päivitäTasoTekstit();
