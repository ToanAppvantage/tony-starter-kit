import React, { useState } from 'react';
import { Form, Input, Button, DatePicker } from 'antd';
import { useNavigate } from 'react-router-dom';
import BasicLayout from '../../../layouts/BasicLayout';
import { useCreateLifeMutation } from '../../../api';

const validateMessages = {
    required: '${label} is required!',
};

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const CreateLifePage = () => {
    const navigate = useNavigate();

    const [createLife] = useCreateLifeMutation();

    const onFinish = async values => {
        const formData = {
            ...values,
        };

        if (values['birthday']) {
            formData['birthday'] = new Date(values['birthday']).valueOf() + '';
        }

        if (values['hobbies']) {
            formData['hobbies'] = values['hobbies'].split('\n');
        }

        await createLife({ variables: formData });

        navigate('/life');
    };

    return (
        <BasicLayout>
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item
                    name={['firstname']}
                    label="First Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name={['lastname']}
                    label="Last Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['title']}
                    label="Title"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['birthday']}
                    label="Date of birth"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item name={['hobbies']} label="Hobbies">
                    <Input.TextArea placeholder="Each hobby in one line" />
                </Form.Item>
                <Form.Item name={['description']} label="Description">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Create a Life !
                    </Button>
                </Form.Item>
            </Form>
        </BasicLayout>
    );
};

export default CreateLifePage;
