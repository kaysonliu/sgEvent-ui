// src/actions/dataActions.js

//example of using actions, fetch API to invoke our spring boot

export const fetchData = () => async (dispatch) => {
    try {
      const response = await fetch('http://localhost:8080/api/data');
      const data = await response.json();
      dispatch({ type: 'FETCH_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', error: error.toString() });
    }
  };
  