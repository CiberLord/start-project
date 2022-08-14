import { Statuses } from '../types';

const NOT_FOUND = 404;

export class NotFoundError extends Error {
    status = Statuses.NOT_FOUND;
    code = NOT_FOUND;
    url: string;

    constructor(path: string) {
        super();

        this.url = path;
    }
}
