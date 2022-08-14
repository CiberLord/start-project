import { Request } from 'express';

export interface IPagesMiddleWareRequest extends Request {
    html?: string;
}
