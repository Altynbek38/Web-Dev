import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacanciesTopTenComponent } from './vacancies-top-ten.component';

describe('VacanciesTopTenComponent', () => {
  let component: VacanciesTopTenComponent;
  let fixture: ComponentFixture<VacanciesTopTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacanciesTopTenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacanciesTopTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
