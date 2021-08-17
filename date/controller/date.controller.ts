import express from 'express';
import { DateRequest } from '../request/date.request';

import dateService from '../service/date.service'

class DateController {
    async calculateDifference(req: express.Request, res: express.Response){
        let date: string = new DateRequest(req).getDate();
        const difference: string = await dateService.difference(date); 
        res.status(200).send(difference);
    }
}

export default new DateController();