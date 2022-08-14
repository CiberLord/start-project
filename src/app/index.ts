import dotenv from 'dotenv';

dotenv.config();

import { app } from './app';

app.listen(process.env.PORT, () => {
    // eslint-disable-next-line no-console
    console.log('server app started');
});
