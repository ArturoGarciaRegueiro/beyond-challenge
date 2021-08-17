import express from 'express';

export class DateRequest{ 
    private date:string;
    constructor(req: express.Request){ 
        this.date = req.body.date;
    }

    public getDate(): string{
        return this.date;
    }

}