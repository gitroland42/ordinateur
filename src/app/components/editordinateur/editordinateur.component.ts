import { Component, OnInit } from '@angular/core';
import { Ordinateur } from 'src/app/models/ordinateur';
import { Router,ActivatedRoute } from '@angular/router';
import { OrdinateurService } from 'src/app/services/ordinateur.service';

@Component({
  selector: 'app-editordinateur',
  templateUrl: './editordinateur.component.html',
  styleUrls: ['./editordinateur.component.css']
})
export class EditordinateurComponent implements OnInit {
  ordinateur:Ordinateur;
  isLoading:boolean;
  marqueOrdinateur: string[];
  typeOrdinateur: string[];
  constructor(private router: Router,private ordinateurService: OrdinateurService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isLoading = true;

  
      this.marqueOrdinateur = this.ordinateurService.marqueOrdinateur;
      this.typeOrdinateur = this.ordinateurService.typeOrdinateur;

      
    this.ordinateurService.getById(+this.route.snapshot.paramMap.get('id')).subscribe((data:
    Ordinateur) => {
    this.ordinateur = data;
    this.isLoading = false;
    });
  }

  onSubmit(ordinateur:Ordinateur) { 
    this.isLoading = true;
    this.ordinateurService.majOrdinateur(this.ordinateur).subscribe(then => { 
    this.router.navigate(['/ordinateur']); 
    this.isLoading = false;
    // this.toastr.success("test");
    }); 
  }
}
