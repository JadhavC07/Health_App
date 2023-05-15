import {
  UPDATE_BP,
  UPDATE_DBP,
  UPDATE_HR,
  UPDATE_PR,
  UPDATE_SBP,
  UPDATE_SR
} from "./store-types";

export const initalState = [
  {
    id: 0,
    name: "hek",
    BP: { value: 0, name: UPDATE_BP },
    HR: { value: 0, name: UPDATE_HR },
    SBP: { value: 0, name: UPDATE_SBP },
    DBP: { value: 0, name: UPDATE_DBP },
    PR: { value: 0, name: UPDATE_PR },
    SR: { value: 0, name: UPDATE_SR },
  },
];

export const initalStateValue = [
  {
    id: 1,
    name: "ARC",
    BP: { value: 12, name: "Blood Presure" },
    HR: { value: 514, name: "Heart Rate" },
    SBP: { value: 119, name: "Sistolic BP" },
    DBP: { value: 79, name: "Distolic BP" },
    PR: { value: 34, name: "Pulse Rate" },
    SR: { value: 35, name: "sugar" },
  },
  {
    id: 2,
    name: "VIGO",
    BP: { value: 354, name: "Blood Presure" },
    HR: { value: 34, name: "Heart Rate" },
    SBP: { value: 123, name: "Sistolic BP" },
    DBP: { value: 123, name: "Distolic BP" },
    PR: { value: 43, name: "Pulse Rate" },
    SR: { value: 1235, name: "sugar" },
  },
];
// obj[key] = 'new value'
const reducerFunction = (state = initalState, action) => {
  switch (action.type) {
    case "SET_USERS_DATA":
      return {
        ...action.payload.users,
      };
    case "UPDATE_USER_DATA":
      console.log("state while update", state);

      const userId = state.findIndex((user) => user.id === action.userData.id);
      state[userId] = action.userData;

      return [...state];

    default:
      return state;
  }
};

export default reducerFunction;
