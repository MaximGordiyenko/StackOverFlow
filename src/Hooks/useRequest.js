import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import reducer from "../Redux/reducer";
import { fetchSOF } from "../Redux/action";

const useRequest = (initUrl) => {
  const [data, dispatch] = useReducer(reducer, { data: [], loading: true });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  
  useEffect(() => {
    let ignore = false;
    const fetchProduct = async () => {
      setLoading(true);
      try {
        setError({});
        const response = await axios(initUrl);
        if (!ignore) dispatch(fetchSOF(response.data));
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchProduct().then(r => r);
    return (() => {
      ignore = true;
    });
  }, [initUrl]);
  
  return { data, loading, error };
};

export default useRequest;
