export const fetchData = async url => {
  try {
    const rawData = await fetch(url);
    const data = await rawData.json();
    return data;
  } catch (error) {
    return new Error('There has been an error while fetching the data!');
  }
};