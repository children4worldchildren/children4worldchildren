import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { 
  Settings, 
  Users, 
  Image, 
  FileText, 
  Building, 
  FolderOpen,
  LogOut,
  Save,
  Plus
} from 'lucide-react';
import LogoUpload from '../components/LogoUpload';
import ImageUpload from '../components/ImageUpload';
import DataDisplay from '../components/DataDisplay';

const Admin = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSaving, setIsSaving] = useState(false);

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const handleLogout = () => {
    logout();
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      // Trigger save event for all components
      window.dispatchEvent(new CustomEvent('adminPanelSaved'));
      // Add a small delay to show saving state
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error('Save failed:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: Settings },
    { id: 'company', name: 'Company Info', icon: Building },
    { id: 'team', name: 'Team Members', icon: Users },
    { id: 'projects', name: 'Projects', icon: FolderOpen },
    { id: 'images', name: 'Images & Media', icon: Image },
    { id: 'content', name: 'Page Content', icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
              <span className="text-sm text-gray-500">Welcome, {user?.username}</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50"
              >
                {isSaving ? (
                  <>
                    <Save className="h-4 w-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Save All Changes
                  </>
                )}
              </button>
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <nav className="space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'bg-emerald-100 text-emerald-700 border-r-2 border-emerald-600'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    {tab.name}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 mt-8 lg:mt-0">
            <div className="bg-white rounded-lg shadow">
              {activeTab === 'dashboard' && (
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-emerald-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-emerald-900 mb-2">Quick Actions</h3>
                      <ul className="space-y-2 text-sm text-emerald-700">
                        <li>• Upload new company logo</li>
                        <li>• Add team members</li>
                        <li>• Update project information</li>
                        <li>• Manage website content</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-blue-900 mb-2">Recent Activity</h3>
                      <p className="text-sm text-blue-700">No recent changes</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-purple-900 mb-2">System Status</h3>
                      <p className="text-sm text-purple-700">All systems operational</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'company' && (
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Company Information</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Logo</h3>
                      <LogoUpload showUpload={true} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            defaultValue="Children 4 World Children International"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Contact Email
                          </label>
                          <input
                            type="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            defaultValue="info@children4worldchildren.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            defaultValue="+234 123 456 7890"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Address
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            defaultValue="Lagos, Nigeria"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'team' && (
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Team Members</h2>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-900">Current Team</h3>
                      <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Member
                      </button>
                    </div>
                    <DataDisplay dataType="team" />
                  </div>
                </div>
              )}

              {activeTab === 'projects' && (
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Projects</h2>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-900">Current Projects</h3>
                      <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Project
                      </button>
                    </div>
                    <DataDisplay dataType="projects" />
                  </div>
                </div>
              )}

              {activeTab === 'images' && (
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Images & Media</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Hero Images</h3>
                      <ImageUpload imageType="hero" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Images</h3>
                      <ImageUpload imageType="projects" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Team Photos</h3>
                      <ImageUpload imageType="team" />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'content' && (
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Page Content</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Home Page</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Hero Title
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            defaultValue="Environmental Excellence"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Hero Description
                          </label>
                          <textarea
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            defaultValue="Leading provider of comprehensive environmental consultancy and engineering services in Nigeria. We deliver sustainable solutions that protect the environment while driving business success."
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">About Page</h3>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Description
                        </label>
                        <textarea
                          rows={5}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                          defaultValue="Children 4 World Children International is a youth-focused organization dedicated to empowering young people and families worldwide..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin; 