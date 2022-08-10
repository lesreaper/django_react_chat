# Sample RealTime System

## Repo Notes

- The nav links aren't active, and the responsive menu isn't either.

- This is `websockets` without any auth or message history. However, it shows the system working on the `ws://` protocol. 

- You can also view the server console in the terminal to see the messages being passed back and forth at the server level.

## Install

### Server 
Set up your python virtual environment with `pyenv` or `virtualenv`. 

From your virtual env, install your requirements:
```
pip install -r requirements.txt
```
Make your migrations in Django and create your super user.
```
python manage.py makemigrations
python manage.py migrate
```
### Client
You need to install the NPM libraries. Make sure you have a good version of node, usually 16.6.0+ If you have `NVM` installed, it will look something like this:
```
cd client
nvm use <- If you have NVM installed, it will load 16.16.0 ->
npm i
```


## Run system
Make sure you have [Docker](https://docs.docker.com/get-docker/) installed. 

From you home directory, start your docker container Redis and then you python server. 
```
docker compose up -d
python manage.py runserver
```

Open another tabs, and type:
```
cd client
npm run start
```
You can go to `http://localhost:3000/` to see the chat setup. Be sure to open TWO tabs so you can see the conversation going back and forth.





Borrowed heavily on Django [from here](https://justdjango.com/blog/chat-app-django-channels).
