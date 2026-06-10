# from rest_framework import serializers
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


# class EducationSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Education
#         fields = '__all__'


# class ExperienceSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Experience
#         fields = '__all__'


# class SkillSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Skill
#         fields = '__all__'


# class ProjectSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Project
#         fields = '__all__'


# class CertificationSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Certification
#         fields = '__all__'


# class LanguageSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Language
#         fields = '__all__'


# class AchievementSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Achievement
#         fields = '__all__'


# class ResumeSerializer(serializers.ModelSerializer):

#     educations = EducationSerializer(many=True, read_only=True)
#     experiences = ExperienceSerializer(many=True, read_only=True)
#     skills = SkillSerializer(many=True, read_only=True)
#     projects = ProjectSerializer(many=True, read_only=True)
#     certifications = CertificationSerializer(many=True, read_only=True)
#     languages = LanguageSerializer(many=True, read_only=True)
#     achievements = AchievementSerializer(many=True, read_only=True)

#     class Meta:
#         model = Resume
#         fields = '__all__'



from rest_framework import serializers

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


# =========================
# Education Serializer
# =========================

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'
        read_only_fields = ['resume']


# =========================
# Experience Serializer
# =========================

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'
        read_only_fields = ['resume']

    def validate(self, data):
        start_date = data.get('start_date')
        end_date = data.get('end_date')

        if end_date and start_date and end_date < start_date:
            raise serializers.ValidationError(
                "End date cannot be earlier than start date."
            )

        return data


# =========================
# Skill Serializer
# =========================

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'
        read_only_fields = ['resume']


# =========================
# Project Serializer
# =========================

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'
        read_only_fields = ['resume']


# =========================
# Certification Serializer
# =========================

class CertificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certification
        fields = '__all__'
        read_only_fields = ['resume']


# =========================
# Language Serializer
# =========================

class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = '__all__'
        read_only_fields = ['resume']


# =========================
# Achievement Serializer
# =========================

class AchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievement
        fields = '__all__'
        read_only_fields = ['resume']


# =========================
# Resume Serializer
# =========================

class ResumeSerializer(serializers.ModelSerializer):

    educations = EducationSerializer(many=True, required=False)
    experiences = ExperienceSerializer(many=True, required=False)
    skills = SkillSerializer(many=True, required=False)
    projects = ProjectSerializer(many=True, required=False)
    certifications = CertificationSerializer(many=True, required=False)
    languages = LanguageSerializer(many=True, required=False)
    achievements = AchievementSerializer(many=True, required=False)

    class Meta:
        model = Resume
        fields = '__all__'
        read_only_fields = ['user']

    def create(self, validated_data):

        educations_data = validated_data.pop('educations', [])
        experiences_data = validated_data.pop('experiences', [])
        skills_data = validated_data.pop('skills', [])
        projects_data = validated_data.pop('projects', [])
        certifications_data = validated_data.pop('certifications', [])
        languages_data = validated_data.pop('languages', [])
        achievements_data = validated_data.pop('achievements', [])

        resume = Resume.objects.create(**validated_data)

        # Education
        for education in educations_data:
            Education.objects.create(
                resume=resume,
                **education
            )

        # Experience
        for experience in experiences_data:
            Experience.objects.create(
                resume=resume,
                **experience
            )

        # Skills
        for skill in skills_data:
            Skill.objects.create(
                resume=resume,
                **skill
            )

        # Projects
        for project in projects_data:
            Project.objects.create(
                resume=resume,
                **project
            )

        # Certifications
        for certification in certifications_data:
            Certification.objects.create(
                resume=resume,
                **certification
            )

        # Languages
        for language in languages_data:
            Language.objects.create(
                resume=resume,
                **language
            )

        # Achievements
        for achievement in achievements_data:
            Achievement.objects.create(
                resume=resume,
                **achievement
            )

        return resume
    


    def update(self, instance, validated_data):

        educations_data = validated_data.pop('educations', [])
        experiences_data = validated_data.pop('experiences', [])
        skills_data = validated_data.pop('skills', [])
        projects_data = validated_data.pop('projects', [])
        certifications_data = validated_data.pop('certifications', [])
        languages_data = validated_data.pop('languages', [])
        achievements_data = validated_data.pop('achievements', [])

        # Resume fields update
        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        instance.save()

        # =========================
        # Replace old nested data
        # =========================

        instance.educations.all().delete()
        instance.experiences.all().delete()
        instance.skills.all().delete()
        instance.projects.all().delete()
        instance.certifications.all().delete()
        instance.languages.all().delete()
        instance.achievements.all().delete()

        # =========================
        # Re-create nested data
        # =========================

        for education in educations_data:
            Education.objects.create(
                resume=instance,
                **education
            )

        for experience in experiences_data:
            Experience.objects.create(
                resume=instance,
                **experience
            )

        for skill in skills_data:
            Skill.objects.create(
                resume=instance,
                **skill
            )

        for project in projects_data:
            Project.objects.create(
                resume=instance,
                **project
            )

        for certification in certifications_data:
            Certification.objects.create(
                resume=instance,
                **certification
            )

        for language in languages_data:
            Language.objects.create(
                resume=instance,
                **language
            )

        for achievement in achievements_data:
            Achievement.objects.create(
                resume=instance,
                **achievement
            )

        return instance