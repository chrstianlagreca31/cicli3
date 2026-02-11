let scelta;

while (true) {

    scelta = prompt(
        "Benvenuto al distributore!\n" +
        "Seleziona una bevanda:\n" +
        "1 - Acqua\n" +
        "2 - Coca Cola\n" +
        "3 - Birra"
    );

    if (scelta === "1") {
        console.log("E' stata selezionata l'acqua");
        break;
    } else if (scelta === "2") {
        console.log("E' stata selezionata coca cola");
        break;
    } else if (scelta === "3") {
        console.log("E' stata selezionata birra");
        break;
    } else {
        alert("Scelta non valida. Riprova.");
    }
}
