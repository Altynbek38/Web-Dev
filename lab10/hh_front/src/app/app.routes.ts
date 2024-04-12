import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompaniesDetailsComponent } from './companies-details/companies-details.component';
import { CompaniesVacanciesComponent } from './companies-vacancies/companies-vacancies.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { VacanciesDetailsComponent } from './vacancies-details/vacancies-details.component';
import { VacanciesTopTenComponent } from './vacancies-top-ten/vacancies-top-ten.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch:'full'},
    {path: 'home', component: HomeComponent, title: 'Home'},
    {path: 'companies', component: CompaniesComponent, title: 'Companies'},
    {path: 'companies/:id', component: CompaniesDetailsComponent, title: 'Company Details'},
    {path: 'companies/:id/vacancies', component: CompaniesVacanciesComponent, title: 'Company Vacancies'},
    {path: 'vacancies', component: VacanciesComponent, title: 'Vacancies'},
    {path: 'vacancies/:id', component: VacanciesDetailsComponent, title: 'Vacancy Details'},
    {path: 'vacancies_top_ten', component: VacanciesTopTenComponent, title: 'Vacancy Top Ten'}
];
