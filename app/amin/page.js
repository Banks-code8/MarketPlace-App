import RoleGuard from '@/components/RoleGuard';

export default function AdminPage() {
  return (
    <RoleGuard allowedRoles={['admin']}>
      <div>
        <h1>Admin Dashboard</h1>
      </div>
    </RoleGuard>
  );
}
