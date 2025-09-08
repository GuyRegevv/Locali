// Helper function to calculate distance between two coordinates using Haversine formula
export const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = R * c; // Distance in km
    return d;
};

// Helper function to convert degrees to radians
export const deg2rad = (deg) => {
    return deg * (Math.PI/180);
};

// Helper function to normalize city names for comparison
export const normalizeCityName = (name) => {
    return name.toLowerCase().trim().replace(/\s+/g, ' ');
};

// Helper function to normalize country names for comparison
export const normalizeCountryName = (name) => {
    return name.toLowerCase().trim();
};

// Helper function to get city name variations for flexible matching
export const getCityVariations = (cityName) => {
    const variations = [cityName];
    
    // Handle Tel Aviv variations
    if (cityName.includes('tel aviv')) {
        variations.push('tel aviv', 'tel aviv-yafo', 'tel aviv yafo');
    }
    
    // Handle New York variations
    if (cityName.includes('new york')) {
        variations.push('new york', 'new york city', 'nyc');
    }
    
    // Handle London variations
    if (cityName.includes('london')) {
        variations.push('london', 'greater london');
    }
    
    // Handle Paris variations
    if (cityName.includes('paris')) {
        variations.push('paris');
    }
    
    return variations;
};
