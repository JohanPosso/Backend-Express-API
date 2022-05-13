function logError(err, req, res, next) {
  //Middleware para loguear errores general
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  //Formato o estandar de cuando haya error
  res.status(500).json({
    message: err.message,
    stack: err.stack, //Para saber donde ocurrio el error
  });
}

function boomErrorHandler(err, req, res, next) {
  //Formato o estandar de cuando haya error
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}
module.exports = { logError, errorHandler, boomErrorHandler };
