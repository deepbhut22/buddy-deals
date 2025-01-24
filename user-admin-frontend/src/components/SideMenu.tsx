import React from 'react';
import { Users, UserCheck, LogOut } from 'lucide-react';
import { MenuSection } from '../types';

interface SideMenuProps {
  activeSection: MenuSection;
  onSectionChange: (section: MenuSection) => void;
  onLogout: () => void;
}

export function SideMenu({ activeSection, onSectionChange, onLogout }: SideMenuProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 h-full">
      <div className="space-y-2">
        <button
          onClick={() => onSectionChange('pending')}
          className={`w-full flex items-center gap-2 p-3 rounded-md transition-colors ${
            activeSection === 'pending'
              ? 'bg-blue-100 text-blue-700'
              : 'hover:bg-gray-100 text-gray-700'
          }`}
        >
          <UserCheck className="w-5 h-5" />
          <span>Manage Pending Requests</span>
        </button>
        
        <button
          onClick={() => onSectionChange('all-users')}
          className={`w-full flex items-center gap-2 p-3 rounded-md transition-colors ${
            activeSection === 'all-users'
              ? 'bg-blue-100 text-blue-700'
              : 'hover:bg-gray-100 text-gray-700'
          }`}
        >
          <Users className="w-5 h-5" />
          <span>Manage All Users</span>
        </button>

        <button
          onClick={onLogout}
          className="w-full flex items-center gap-2 p-3 rounded-md text-red-600 hover:bg-red-50 transition-colors mt-8"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}