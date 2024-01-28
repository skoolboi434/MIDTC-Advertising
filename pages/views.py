from django.shortcuts import render
from django.http import HttpResponse

def index(request):
  return render(request, 'pages/campaigns-home.html')

def adDashboard(request):
  return render(request, 'pages/campaign-dashboard.html')
