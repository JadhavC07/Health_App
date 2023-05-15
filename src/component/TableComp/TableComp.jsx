import { useContext } from "react";
import HealthDataContext from "../../context/health-data-context";
import styless from "./TableComp.module.scss";
import { EDIT, VIEW } from "../../store/store-types";
const TableComp = () => {
  const { users, changeView, changeUserData } = useContext(HealthDataContext);
  // console.log('healtContex users',users);

  const onEdit = (userDATA) => {
    // console.log('userData edit', userDATA);
    changeView(EDIT);
    changeUserData(userDATA, false);
  };

  const onView = (userDATA) => {
    console.table(userDATA);
    changeView(VIEW);
    changeUserData(userDATA, false);
  };

  const tBodyRow = users.map((user) => {
    return (
      <tr  className={styless["tr"]} key={user.id}>
        <td className={styless["td"]}> {user.id} </td>
        <td className={styless["td"]}> {user.name}</td>
        <td className={styless["td"]}> {user.BP.value}</td>
        <td className={styless["td"]}> {user.HR.value}</td>
        <td className={styless["td"]}> {user.SBP.value}</td>
        <td className={styless["td"]}> {user.DBP.value}</td>
        <td className={styless["td"]}> {user.PR.value}</td>
        <td className={styless["td"]}> {user.SR.value}</td>
        <td className={styless["td"]}>
          <button className="btn btn-primary" onClick={() => onEdit(user)}>
            Edit
          </button>
        </td>
        <td className={styless["td"]}>
          <button className="btn btn-outline-dark" onClick={() => onView(user)}>
            View
          </button>
        </td>
      </tr>
    );
  });

  return (
    <table className={styless["table"]}>
      <thead>
        <tr className={styless["tr"]}>
          <th className={styless["th"]}>Sr.No</th>
          <th className={styless["th"]}>Name</th>
          <th className={styless["th"]}>BP</th>
          <th className={styless["th"]}>HR</th>
          <th className={styless["th"]}>SBP</th>
          <th className={styless["th"]}>DBP</th>
          <th className={styless["th"]}>PR</th>
          <th className={styless["th"]}>SR</th>
          <th className={styless["th"]}>Edit</th>
          <th className={styless["th"]}>View</th>
        </tr>
      </thead>
      <tbody>{tBodyRow}</tbody>
    </table>
  );
};

export default TableComp;
