
from .models import Sprint, Task
from rest_framework import serializers 




class TasksSerializer(serializers.ModelSerializer):
  
    class Meta:
        model = Task
        fields = '__all__'
        extra_kwargs = {'user': {'required': False}, 'task_name':{'required':True}}

class SprintSerializer(serializers.ModelSerializer):
    tasks = TasksSerializer(many=True,read_only=True)
    
    class Meta:
        model = Sprint
        fields = '__all__'

 
    # def update(self, instance, validated_data):
    #     tasks = instance.tasks
 
    #     instance.title_name = validated_data.get('title_name', instance.title_name)
    #     instance.save()

    #     tasks.save()

    #     return instance





    
 

   
