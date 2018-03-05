import * as Busboy from 'busboy';
import * as express from 'express';
import { NextFunction, Request, Response } from 'express-serve-static-core';
import * as fs from 'fs';
import { inject, injectable } from 'inversify';
import { controller, httpGet, httpPost, httpPut, next, request, response } from 'inversify-express-utils';

import { TYPES } from '../constant/types';

@injectable()
@controller('')
export class AuthenticationController {


    @httpPost('/login')
    public login(@request() request: Request, @response() response: Response, @next() next: NextFunction): Response {
        return response;
    }


    @httpGet('/authenticated')
    public isAuthenticated(@request() request: Request, @response() response: Response, @next() next: NextFunction): void {
    }
}
