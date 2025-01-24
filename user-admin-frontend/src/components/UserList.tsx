import React from 'react';
import { User } from '../types';
import { Users } from 'lucide-react';

interface UserListProps {
  users: User[];
  selectedUserId?: string;
  onSelectUser: (userId: string) => void;
  onRefresh: () => void;
}

export function UserList({ users, selectedUserId, onSelectUser, onRefresh }: UserListProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl font-semibold">User Requests</h2>
        </div>
        <button
          onClick={onRefresh}
          className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </button>
      </div>
      <div className="space-y-2">
        {users.map((user) => (
          <button
            key={user._id}
            onClick={() => onSelectUser(user._id)}
            className={`w-full text-left p-3 rounded-md transition-colors ${
              selectedUserId === user._id
                ? 'bg-blue-100 text-blue-700'
                : 'hover:bg-gray-100'
            }`}
          >
            <div className="font-medium">
              {user.firstName} {user.lastName}
            </div>
            <div className="text-sm text-gray-500">ID: {user._id}</div>
          </button>
        ))}
      </div>
    </div>
  );
}