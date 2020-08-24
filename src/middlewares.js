module.exports = {
    ingredientsLengthHandler: (req, res, next) => {
        if (req.originalUrl.includes('/recipes')) {
            if (req.query.i) {
                const params = req.query.i.split(',');
                if (params.length > 3) {
                    throw ({ message: 'Invalid number of ingredients. You must select at most 3 ingredients.', status: 400 });
                }
            } else {
                throw ({ message: 'Invalid number of ingredients. You must select at least 1 ingredient.', status: 400 });
            }
        }

        next();
    },
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