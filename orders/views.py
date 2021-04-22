from django.shortcuts import render
from cars.models import Car
from models.models import Model
from django.http import JsonResponse

def main_view(request):
    qs = Car.objects.all()
    return render(request, 'orders/main.html', {'qs': qs})

def get_json_card_data(request):
    qs_val = list(Car.objects.values())
    return  JsonResponse({'data': qs_val})

def get_json_model_data(request, *args, **kwargs):
    selected_car = kwargs.get('car')
    obj_models = list(Model.objects.filter(car__name=selected_car).values())
    return JsonResponse({'data': obj_models})