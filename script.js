let spørsmål = [
    {
        tekst: "Hva er det riktige svaret på dette spørsmålet?",
        riktig: "spør Osloskolen-GPT",
        svar: [
            "???",
            "bruh",
            "spør Osloskolen-GPT",
            "nei"
        ]
    },
    {
        tekst: "Hvor ofte burde du bruke Osloskolen-GPT?",
        riktig: "Hver dag 👍",
        svar: [
            "???",
            "Hver dag 👍",
            "bruh",
            "nei"
        ]
    },
    {
        tekst: "Hva står RAM for?",
        riktig: "Random Access Memory",
        svar: [
            "Random Access Memory",
            "Random Access Osloskolen-GPT",
            "Rapid Access Memory",
            "Really Angry Memory"
        ]
    },
    {
        tekst: "Hva står CPU for?",
        riktig: "Central Processing Unit",
        svar: [
            "Clash of Clans",
            "Cookie Processing Unit",
            "Combat Power Unit",
            "Central Processing Unit"
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

function avsluttQuiz() {
    console.log("quiz ferdig.\npoeng: " + poeng);
    document.querySelector(".poeng").textContent = poeng;
    document.querySelector(".spørsmål-container").style.display = "none";
    document.querySelector(".resultat-container").style.display = "block";
}

function svarCallback(svar) {
    if (svar == spørsmål[n].riktig) poeng++;
    if (spørsmål[++n]) setTekst();
    else avsluttQuiz();
}

document.querySelector(".svar0").addEventListener("click", () => svarCallback(spørsmål[n].svar[0]));
document.querySelector(".svar1").addEventListener("click", () => svarCallback(spørsmål[n].svar[1]));
document.querySelector(".svar2").addEventListener("click", () => svarCallback(spørsmål[n].svar[2]));
document.querySelector(".svar3").addEventListener("click", () => svarCallback(spørsmål[n].svar[3]));
document.querySelector(".restart-btn").addEventListener("click", () => {
    n = 0;
    poeng = 0;
    setTekst();
    document.querySelector(".spørsmål-container").style.display = "block";
    document.querySelector(".resultat-container").style.display = "none";
});
