# from rest_framework import generics, permissions
# from .models import Resume
# from .serializers import ResumeSerializer


# class ResumeListCreateView(generics.ListCreateAPIView):
#     serializer_class = ResumeSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     def get_queryset(self):
#         return Resume.objects.filter(user=self.request.user)

#     def perform_create(self, serializer):
#         serializer.save(user=self.request.user)


# class ResumeDetailView(generics.RetrieveUpdateDestroyAPIView):
#     serializer_class = ResumeSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     def get_queryset(self):
#         return Resume.objects.filter(user=self.request.user)



# from rest_framework import generics, permissions
# from django.db.models import Prefetch
# from django.http import HttpResponse
# from django.template.loader import render_to_string
# from weasyprint import HTML
# from .models import Resume


# from .models import (
#     Resume,
#     Education,
#     Experience,
#     Skill,
#     Project,
#     Certification,
#     Language,
#     Achievement
# )

# from .serializers import (
#     ResumeSerializer,
#     EducationSerializer,
#     ExperienceSerializer,
#     SkillSerializer,
#     ProjectSerializer,
#     CertificationSerializer,
#     LanguageSerializer,
#     AchievementSerializer
# )


# # =========================
# # Resume Views
# # =========================

# class ResumeListCreateView(generics.ListCreateAPIView):
#     serializer_class = ResumeSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     # def get_queryset(self):
#         # return Resume.objects.filter(user=self.request.user)

#     def get_queryset(self):
#        return Resume.objects.filter(
#         user=self.request.user
#     ).prefetch_related(
#         'educations',
#         'experiences',
#         'skills',
#         'projects',
#         'certifications',
#         'languages',
#         'achievements'
#     )

#     def perform_create(self, serializer):
#         serializer.save(user=self.request.user)


# class ResumeDetailView(generics.RetrieveUpdateDestroyAPIView):
#     serializer_class = ResumeSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     # def get_queryset(self):
#     #     return Resume.objects.filter(user=self.request.user)

#     def get_queryset(self):
#          return Resume.objects.filter(
#           user=self.request.user
#      ).prefetch_related(
#         'educations',
#         'experiences',
#         'skills',
#         'projects',
#         'certifications',
#         'languages',
#         'achievements'
#      )
# # =========================
# # Education Views
# # =========================

# class EducationListCreateView(generics.ListCreateAPIView):
#     serializer_class = EducationSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     def get_queryset(self):
#         return Education.objects.filter(
#             resume__user=self.request.user
#         )


# class EducationDetailView(generics.RetrieveUpdateDestroyAPIView):
#     serializer_class = EducationSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     def get_queryset(self):
#         return Education.objects.filter(
#             resume__user=self.request.user
#         )


# # =========================
# # Experience Views
# # =========================

# class ExperienceListCreateView(generics.ListCreateAPIView):
#     serializer_class = ExperienceSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     def get_queryset(self):
#         return Experience.objects.filter(
#             resume__user=self.request.user
#         )


# class ExperienceDetailView(generics.RetrieveUpdateDestroyAPIView):
#     serializer_class = ExperienceSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     def get_queryset(self):
#         return Experience.objects.filter(
#             resume__user=self.request.user
#         )


# # =========================
# # Skill Views
# # =========================

# class SkillListCreateView(generics.ListCreateAPIView):
#     serializer_class = SkillSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     def get_queryset(self):
#         return Skill.objects.filter(
#             resume__user=self.request.user
#         )


# class SkillDetailView(generics.RetrieveUpdateDestroyAPIView):
#     serializer_class = SkillSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     def get_queryset(self):
#         return Skill.objects.filter(
#             resume__user=self.request.user
#         )


# # =========================
# # Project Views
# # =========================

# class ProjectListCreateView(generics.ListCreateAPIView):
#     serializer_class = ProjectSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     def get_queryset(self):
#         return Project.objects.filter(
#             resume__user=self.request.user
#         )


# class ProjectDetailView(generics.RetrieveUpdateDestroyAPIView):
#     serializer_class = ProjectSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     def get_queryset(self):
#         return Project.objects.filter(
#             resume__user=self.request.user
#         )


# # =========================
# # Certification Views
# # =========================

