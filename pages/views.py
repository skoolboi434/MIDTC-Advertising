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

def glDashboard(request):
  return render(request, 'pages/gl-codes/gl-dashboard.html')

def newGlCode(request):
  return render(request, 'pages/gl-codes/create-gl-code.html')

def admin(request):
  return render(request, 'pages/admin/admin.html')

def adminGeneral(request):
  return render(request, 'pages/admin/admin-general.html')

def adminAds(request):
  return render(request, 'pages/admin/ads/ads.html')

def adminFinancial(request):
  return render(request, 'pages/admin/financial/admin-financial.html')

def adminFinancialFiscal(request):
  return render(request, 'pages/admin/financial/fiscal-year.html')

def adminNewMagazine(request):
  return render(request, 'pages/admin/products/new-magazine.html')

def adminNewNewspaper(request):
  return render(request, 'pages/admin/products/new-newspaper.html')

def adminNewDigital(request):
  return render(request, 'pages/admin/products/new-digital.html')

def adminNewProduct(request):
  return render(request, 'pages/admin/products/new-product.html')

def adminPricing(request):
  return render(request, 'pages/admin/pricing/admin-pricing.html')

def adminPublications(request):
  return render(request, 'pages/admin/publications/new-publication.html')

def adminClassifieds(request):
  return render(request, 'pages/admin/classifieds/classifieds.html')