import {DateParser} from '../parser/date.parser';
class DateService {
    async difference(date:string) {
        let reference:Date = new Date(date);
        let now:Date = new Date();
        let diffRaw:number = now.getTime() - reference.getTime(); 
        let parser: DateParser = new DateParser(diffRaw/1000); 

        return parser.getString();
    }
}

export default new DateService();