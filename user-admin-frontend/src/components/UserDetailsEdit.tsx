import React, { useState } from 'react';
import { UserDetails as UserDetailsType } from '../types';
import { FileText, Phone, Mail, Calendar, Save } from 'lucide-react';

interface UserDetailsEditProps {
  user: UserDetailsType;
  onDelete: (id: string) => void;
  onUpdate: (id: string, data: Partial<UserDetailsType>) => void;
}

export function UserDetailsEdit({ user, onDelete, onUpdate }: UserDetailsEditProps) {
  const [editedUser, setEditedUser] = useState(user);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (field: keyof UserDetailsType, value: any) => {
    setEditedUser((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onUpdate(user._id, editedUser);
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">User Details</h2>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-blue-600 hover:text-blue-700"
          >
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                value={editedUser.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                disabled={!isEditing}
                className="w-full p-2 border rounded-md disabled:bg-gray-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                value={editedUser.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                disabled={!isEditing}
                className="w-full p-2 border rounded-md disabled:bg-gray-50"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email
            </label>
            <input
              type="email"
              value={editedUser.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              disabled={!isEditing}
              className="w-full p-2 border rounded-md disabled:bg-gray-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Phone Number
            </label>
            <input
              type="tel"
              value={editedUser.phoneNumber}
              onChange={(e) => handleInputChange('phoneNumber', parseInt(e.target.value))}
              disabled={!isEditing}
              className="w-full p-2 border rounded-md disabled:bg-gray-50"
            />
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-4 h-4" />
            Requested: {new Date(user.requestedAt).toLocaleDateString()}
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <FileText className="w-5 h-5 text-blue-600" />
          Documents
        </h3>
        <div className="space-y-3">
          {user.documents.documents.map((doc) => (
            <div
              key={doc._id}
              className="p-4 border border-gray-200 rounded-lg"
            >
              <div className="font-medium mb-1">{doc.name}</div>
              <div className="flex justify-between items-center">
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  View Document
                </a>
                <span className="text-sm text-gray-500">
                  {new Date(doc.uploadedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <Save className="w-4 h-4" />
            Save Changes
          </button>
        ) : (
          <button
            onClick={() => onDelete(user._id)}
            className="flex-1 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
          >
            Delete User
          </button>
        )}
      </div>
    </div>
  );
}