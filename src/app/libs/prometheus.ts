import promClient from 'prom-client';

const register = new promClient.Registry();

const collectDefaultMetrics = () => {
    promClient.collectDefaultMetrics({
        register,
    });
};

const pageVisitTotalCounter = new promClient.Counter({
    name: 'page_visit_total_count',
    help: 'Count pages visit',
    labelNames: ['pageType'],
    registers: [register],
});

const pageResponseTimeHistogram = new promClient.Histogram({
    name: 'page_response_time',
    help: 'Check page response time',
    labelNames: ['pageType'],
    registers: [register],
});

export { register, pageVisitTotalCounter, collectDefaultMetrics, pageResponseTimeHistogram };
