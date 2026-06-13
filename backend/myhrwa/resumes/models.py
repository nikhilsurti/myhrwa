# from django.db import models
# from django.conf import settings


# class Resume(models.Model):
#     TEMPLATE_CHOICES = [
#     ('template1', 'Template 1'),
#     ('template2', 'Template 2'),
#     ('template3', 'Template 3'),
#    ]
   
#     user = models.ForeignKey(
#         settings.AUTH_USER_MODEL,
#         on_delete=models.CASCADE,
#         related_name='resumes'
#     )

#     title = models.CharField(max_length=255)

#     full_name = models.CharField(max_length=255)
#     email = models.EmailField()
#     phone = models.CharField(max_length=20)

#     summary = models.TextField(blank=True, null=True)

#     # template = models.CharField(max_length=100, default='template1')
#     template = models.CharField(
#     max_length=100,
#     choices=TEMPLATE_CHOICES,
#     default='template1'
# )

#     profile_image = models.ImageField(
#     upload_to='resume_profiles/',
#     blank=True,
#     null=True
#     )
    
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)

#     def __str__(self):
#         return self.title

# class Education(models.Model):
#     resume = models.ForeignKey(
#         Resume,
#         on_delete=models.CASCADE,
#         related_name='educations'
#     )

#     school_name = models.CharField(max_length=255)
#     degree = models.CharField(max_length=255)
#     field_of_study = models.CharField(max_length=255, blank=True, null=True)

#     start_date = models.DateField()
#     end_date = models.DateField(blank=True, null=True)

#     description = models.TextField(blank=True, null=True)

#     def __str__(self):
#         return self.school_name    
    

# class Experience(models.Model):
#     resume = models.ForeignKey(
#         Resume,
#         on_delete=models.CASCADE,
#         related_name='experiences'
#     )

#     company_name = models.CharField(max_length=255)
#     job_title = models.CharField(max_length=255)

#     start_date = models.DateField()
#     end_date = models.DateField(blank=True, null=True)

#     currently_working = models.BooleanField(default=False)

#     description = models.TextField(blank=True, null=True)

#     def __str__(self):
#         return self.company_name



# class Skill(models.Model):
#     resume = models.ForeignKey(
#         Resume,
#         on_delete=models.CASCADE,
#         related_name='skills'
#     )

#     name = models.CharField(max_length=100)

#     def __str__(self):
#         return self.name



# class Project(models.Model):
#     resume = models.ForeignKey(
#         Resume,
#         on_delete=models.CASCADE,
#         related_name='projects'
#     )

#     title = models.CharField(max_length=255)

#     description = models.TextField(blank=True, null=True)

#     project_link = models.URLField(blank=True, null=True)

#     github_link = models.URLField(blank=True, null=True)

#     def __str__(self):
#         return self.title    


# class Certification(models.Model):
#     resume = models.ForeignKey(
#         Resume,
#         on_delete=models.CASCADE,
#         related_name='certifications'
#     )

#     name = models.CharField(max_length=255)

#     organization = models.CharField(max_length=255)

#     issue_date = models.DateField(blank=True, null=True)

#     credential_url = models.URLField(blank=True, null=True)

#     def __str__(self):
#         return self.name
    

# class Language(models.Model):
#     resume = models.ForeignKey(
#         Resume,
#         on_delete=models.CASCADE,
#         related_name='languages'
#     )

#     name = models.CharField(max_length=100)

#     proficiency = models.CharField(
#         max_length=100,
#         blank=True,
#         null=True
#     )

#     def __str__(self):
#         return self.name


# class Achievement(models.Model):
#     resume = models.ForeignKey(
#         Resume,
#         on_delete=models.CASCADE,
#         related_name='achievements'
#     )

#     title = models.CharField(max_length=255)

#     description = models.TextField(blank=True, null=True)

#     def __str__(self):
#         return self.title        
    

# from django.contrib.auth.models import AbstractUser
# from django.db import models
# from datetime import date

# class User(AbstractUser):

#     is_subscribed = models.BooleanField(default=False)
#     subscription_expires = models.DateField(null=True, blank=True)
#     free_download_used = models.BooleanField(default=False)    




# from django.db import models
# from django.conf import settings
# from django.contrib.auth.models import AbstractUser


# # =========================
# # USER MODEL (AUTH)
# # =========================
# # class User(AbstractUser):
# #     is_subscribed = models.BooleanField(default=False)
# #     subscription_expires = models.DateField(null=True, blank=True)
# #     free_download_used = models.BooleanField(default=False)
# user = models.ForeignKey(
#     settings.AUTH_USER_MODEL,
#     on_delete=models.CASCADE,
#     related_name='resumes'
# )

