import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CompaniesService } from '../companies.service';
import { Company } from '../models';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css'
})
export class CompaniesComponent implements OnInit, OnDestroy {
  companies!: Company[];  
  loaded: boolean = false;

  constructor(private companyService: CompaniesService){

  }

  ngOnInit(): void {
    this.loaded = false;
    this.companyService.getCompanies().subscribe((companies) => {
      this.companies = companies;
      this.loaded = true;
    });
  }

  deleteCompany(id: number) {
    this.companies = this.companies.filter((company) => company.id != id)
    this.companyService.deleteCompany(id).subscribe(() =>{
      console.log('deleted');
    });
  }

  ngOnDestroy(): void {
    
  }

}
