export function applyFilters(filters, lists) {
  let filtered = lists;

  if (filters.country) {
    filtered = filtered.filter(list => 
      list.location.country?.toLowerCase().includes(filters.country.toLowerCase())
    );
  }

  if (filters.city) {
    filtered = filtered.filter(list => 
      list.location.city?.toLowerCase().includes(filters.city.toLowerCase())
    );
  }

  if (filters.category) {
    filtered = filtered.filter(list => 
      list.genre?.toLowerCase().includes(filters.category.toLowerCase())
    );
  }

  if (filters.subcategory) {
    filtered = filtered.filter(list => 
      list.subgenre?.toLowerCase().includes(filters.subcategory.toLowerCase())
    );
  }

  if (filters.creator) {
    filtered = filtered.filter(list => 
      list.creator?.name.toLowerCase().includes(filters.creator.toLowerCase())
    );
  }

  console.log(filtered);
  return filtered;
}

export function extractPois(filteredLists) { 
  return filteredLists.map(list => ({
    name: list.name,
    location: list.location
  }));
}