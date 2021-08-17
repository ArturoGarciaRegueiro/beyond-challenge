export class SecondsPerUnit {
    public seconds: number;
    public key: string;

    constructor(seconds:number, key:string){
        this.seconds = seconds;
        this.key = key;
    }

    public getSeconds(): number {
        return this.seconds;
    }

    public getKey(): string{
        return this.key;
    }
    
}