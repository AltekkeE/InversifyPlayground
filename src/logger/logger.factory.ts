import * as Winston from 'winston';

export class LoggerFactory {

    public static createLogger(level: LogLevel, dirName?: string): Winston.LoggerInstance {
        let label = 'default';
        if (dirName) {
            label = dirName.match(/([^\/]*)\/*$/)[1];
        }

        let fileTransportOptions: Winston.FileTransportOptions = {
            filename: 'logs/recruitler.log',
            json: false,
            label: label,
            level: level,
            maxFiles: 100,
            maxsize: 100000000,
            showLevel: true,
            tailable: true,
            timestamp: () => true,
            zippedArchive: true,
        };

        let consoleTransportOptions: Winston.ConsoleTransportOptions = {
            colorize: true,
            json: false,
            label: label,
            level: 'verbose',
            showLevel: true,
            timestamp: true
        };

        let loggerOptions: Winston.LoggerOptions = {
            transports: [
                new Winston.transports.Console(consoleTransportOptions),
                new Winston.transports.File(fileTransportOptions)
            ]
        };

        let logger = Winston.loggers.add(label, loggerOptions);
        return logger;
    }

}

type LogLevel = 'error' | 'warn' | 'info' | 'debug' | 'silly';
