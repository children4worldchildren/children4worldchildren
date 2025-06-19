import React, { useState, useEffect } from 'react';
import { Edit, Trash2, Save, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import apiService from '../services/api';

interface DataDisplayProps {
  dataType: 'team' | 'projects';
}

interface TeamMember {
  id: string;
  name: string;
  position: string;
  email: string;
  phone: string;
  image: string;
  experience: string;
  qualifications: string[];
  specializations: string[];
}

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  status: string;
  year: string;
}

const DataDisplay: React.FC<DataDisplayProps> = ({ dataType }) => {
  const { isAuthenticated } = useAuth();
  const [data, setData] = useState<(TeamMember | Project)[]>([]);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, [dataType]);

  const loadData = async () => {
    try {
      setLoading(true);
      if (dataType === 'team') {
        const response = await apiService.getTeamMembers();
        setData(response.team || []);
      } else if (dataType === 'projects') {
        const response = await apiService.getProjects();
        setData(response.projects || []);
      }
    } catch (error) {
      console.error(`Failed to load ${dataType}:`, error);
      // Load default data if API fails
      if (dataType === 'team') {
        setData([
          {
            id: '1',
            name: 'John Babatunde',
            position: 'CEO',
            email: 'john@johnbabs.com',
            phone: '+234 123 456 7890',
            image: `${import.meta.env.BASE_URL}ceo.jpg`,
            experience: 'Experienced environmental consultant',
            qualifications: ['Ph.D. Environmental Engineering', 'M.Sc. Environmental Management', 'B.Eng. Civil Engineering'],
            specializations: ['Environmental Impact Assessment', 'Waste Management', 'Environmental Restoration']
          }
        ]);
      } else {
        setData([
          {
            id: '1',
            title: 'Environmental Impact Assessment',
            description: 'Comprehensive EIA for major infrastructure project',
            category: 'Environmental Consultancy',
            image: `${import.meta.env.BASE_URL}env1.jpeg`,
            status: 'Completed',
            year: '2023'
          }
        ]);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id: string) => {
    setIsEditing(id);
  };

  const handleCancel = () => {
    setIsEditing(null);
  };

  const handleSave = async (item: TeamMember | Project) => {
    try {
      if (dataType === 'team') {
        await apiService.updateTeamMember(item as TeamMember);
      } else {
        await apiService.updateProject(item as Project);
      }
      await loadData();
      setIsEditing(null);
    } catch (error) {
      console.error(`Failed to save ${dataType}:`, error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    
    try {
      if (dataType === 'team') {
        await apiService.deleteTeamMember(id);
      } else {
        await apiService.deleteProject(id);
      }
      await loadData();
    } catch (error) {
      console.error(`Failed to delete ${dataType}:`, error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Data List */}
      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.id} className="bg-white border rounded-lg p-6">
            {isEditing === item.id ? (
              // Edit Form
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Edit {dataType === 'team' ? 'Team Member' : 'Project'}
                </h4>
                {dataType === 'team' ? (
                  <TeamMemberForm
                    teamMember={item as TeamMember}
                    onSave={handleSave}
                    onCancel={handleCancel}
                  />
                ) : (
                  <ProjectForm
                    project={item as Project}
                    onSave={handleSave}
                    onCancel={handleCancel}
                  />
                )}
              </div>
            ) : (
              // Display Item
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  {dataType === 'team' ? (
                    <div className="flex items-center space-x-4">
                      <img
                        src={(item as TeamMember).image}
                        alt={(item as TeamMember).name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {(item as TeamMember).name}
                        </h3>
                        <p className="text-emerald-600 font-medium">
                          {(item as TeamMember).position}
                        </p>
                        <p className="text-gray-600">
                          {(item as TeamMember).email} | {(item as TeamMember).phone}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {(item as Project).title}
                      </h3>
                      <p className="text-emerald-600 font-medium">
                        {(item as Project).category}
                      </p>
                      <p className="text-gray-600">
                        {(item as Project).description}
                      </p>
                      <div className="flex space-x-4 mt-2">
                        <span className="text-sm text-gray-500">
                          Status: {(item as Project).status}
                        </span>
                        <span className="text-sm text-gray-500">
                          Year: {(item as Project).year}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="p-2 text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Empty State */}
      {data.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No {dataType} found.
        </div>
      )}
    </div>
  );
};

// Team Member Form Component
interface TeamMemberFormProps {
  teamMember: TeamMember;
  onSave: (teamMember: TeamMember) => void;
  onCancel: () => void;
}

const TeamMemberForm: React.FC<TeamMemberFormProps> = ({ teamMember, onSave, onCancel }) => {
  const [formData, setFormData] = useState<TeamMember>(teamMember);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Position</label>
          <input
            type="text"
            value={formData.position}
            onChange={(e) => setFormData({ ...formData, position: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
        <textarea
          value={formData.experience}
          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          required
        />
      </div>

      <div className="flex space-x-4">
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
        >
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          <X className="h-4 w-4 mr-2" />
          Cancel
        </button>
      </div>
    </form>
  );
};

// Project Form Component
interface ProjectFormProps {
  project: Project;
  onSave: (project: Project) => void;
  onCancel: () => void;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ project, onSave, onCancel }) => {
  const [formData, setFormData] = useState<Project>(project);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          >
            <option value="">Select Category</option>
            <option value="Environmental Consultancy">Environmental Consultancy</option>
            <option value="Social Impact Assessment">Social Impact Assessment</option>
            <option value="Engineering Design">Engineering Design</option>
            <option value="Waste Management">Waste Management</option>
            <option value="Environmental Restoration">Environmental Restoration</option>
            <option value="Cleaning & Pest Control">Cleaning & Pest Control</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
          <select
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          >
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="On Hold">On Hold</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
          <input
            type="number"
            value={formData.year}
            onChange={(e) => setFormData({ ...formData, year: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            min="2000"
            max={new Date().getFullYear() + 5}
            required
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          required
        />
      </div>

      <div className="flex space-x-4">
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
        >
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          <X className="h-4 w-4 mr-2" />
          Cancel
        </button>
      </div>
    </form>
  );
};

export default DataDisplay; 