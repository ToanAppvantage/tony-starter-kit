import React from 'react';
import { Card } from 'antd';
import { useParams } from 'react-router-dom';
import BasicLayout from '../../../layouts/BasicLayout';
import { useGetLifeQuery } from '../../../api';

const DetailLifePage = () => {
    const { id } = useParams();

    const { data, loading, error } = useGetLifeQuery({ variables: { id } });

    if(error) {
        return <p>Life not found! Create one</p>
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
                    <p>{new Date(birthday).toLocaleDateString()}</p>
                    <p>{description}</p>
            </Card>
        </BasicLayout>
    );
};

export default DetailLifePage;
