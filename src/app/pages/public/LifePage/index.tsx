import { Table, Button, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BasicLayout from '../../../layouts/BasicLayout';
import { useGetListLivesQuery } from '../../../api';
import { useMemo } from 'react';

const LifePage = () => {
    const navigate = useNavigate();

    const { t } = useTranslation(['life'])

    const { data, loading } = useGetListLivesQuery();

    const lives = data?.lives;

    const columns = useMemo(() => [
        {
            title: t('fullName'),
            dataIndex: 'fullName',
            key: 'fullName',
        },
        {
            title: t('birthday'),
            dataIndex: 'birthday',
            key: 'birthday'
        },
        {
            title: t('description'),
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: t('hobbies'),
            dataIndex: 'hobbies',
            key: 'hobbies',
            render: hobbies => hobbies.map(tag => <p>{tag.toUpperCase()}</p>),
        },
        {
            key: 'action',
            render: (text, record) => (
              <Space size="middle">
                <Button type='primary' onClick={() => {
                    navigate(`/detail-life/${record?._id}`)
                }}>Details</Button>
              </Space>
            ),
          },
    ], [])

    return (
        <BasicLayout>
            <>
                <Button type="primary" onClick={() => navigate('/create-life')}>Create a Life</Button>
            </>
            <Table
                dataSource={lives}
                rowKey="id"
                loading={loading}
                columns={columns}
            />
        </BasicLayout>
    );
};

export default LifePage;
