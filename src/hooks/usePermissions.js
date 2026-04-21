import { useAuth } from '@hooks/useAuth';
import { PERMISSIONS } from '@constants/permissions';

export const usePermissions = () => {
  const { role } = useAuth();

  const can = permissionKey => {
    const allowed = PERMISSIONS[permissionKey];
    if (!allowed) return false;
    return allowed.includes(role);
  };

  const canAny = permissionKeys => permissionKeys.some(can);
  const canAll = permissionKeys => permissionKeys.every(can);

  return { can, canAny, canAll };
};
