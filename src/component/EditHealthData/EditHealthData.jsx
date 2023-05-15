import { useContext } from "react";
import { TABLE } from "../../store/store-types";
import HealthDataContext from "../../context/health-data-context";

const EditHealthData = () => {
    const {userData, changeUserData, changeView} = useContext(HealthDataContext);
    
//    const currentChange

    const submit =() => {
        
    }
    // console.log('userData',userData);


    // FormValidation 
    // customHook
    //BP ,name


    const onNameChange = (e) => {
        // console.log('e.name', e.target.value)
        const newUserData = {...userData, name: e.target.value};
        changeUserData(newUserData, true)
    }

    const onChangeBP = (e) => {
        // console.log('e.name', e.target.value);
        const newBP = {...userData.BP, value: e.target.value};
        const newUserData = {...userData, BP: newBP};
        changeUserData(newUserData, true)
    }
    return (
        <div>

<button onClick={ () => changeView(TABLE)}>TableVIew</button>

<form>

<p>ID :- {userData.id}</p>
<input type="text" 
value={userData.name} 
onChange={onNameChange} 
placeholder="name" />

<span>----------------------------</span>

<input 
    type="number" 
    value={userData.BP.value}
    onChange={onChangeBP}
    placeholder={userData.BP.name} />


</form>


        </div>
    )
};

export default EditHealthData;