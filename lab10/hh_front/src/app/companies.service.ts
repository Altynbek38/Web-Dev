import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './models';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  private BASE_URL = 'http://127.0.0.1:8000';

  constructor(private client: HttpClient) { }

  createCompany(company: Company): Observable<Company> {
    return this.client.post<Company>(`${this.BASE_URL}/api/companies/`, company);
  }

  getCompanies(): Observable<Company[]> {
    return this.client.get<Company[]>(`${this.BASE_URL}/api/companies/`);
  }

  getCompany(id: number): Observable<Company> {
    return this.client.get<Company>(`${this.BASE_URL}/api/companies/${id}/`);
  }

  updateCompany(id: number, company: Company): Observable<Company> {
    return this.client.put<Company>(`${this.BASE_URL}/api/companies/${id}/`, company)
  }

  deleteCompany(id: number): Observable<any> {
    return this.client.delete<any>(`${this.BASE_URL}/api/companies/${id}/`)
  }
}
