from rest_framework import serializers
from .models import Tweet


class TweetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tweet
        fields = '__all__'

# class CreateTweetSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Tweet
#         # auto fields: id, user, created_at, tweet_likes
#         # optional: refers_to (if retweet), refer_type, image
#         # required: content
#         fields = ('content', 'refers_to', 'refer_type', 'image')