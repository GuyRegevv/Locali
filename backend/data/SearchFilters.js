import countriesData from "/backend/data/Countries.json"

const countries = countriesData.map((country) => ({
  label: country.name,
  value: country.code
}));

const searchFilters = {
  'countries': countries,
  'categories': ['Food', 'Shopping', 'Art', 'Nightlife', 'Outdoors', 'Attractions'],
  'subcategories': {
      'Food': ['Vegan', 'Cafes', 'Fine Dining', 'Street Food'],
      'Shopping': ['Vintage Clothing', 'Souvenirs', 'Local Markets'],
      'Art': ['Museums', 'Galleries', 'Street Art'],
      'Nightlife': ['Bars', 'Clubs', 'Live Music'],
      'Outdoors': ['Hiking', 'Parks', 'Beaches']
  },
  'creatorTypes': ['local', 'specialist', 'amatour', 'all']
};

export default searchFilters;