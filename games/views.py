from django.shortcuts import render


def welcome_site(request):
    return render(request, 'welcome.html')


def south_park_game(request):
    return render(request, 'South_Park.html')


def whack_your_nightmare(request):
    return render(request, 'whack_your_nightmare.html')


def rock_paper_scissors(request):
    return render(request, 'rock_paper_scissors.html')


def connect_4(request):
    return render(request, 'connect_4.html')


def snake(request):
    return render(request, 'snake.html')
