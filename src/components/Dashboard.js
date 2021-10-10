import React, {useContext} from "react";
import {Redirect} from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../config";

const Dashboard = () => {
    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
        return <Redirect to="/login"/>;

    }
    return (
        <div>
            <div className= "container mt-5">
                <h1>welcome</h1>
                <p>This is dashboard</p>
                <button onClick={() => firebaseConfig.auth().signOut()}className = "btn-danger">signOut</button>
            </div>
        </div>
    )
}
export default Dashboard;