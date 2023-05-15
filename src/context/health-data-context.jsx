import { createContext, useReducer, useState } from "react";
import styless from './HealthData.module.scss';
import reducerFunction, { initalState, initalStateValue } from "../store/reducer-store";
import { TABLE } from "../store/store-types";





const HealthDataContext = createContext({
    users: initalState,
    currentPageState: TABLE,
    userData: initalState[0],
    changeView: (value) => {} ,
    changeUserData: (userData, changeState) => {}
})


export const HealthDataContextWrapper= (props) => {

    const [userState,dispatch] = useReducer(reducerFunction , initalStateValue)
    const [currentPageState, setCurrentPageState] = useState(TABLE)
    
    const [ userData, setUserData ] = useState(initalState[0]);
    
    
    const changeUserData = (userData, changeState = false) => {
        setUserData(userData)
        if(changeState){
            const action = {
                type: 'UPDATE_USER_DATA',
                userData
            }
            dispatch(action)
        }
     
    }

    const changeView = (value) => {
        console.log("ChangeVIew ", value)
        setCurrentPageState(value)
    }
    const { children } = props
    return (
        <HealthDataContext.Provider value={
           {
             users:userState,
             currentPageState: currentPageState,
            changeView:changeView,
            userData: userData,
            changeUserData: changeUserData
            }
        }>
        <div className={styless["container-main"]}>
            {children}
        </div>
        </HealthDataContext.Provider>
      
    )
}




export default HealthDataContext;