// useData.js
import { useState, useEffect } from 'react';
import { fetchData, uploadData } from '../utils/data';

const useData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const dataFromApi = await fetchData('dataset');
      setData(dataFromApi);
    };
    loadData();
  }, []);

  const addData = async (newData) => {
    const uploadedData = await uploadData('dataset', newData);
    setData([...data, uploadedData]);
  };

  return { data, addData };
};

export default useData;