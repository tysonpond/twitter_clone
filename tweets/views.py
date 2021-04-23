from django.shortcuts import render
from .serializers import TweetSerializer
from rest_framework import generics, status
from .models import Tweet
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class TweetListView(generics.ListAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer

class TweetView(APIView):
    serializer_class = TweetSerializer

    def get(self, request, tweet_id, format=None):
        if tweet_id != None:
            tweet = Tweet.objects.filter(pk=tweet_id)
            if len(tweet) > 0:
                data = TweetSerializer(tweet[0]).data
                return Response(data, status=status.HTTP_200_OK)
            return Response({'Tweet Not Found': 'Invalid Tweet ID.'}, status=status.HTTP_404_NOT_FOUND)

        return Response({'Bad Request': 'ID parameter not found in request'}, status=status.HTTP_400_BAD_REQUEST)        


# MODELS
# 1. Tweets
# 2. Users (public & private)

# VIEWS
# 1. Tweets
# - Get
# - Create (auth), includes retweet & comment
# - Delete (auth)
# - Update (auth)
# 2. Follows
# - Follow/unfollow user (auth) -- implement as create/delete, maybe also get (i.e. does user A follow user B?)
# - Get user's followers -- get only
# - Get user's following -- get only
# 3. Feed (for home page) -- get only
# 4. User's tweets (for user's page) -- get only
# 5. Get user info (e.g. bio) -- get/update
# 6. Like/unlike a tweet (auth) -- create/delete