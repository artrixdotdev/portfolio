import { useState, useEffect } from "react";

export function useLocalStorage<T>(
   key: string,
   initialValue: T,
   forceNew = false,
): readonly [T, (value: T | ((prev: T) => T)) => void] {
   const getStoredValue = (): T => {
      if (typeof window === "undefined")
         return [initialValue, (...props: any[]) => void 0] as any;

      try {
         const item = window.localStorage.getItem(key);
         return item !== null ? JSON.parse(item) : initialValue;
      } catch (error) {
         console.error("Error parsing localStorage:", error);
         return initialValue;
      }
   };

   const [storedValue, setStoredValue] = useState<T>(() =>
      forceNew ? initialValue : (getStoredValue() ?? initialValue),
   );

   useEffect(() => {
      if (forceNew) {
         window.localStorage.setItem(key, JSON.stringify(initialValue));
         setStoredValue(initialValue);
      }
   }, [forceNew, key, initialValue]);

   const setValue = (value: T | ((prev: T | undefined) => T)) => {
      try {
         const valueToStore =
            value instanceof Function ? value(storedValue) : value;
         setStoredValue(valueToStore);
         window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
         console.error("Error setting localStorage:", error);
      }
   };

   return [storedValue, setValue as any] as const;
}
