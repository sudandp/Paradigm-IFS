import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, CalendarCheck, ListTodo, User } from 'lucide-react';
import { usePermissionsStore } from '../../store/permissionsStore';
import { useAuthStore } from '../../store/authStore';

const BottomNav: React.FC = () => {
    const { user } = useAuthStore();
    const { permissions } = usePermissionsStore();

    if (!user) return null;

    const userPermissions = permissions[user.role] || [];

    // Define mobile navigation items
    const navItems = [
        {
            to: '/mobile-home',
            label: 'Home',
            icon: Home,
            show: true
        },
        {
            to: '/attendance/dashboard',
            label: 'Attendance',
            icon: CalendarCheck,
            show: userPermissions.includes('view_own_attendance')
        },
        {
            to: '/tasks',
            label: 'Tasks',
            icon: ListTodo,
            show: userPermissions.includes('manage_tasks')
        },
        {
            to: '/profile',
            label: 'Profile',
            icon: User,
            show: true
        },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-[#0d2818] border-t border-[#1f3d2b] pb-safe z-50">
            <div className="flex justify-around items-center h-16 px-2">
                {navItems.filter(item => item.show).slice(0, 5).map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) =>
                            `flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                            }`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                <div className={`p-1.5 rounded-xl transition-all ${isActive ? 'bg-[#006B3F]' : 'bg-transparent'}`}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <span className="text-[10px] font-medium">{item.label}</span>
                            </>
                        )}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default BottomNav;