# class CertificationListCreateView(generics.ListCreateAPIView):
#     serializer_class = CertificationSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     def get_queryset(self):
#         return Certification.objects.filter(
#             resume__user=self.request.user
#         )


# class CertificationDetailView(generics.RetrieveUpdateDestroyAPIView):
#     serializer_class = CertificationSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     def get_queryset(self):
#         return Certification.objects.filter(
#             resume__user=self.request.user
#         )


# # =========================
# # Language Views
# # =========================

# class LanguageListCreateView(generics.ListCreateAPIView):
#     serializer_class = LanguageSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     def get_queryset(self):
#         return Language.objects.filter(
#             resume__user=self.request.user
#         )


# class LanguageDetailView(generics.RetrieveUpdateDestroyAPIView):
#     serializer_class = LanguageSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     def get_queryset(self):
#         return Language.objects.filter(
#             resume__user=self.request.user
#         )


# # =========================
# # Achievement Views
# # =========================

# class AchievementListCreateView(generics.ListCreateAPIView):
#     serializer_class = AchievementSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     def get_queryset(self):
#         return Achievement.objects.filter(
#             resume__user=self.request.user
#         )


# class AchievementDetailView(generics.RetrieveUpdateDestroyAPIView):
#     serializer_class = AchievementSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     def get_queryset(self):
#         return Achievement.objects.filter(
#             resume__user=self.request.user
#         )
    



# from rest_framework.decorators import api_view, permission_classes
# from rest_framework.permissions import IsAuthenticated
# from django.shortcuts import get_object_or_404

# @api_view(['GET'])
# @permission_classes([IsAuthenticated])
# def download_resume(request, pk):
#     resume = get_object_or_404(Resume, pk=pk, user=request.user)

#     html_string = render_to_string(
#         'resume_pdf.html',
#         {'resume': resume}
#     )

#     html = HTML(string=html_string)
#     pdf = html.write_pdf()

#     response = HttpResponse(pdf, content_type='application/pdf')
#     response['Content-Disposition'] = f'attachment; filename="resume_{resume.id}.pdf"'

#     return response    









from rest_framework import generics, permissions
from rest_framework.decorators import api_view, permission_classes
from django.http import HttpResponse
from django.template.loader import render_to_string
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from django.conf import settings

import pdfplumber
from docx import Document
import google.generativeai as genai
import json


from weasyprint import HTML

from .models import (
    Resume,
    Education,
    Experience,
    Skill,
    Project,
    Certification,
    Language,
    Achievement
)

from .serializers import (
    ResumeSerializer,
    EducationSerializer,
    ExperienceSerializer,
    SkillSerializer,
    ProjectSerializer,
    CertificationSerializer,
    LanguageSerializer,
    AchievementSerializer
)


# =========================
# RESUME
# =========================
class ResumeListCreateView(generics.ListCreateAPIView):
    serializer_class = ResumeSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Resume.objects.filter(
            user=self.request.user
        ).prefetch_related(
            'educations',
            'experiences',
            'skills',
            'projects',
            'certifications',
            'languages',
            'achievements'
        )

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ResumeDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ResumeSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Resume.objects.filter(
            user=self.request.user
        ).prefetch_related(
            'educations',
            'experiences',
            'skills',
            'projects',
            'certifications',
            'languages',
            'achievements'
        )


# =========================
# CHILD MODELS (ALL SAME PATTERN)
# =========================

class EducationListCreateView(generics.ListCreateAPIView):
    serializer_class = EducationSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Education.objects.filter(resume__user=self.request.user)


class EducationDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = EducationSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Education.objects.filter(resume__user=self.request.user)


class ExperienceListCreateView(generics.ListCreateAPIView):
    serializer_class = ExperienceSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Experience.objects.filter(resume__user=self.request.user)


class ExperienceDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ExperienceSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Experience.objects.filter(resume__user=self.request.user)


class SkillListCreateView(generics.ListCreateAPIView):
    serializer_class = SkillSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Skill.objects.filter(resume__user=self.request.user)


class SkillDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = SkillSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Skill.objects.filter(resume__user=self.request.user)


class ProjectListCreateView(generics.ListCreateAPIView):
    serializer_class = ProjectSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Project.objects.filter(resume__user=self.request.user)


class ProjectDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ProjectSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Project.objects.filter(resume__user=self.request.user)


