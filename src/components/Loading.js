import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import './Loading.scss';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Loading = (props) => {
    return (
        <div className="loading">
            <Spin indicator={antIcon} />
            <span className="loading__text">
                Loading
            </span>
        </div>
    )
}
export default Loading;