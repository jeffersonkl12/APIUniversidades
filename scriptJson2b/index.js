import { MongoClient, ObjectId } from 'mongodb';
import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
dotenv.config({ path: "./dotenv.env" });


//config do servidor
const url = process.env.URL_DB;
const cliente = new MongoClient(url);
const datbaseNome = process.env.DATABASE_NAME;
const collectionNome = process.env.COLLECTION_NAME;
var collection = {};
const ListaUniversidades = [];
const ListaPaises = ["argentina",
    "brazil",
    "chile",
    "colombia",
    "paraguay",
    "peru",
    "suriname",
    "uruguay"];



const resposta = await fetch("http://universities.hipolabs.com/search", { method: 'GET' });

var jsonUniversidades = JSON.parse(await resposta.text());
jsonUniversidades.forEach(v => {
    if (ListaPaises.includes(v.country.toLocaleLowerCase())) {
        ListaUniversidades.push(v);
    }
})

//inicia coneccao com servidor e banco de dados, também reseta o estado do banco
async function start() {

    await cliente.connect();
    console.log('banco iniciado');
    const db = cliente.db(datbaseNome);
    collection = (await db.createCollection(collectionNome));
    await collection.insertMany(ListaUniversidades, { ordered: true });
    await cliente.close();
}

start();
