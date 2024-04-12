import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CompaniesService } from '../companies.service';
import { Company } from '../models';

@Component({
  selector: 'app-companies-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './companies-details.component.html',
  styleUrl: './companies-details.component.css'
})
export class CompaniesDetailsComponent implements OnInit{
  company!: Company;
  loaded: boolean = false;

  constructor(private route: ActivatedRoute,
              private companyService: CompaniesService) {

  } 

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (params.get('id')) {
        const companyId = Number(params.get('id'));
        this.loaded = false;
        this.companyService.getCompany(companyId).subscribe((company) => {
          this.company = company;
          this.loaded = true;
        })
      }
    });
  }
}
