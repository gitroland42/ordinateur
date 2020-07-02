import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { OrdinateurService } from 'src/app/services/ordinateur.service';
import { Ordinateur } from 'src/app/models/ordinateur';

@Component({
  selector: 'app-ordinateurdetail',
  templateUrl: './ordinateurdetail.component.html',
  styleUrls: ['./ordinateurdetail.component.css']
})
export class OrdinateurdetailComponent implements OnInit {
 
  ordinateur:Ordinateur;
  isLoading:boolean;

  constructor(private route:ActivatedRoute,private ordinateurService:OrdinateurService) { }

  
  ngOnInit() { 
    this.isLoading = true; 
    this.ordinateurService.getById(+this.route.snapshot.paramMap.get('id')).subscribe((data: 
    Ordinateur) => { 
    this.ordinateur = data; 
    this.isLoading = false; 
    }); 
    } 

}
