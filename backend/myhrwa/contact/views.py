from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions

from .serializers import ContactSerializer

class ContactCreateView(APIView):

    permission_classes = [permissions.AllowAny]

    def post(self, request):

        serializer = ContactSerializer(
            data=request.data
        )

        if serializer.is_valid():

            serializer.save()

            return Response({
                "success": True,
                "message": "Message sent successfully"
            })

        return Response(
            serializer.errors,
            status=400
        )
    





# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import permissions

# from django.core.mail import send_mail
# from django.conf import settings

# from .serializers import ContactSerializer


# class ContactCreateView(APIView):

#     permission_classes = [permissions.AllowAny]

#     def post(self, request):

#         serializer = ContactSerializer(
#             data=request.data
#         )

#         if serializer.is_valid():

#             contact = serializer.save()

#             try:

#                 send_mail(
#                     subject=f"New Inquiry from {contact.name}",
#                     message=f"""
# New Contact Form Submission

# Name: {contact.name}
# Email: {contact.email}
# Phone: {contact.phone}

# Message:
# {contact.message}
#                     """,
#                     from_email=settings.EMAIL_HOST_USER,
#                     recipient_list=["myhrwa.com@gmail.com"],
#                     fail_silently=False,
#                 )

#             except Exception as e:
#                 print("EMAIL ERROR =>", str(e))

#             return Response({
#                 "success": True,
#                 "message": "Message sent successfully"
#             })

#         return Response(
#             serializer.errors,
#             status=400
#         )