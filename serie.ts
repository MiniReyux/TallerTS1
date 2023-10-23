export class Serie {
    id: number;
    nombre: string;
    plataforma: string;
    temporadas: number;
    info: string;
    paginaWeb: string;
    imagen: string;

    constructor(id: number, nombre: string, plataforma: string, temporadas: number, info: string, paginaWeb: string, imagen: string) {
        this.id = id;
        this.nombre = nombre;
        this.plataforma = plataforma;
        this.temporadas = temporadas;
        this.info = info;
        this.paginaWeb = paginaWeb;
        this.imagen = imagen;
    }
    getId() {
        return this.id;
    }
    getNombre() {
        return this.nombre;
    }
    getPlataforma() {
        return this.plataforma;
    }
    getTemporadas() {
        return this.temporadas;
    }
    getInfo() {
        return this.info;
    }
    getPaginaWeb() {
        return this.paginaWeb;
    }
    getImagen() {
        return this.imagen;
    }
}