const { default: mongoose } = require("mongoose");
const UniversidadeModel = require("../../database/universidadeModel.js");

const findByIdUniversidade = async (id) => {
    if (!mongoose.isValidObjectId(id)) {
        throw new Error(`id ${id} invalido!`);
    }

    return await UniversidadeModel.findById(id);
}

const findAllUniversidadeFilterAndPagnation = async (pagina, limite, campos, query, result) => {

    let dados;
    UniversidadeModel
        .find(query, campos)
        .skip(pagina * limite)
        .limit(limite)
        .exec((err, universidadeResult) => {
            if (err) throw err;

            UniversidadeModel.countDocuments(query).exec((err, countResult) => {
                if (err) throw err;

                dados = {
                    pagina: pagina,
                    total: countResult,
                    universidades: universidadeResult
                }

                return result(dados);
            })
        });

}

const saveUniversidade = async (universidade, result) => {

    UniversidadeModel.exists(
        {
            country: universidade.country,
            "state-province": universidade["state-province"],
            name: universidade.name
        }, async (err, idTest) => {
            if (err) throw err;
            if (idTest) return result(`entidade de id${idTest._id} ja existente!`);

            let novaUniversidade = new UniversidadeModel({ ...universidade });
            let universidadeResult = await novaUniversidade.save();
            return result(universidadeResult);
        });

}

const updateUniversidade = async (id, campos) => {
    if (!mongoose.isValidObjectId(id)) {
        throw new Error(`id ${id} invalido!`);
    }

    let result = await UniversidadeModel.findByIdAndUpdate(id, campos, { returnDocument: "after" });

    return result;
}

const deleteUniversidade = async (id) => {
    if (!mongoose.isValidObjectId(id)) {
        throw new Error(`id ${id} invalido!`);
    }

    let result = await UniversidadeModel.findByIdAndDelete(id);
    return result;
}

module.exports = {
    findAllUniversidadeFilterAndPagnation,
    saveUniversidade,
    updateUniversidade,
    deleteUniversidade,
    findByIdUniversidade
}