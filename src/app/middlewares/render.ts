import { IPagesMiddleWareRequest } from './types';
import { Response } from 'express';
import { NotFoundError } from '../libs/errors/NotFoundError';

export const render = (req: IPagesMiddleWareRequest, res: Response) => {
    if (req.html) {
        return res.send(req.html);
    }

    throw new NotFoundError(req.url);
};
