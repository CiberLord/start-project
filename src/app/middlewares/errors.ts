import { ErrorRequestHandler } from 'express';
import { NotFoundError } from '../libs/errors/NotFoundError';
import { logger } from '../libs/logger';

export const errors: ErrorRequestHandler = (err, req, res, next) => {
    logger.debug(err);

    if (err instanceof NotFoundError) {
        return res.status(err.code).send('<h1>404! Not found</h1>');
    }

    return res.status(500).send('<h1>500! Internal error</h1>');
};
