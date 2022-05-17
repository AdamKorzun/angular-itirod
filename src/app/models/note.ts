export class Note {
    id: number;
    title: string;
    text: string;
    color: string;
    textColor: string;
    archived: boolean;
    constructor(id: number, title: string, text: string, color: string, archived: boolean = false){
        this.id = id;
        this.title = title;
        this.text = text;
        this.color = color;
        if (['#84DCCF', '#E5E5E5'].includes(color)){
            this.textColor = '#000000';
        }else {
            this.textColor = '#FFFFFF';
        }
        this.archived = archived;
    }
}