import { useContext, useEffect, useState } from "react";
import HealthDataContext from "../../context/health-data-context";

const ViewHealthData = () => {
    const { userData } = useContext(HealthDataContext);
    console.log('userData',userData)
    
    const [BPresult, setBPResult] = useState('');
    
    const checkBP = () => {
        if(userData.SBP.value < 120 && userData.DBP.value <80){
            setBPResult('NORMAL')
        }else if(
            (userData.SBP.value > 120 && userData.SBP.value  <129 ) 
                    && userData.DBP.value <80){
            setBPResult('Elevated')
        }else if(
            (userData.SBP.value > 130 &&userData.SBP.value  <139 ) 
                    &&
            (userData.DBP.value > 80 && userData.DBP.value <89)){
            setBPResult('HIGH BP')
        }
    }
    useEffect(() => {
        checkBP()
    },[userData])
    return (
        <div>
 
        <p>Name: {userData.name}</p>

        <p>
            BP STATE : {userData.BP.value} / {BPresult}
        </p>

        </div>
    )
};

export default ViewHealthData;