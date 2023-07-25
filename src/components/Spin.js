import { Spin } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux'
const Component = () => {
    const loading = useSelector(state => state.loading);
    if (!loading) return null;
    return <div className="loading"> <Spin size="large" /> </div>

};
export default Component;

