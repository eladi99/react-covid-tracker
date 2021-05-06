import axios from 'axios';
import { useEffect, useReducer } from 'react';

const ACTIONS = {
  MAKE_REQUEST: 'make_request',
  GET_DATA: 'get_data',
  ERROR: 'error',
};

const REDUCER_INITIAL_STATE = {
  loading: true,
  data: {},
  error: '',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return REDUCER_INITIAL_STATE;
    case ACTIONS.GET_DATA:
      const { data } = action.payload;
      return {
        data,
        loading: false,
        error: '',
      };
    case ACTIONS.ERROR:
      return { ...REDUCER_INITIAL_STATE, error: action.payload.error };
    default:
      return state;
  }
}

export default function useCovidData() {
  const [state, dispatch] = useReducer(reducer, REDUCER_INITIAL_STATE);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('https://api.covid19api.com/summary');
        dispatch({ type: ACTIONS.GET_DATA, payload: { data: res.data } });
      } catch (err) {
        dispatch({ type: ACTIONS.ERROR, payload: { error: err } });
      }
    }

    dispatch({ type: ACTIONS.MAKE_REQUEST });

    fetchData();
  }, []);

  return state;
}