class CertificationListCreateView(generics.ListCreateAPIView):
    serializer_class = CertificationSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Certification.objects.filter(resume__user=self.request.user)


class CertificationDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CertificationSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Certification.objects.filter(resume__user=self.request.user)


class LanguageListCreateView(generics.ListCreateAPIView):
    serializer_class = LanguageSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Language.objects.filter(resume__user=self.request.user)


class LanguageDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = LanguageSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Language.objects.filter(resume__user=self.request.user)


class AchievementListCreateView(generics.ListCreateAPIView):
    serializer_class = AchievementSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Achievement.objects.filter(resume__user=self.request.user)


class AchievementDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = AchievementSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Achievement.objects.filter(resume__user=self.request.user)


# =========================
# PDF DOWNLOAD (FINAL)
# =========================
@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def download_resume(request, pk):
    resume = get_object_or_404(
        Resume,
        pk=pk,
        user=request.user
    )

    template_map = {
        "template1": "pdf/template1.html",
        "template2": "pdf/template2.html",
        "template3": "pdf/template3.html",
        "template4": "pdf/template4.html",
        "template5": "pdf/template5.html",
        "template6": "pdf/template6.html",
        "template7": "pdf/template7.html",
        "template8": "pdf/template8.html",
        "template9": "pdf/template9.html",
        "template10": "pdf/template10.html",
        "template11": "pdf/template11.html",
        "template12": "pdf/template12.html",
        "template13": "pdf/template13.html",
        "template14": "pdf/template14.html",
        "template15": "pdf/template15.html",
    }

    template_file = template_map.get(
        resume.template,
        "pdf/template1.html"
    )

    html_string = render_to_string(
        template_file,
        {"resume": resume}
    )

    pdf = HTML(string=html_string).write_pdf()

    response = HttpResponse(
        pdf,
        content_type="application/pdf"
    )

    response[
        "Content-Disposition"
    ] = f'attachment; filename="resume_{resume.id}.pdf"'

    return response

# @api_view(['GET'])
# @permission_classes([permissions.IsAuthenticated])
# def download_resume(request, pk):
#     resume = get_object_or_404(Resume, pk=pk, user=request.user)

#     print("SELECTED TEMPLATE:", resume.template)
#     html_string = render_to_string(
#         'resume_pdf.html',
#         {'resume': resume}
#     )

#     pdf = HTML(string=html_string).write_pdf()

#     response = HttpResponse(pdf, content_type='application/pdf')
#     response['Content-Disposition'] = f'attachment; filename="resume_{resume.id}.pdf"'

#     return response


class ParseResumeView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):

        file = request.FILES.get("resume")

        if not file:
            return Response(
                {"error": "No file uploaded"},
                status=400
            )

        text = ""

        try:

            # PDF
            if file.name.endswith(".pdf"):

                with pdfplumber.open(file) as pdf:
                    for page in pdf.pages:

                        page_text = page.extract_text()

                        if page_text:
                            text += page_text + "\n"

            # DOCX
            elif file.name.endswith(".docx"):

                doc = Document(file)

                text = "\n".join(
                    para.text for para in doc.paragraphs
                )

            else:
                return Response(
                    {"error": "Only PDF and DOCX supported"},
                    status=400
                )

            genai.configure(
                api_key=settings.GEMINI_API_KEY
            )

            model = genai.GenerativeModel(
                "gemini-2.5-flash"
            )

            prompt = f"""
Extract resume information and return ONLY valid JSON.

Format:

{{
  "personal": {{
    "fullName": "",
    "email": "",
    "phone": "",
    "summary": ""
  }},
  "skills": [],
  "experiences": [],
  "educations": [],
  "projects": [],
  "certifications": []
}}

Resume:

{text}
"""

            response = model.generate_content(prompt)

            clean_json = (
                response.text
                .replace("```json", "")
                .replace("```", "")
                .strip()
            )

            parsed_data = json.loads(clean_json)

            return Response(parsed_data)

        except Exception as e:
           response = model.generate_content(prompt)

           clean_json = (
           response.text
           .replace("```json", "")
           .replace("```", "")
           .strip()
           )

           parsed_data = json.loads(clean_json)

           return Response(parsed_data)
            # return Response(
            #     {"error": str(e)},
            #     status=500
            # )