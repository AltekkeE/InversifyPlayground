import * as fs from 'fs';
import * as Winston from 'winston';
import { LoggerFactory } from './logger.factory';

let logDir = 'logs';
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

let logger: Winston.LoggerInstance = LoggerFactory.createLogger('info');
logger.info('Logging Started');
export const log = logger;
