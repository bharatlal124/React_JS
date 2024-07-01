import { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue) => {
  // Add the state and effect here
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [storedValue]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;
