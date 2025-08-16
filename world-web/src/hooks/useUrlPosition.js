import { useSearchParams } from "react-router-dom";

function  useUrlPosition () {
    const [params, setParams] = useSearchParams();
      const lat = params.get("lat");
      const lng = params.get("lng");
    return [lat,lng];
};

export default  useUrlPosition;