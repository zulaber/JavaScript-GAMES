from django.contrib import admin
from django.urls import path, include
from. views import welcome_site, south_park_game, whack_your_nightmare

urlpatterns = [
    path('', welcome_site, name='welcome'),
    path('/south-park', south_park_game, name='south_park'),
    path('/whack-your-nightmare', whack_your_nightmare, name='whack_your_nightmare'),
]
