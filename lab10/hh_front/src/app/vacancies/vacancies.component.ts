import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VacanciesService } from '../vacancies.service';
import { Vacancy } from '../models';

@Component({
  selector: 'app-vacancies',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './vacancies.component.html',
  styleUrl: './vacancies.component.css'
})
export class VacanciesComponent implements OnInit, OnDestroy{
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
