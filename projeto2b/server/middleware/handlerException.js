const handlerException = (err, req, res, next) => {

    console.error(err.message)
    res.status(400).send(err.message);
}
module.exports = handlerException;