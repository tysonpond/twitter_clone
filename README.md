# Twitter Clone
## Overview
In this project we build a full stack social media website (with features inspired by/taken from Twitter) using Django and React. A few goals of this project are:
1. Develop a CRUD (create, read, update, delete) application that has the following features:
   - Home feed
   - User profile: banner/bio + user's tweets
   - Profile settings page (i.e. feed settings, privacy, etc.)
   - Login/logout/register pages
   - Other features (depending on how far we go): explore hashtags, trending page

2. Learn Django and React, and how to integrate them together.

3. Optimize backend for scalability of home feed. To get the home feed we could query for all of the user's following (giving a list of names) and then join the tweets database with the list of names. Can we imprve this? 

## Requirements
We'll fill this out later. For the backend, we're using: `python 3.6+`, `pip`, `django`, `djangorestframework`. For the frontend, we'll need `Node.js`.

## References
Some references I'm using (primary to learn Django and React).
- Documentation
   - [Django](https://docs.djangoproject.com/en/2.2/)
   - [Django Rest Framework](https://www.django-rest-framework.org/tutorial/quickstart/)
   - [React](https://reactjs.org/tutorial/tutorial.html)
- Videos
   - [Tech With Tim -- Spotify Music Room app with Django & React](https://www.youtube.com/watch?v=JD-age0BPVo) ([Github](https://github.com/techwithtim/Music-Controller-Web-App-Tutorial))
   - [CodingEntrepreneurs -- Social Media app with Django & React](https://www.youtube.com/watch?v=f1R_bykXHGE) ([Github](https://github.com/codingforentrepreneurs/Tweetme-2))
   - [Traversy Media -- Lead Manager app with Django & react](https://www.youtube.com/watch?v=Uyei2iDA4Hs) ([Github](https://github.com/bradtraversy/lead_manager_react_django))
- Books
   - Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable System