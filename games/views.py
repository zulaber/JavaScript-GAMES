from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def welcome_site(request):
    return render(request, 'welcome.html')


def south_park_game(request):
    return render(request, 'South_Park.html')

def whack_your_nightmare(request):
    return render(request, 'whack_your_nightmare.html')