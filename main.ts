import {Serie} from "./serie.js";
import {series} from "./data.js";

let datos: HTMLElement = document.getElementById("datosSeries")!;
let average: HTMLElement = document.getElementById("avg")!;

cargarDatos(series);
average.innerHTML = `<p>Seasons average: ${averageCalc(series)}</p> `;

function cargarDatos(series: Serie[]) {
    series.forEach(value => {
        let tr: HTMLElement = document.createElement("tr");
        tr.setAttribute("class", "clickable");
        tr.innerHTML = `
            <th scope="row">${value.getId()}</th>
            <td><a href="${value.getPaginaWeb()}" target="_blank">${value.getNombre()}</a></td>
            <td>${value.getPlataforma()}</td>
            <td>${value.getTemporadas()}</td>
            `
        datos.appendChild(tr);
    });
}

function averageCalc(series: Serie[]) {
    let average: number = 0;
    let cant: number = 0;
    series.forEach(value => {
        cant++;
        average += value.getTemporadas();
    });
    return average/cant;
}
