import { isUndefined } from "lodash";
import { useEffect, useState } from "react";
import "./Toggle.css";

function Toggle(props) {
  // States
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Optional for loading state
  const [error, setError] = useState(null); // Optional for error state

  // Functions
  const fetchData = async (url) => {
    console.log(import.meta.env.BASE_URL);
    if (!isUndefined(url)) {
      setIsLoading(true); // Optional
      try {
        const response = await fetch(import.meta.env.BASE_URL + url);
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const fetchedData = await response.json();
        console.log("fetch data", fetchedData);
        setData(fetchedData);
      } catch (err) {
        setError("error", err); // Optional
      } finally {
        console.log("finally");
        setIsLoading(false); // Optional
      }
    }
  };

  useEffect(() => {
    fetchData(props.url);
  }, []);
  return (
    <>
      <div className="toggle">
        <input type="checkbox" id={props.name} />
        <label htmlFor={props.name}></label>
        <span>{props.label}</span>
      </div>
    </>
  );
}

Toggle.displayName = "Toggle";
export default Toggle;