# # =========================
# # RESUME
# # =========================
# class Resume(models.Model):

#     TEMPLATE_CHOICES = [
#         ('template1', 'Template 1'),
#         ('template2', 'Template 2'),
#         ('template3', 'Template 3'),
#         ('template4', 'Template 4'),
#         ('template5', 'Template 5'),
#         ('template6', 'Template 6'),
#         ('template7', 'Template 7'),
#         ('template8', 'Template 8'),
#         ('template9', 'Template 9'),
#         ('template10', 'Template 10'),
#         ('template11', 'Template 11'),
#         ('template12', 'Template 12'),
#         ('template13', 'Template 13'),
#         ('template14', 'Template 14'),
#         ('template15', 'Template 15'),
#     ]

#     user = models.ForeignKey(
#         settings.AUTH_USER_MODEL,
#         on_delete=models.CASCADE,
#         related_name='resumes'
#     )

#     title = models.CharField(max_length=255)

#     full_name = models.CharField(max_length=255)
#     email = models.EmailField()
#     phone = models.CharField(max_length=20)

#     summary = models.TextField(blank=True, null=True)

#     template = models.CharField(
#         max_length=100,
#         choices=TEMPLATE_CHOICES,
#         default='template1'
#     )

#     profile_image = models.ImageField(
#         upload_to='resume_profiles/',
#         blank=True,
#         null=True
#     )

#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)

#     def __str__(self):
#         return self.title


# # =========================
# # EDUCATION
# # =========================
# class Education(models.Model):
#     resume = models.ForeignKey(
#         Resume,
#         on_delete=models.CASCADE,
#         related_name='educations'
#     )

#     school_name = models.CharField(max_length=255)
#     degree = models.CharField(max_length=255)
#     field_of_study = models.CharField(max_length=255, blank=True, null=True)

#     start_date = models.DateField()
#     end_date = models.DateField(blank=True, null=True)

#     description = models.TextField(blank=True, null=True)

#     def __str__(self):
#         return self.school_name


# # =========================
# # EXPERIENCE
# # =========================
# class Experience(models.Model):
#     resume = models.ForeignKey(
#         Resume,
#         on_delete=models.CASCADE,
#         related_name='experiences'
#     )

#     company_name = models.CharField(max_length=255)
#     job_title = models.CharField(max_length=255)

#     start_date = models.DateField()
#     end_date = models.DateField(blank=True, null=True)

#     currently_working = models.BooleanField(default=False)

#     description = models.TextField(blank=True, null=True)

#     def __str__(self):
#         return self.company_name


# # =========================
# # SKILLS
# # =========================
# class Skill(models.Model):
#     resume = models.ForeignKey(
#         Resume,
#         on_delete=models.CASCADE,
#         related_name='skills'
#     )

#     name = models.CharField(max_length=100)

#     def __str__(self):
#         return self.name


# # =========================
# # PROJECTS
# # =========================
# class Project(models.Model):
#     resume = models.ForeignKey(
#         Resume,
#         on_delete=models.CASCADE,
#         related_name='projects'
#     )

#     title = models.CharField(max_length=255)
#     description = models.TextField(blank=True, null=True)

#     project_link = models.URLField(blank=True, null=True)
#     github_link = models.URLField(blank=True, null=True)

#     def __str__(self):
#         return self.title


# # =========================
# # CERTIFICATIONS
# # =========================
# class Certification(models.Model):
#     resume = models.ForeignKey(
#         Resume,
#         on_delete=models.CASCADE,
#         related_name='certifications'
#     )

#     name = models.CharField(max_length=255)
#     organization = models.CharField(max_length=255)

#     issue_date = models.DateField(blank=True, null=True)
#     credential_url = models.URLField(blank=True, null=True)

#     def __str__(self):
#         return self.name


# # =========================
# # LANGUAGES
# # =========================
# class Language(models.Model):
#     resume = models.ForeignKey(
#         Resume,
#         on_delete=models.CASCADE,
#         related_name='languages'
#     )

#     name = models.CharField(max_length=100)
#     proficiency = models.CharField(max_length=100, blank=True, null=True)

#     def __str__(self):
#         return self.name


# # =========================
# # ACHIEVEMENTS
# # =========================
# class Achievement(models.Model):
#     resume = models.ForeignKey(
#         Resume,
#         on_delete=models.CASCADE,
#         related_name='achievements'
#     )

#     title = models.CharField(max_length=255)
#     description = models.TextField(blank=True, null=True)

