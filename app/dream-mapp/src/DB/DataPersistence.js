import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DataPersistence = ({ dataKey, initialData, children }) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const getSavedData = async () => {
      try {
        const savedData = await AsyncStorage.getItem(dataKey);
        if (savedData !== null) {
          setData(JSON.parse(savedData));
        }
      } catch (error) {
        console.error('Erro ao recuperar os dados salvos:', error);
      }
    };

    getSavedData();
  }, [dataKey]);

  useEffect(() => {
    const saveData = async () => {
      try {
        await AsyncStorage.setItem(dataKey, JSON.stringify(data));
      } catch (error) {
        console.error('Erro ao salvar os dados:', error);
      }
    };

    saveData();
  }, [dataKey, data]);

  const updateData = (newData) => {
    setData(newData);
  };

  return children({ data, updateData });
};

export default DataPersistence;
