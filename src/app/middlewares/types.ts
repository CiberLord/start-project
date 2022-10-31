import { Request } from 'express';
import { IStartTimeRequest } from './startTime';

export interface IPagesMiddleWareRequest extends Request, IStartTimeRequest {
    html?: string;
}
