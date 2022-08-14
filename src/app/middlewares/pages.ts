import { Response, NextFunction } from 'express';
import { PageInitializer } from '../libs/PageInitializer';
import { getRoute } from '../routes';
import { IPagesMiddleWareRequest } from './types';

export const pages = (pageInitializer: PageInitializer) => (req: IPagesMiddleWareRequest, res: Response, next: NextFunction) => {
    const route = getRoute(req.path);

    if (!route) {
        return next();
    }

    req.html = pageInitializer.render(route.bundleName, {});

    return next();
};
