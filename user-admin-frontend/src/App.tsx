import React, { useState, useEffect } from 'react';
import { LoginForm } from './components/LoginForm';
import { UserList } from './components/UserList';
import { UserDetails } from './components/UserDetails';
import { UserDetailsEdit } from './components/UserDetailsEdit';
import { SideMenu } from './components/SideMenu';
import { LoginCredentials, User, UserDetails as UserDetailsType, MenuSection } from './types';
import {
  loginAdmin,
  fetchUsers,
  fetchAllUsers,
  fetchUserDetails,
  approveUser,
  rejectUser,
  deleteUser,
  updateUser,
} from './api';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState<string>();
  const [activeSection, setActiveSection] = useState<MenuSection>('pending');
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<UserDetailsType>();
  const [selectedUserId, setSelectedUserId] = useState<string>();

  useEffect(() => {
    if (isAuthenticated) {
      loadUsers();
    }
  }, [isAuthenticated, activeSection]);

  useEffect(() => {
    if (selectedUserId) {
      loadUserDetails(selectedUserId);
    }
  }, [selectedUserId]);

  const handleLogin = async (credentials: LoginCredentials) => {
    try {
      await loginAdmin(credentials);
      setIsAuthenticated(true);
      setLoginError(undefined);
    } catch (error) {
      setLoginError('Invalid credentials. Please try again.');
    }
  };

  const loadUsers = async () => {
    try {
      const userList = activeSection === 'pending' ? await fetchUsers() : await fetchAllUsers();
      setUsers(userList);
    } catch (error) {
      console.error('Failed to load users:', error);
    }
  };

  const loadUserDetails = async (userId: string) => {
    try {
      const details = await fetchUserDetails(userId);
      setSelectedUser(details);
    } catch (error) {
      console.error('Failed to load user details:', error);
    }
  };

  const handleApprove = async (userId: string) => {
    try {
      await approveUser(userId);
      await loadUsers();
      setSelectedUser(undefined);
      setSelectedUserId(undefined);
    } catch (error) {
      console.error('Failed to approve user:', error);
    }
  };

  const handleReject = async (userId: string) => {
    try {
      await rejectUser(userId);
      await loadUsers();
      setSelectedUser(undefined);
      setSelectedUserId(undefined);
    } catch (error) {
      console.error('Failed to reject user:', error);
    }
  };

  const handleDelete = async (userId: string) => {
    try {
      await deleteUser(userId);
      await loadUsers();
      setSelectedUser(undefined);
      setSelectedUserId(undefined);
    } catch (error) {
      console.error('Failed to delete user:', error);
    }
  };

  const handleUpdate = async (userId: string, data: Partial<UserDetailsType>) => {
    try {
      await updateUser(userId, data);
      await loadUserDetails(userId);
    } catch (error) {
      console.error('Failed to update user:', error);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setSelectedUser(undefined);
    setSelectedUserId(undefined);
    setUsers([]);
  };

  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} error={loginError} />;
  }
  const handleRefresh = async () => {
    const updatedUsers = await fetchUsers();
    setUsers(updatedUsers);
    
    // Clear selected user if they no longer exist in the updated list
    if (selectedUserId && !updatedUsers.find((user: User) => user._id === selectedUserId)) {
      setSelectedUser(undefined);
      setSelectedUserId(undefined);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-2">
            <SideMenu
              activeSection={activeSection}
              onSectionChange={setActiveSection}
              onLogout={handleLogout}
            />
          </div>
          <div className="md:col-span-3">
            <UserList
              users={users}
              selectedUserId={selectedUserId}
              onSelectUser={setSelectedUserId}
              onRefresh={handleRefresh}
            />
          </div>
          <div className="md:col-span-7">
            {selectedUser ? (
              activeSection === 'pending' ? (
                <UserDetails
                  user={selectedUser}
                  onApprove={handleApprove}
                  onReject={handleReject}
                />
              ) : (
                <UserDetailsEdit
                  user={selectedUser}
                  onDelete={handleDelete}
                  onUpdate={handleUpdate}
                />
              )
            ) : (
              <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center h-full">
                <p className="text-gray-500">Select a user to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;