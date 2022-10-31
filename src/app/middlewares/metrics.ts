import { Request, Response, NextFunction } from 'express';
import { register } from '../libs/prometheus';

export const metrics = () => async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (req.path === '/metrics') {
            return res.set('Content-Type', register.contentType).end(await register.metrics());
        }

        next();
    } catch (error) {
        throw error;
    }
};
