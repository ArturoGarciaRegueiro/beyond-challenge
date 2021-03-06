import {CommonRoutesConfig} from '../common/common.routes.config';
import DateController from './controller/date.controller';
import express from 'express';

export class DateRoutes extends CommonRoutesConfig {
    constructor(app: express.Application){
        super(app, 'date');
    }

    configureRoutes(){
        this.app.get('/date', (req: express.Request, res: express.Response) => {
                res.status(200).send('Hello world');
            })
        this.app.post('/date', DateController.calculateDifference);
        return this.app;
    }
}