#     def __str__(self):
#         return self.title





# new one//
from django.db import models
from django.conf import settings


# =========================
# RESUME MODEL
# =========================
class Resume(models.Model):

    TEMPLATE_CHOICES = [
        ('template1', 'Template 1'),
        ('template2', 'Template 2'),
        ('template3', 'Template 3'),
        ('template4', 'Template 4'),
        ('template5', 'Template 5'),
        ('template6', 'Template 6'),
        ('template7', 'Template 7'),
        ('template8', 'Template 8'),
        ('template9', 'Template 9'),
        ('template10', 'Template 10'),
        ('template11', 'Template 11'),
        ('template12', 'Template 12'),
        ('template13', 'Template 13'),
        ('template14', 'Template 14'),
        ('template15', 'Template 15'),
    ]

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='resumes'
    )

    title = models.CharField(max_length=255)

    full_name = models.CharField(max_length=255)
    email = models.EmailField(blank=True, null=True)
    phone = models.CharField(max_length=20, blank=True, null=True)

    summary = models.TextField(blank=True, null=True)

    template = models.CharField(
        max_length=100,
        choices=TEMPLATE_CHOICES,
        default='template1'
    )

    profile_image = models.ImageField(
        upload_to='resume_profiles/',
        blank=True,
        null=True
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title


# =========================
# EDUCATION
# =========================
class Education(models.Model):
    resume = models.ForeignKey(
        Resume,
        on_delete=models.CASCADE,
        related_name='educations'
    )

    school_name = models.CharField(max_length=255)
    degree = models.CharField(max_length=255)
    field_of_study = models.CharField(max_length=255, blank=True, null=True)
    
    cgpa = models.CharField(
    max_length=50,
    blank=True,
    null=True
)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)

    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.school_name


# =========================
# EXPERIENCE
# =========================
class Experience(models.Model):
    resume = models.ForeignKey(
        Resume,
        on_delete=models.CASCADE,
        related_name='experiences'
    )

    company_name = models.CharField(max_length=255)
    job_title = models.CharField(max_length=255)

    location = models.CharField(
        max_length=255,
        blank=True,
        null=True
    )

    employment_type = models.CharField(
        max_length=100,
        blank=True,
        null=True
    )

    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)

    currently_working = models.BooleanField(default=False)

    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.company_name


# class Experience(models.Model):
#     resume = models.ForeignKey(
#         Resume,
#         on_delete=models.CASCADE,
#         related_name='experiences'
#     )

#     company_name = models.CharField(max_length=255)
#     job_title = models.CharField(max_length=255)

#     start_date = models.DateField()
#     end_date = models.DateField(blank=True, null=True)

#     currently_working = models.BooleanField(default=False)

#     description = models.TextField(blank=True, null=True)

#     def __str__(self):
#         return self.company_name


# =========================
# SKILLS
# =========================
class Skill(models.Model):
    resume = models.ForeignKey(
        Resume,
        on_delete=models.CASCADE,
        related_name='skills'
    )

    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


# =========================
# PROJECTS
# =========================
class Project(models.Model):
    resume = models.ForeignKey(
        Resume,
        on_delete=models.CASCADE,
        related_name='projects'
    )

    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)

    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)

    project_link = models.URLField(blank=True, null=True)
    github_link = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.title

# class Project(models.Model):
#     resume = models.ForeignKey(
#         Resume,
#         on_delete=models.CASCADE,
#         related_name='projects'
#     )

#     title = models.CharField(max_length=255)
#     description = models.TextField(blank=True, null=True)

#     project_link = models.URLField(blank=True, null=True)
#     github_link = models.URLField(blank=True, null=True)

#     def __str__(self):
#         return self.title


# =========================
# CERTIFICATIONS
# =========================
class Certification(models.Model):
    resume = models.ForeignKey(
        Resume,
        on_delete=models.CASCADE,
        related_name='certifications'
    )

    name = models.CharField(max_length=255)
    organization = models.CharField(max_length=255)

    issue_date = models.DateField(blank=True, null=True)
    credential_url = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.name


# =========================
# LANGUAGES
# =========================
class Language(models.Model):
    resume = models.ForeignKey(
        Resume,
        on_delete=models.CASCADE,
        related_name='languages'
    )

    name = models.CharField(max_length=100)
    proficiency = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.name


# =========================
# ACHIEVEMENTS
# =========================
class Achievement(models.Model):
    resume = models.ForeignKey(
        Resume,
        on_delete=models.CASCADE,
        related_name='achievements'
    )

    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title