from django.shortcuts import render
from django.http import HttpResponse

def index(request):
  return render(request, 'pages/campaigns-home.html')

def adDashboard(request):
  return render(request, 'pages/campaign-dashboard.html')

def adRateIndex(request):
  return render(request, 'pages/ad-rates/ad-rates-home.html')

def newAdRate(request):
  return render(request, 'pages/ad-rates/new-ad-rate.html')

def completedRate(request):
  return render(request, 'pages/ad-rates/completed-rate.html')

def editRate(request):
  return render(request, 'pages/ad-rates/edit-rate.html')

def pubDashboard(request):
  return render(request, 'pages/publications/publication-dashboard.html')
