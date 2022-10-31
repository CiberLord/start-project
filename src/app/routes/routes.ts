import { Bundles, IRoute } from '../../types/common';

export const routes: IRoute[] = [
    {
        pattern: '/',
        name: 'index',
        bundleName: Bundles.index,
    },
    {
        pattern: '/main',
        name: 'index',
        bundleName: Bundles.index,
    },
];
