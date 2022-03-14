let dateDiff = (date1, date2) => {
    let diff = {}                           // Initialisation du retour
    let tmp = date2 - date1;

    tmp = Math.floor(tmp / 1000);             // Nombre de secondes entre les 2 dates
    diff.sec = tmp % 60;                    // Extraction du nombre de secondes

    tmp = Math.floor((tmp - diff.sec) / 60);    // Nombre de minutes (partie entière)
    diff.min = tmp % 60;                    // Extraction du nombre de minutes

    tmp = Math.floor((tmp - diff.min) / 60);    // Nombre d'heures (entières)
    diff.hour = tmp % 24;                   // Extraction du nombre d'heures

    tmp = Math.floor((tmp - diff.hour) / 24);   // Nombre de jours restants
    diff.day = tmp;

    return diff;
}
let getDiff = () => {
    date1 = new Date('2022-03-14 00:00:00');
    date2 = new Date('2023-01-01 00:00:00');
    return diff = dateDiff(date1, date2);
}

module.exports = {
    dateDiff,
    getDiff
}

