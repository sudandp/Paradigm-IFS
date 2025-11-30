import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import BottomNav from './BottomNav';

const MobileLayout: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#0f1f0f]">
            {/* Mobile Header */}
            <Header />

            {/* Main Content Area */}
            {/* Add extra padding bottom (pb-28 = 7rem = 112px) to account for the fixed BottomNav (h-16 = 64px) + safe area */}
            <main className="flex-1 overflow-y-auto pb-28 px-4 pt-2">
                <Outlet />
            </main>

            {/* Bottom Navigation */}
            <BottomNav />
        </div>
    );
};

export default MobileLayout;
