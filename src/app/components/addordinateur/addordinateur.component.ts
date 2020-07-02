import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdinateurService } from 'src/app/services/ordinateur.service';
import { Ordinateur } from 'src/app/models/ordinateur';

@Component({
  selector: 'app-addordinateur',
  templateUrl: './addordinateur.component.html',
  styleUrls: ['./addordinateur.component.css']
})
export class AddordinateurComponent implements OnInit {
  ordinateur=new Ordinateur();

  marqueOrdinateur: string[];
  typeOrdinateur: string[];

  constructor(private router: Router,private ordinateurService: OrdinateurService) { }

  ngOnInit(): void {
          this.marqueOrdinateur = this.ordinateurService.marqueOrdinateur;
      this.typeOrdinateur = this.ordinateurService.typeOrdinateur;

      }
      
    
    onSubmit() {
        // console.log(this.paire);
        this.ordinateurService.ajoutOrdinateur(this.ordinateur).subscribe(then => {
        this.router.navigate(['/ordinateur']);
        });
      }

    }



