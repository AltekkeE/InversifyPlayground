import * as Busboy from 'busboy';
import * as express from 'express';
import { NextFunction, Request, Response } from 'express';
import * as fs from 'fs';
import { inject, injectable } from 'inversify';
import { controller, httpGet, httpPost, httpPut, next, request, response } from 'inversify-express-utils';

import { TYPES } from '../constant/types';

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
