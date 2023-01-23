from django.urls import path, include
from . import views




urlpatterns = [
    path('api/sprints', views.getSprintsAllName, name="SprintData"),
    path('api/sprint/<str:pk>', views.getSprint, name="getSprint"),
    path('api/sprintpreactivate', views.getSprintPreactivate, name="SprintData"),
    path('api/getlastsprint', views.getLastSprint, name="SprintData"),


    path('api/tasks', views.getTaskAll, name="TasksData"),\
    path('api/sprint/<str:pk>', views.getTaskDetails, name="TasksDetails"),
]