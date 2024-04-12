import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacancy } from './models';

@Injectable({
  providedIn: 'root'
})
export class VacanciesService {
  private BASE_URL = "http://127.0.0.1:8000"

  constructor(private client: HttpClient) { }

  createVacancy(vacancy: Vacancy): Observable<Vacancy> {
    return this.client.post<Vacancy>(`${this.BASE_URL}/vacancies/`, vacancy);
  }

  getVacancies(): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/vacancies/`);
  }

  getVacancy(id: number): Observable<Vacancy> {
    return this.client.get<Vacancy>(`${this.BASE_URL}/api/vacancies/${id}/`);
  }

  getVacancyTopTen(): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/vacancies/top_ten/`);
  }

  getCompanyVacany(id: number): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/companies/${id}/vacancies/`);
  }

  updateVacancy(id: number, vacancy: Vacancy): Observable<Vacancy> {
    return this.client.put<Vacancy>(`${this.BASE_URL}/api/vacancies/${id}/`, vacancy);
  }

  deleteVacancy(id: number): Observable<any> {
    return this.client.delete<any>(`${this.BASE_URL}/api/vacancies/${id}/`);
  }

}
