from django.urls import path

from . import views

urlpatterns = [
  path('', views.index, name='index'),
  path('campaign-dashboard', views.adDashboard, name='adDashboard'),
  path('ad-rates', views.adRateIndex, name='adRateIndex'),
  path('new-ad-rate', views.newAdRate, name='newAdRate'),
  path('completed-rate', views.completedRate, name='completedRate'),
  path('edit-rate', views.editRate, name='editRate'),
]