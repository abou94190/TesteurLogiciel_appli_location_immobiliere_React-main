const BASE_URL = 'http://localhost:8080';

export const fetchProperties = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/properties`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching properties:', error);
    throw error;
  }
};
