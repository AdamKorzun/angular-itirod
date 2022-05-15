export class Note {
    id: number;
    title: string;
    text: string;
    color: string;
    textColor: string;
    constructor(id: number, title: string, text: string, color: string){
        this.id = id;
        this.title = title;
        this.text = text;
        this.color = color;
        if (['#84DCCF', '#E5E5E5'].includes(color)){
            this.textColor = '#000000';
        }else {
            this.textColor = '#FFFFFF';
        }
    }
}