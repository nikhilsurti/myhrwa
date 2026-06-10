# from django.urls import path
# from .views import ResumeListCreateView, ResumeDetailView

# urlpatterns = [
#     path('', ResumeListCreateView.as_view(), name='resume-list-create'),

#     path('<int:pk>/', ResumeDetailView.as_view(), name='resume-detail'),
# ]



from django.urls import path

from .views import (
    ResumeListCreateView,
    ResumeDetailView,

    EducationListCreateView,
    EducationDetailView,

    ExperienceListCreateView,
    ExperienceDetailView,

    SkillListCreateView,
    SkillDetailView,

    ProjectListCreateView,
    ProjectDetailView,

    CertificationListCreateView,
    CertificationDetailView,

    LanguageListCreateView,
    LanguageDetailView,

    AchievementListCreateView,
    AchievementDetailView,

     download_resume,
     ParseResumeView
     
     )

urlpatterns = [

    # Resume
    path('', ResumeListCreateView.as_view(), name='resume-list-create'),
    path('<int:pk>/', ResumeDetailView.as_view(), name='resume-detail'),

    # Education
    path('educations/', EducationListCreateView.as_view(), name='education-list-create'),
    path('educations/<int:pk>/', EducationDetailView.as_view(), name='education-detail'),

    # Experience
    path('experiences/', ExperienceListCreateView.as_view(), name='experience-list-create'),
    path('experiences/<int:pk>/', ExperienceDetailView.as_view(), name='experience-detail'),

    # Skills
    path('skills/', SkillListCreateView.as_view(), name='skill-list-create'),
    path('skills/<int:pk>/', SkillDetailView.as_view(), name='skill-detail'),

    # Projects
    path('projects/', ProjectListCreateView.as_view(), name='project-list-create'),
    path('projects/<int:pk>/', ProjectDetailView.as_view(), name='project-detail'),

    # Certifications
    path('certifications/', CertificationListCreateView.as_view(), name='certification-list-create'),
    path('certifications/<int:pk>/', CertificationDetailView.as_view(), name='certification-detail'),

    # Languages
    path('languages/', LanguageListCreateView.as_view(), name='language-list-create'),
    path('languages/<int:pk>/', LanguageDetailView.as_view(), name='language-detail'),

    # Achievements
    path('achievements/', AchievementListCreateView.as_view(), name='achievement-list-create'),
    path('achievements/<int:pk>/', AchievementDetailView.as_view(), name='achievement-detail'),

    path('<int:pk>/download/', download_resume, name='resume-download'),
    
    path(
    "parse/",
    ParseResumeView.as_view(),
    name="resume-parse"
),

]