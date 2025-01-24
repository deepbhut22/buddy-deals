import React from 'react';
import { UserDetails as UserDetailsType } from '../types';
import { FileText, Phone, Mail, Calendar } from 'lucide-react';

interface UserDetailsProps {
  user: UserDetailsType;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
}

export function UserDetails({ user, onApprove, onReject }: UserDetailsProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">
          {user.firstName} {user.lastName}
        </h2>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-600">
            <Mail className="w-4 h-4" />
            {user.email}
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Phone className="w-4 h-4" />
            {user.phoneNumber}
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-4 h-4" />
            {new Date(user.requestedAt).toLocaleDateString()}
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
        <button
          onClick={() => onApprove(user._id)}
          className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
        >
          Approve
        </button>
        <button
          onClick={() => onReject(user._id)}
          className="flex-1 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
        >
          Reject
        </button>
      </div>
    </div>
  );
}