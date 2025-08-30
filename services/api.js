// services/api.js
const API_BASE = 'http://localhost:5000/api';

export const apiService = {
  // Project management
  async createProject(projectData) {
    const response = await fetch(`${API_BASE}/projects`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(projectData)
    });
    return response.json();
  },

  // AI Chat
  async sendMessage(message, projectContext) {
    const response = await fetch(`${API_BASE}/ai-chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, projectContext })
    });
    return response.json();
  },

  // Code generation
  async generateCode(components, framework) {
    const response = await fetch(`${API_BASE}/generate-code`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ components, framework })
    });
    return response.json();
  },

  // Deployment
  async deployProject(deploymentData) {
    const response = await fetch(`${API_BASE}/deploy`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(deploymentData)
    });
    return response.json();
  },

  // Button clicks
  async handleButtonClick(buttonName, projectId) {
    const response = await fetch(`${API_BASE}/button-click`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ buttonName, projectId })
    });
    return response.json();
  }
};
