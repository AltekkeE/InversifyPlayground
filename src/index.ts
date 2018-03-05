import { Container } from 'inversify';
import 'reflect-metadata';
import * as Winston from 'winston';
import { AppContainer } from './app-container';
import { bootstrap } from './bootstrap';
import { log } from './logger/logger';

async function runApp(): Promise<any> {
    log.info('Starting Up');
    const app = await bootstrap(
        AppContainer.getContext(),
        process.env.PORT || 3000,
        process.env.DB_HOST || 'localhost',
        process.env.DB_NAME || 'nrg',
    );
    return app;
}

(async () => {
    await runApp();
})();

export { runApp };


// import { inject, injectable } from 'inversify';

// @injectable()
// class Dependency { }

// @injectable()
// class Sample {
//     @inject(Dependency)
//     public dependency: number; // this is clearly wrong
// }

// const container = new Container();

// container.bind(Dependency).toSelf();
// container.bind(Sample).toSelf();

// const sample = container.get(Sample);
