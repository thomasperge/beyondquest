import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import userservice from '../../services/userservice';
import MainLoadingPage from '../../pages/mainloading/mainloading';
import { useHistory } from 'react-router';

interface ContainerProps {
    children: any,
}

const UserDataUpdaterLayout: React.FC<ContainerProps> = ({ children }) => {
    const history = useHistory();
    const [userDataIsEmpty, setUserDataIsEmpty] = useState(true);
    const [currentRoute, setCurrentRoute] = useState<string>("");

    const checkUserData = () => {
        const userData = userservice.getUserData();
        const isEmpty = !userData || Object.keys(userData).length === 0;

        if (isEmpty && history.location.pathname !== "/") {
            history.push("/");
        } else {
            setUserDataIsEmpty(false);
        }
    };

    useEffect(() => {
        const unlisten = history.listen((location) => {
            setCurrentRoute(location.pathname);
            checkUserData();
        });

        checkUserData();

        return () => {
            unlisten();
        };
    }, [history]);

    console.log("Changement de route :", currentRoute);

    return userDataIsEmpty ? <MainLoadingPage /> : children;
};

export default UserDataUpdaterLayout;
