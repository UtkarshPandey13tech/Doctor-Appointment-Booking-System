import { createContext, useContext, useEffect } from "react";
import { AdminContext } from "./AdminContext";

export const DoctorContext = createContext()

const DoctorContextProvider = (props) => {
    const { doctors, aToken, getAllDoctors } = useContext(AdminContext);
    const value = {
        doctors,
        aToken,
        getAllDoctors,
    };


    useEffect(() => {
        if (aToken) {
            getAllDoctors()

        }

    }, [aToken])
    return (
        <DoctorContext.Provider value={value}>
            {props.children}
        </DoctorContext.Provider>
    )
}

export default DoctorContextProvider