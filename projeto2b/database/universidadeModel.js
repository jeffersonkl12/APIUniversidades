let mongoose = require("mongoose");
const validator = require('validator');

let universidadeSchema = new mongoose.Schema({
    domains: [String],
    country: String,
    alpha_two_code: {
        type: String,
        minLength: 2,
        maxLength: 2,
        uppercase: true
    },
    web_pages: [{
        type: String,
        validate: (valor) => {
            return validator.isURL(valor);
        }
    }],
    "state-province": String,
    name: String
});

module.exports = mongoose.model("Universidade", universidadeSchema);