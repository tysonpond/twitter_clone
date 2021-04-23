from django.db import models
from django.contrib.auth.models import User

# Tweet model
class Tweet(models.Model):
    # tweet_id, created_at
    # user, content (text, image, mentions, hashtags, links), refers_to (if retweet/reply), type (retweet/reply/original),
    # reception (likes, retweets)

    # REFER_TYPE_CHOICES = [
    #     ('', 'None'),
    #     ('retweet', 'Retweet'),
    #     ('reply', 'Reply'),
    # ]

    # user = models.ForeignKey(TwitterUser, on_delete=models.SET_NULL)
    content_text = models.CharField(max_length=280)
    created_at = models.DateTimeField(auto_now_add=True)
    # tweet_likes = models.ManyToManyField(TwitterUser, related_name='user_likes', blank=True, through=TweetLike)
    # refers_to = models.ForeignKey('self', blank=True, null=True, on_delete=models.SET_NULL) # if a retweet or comment then parent will exist 
    # refer_type = models.CharField(max_length=10, blank=True, choices=REFER_TYPE_CHOICES)
    # content_image = models.ImageField(upload_to='images/', blank=True)

# # User model
# class TwitterUser(models.Model):
#     # user_id, created_at
#     # fullname (i.e. Tyson Pond), username (i.e. tysonpond), bio, location, website_link, birthday, profile_image, banner_image
#     # followers, following
#     # misc: is_private, is_verified

#     # these fields should be related to the auth.user model from Django
#     # user = models.OneToOneField(User, on_delete=models.CASCADE) # uncomment this later
#     username = models.CharField(max_length=15, unique=True) # can't be blank; letters, digits, underscore; unique
#     fullname = models.CharField(max_length=50) # can't be blank; 

#     # followers and following
#     followers = models.ManyToManyField('self', related_name='following', through=UserFollow)

#     # other profile fields
#     bio = models.CharField(max_length=160, blank=True)
#     location = models.CharField(max_length=30, blank=True)
#     website_link = models.CharField(max_length=100, blank=True)
#     birthday = models.DateField(blank=True, null=True) # can't be in the future
#     profile_image = models.ImageField(upload_to='images/', blank=True)
#     banner_image =  models.ImageField(upload_to='images/', blank=True)
    

# # Tweet like model (TwitterUser --> Tweet): intermediate table for ManyToMany
# class TweetLike(models.Model):
#     liked_at = models.DateTimeField(auto_now_add=True)

# # Follow model (TwitterUser --> TwitterUser): intermediate table for ManyToMany
# class UserFollow(models.Model):
#     followed_at = models.DateTimeField(auto_now_add=True)