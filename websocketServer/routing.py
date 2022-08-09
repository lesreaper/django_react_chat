from django.urls import path
from websocketAPI.consumers import ChatConsumer

websocket_urlpatterns = [path("", ChatConsumer.as_asgi())]