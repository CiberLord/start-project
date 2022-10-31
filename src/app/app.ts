import express from 'express';
import { PageInitializer } from './libs/PageInitializer';
import { Bundles } from '../types/common';
import * as mw from './middlewares';
import { getConfig } from './configs/default';
// import { collectDefaultMetrics } from './libs/prometheus';

const app = express();

const configs = getConfig();

// collectDefaultMetrics();

const pageInitializer = new PageInitializer({
    rootBundlePath: configs.clientDir,
    bundleNames: [Bundles.index],
    templatePath: configs.templatePath,
});

app.use(mw.startTime);
app.use(express.static(configs.clientDir));
app.use(mw.ping);
app.use(mw.metrics());
app.use(mw.pages(pageInitializer));
app.use(mw.render);
app.use(mw.errors);

export { app };
