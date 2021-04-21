from django.shortcuts import render
from cars.models import Car

def main_view(request):
    qs = Car.objects.all()
    return render(request, 'orders/main.html', {'qs': qs})
