import { Bundles, IRoute } from '../../types/common';

const routes: IRoute[] = [
    {
        pattern: '/',
        name: 'index',
        bundleName: Bundles.index,
    },
];
const getRoute = (path: string): IRoute | undefined => {
    return routes.find(route => {
        if (route.pattern === path) {
            return true;
        }

        return false;
    });
};

export { routes, getRoute };
