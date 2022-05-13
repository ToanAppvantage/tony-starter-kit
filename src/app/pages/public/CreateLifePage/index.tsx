import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
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

    const { t } = useTranslation(['life'])

    const [createLife] = useCreateLifeMutation();

    const onFinish = useCallback(async values => {
        const formData = {
            ...values,
        };

        if (values['birthday']) {
            formData['birthday'] = new Date(values['birthday']);
        }

        if (values['hobbies']) {
            formData['hobbies'] = values['hobbies'].split('\n');
        }

        await createLife({ variables: { life: formData } });

        navigate('/life');
    }, []);

    return (
        <BasicLayout>
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item
                    name={'firstname'}
                    label={t('firsName')}
                    required
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name={'lastname'}
                    label={t('lastName')}
                    required
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={'title'}
                    label={t('title')}
                    required
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={'birthday'}
                    label={t('birthday')}
                    required
                    
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item name={'hobbies'} label={t('hobbies')}>
                    <Input.TextArea placeholder="Each hobby in one line" />
                </Form.Item>
                <Form.Item name={'description'} label={t('description')}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        {t('createLife')}
                    </Button>
                </Form.Item>
            </Form>
        </BasicLayout>
    );
};

export default CreateLifePage;
