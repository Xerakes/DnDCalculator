export class Item{
    name:string;
    movementSpeed?:number;
    armor?: number;
    magicResist?:number;
    attributes:Attributes[];
    forClass:string[]
    categorie:string;

    constructor(name: string, categorie:string, attr: Attributes[], classes:string[]){
        this.name =name;
        this.attributes=attr;
        this.forClass=classes;
        this.categorie=categorie;
    }
}

export interface Attributes{
    attrName: string;
    attrValue: number;
}