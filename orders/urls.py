from django.urls import path
from . import views

urlpatterns = [
    path('', views.main_view, name='main'),
    path('cars-json/', views.get_json_card_data, name='cars-json'),
    path('models-json/<str:car>/', views.get_json_model_data, name='models-json'),
    path('create-order/', views.create_order, name='create-order'),
]
