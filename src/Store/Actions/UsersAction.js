import { RequestServic } from "../../Services/Servis";

export const SET_USERS_DATA_IN_STORE = 'dialog/set-user-data-in-store';

const getUsersData = () => async (dispach) => {
    const usData = await RequestServic.getUsers();
    dispach({
        type: SET_USERS_DATA_IN_STORE,
        usData,
    })
}

export default getUsersData;  