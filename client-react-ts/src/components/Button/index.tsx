import React, { useEffect, useState } from "react";

interface ButtonProps {
  name: string;
  label: string;
  url: string;
}

const Button: React.FC<ButtonProps> = ({ name, label, url }) => {
  const [value, setValue] = useState<number | null>(null);

  useEffect(() => {
    fetchData();
  }, []); // Fetch data initially

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_BASE_URL}${url}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setValue(data.value);
      console.log("Data received!", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <button onClick={fetchData}>
      {label}
      {value !== null && <span>{value}</span>}
    </button>
  );
};

export default Button;
