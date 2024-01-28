from django.urls import path

from . import views

urlpatterns = [
  path('', views.index, name='index'),
  path('campaign-dashboard', views.adDashboard, name='adDashboard')
]