import { Table, Button, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import BasicLayout from '../../../layouts/BasicLayout';
import { useGetListLivesQuery } from '../../../api';

const LifePage = () => {
    const navigate = useNavigate();

    const { data, loading } = useGetListLivesQuery();

    const lives = data?.lives;

    const columns = [
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'Birthday',
            dataIndex: 'birthday',
            key: 'birthday',
            render: birthday => <>{new Date(birthday * 1).toLocaleDateString()}</>,
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Hobbies',
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
    ];

    return (
        <BasicLayout>
            <>
                <Button type="primary" onClick={() => navigate('/create-life')}>Create a Life</Button>
            </>
            <Table
                dataSource={lives}
                rowKey={({ firstName, lastName }) => `${firstName}_${lastName}`}
                loading={loading}
                columns={columns}
            />
        </BasicLayout>
    );
};

export default LifePage;
