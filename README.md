# Sample RealTime System

## Install

Set up your python virtual environment. 

From your virtual env, install your requirements:
```
pip install -r requirements.txt
```
Make your migrations in Django and create your super user.
```
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
```

## Run system
Make sure you have [Docker](https://docs.docker.com/get-docker/) installed. 

From you home directory, start your docker containers for Postgres and Redis. 
```
docker compose up -d
python manage.py runserver 0.0.0.0:8000
```

Borrowed heavily on Django [from here](https://justdjango.com/blog/chat-app-django-channels).
