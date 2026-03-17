
function asyncHandler(fn) {
  return function (req, res, next) {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}


function errorHandler(err, req, res, next) {
    let statusCode = err.statusCode || 500;
    let message = err.message || 'Internal Server Error';
    let details = err.details || null;

    res.status(statusCode).json({
        error: statusCode,
        message,
        details
        
    });
}

module.exports = {errorHandler,asyncHandler};