var Serie = /** @class */ (function () {
    function Serie(id, nombre, plataforma, temporadas, info, paginaWeb, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.plataforma = plataforma;
        this.temporadas = temporadas;
        this.info = info;
        this.paginaWeb = paginaWeb;
        this.imagen = imagen;
    }
    Serie.prototype.getId = function () {
        return this.id;
    };
    Serie.prototype.getNombre = function () {
        return this.nombre;
    };
    Serie.prototype.getPlataforma = function () {
        return this.plataforma;
    };
    Serie.prototype.getTemporadas = function () {
        return this.temporadas;
    };
    Serie.prototype.getInfo = function () {
        return this.info;
    };
    Serie.prototype.getPaginaWeb = function () {
        return this.paginaWeb;
    };
    Serie.prototype.getImagen = function () {
        return this.imagen;
    };
    return Serie;
}());
export { Serie };
