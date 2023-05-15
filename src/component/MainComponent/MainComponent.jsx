import { useContext } from "react";
import HealthDataContext from "../../context/health-data-context";
import ShowHealthData from "../ShowHealthData/ShowHealthData";
import { VIEW, EDIT, TABLE } from "../../store/store-types";
import EditHealthData from "../EditHealthData/EditHealthData";
import ViewHealthData from "../ViewHealthData/ViewHealthData";

const MainComponent = () => {
    
  const healthContext = useContext(HealthDataContext);

  const { currentPageState} = healthContext;
// console.log('Main curretPageState', currentPageState
  setTimeout(() => {
      
  }, 1000);
    return (
        <div>
          {currentPageState === VIEW && <ViewHealthData />}
           {currentPageState === TABLE && <ShowHealthData />}
    {currentPageState === EDIT && <EditHealthData />}
        </div>
    )
};

export default MainComponent;