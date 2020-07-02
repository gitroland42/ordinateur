import { Component, OnInit } from '@angular/core';
import { Ordinateur } from 'src/app/models/ordinateur';
import { OrdinateurService } from 'src/app/services/ordinateur.service';

@Component({
  selector: 'app-ordinateur',
  templateUrl: './ordinateur.component.html',
  styleUrls: ['./ordinateur.component.css']
})
export class OrdinateurComponent implements OnInit {
  mesOrdis:Ordinateur[];
  isLoading:boolean;

  constructor(private ordinateurService:OrdinateurService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.ordinateurService.getAllOrdis().subscribe((data: Ordinateur[]) => {
    this.mesOrdis = data;
    this.isLoading = false;
    });
  }

  supprimerOrdinateur(id: number): void {

    this.isLoading = true;
    // lancer une requete pour supprimer la planete
    this.ordinateurService.deleteOrdinateur(id).subscribe(then => {
    // lancer une requet pour reafficher les planettes existantes
    this.ordinateurService. getAllOrdis().subscribe((data: Ordinateur[]) => {
    this.mesOrdis = data;
    this.isLoading = false;
    // this.toasteee.success('suppression effectuée');
    });
    });
    }

}
