function residential() {
  var resnumapp = parseInt($("#resnuapp").val()) || 0;

  var resnumfloor = parseInt($("#resnumfloor").val()) || 0;

  var basement = parseInt($("#basement").val()) || 0;
  var resSTD = $("#standard").is(":checked");

  var resPRE = $("#premium").is(":checked");

  var resEX = $("#excelium").is(":checked");

  var floor20 = Math.ceil(resnumfloor / 20);

  var cage = Math.ceil(resnumapp / resnumfloor / 6);

  var cagecol = (document.getElementById("cagecol").value =
    Math.ceil((resnumapp / resnumfloor / 6) * floor20) || 0);

  if (resSTD == true) {
    document.getElementById("total").value =
      "$ " + (cages * 7565 * 1.1).toFixed(2);
  }
  if (resPRE == true) {
    document.getElementById("total").value =
      "$ " + (cages * 12345 * 1.13).toFixed(2);
  }
  if (resEX == true) {
    document.getElementById("total").value =
      "$ " + (cages * 15400 * 1.16).toFixed(2);
  } else {
    $("#total").val("");
    $("#cagecol").val("");
  }
}

function testt() {
  if (
    document.getElementById("resnumapp").value &&
    document.getElementById("resnumflour").value
  ) {
    var nbrappart = document.getElementById("resnumapp").value;
    var nbrfloor = document.getElementById("resnumfloor").value;

    var moyennepersonne = nbrappart / nbrfloor;
    var nbrascenseur = moyennepersonne / 6;
    var colonne = nbrfloor / 20;
    var total = nbrascenseur + colonne;

    document.getElementById("total").value = total;
    consol.log(total);
  } else {
    $("#total").val("");
    $("#cagecol").val("");
  }
}

$("#total").val(nbrascenseur);

document.getElementById("total").value = nbrascenseur;
