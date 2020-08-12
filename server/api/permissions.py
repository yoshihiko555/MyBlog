from rest_framework.permissions import BasePermission, SAFE_METHODS

class IsAdminOrReadOnly(BasePermission):
    def has_permission(self, request, view):
        # HTTPメソッドが(GET, HEAD, OPTIONS) or superuserならTrueをアクセスを許可する
        return request.method in SAFE_METHODS or request.user.is_superuser