import { useState, useEffect } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
  // Function to check if localStorage is available
  const isLocalStorageAvailable = () => {
    return typeof Storage !== "undefined";
  };

  // Retrieve the initial value from localStorage or use the provided initial value
  const getInitialValue = () => {
    if (!isLocalStorageAvailable()) {
      return initialValue;
    }

    const storedValue = localStorage.getItem(key);
    return storedValue ? (JSON.parse(storedValue) as T) : initialValue;
  };

  const [value, setValue] = useState<T>(getInitialValue);

  useEffect(() => {
    if (isLocalStorageAvailable()) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue] as const;
}

export default useLocalStorage;
