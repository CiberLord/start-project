import { IPagesMiddleWareRequest } from './types';
import { Response } from 'express';
import { NotFoundError } from '../libs/errors/NotFoundError';
import { pageResponseTimeHistogram, pageVisitTotalCounter } from '../libs/prometheus';

export const render = (req: IPagesMiddleWareRequest, res: Response) => {
    if (req.html) {
        pageVisitTotalCounter.inc({
            pageType: req.path,
        });

        pageResponseTimeHistogram.labels({ pageType: req.path }).observe((Date.now() - req.startTime) / 1000);

        return res.send(req.html);
    }

    throw new NotFoundError(req.url);
};
