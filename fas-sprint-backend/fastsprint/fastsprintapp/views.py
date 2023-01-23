from django.shortcuts import render
from .models import Sprint, Task
from .serializers import SprintSerializer, TasksSerializer
# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status




@api_view(['GET', 'POST', 'DELETE', 'PUT'])
def getSprintsAllName(request):

    if request.method == 'GET':
        sprint = Sprint.objects.all()
        serializer = SprintSerializer(sprint, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = SprintSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == "DELETE":
        sprint = Sprint.objects.all()
        sprint.delete()


@api_view(['PATCH'])
def getSprint(request, pk):
    if request.method == "PATCH":
        sprint = Sprint.objects.get(_id=pk)
        serializer = SprintSerializer(sprint, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
    
        return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def getLastSprint(request):
    if request.method == 'GET':
        sprint = Sprint.objects.all().last()
        serializer = SprintSerializer(sprint)
        return Response(serializer.data)

@api_view(['GET', 'DELETE'])
def sprintCreatedwithTask(request, pk):
    if request.method == "GET":
        sprint = Sprint.objects.get(_id=pk)
        serializer = SprintSerializer(sprint, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    if request.method == "PUT":
        sprint = Sprint.objects.get(_id=pk)
        serializer = SprintSerializer(sprint, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    
@api_view(['GET', 'POST'])
def getSprintPreactivate(request):
    if request.method =='GET':
        sprint = Sprint.objects.all().filter(preactivate="True").first()
        serializers = SprintSerializer(sprint)
        return Response(serializers.data)
        
        
    if request.method == 'POST':
        sprint = Sprint.objects.all().filter(_id="1").first()
        serializer = SprintSerializer(sprint, data=request.data)
        if serializer.is_valid():
            serializer.save()

        if sprint.preactivate == "False" and sprint.activate == "True":
            sprint = Sprint.objects.all().filter(preactivate="False", activate="False").first()
            sprint.preactivate = "True"
            serializer = SprintSerializer(sprint, data=request.data)
            if serializer.is_valid():
                serializer.save()
            return Response(serializers.data)
        return Response(serializer.data)


@api_view(['GET', 'POST', 'DELETE'])
def getTaskAll(request):

    if request.method == 'GET':
        tasks = Task.objects.all().filter(sprint__isnull=True)
        serializer = TasksSerializer(tasks, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = TasksSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    if request.method == "DELETE":
        sprint = Task.objects.all()
        sprint.delete()

@api_view(['GET', 'DELETE'])
def getTaskDetails(request, pk):
    try:
        task = Sprint.objects.get(_id=pk)
    except Task.DoesNotExist:
        return Response(status, status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = TasksSerializer(task)
        return Response(serializer.data)

    elif request.method == "DELETE":
        task.delete()
        return Response(status, status=status.HTTP_204_NO_CONTENT)





        



        



