from django.urls import path
from .views import TweetView, TweetListView

urlpatterns = [
    path('list-tweets/', TweetListView.as_view()),
    path('tweets/<int:tweet_id>', TweetView.as_view())
]