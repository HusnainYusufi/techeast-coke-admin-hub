import api from "./api";

// Fetch overview
export const getCokeAdminOverview = async (page = 1, limit = 20) => {
  try {
    const response = await api.get(`/coke-admin/overview?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Submit maintenance feedback
export const submitMaintenanceFeedback = async (maintenanceId, message) => {
  try {
    const response = await api.post(`/coke-admin/maintenance/${maintenanceId}/feedback`, { message });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
