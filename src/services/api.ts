// API base strategy:
// - Development: use '/api' and let Vite devServer proxy forward to the real backend
// - Production: use VITE_API_URL (must include '/api' path) or fallback placeholder
const API_BASE_URL = import.meta.env.DEV
  ? '/api'
  : (import.meta.env.VITE_API_URL || 'https://your-backend-url.railway.app/api');

interface LoginResponse {
  message: string;
  token: string;
  user: any;
}

class ApiService {
  private baseURL: string;
  private token: string | null;

  constructor() {
    this.baseURL = API_BASE_URL;
    this.token = localStorage.getItem('authToken');
  }

  setToken(token: string | null): void {
    this.token = token;
    if (token) {
      localStorage.setItem('authToken', token);
    } else {
      localStorage.removeItem('authToken');
    }
  }

  private getHeaders(): Record<string, string> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    
    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }
    
    return headers;
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const config: RequestInit = {
      headers: this.getHeaders(),
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `HTTP error! status: ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Authentication methods
  async login(username: string, password: string): Promise<LoginResponse> {
    const response = await this.request<LoginResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
    
    if (response.token) {
      this.setToken(response.token);
    }
    
    return response;
  }

  async getCurrentUser(): Promise<any> {
    return await this.request('/auth/me');
  }

  async changePassword(currentPassword: string, newPassword: string): Promise<any> {
    return await this.request('/auth/change-password', {
      method: 'PUT',
      body: JSON.stringify({ currentPassword, newPassword }),
    });
  }

  logout(): void {
    this.setToken(null);
  }

  // Company methods
  async getCompanyInfo(): Promise<any> {
    return await this.request('/company');
  }

  async updateCompanyInfo(companyData: any): Promise<any> {
    return await this.request('/company', {
      method: 'PUT',
      body: JSON.stringify(companyData),
    });
  }

  // Image methods
  async getImageUrl(key: string): Promise<{ url: string }> {
    return await this.request(`/images/url/${key}`);
  }

  async uploadImage(key: string, category: string, file: File, description: string = ''): Promise<any> {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('key', key);
    formData.append('category', category);
    if (description) {
      formData.append('description', description);
    }

    const url = `${this.baseURL}/images/upload`;
    const config: RequestInit = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.token}`,
      },
      body: formData,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `HTTP error! status: ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error('Image upload failed:', error);
      throw error;
    }
  }

  async deleteImage(key: string): Promise<any> {
    return await this.request(`/images/${key}`, {
      method: 'DELETE',
    });
  }

  // Team methods
  async getTeamMembers(): Promise<{ team: any[] }> {
    return await this.request('/team');
  }

  async addTeamMember(teamMember: any): Promise<any> {
    return await this.request('/team', {
      method: 'POST',
      body: JSON.stringify(teamMember),
    });
  }

  async updateTeamMember(teamMember: any): Promise<any> {
    return await this.request(`/team/${teamMember.id}`, {
      method: 'PUT',
      body: JSON.stringify(teamMember),
    });
  }

  async deleteTeamMember(id: string): Promise<any> {
    return await this.request(`/team/${id}`, {
      method: 'DELETE',
    });
  }

  // Project methods
  async getProjects(): Promise<{ projects: any[] }> {
    return await this.request('/projects');
  }

  async addProject(project: any): Promise<any> {
    return await this.request('/projects', {
      method: 'POST',
      body: JSON.stringify(project),
    });
  }

  async updateProject(project: any): Promise<any> {
    return await this.request(`/projects/${project.id}`, {
      method: 'PUT',
      body: JSON.stringify(project),
    });
  }

  async deleteProject(id: string): Promise<any> {
    return await this.request(`/projects/${id}`, {
      method: 'DELETE',
    });
  }

  // Consultation methods
  async submitConsultation(consultationData: any): Promise<any> {
    return await this.request('/consultations/submit', {
      method: 'POST',
      body: JSON.stringify(consultationData),
    });
  }

  async getConsultations(): Promise<{ consultations: any[] }> {
    return await this.request('/consultations');
  }

  async getConsultation(id: string): Promise<any> {
    return await this.request(`/consultations/${id}`);
  }

  async updateConsultationStatus(id: string, statusData: any): Promise<any> {
    return await this.request(`/consultations/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify(statusData),
    });
  }

  async deleteConsultation(id: string): Promise<any> {
    return await this.request(`/consultations/${id}`, {
      method: 'DELETE',
    });
  }

  // Quote methods
  async submitQuote(quoteData: any): Promise<any> {
    return await this.request('/quotes/submit', {
      method: 'POST',
      body: JSON.stringify(quoteData),
    });
  }

  async getQuotes(): Promise<{ quotes: any[] }> {
    return await this.request('/quotes');
  }

  async getQuote(id: string): Promise<any> {
    return await this.request(`/quotes/${id}`);
  }

  async updateQuote(id: string, quoteData: any): Promise<any> {
    return await this.request(`/quotes/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(quoteData),
    });
  }

  async deleteQuote(id: string): Promise<any> {
    return await this.request(`/quotes/${id}`, {
      method: 'DELETE',
    });
  }

  // Contact form method
  async submitContact(contactData: any): Promise<any> {
    return await this.request('/contact', {
      method: 'POST',
      body: JSON.stringify(contactData),
    });
  }
}

const apiService = new ApiService();
export default apiService;
