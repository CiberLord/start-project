import path from 'path';
import fs from 'fs';
import ejs from 'ejs';
import { logger } from '../logger';

type PathName = string;

type AssetName = string;

export interface IPageInitializerOptions {
    rootBundlePath: string;
    bundleNames: string[];
    templatePath: PathName;
}

export class PageInitializer {
    rootBundlePath: string;

    bundleNames: string[];

    bundles: Record<
        string,
        {
            styles: AssetName[];
            scripts: AssetName[];
        }
    >;

    template: string;

    constructor({ rootBundlePath, bundleNames, templatePath }: IPageInitializerOptions) {
        this.rootBundlePath = rootBundlePath;
        this.bundleNames = bundleNames;
        this.template = String(fs.readFileSync(templatePath));
        this.initializeBundles();
    }

    initializeBundles = () => {
        try {
            this.bundles = this.bundleNames.reduce(
                (acc, bundleName) => {
                    const bundleDir = path.resolve(this.rootBundlePath, bundleName);

                    const dirs = fs.readdirSync(bundleDir);

                    acc[bundleName] = dirs
                        .filter(assetName => {
                            const stats = fs.statSync(path.resolve(bundleDir, assetName));

                            return stats.isFile();
                        })
                        .reduce(
                            (acc, assetName) => {
                                const { ext } = path.parse(assetName);

                                if (ext === '.js') {
                                    acc.scripts.push(path.join(bundleName, assetName));
                                }

                                if (ext === '.css') {
                                    acc.styles.push(path.join(bundleName, assetName));
                                }

                                return acc;
                            },
                            { styles: [], scripts: [] } as {
                                styles: AssetName[];
                                scripts: AssetName[];
                            },
                        );

                    return acc;
                },
                {} as Record<
                    string,
                    {
                        styles: AssetName[];
                        scripts: AssetName[];
                    }
                >,
            );
        } catch (e) {
            logger.error(e);
        }
    };

    render = (bundleName: string, data: Record<string, unknown>) => {
        const commonData = {
            ...data,
            scripts: this.bundles[bundleName].scripts,
            styles: this.bundles[bundleName].styles,
            favicon: '/favicon.svg',
        };

        return ejs.render(this.template, commonData);
    };
}
