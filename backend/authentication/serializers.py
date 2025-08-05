from authentication.models import CustomUser
from rest_framework import serializers

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