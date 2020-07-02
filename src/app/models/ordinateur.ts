export class Ordinateur {
    id: number;
    modele: string;
    marque: string;
    type: string;
    category: string;
    dateEntreeStock: Date;
    prixAchat:number;
    prixVente:number;

    constructor(id: number=null,modele: string=null,marque: string=null,type: string=null,category:string=null,dateEntreeStock:Date=null,prixAchat: number=null,prixVente: number=null){
      this.id=id;
      this.modele=modele;
      this.marque=marque;
      this.type=type;
      this.category=category;
      this.dateEntreeStock=dateEntreeStock;
      this.prixAchat=prixAchat;
      this.prixVente=prixVente;
    }

}

