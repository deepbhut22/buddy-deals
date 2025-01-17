export interface LoginCredentials {
  email: string;
  password: string;
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
}

export interface UserDocument {
  name: string;
  url: string;
  _id: string;
  uploadedAt: string;
}

export interface UserDetails extends User {
  email: string;
  phoneNumber: number;
  documents: {
    _id: string;
    buddyId: string;
    documents: UserDocument[];
  };
  requestedAt: string;
}

export type MenuSection = 'pending' | 'all-users';