const useInput = () => {
  const phoneFormatter = (value) => {
    value = value.replace(/[^\d]/g, "");
    const length = value.length;

    if(length <= 2) return value;
    if(length <= 3) return `(${value.slice(0,2)}) ${value.slice(2)}`;
    if(length <= 5) return `(${value.slice(0,2)}) ${value.slice(2)}`;
    if(length <= 7) return `(${value.slice(0,2)}) ${value.slice(2,5)} - ${value.slice(5,7)}`;
    if(length < 10) return `(${value.slice(0,2)}) ${value.slice(2,5)} - ${value.slice(5,7)} - ${value.slice(7,9)}`;
    if(length >= 10) return `(${value.slice(0,2)}) ${value.slice(2,5)} - ${value.slice(5,7)} - ${value.slice(7,9)}`;

    return value;
  };

  return { phoneFormatter };
}

export default useInput;