import { useEffect } from 'react';
import { useHistory } from 'react-router';
import userservice from './userservice';

const useUserData = () => {
  const history = useHistory();

  useEffect(() => {
    const checkUserData = async () => {
      const userData = userservice.getUserData();
      if (userData == undefined || Object.keys(userData).length === 0) {
        history.push('/');
      }
    };

    checkUserData();
  }, [history]);
};

export default useUserData;
