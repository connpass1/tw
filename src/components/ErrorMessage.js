import { Alert } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux'
const Component = () => {
    const error_message = useSelector(state => state.error);
    if (!error_message) return null;
    return <Alert
        message="Error"
        description={error_message}
        type="error"
        showIcon
    />
};
export default Component;