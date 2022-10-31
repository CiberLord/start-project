import { IRoute } from '../../types/common';
import { routes } from './routes';

export const getRoute = (path: string): IRoute | undefined => {
    return routes.find(route => {
        return route.pattern === path;
    });
};
