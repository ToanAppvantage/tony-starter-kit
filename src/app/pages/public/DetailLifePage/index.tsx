import React, { useState } from 'react';
import { Card } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';
import BasicLayout from '../../../layouts/BasicLayout';
import { useGetLifeQuery } from '../../../api';

const DetailLifePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data, loading, error } = useGetLifeQuery({ variables: { id } });

    if(error) {
        navigate('/404');
        return;
    }
    
    if(loading) {
        return <p>Loading......</p>
    }

    const { firstName, lastName, birthday, description } = data?.life;

    return (
        <BasicLayout>
            <Card size="small" style={{ width: 300 }}>
                    <p>{firstName}</p>
                    <p>{lastName}</p>
                    <p>{new Date(birthday * 1).toLocaleDateString()}</p>
                    <p>{description}</p>
            </Card>
        </BasicLayout>
    );
};

export default DetailLifePage;
