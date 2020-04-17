from django.contrib import admin
from django.urls import path, include
from. views import welcome_site, south_park_game, whack_your_nightmare, rock_paper_scissors

urlpatterns = [
    path('', welcome_site, name='welcome'),
    path('/south-park', south_park_game, name='south_park'),
    path('/whack-your-nightmare', whack_your_nightmare, name='whack_your_nightmare'),
    path('/rock-paper-scissors', rock_paper_scissors, name='rock_paper_scissors'),
]
