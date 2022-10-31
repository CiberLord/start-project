import { Request, Response, NextFunction } from 'express';

export interface IStartTimeRequest extends Request {
    startTime: number;
}

export const startTime = (req: IStartTimeRequest, res: Response, next: NextFunction) => {
    req.startTime = Date.now();

    next();
};
