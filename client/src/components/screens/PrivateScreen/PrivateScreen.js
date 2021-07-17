import { useState, useEffect } from 'react';
import './PrivateScreen.css';
import Api from '../../../api/Api';

const PrivateScreen = () => {
  const [error, setError] = useState('');
  const [privateData, setPrivateData] = useState('');

  const getAPIConfiguration = () => {
    return {
      url: '/api/v1/private',
      options: 'GET',
    };
  };

  useEffect(() => {
    const fetchPrivateDate = async () => {
      try {
        const privateRequest = await Api.performRequest(getAPIConfiguration());
        console.log('private request', privateRequest);
        setPrivateData(privateRequest?.data);
      } catch (error) {
        localStorage.removeItem('authToken');
        setError('You are not authorized please login');
      }
    };

    fetchPrivateDate();
  }, []);
  return error ? <span className="error-message">{error}</span> : <div>{privateData}</div>;
};

export default PrivateScreen;
