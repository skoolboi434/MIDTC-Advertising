from django.shortcuts import render

from .models import Glcode

# Create your views here.
def index(request):
  glcodes = Glcode.objects.all()

  context = {
    'glcodes': glcodes
  }
  return render(request, 'pages/gl-codes/gl-dashboard.html', context)