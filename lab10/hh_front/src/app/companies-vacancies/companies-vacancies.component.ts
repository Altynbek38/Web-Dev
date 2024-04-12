import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VacanciesService } from '../vacancies.service';
import { Vacancy } from '../models';

@Component({
  selector: 'app-companies-vacancies',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './companies-vacancies.component.html',
  styleUrl: './companies-vacancies.component.css'
})
export class CompaniesVacanciesComponent {
  vacancies!: Vacancy[];
  loaded: boolean = false;

  constructor(private vacancyService: VacanciesService) {

  }

  ngOnInit(): void {
    this.loaded = false;
    this.vacancyService.getVacancies().subscribe((vacancies) => {
      this.vacancies = vacancies;
      this.loaded = true;
    });
  }

  deleteVacancy(id: number) {
    this.vacancies = this.vacancies.filter((vacancy) => vacancy.id != id);
    this.vacancyService.deleteVacancy(id).subscribe(() => {
      console.log('deleted')
    });
  }

    ngOnDestroy(): void {
      
    }

}
