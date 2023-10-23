import { series } from "./data.js";
var datos = document.getElementById("datosSeries");
var carta = document.getElementById("cartaInfo");
var average = document.getElementById("avg");
cargarDatos(series);
average.innerHTML = "<p>Seasons average: ".concat(averageCalc(series), "</p> ");
function cargarDatos(series) {
    series.forEach(function (value) {
        var tr = document.createElement("tr");
        tr.setAttribute("class", "clickable");
        tr.innerHTML = "\n            <th scope=\"row\">".concat(value.getId(), "</th>\n            <td><a href=\"").concat(value.getPaginaWeb(), "\" target=\"_blank\">").concat(value.getNombre(), "</a></td>\n            <td>").concat(value.getPlataforma(), "</td>\n            <td>").concat(value.getTemporadas(), "</td>\n            ");
        datos.appendChild(tr);
        tr.onclick = function () {
            cargarCarta(value);
        };
    });
}
function averageCalc(series) {
    var average = 0;
    var cant = 0;
    series.forEach(function (value) {
        cant++;
        average += value.getTemporadas();
    });
    return average / cant;
}
function cargarCarta(serie) {
    carta.innerHTML = "\n        <div class=\"card\">\n         <div class=\"card-header\"><img src=\"".concat(serie.getImagen(), "\" alt=\"").concat(serie.getNombre(), "\" width=\"473\" height=\" \"></div>\n         <div class=\"card-title\">").concat(serie.getNombre(), "</div>\n         <div class=\"card-body\">").concat(serie.getInfo(), "</div>\n         <div class=\"card-footer\"><a href=\"").concat(serie.getPaginaWeb(), "\" target=\"_blank\">").concat(serie.getPaginaWeb(), "</a></div>\n        </div>\n        ");
}
