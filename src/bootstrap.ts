import 'reflect-metadata';

import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as session from 'express-session';
import * as helmet from 'helmet';
import { Container } from 'inversify';
import * as morgan from 'morgan';
import * as passport from 'passport';
import * as LocalStrategy from 'passport-local';
import * as path from 'path';
import * as Winston from 'winston';

import { NextFunction, Request, Response } from 'express';
import { interfaces, InversifyExpressServer, TYPE } from 'inversify-express-utils';

import * as Busboy from 'busboy';
import * as fs from 'fs';
import { AppContainer } from './app-container';
import { TYPES } from './constant/types';
import { log } from './logger/logger';

let FileStore = require('session-file-store')(session);


export async function bootstrap(
    container: Container,
    appPort: number | string,
    dbHost: string,
    dbName: string,
    // ...modules: ContainerModule[]
): Promise<any> {
    if (container.isBound(TYPES.App) === false) {
        log.info('starting up');
        Winston.log('debug', 'poop');

        let server = new InversifyExpressServer(container, null);

        // tslint:disable-next-line:no-shadowed-variable
        server.setConfig((app) => {

            app.use(cookieParser());
            app.use(bodyParser.urlencoded({
                extended: true
            }));

            app.use('/', express.static(path.resolve(__dirname + '/../', 'app')));

            app.use(bodyParser.json());
            app.use(helmet());
            let router = express.Router();
            app.use('/api', router);
        });

        let app = server.build();

        log.info(`Application listening on port %d...`, appPort);
        app.listen(appPort);
        container.bind<express.Application>(TYPES.App).toConstantValue(app);
        return app;
    } else {
        return container.get<express.Application>(TYPES.App);
    }
}
