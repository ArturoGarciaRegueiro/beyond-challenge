import { responseWhitelist } from "express-winston";
import { SecondsPerUnit } from "./date.parser.seconds-per-unit";

export class DateParser{  
    // for adding a new unit: add new element in the array bellow
    static timeFractions: Array<SecondsPerUnit> = 
    [
        new SecondsPerUnit(31556952, "year"),
        new SecondsPerUnit(2592000, "month"),
        new SecondsPerUnit(86400, "day"), 
        new SecondsPerUnit(3600, "hour"),
        new SecondsPerUnit(60, "minute"),
        new SecondsPerUnit(1, "second"),
    ];

    private seconds:number; 
    private isFuture:boolean;

    constructor(seconds:number){
        this.isFuture = seconds < 0;
        this.seconds = Math.abs(seconds);
    }

    public getString(): string{ 
        let response:string = "";
        let carry:number = this.seconds;
        let units:number;  
        DateParser.timeFractions.forEach(timeFraction => {
            let previous: number = carry;
            units = Math.floor(carry / timeFraction.getSeconds());
            carry =  units >= 1 ? carry - units * timeFraction.getSeconds() : carry; 
            response = response + this.print(units, previous, carry, timeFraction.getKey())
        });
        return this.isFuture ? "Within " + response : response + " ago";
    }

    private print(units:number, time:number, carry:number, key:string): string{
        return units < 1 ? "" : this.getPrefix(time, carry) +  units + " " + key + this.getSuffix(units);
    }

    private getPrefix(time:number, carry:number): string{
        return time == this.seconds ? "" :  this.getCommaOrAnd(carry);
    }

    private getCommaOrAnd(carry:number){
        return carry < 1 ? " and " : ", " ;
    }

    private getSuffix(units:number): string{
        return units > 1 ? "s" : "";
    }

}