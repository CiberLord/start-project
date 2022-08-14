import { Request, Response, NextFunction } from 'express';

export const ping = (req: Request, res: Response, next: NextFunction) => {
    if (req.path === '/ping') {
        return res.send('pong');
    }

    return next();
};
