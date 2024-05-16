import React, { ComponentType, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import userservice from './userservice';

function withUserData<P extends {}>(WrappedComponent: ComponentType<P>): React.FC<P> {
  const ComponentWithUserData: React.FC<P> = (props) => {
    const history = useHistory();

    useEffect(() => {
      const checkUserData = async () => {
        try {
          const userData = userservice.getUserData();
          if (!userData || Object.keys(userData).length === 0) {
            history.push('/');
          }
        } catch (error) {
          console.error('Failed to fetch user data:', error);
          history.push('/');
        }
      };

      checkUserData();
    }, [history]);

    return <WrappedComponent {...props} />;
  };

  return ComponentWithUserData;
}

export default withUserData;
