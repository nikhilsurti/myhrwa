# from django.contrib import admin
# from .models import Resume

# admin.site.register(Resume)


from django.contrib import admin
from .models import Resume, Education, Experience, Skill, Project,Certification,Language,Achievement

admin.site.register(Resume)
admin.site.register(Education)
admin.site.register(Experience)
admin.site.register(Skill)
admin.site.register(Project)
admin.site.register(Certification)
admin.site.register(Language)
admin.site.register(Achievement)
