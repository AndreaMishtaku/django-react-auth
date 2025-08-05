from authentication.models import CustomUser
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)
  

    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'password', 'first_name','last_name']


    def create(self, validated_data):
        user = CustomUser.objects.create_user(**validated_data)
        return user
    

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'first_name', 'last_name']


class LoginSerializer(TokenObtainPairSerializer):
    def validate(self, data):
        data = super().validate(data)
        user=self.user
        data['user'] = {
            'id': user.id,
            'username': user.username,
            'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name
        }
        return data
