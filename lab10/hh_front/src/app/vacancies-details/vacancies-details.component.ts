import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { VacanciesService } from '../vacancies.service';
import { Vacancy } from '../models';

@Component({
  selector: 'app-vacancies-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './vacancies-details.component.html',
  styleUrl: './vacancies-details.component.css'
})
export class VacanciesDetailsComponent implements OnInit {
  vacancy!: Vacancy;
  loaded: boolean = false;

  constructor(private route: ActivatedRoute,
              private vacancyService: VacanciesService) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if(params.get('id')) {
        const vacancyId = Number(params.get('id'));
        this.loaded = false;
        this.vacancyService.getVacancy(vacancyId).subscribe((vacancy) => {
          this.vacancy = vacancy;
          this.loaded = true;
        });
      }
    });
  }
}
