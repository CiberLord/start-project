import path from 'path';
import { Request, Response, NextFunction } from 'express';

export const favicon = (req: Request, res: Response, next: NextFunction) => {
    if (req.url === '/favicon.ico') {
        return res.sendFile(path.join(process.cwd(), 'favicon.png'));
    }

    next();
};
