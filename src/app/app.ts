import express from 'express';
import { PageInitializer } from './libs/PageInitializer';
import { Bundles } from '../types/common';
import * as mw from './middlewares';
import { getConfig } from './configs/default';

const app = express();

const configs = getConfig();

const pageInitializer = new PageInitializer({
    rootBundlePath: configs.clientDir,
    bundleNames: [Bundles.index],
    templatePath: configs.templatePath,
});

app.use(express.static(configs.clientDir));

app.use(mw.ping);

app.use(mw.pages(pageInitializer));
app.use(mw.render);
app.use(mw.errors);

export { app };
