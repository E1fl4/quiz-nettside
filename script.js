let spørsmål = [
    {
        tekst: "Hva er det riktige svaret på dette spørsmålet?",
        riktig: 2,
        svar: [
            "???",
            "bruh",
            "spør Osloskolen-GPT",
            "nei"
        ]
    },
    {
        tekst: "Hvor ofte burde du bruke Osloskolen-GPT?",
        riktig: 1,
        svar: [
            "???",
            "Hver dag 👍",
            "bruh",
            "nei"
        ]
    }
];

let n = 0; // n er indeks til aktivt spørsmål
let poeng = 0;

function setTekst() {
    document.querySelector(".spørsmål-tekst").textContent = spørsmål[n].tekst;
    document.querySelector(".svar0").textContent = spørsmål[n].svar[0];
    document.querySelector(".svar1").textContent = spørsmål[n].svar[1];
    document.querySelector(".svar2").textContent = spørsmål[n].svar[2];
    document.querySelector(".svar3").textContent = spørsmål[n].svar[3];
}
setTekst();

function svarCallback(svar) {
    if (svar == spørsmål[n].riktig) poeng++;
    if (spørsmål[++n]) setTekst();
    else console.log("ferdig");
}

document.querySelector(".svar0").addEventListener("click", () => svarCallback(0));
document.querySelector(".svar1").addEventListener("click", () => svarCallback(1));
document.querySelector(".svar2").addEventListener("click", () => svarCallback(2));
document.querySelector(".svar3").addEventListener("click", () => svarCallback(3));
