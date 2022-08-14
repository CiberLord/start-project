class Logger {
    debug = (data: unknown) => {
        // eslint-disable-next-line no-console
        console.log(data);
    };

    error = (data: unknown) => {
        // eslint-disable-next-line no-console
        console.error(data);
    };
}

const logger = new Logger();

export { logger };
