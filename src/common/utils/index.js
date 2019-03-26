export const fetchData = async url => {
  try {
    const rawData = await fetch(url);
    const data = await rawData.json();
    return data;
  } catch (error) {
    return new Error('There has been an error while fetching the data!');
  }
};

export const filterData = data => {
  const filteredData = {};
  
  filteredData.imgSrc = data['im:image'][2].label;
  filteredData.name = data['im:name'].label;
  filteredData.artist = data['im:artist'].label;
  filteredData.price = data['im:price'].label;

  return filteredData;
}