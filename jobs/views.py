from rest_framework import viewsets
from .models import Job
from .serializers import JobSerializer
from django.http import JsonResponse

class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer


def home(request):
    return JsonResponse({"message": "Welcome to your Job Tracker API"})
