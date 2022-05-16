export class Colors{
    static colors = ['#0085FF','#CCA43B', '#E5E5E5', '#BB0A21', '#4B88A2', '#84DCCF'];
    static get randomColor() : string {
        return this.colors[Math.floor(Math.random()*this.colors.length)];
    }
}