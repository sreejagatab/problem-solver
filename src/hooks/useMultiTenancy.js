// useMultiTenancy.js
import { useState, useEffect } from 'react';
import { fetchTenantData, updateTenantSettings } from '../utils/multiTenancy';

const useMultiTenancy = (tenantId) => {
  const [tenantData, setTenantData] = useState({});

  useEffect(() => {
    const loadTenantData = async () => {
      const data = await fetchTenantData(tenantId);
      setTenantData(data);
    };
    loadTenantData();
  }, [tenantId]);

  const updateSettings = async (settings) => {
    const updatedData = await updateTenantSettings(tenantId, settings);
    setTenantData(updatedData);
  };

  return { tenantData, updateSettings };
};

export default useMultiTenancy;