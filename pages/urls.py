from django.urls import path

from . import views


urlpatterns = [
  path('', views.index, name='index'),
  path('campaign-dashboard', views.adDashboard, name='adDashboard'),
  path('ad-rates', views.adRateIndex, name='adRateIndex'),
  path('new-ad-rate', views.newAdRate, name='newAdRate'),
  path('completed-rate', views.completedRate, name='completedRate'),
  path('edit-rate', views.editRate, name='editRate'),
  path('publication-dashboard', views.pubDashboard, name='pubDashboard'),
  
  path('create-gl-code', views.newGlCode, name='newGlCode'),

  # Admin Paths
  path('admin', views.admin, name='admin'),
  path('admin/general', views.adminGeneral, name='adminGeneral'),
  path('admin/ads', views.adminAds, name='adminAds'),
  path('admin/financial', views.adminFinancial, name='adminFinancial'),
  path('admin/financial/fiscal', views.adminFinancialFiscal, name='adminFinancialFiscal'),

  # Admin Product Paths
  path('admin/financial/new-magazine', views.adminNewMagazine, name='adminNewMagazine'),
  path('admin/financial/new-newspaper', views.adminNewNewspaper, name='adminNewNewspaper'),
  path('admin/financial/new-digital', views.adminNewDigital, name='adminNewDigital'),
  path('admin/financial/new-product', views.adminNewProduct, name='adminNewProduct'),
  path('admin/pricing/admin-pricing', views.adminPricing, name='adminPricing'),
  path('admin/publications/new-publication', views.adminPublications, name='adminPublications'),

  # Classified Paths
  path('admin/classifieds', views.adminClassifieds, name='adminClassifieds'),
]