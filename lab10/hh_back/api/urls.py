from django.urls import path
from api.views import fbv
from api.views.cbv import CompanyListApiView, CompanyDetailApiView, CompanyVacanciesApiView
from api.views.cbv import VacancyListApView, VacancyDetailApiView, VacancyTopTenApiView

urlpatterns = [
    path("companies/", CompanyListApiView.as_view()),
    path("companies/<int:id>/", CompanyDetailApiView.as_view()),
    path("companies/<int:id>/vacancies/", CompanyVacanciesApiView.as_view()),
    path("vacancies/", VacancyListApView.as_view()),
    path("vacancies/<int:id>/", VacancyDetailApiView.as_view()),
    path("vacancies/top_ten/", VacancyTopTenApiView.as_view()),
]


# urlpatterns = [
#     path("companies/", fbv.company_list),
#     path("companies/<int:id>/", fbv.company_detail),
#     path("companies/<int:id>/vacancies/", fbv.company_vacancies),
#     path("vacancies/", fbv.vacancy_list),
#     path("vacancies/<int:id>/", fbv.vacancy_detail),
#     path("vacancies/top_ten/", fbv.vacancy_top_ten),
# ]
