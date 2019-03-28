const fetchData = async url => {
  try {
    const rawData = await fetch(url);
    const data = await rawData.json();
    return data;
  } catch (error) {
    return new Error('An error occured. Please reload the page.');
  }
};

export {
  fetchData
};