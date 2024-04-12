import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VacanciesService } from '../vacancies.service';
import { Vacancy } from '../models';

@Component({
  selector: 'app-vacancies-top-ten',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './vacancies-top-ten.component.html',
  styleUrl: './vacancies-top-ten.component.css'
})
export class VacanciesTopTenComponent implements OnInit, OnDestroy{
  vacancies!: Vacancy[];
  loaded: boolean = false;

  constructor(private vacancyService: VacanciesService) {

  }

  ngOnInit(): void {
    this.loaded = false;
    
    this.vacancyService.getVacancyTopTen().subscribe((vacancies) => {
      this.vacancies = vacancies;
      this.loaded = true;
    });
  }

  ngOnDestroy(): void {
    
  }

}
