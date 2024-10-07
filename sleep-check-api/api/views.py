from rest_framework import status, views
from rest_framework.response import Response

from .models import SleepDiary
from .serializers import SleepDiarySerializer

# Create your views here.
class SleepDiaryAPIView(views.APIView):
    
    def get(self, request, *args, **kargs):
        #
        sleep_event_list = SleepDiary.objects.all()
        #
        serializer = SleepDiarySerializer(instance=sleep_event_list, many=True)
        #
        return Response(serializer.data)
    
    def post(self, request, *arg, **kargs):
        #
        serializer = SleepDiarySerializer(data=request.data)
        #
        serializer.is_valid(raise_exception=True)
        #
        serializer.save()
        
        return Response(serializer.data, status.HTTP_201_CREATED)