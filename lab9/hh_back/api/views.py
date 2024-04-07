from django.shortcuts import render
from django.http.response import JsonResponse

from api.models import Company, Vacancy

# Create your views here.
def company_list(request):
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]

    return JsonResponse(companies_json, safe=False, status=200)

def company_details(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({"error": str(e)}, status=404)
    
    company_json = company.to_json()

    return JsonResponse(company_json, safe=False ,status=200)

def company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({"error": str(e)}, status=404)
    
    vacancies = Vacancy.objects.filter(company=company)
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]

    return JsonResponse(vacancies_json, safe=False, status=200)

def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]

    return JsonResponse(vacancies_json, safe=False, status=200)

def vacancy_details(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({"error": str(e)}, status=404)
    
    vacancy_json = vacancy.to_json()

    return JsonResponse(vacancy_json, safe=False, status=200)

def vacany_top_ten(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    vacancy_json = [vacancy.to_json() for vacancy in vacancies]

    return JsonResponse(vacancy_json, safe=False, status=200)
