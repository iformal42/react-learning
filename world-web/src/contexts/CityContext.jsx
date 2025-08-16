import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const CityContext = createContext();
const URL = "http://localhost:8000";

const init = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "cities/loaded":
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };
    case "city/loaded":
      return{
        ...state,isLoading:false,currentCity:action.payload
      }

    case "cities/created":
      return{
        ...state,isLoading:false,
        cities:[...state.cities,action.payload],
        currentCity:action.payload
      }
    case "cities/deleted":
      return{
        ...state,isLoading:false,
        cities:state.cities.filter((city) => city.id !== action.payload)
      }
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      throw new Error("unknown ");
  }
}
function CityProvider({ children }) {
  const [{ cities, isLoading, currentCity }, dispatch] = useReducer(
    reducer,
    init
  );
  // const [cities, setCities] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    // Your effect logic here
    async function fetchCities() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch(URL + "/cities");
        const data = await res.json();
        dispatch({ type: "cities/loaded", payload: data });
      } catch (error) {
        // alert(error);
        dispatch({ type: "rejected", payload: `error:${error}` });
      }
    }
    fetchCities();
  }, []);
  async function getCity(id) {
    if(Number(id) === currentCity?.id) return;
    try {
      dispatch({ type: "loading" });
      const res = await fetch(URL + "/cities/" + id);
      const data = await res.json();
      dispatch({type:"city/loaded",payload:data})
    } catch (error) {
       // alert(error);
        dispatch({ type: "rejected", payload: `error:${error}` });
    } 
  }
  async function createCity(newCity) {
    try {
      dispatch({ type: "loading" });
      const res = await fetch(URL + "/cities/", {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application",
        },
      });
      const data = await res.json();
      dispatch({type:"cities/created",payload:data})
      // setCities((cities) => [...cities, data]);
      // setCurrentCity(data);
    } catch (error) {
       // alert(error);
        dispatch({ type: "rejected", payload: `error:${error}` });
    } 
  }
  async function deleteCity(id) {
    try {
      dispatch({ type: "loading" });
       await fetch(URL + "/cities/" + id, {
        method: "DELETE",
      });
      // setCities((cities) => cities.filter((city) => city.id !== id));
      dispatch({type:"cities/deleted",payload:id})
    } catch (error) {
      // alert(error);
        dispatch({ type: "rejected", payload: `error:${error}` });
    } 
  }

  return (
    <CityContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CityContext.Provider>
  );
}
function useCity() {
  const context = useContext(CityContext);
  if (context === undefined) throw new Error(" Wrong placing the CityContext");

  return context;
}

export { CityProvider, useCity };
