from django.urls.conf import path, include
from rest_framework import routers
from rest import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'user_profile', views.UserProfileViewSet)
router.register(r'project_details', views.ProjectDetailViewSet)
router.register(r'skills', views.SkillViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
