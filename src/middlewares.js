module.exports = {
    notFoundError: (req, res, next) => {
        const error = new Error('Not found');
        error.status = 404;
        next(error);
    },
    commonErrorHandler: (error, req, res, next) => {
        res.status(error.status || 500);
        res.json({
            error: {
                message: error.message,
                status: error.status
            }
        });
    },
};