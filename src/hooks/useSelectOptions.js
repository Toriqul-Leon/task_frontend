import { useState, useEffect } from "react";
import axios from "axios";

const useSelectOptions = (url) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setOptions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return options;
};

export default useSelectOptions;
