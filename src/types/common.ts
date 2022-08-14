export enum Bundles {
    index = 'index',
}

export interface IRoute {
    pattern: string;
    name: string;
    bundleName: string;
}
