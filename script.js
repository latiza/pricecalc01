function szamitas() {

    let bruttoroma = Math.round(rom.value * ((1 + (romrep.value) / 100) * (rombizt.checked ? "1.12" : "1") * romfo.value));

    let bruttojordan = Math.round(jord.value * ((1 + jordrep.value) / 100) * (jordbizt.checked ? "1.12" : "1") * jordfo.value);

    let bruttotorok = Math.round(torok.value * ((1 + torokrep.value) / 100) * (torokbizt.checked ? "1.12" : "1") * torokfo.value);

    let bruttomarok = Math.round(mar.value * ((1 + marrep.value) / 100) * (marbizt.checked ? "1.12" : "1") * marfo.value);

    document.getElementById('romb').value = bruttoroma;
    document.getElementById('jordb').value = bruttojordan;
    document.getElementById('torokb').value = bruttotorok;
    document.getElementById('marb').value = bruttomarok;

    document.getElementById('bsum').value = bruttoroma + bruttojordan + bruttotorok + bruttomarok;

}