const universidadeService = require("../service/universidadeService.js");

const findAllUniversidade = (req, res, next) => {
    let pagina = (req.query.page) || 0;
    let limite = 20;
    let query = req.query.country ? { country: req.query.country } : {};
    let campos = { _id: 1, name: 1, country: 1, ["state-province"]: 1 }
    try {
        universidadeService.findAllUniversidadeFilterAndPagnation(pagina, limite, campos, query, (result) => {
            return res.json(result)
        });
    } catch (err) {
        next(err);
    }
}


const findByIdUniversidade = async (req, res, next) => {
    let id = req.params.id;
    try {
        let result = await universidadeService.findByIdUniversidade(id);
        res.json(result);
    } catch (err) {
        next(err);
    }

}


const saveUniversidade = async (req, res, next) => {
    var universidade = req.body;
    try {
        universidadeService.saveUniversidade(universidade, (result) => {
            return res.json(result);
        });
    } catch (err) {
        next(err);
    }

}

const updateUniversidade = async (req, res, next) => {
    let id = req.params.id;
    let { web_pages, name, domains } = req.body;
    try {
        let result = await universidadeService.updateUniversidade(id, { web_pages, name, domains });
        res.json(result);
    } catch (err) {
        next(err);
    }
}

const deleteUniversidade = async (req, res, next) => {

    let id = req.params.id;
    try {
        let result = await universidadeService.deleteUniversidade(id);
        if (result) return res.json(result);

        res.json("entidade inexistente!");
    } catch (err) {
        next(err);
    }

}


module.exports = {
    findAllUniversidade,
    findByIdUniversidade,
    saveUniversidade,
    updateUniversidade,
    deleteUniversidade
}