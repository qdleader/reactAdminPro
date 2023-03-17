import { Form, Input, Modal } from 'antd';
import React from 'react'
import { useEffect } from 'react';

interface Values {
  title: string;
  description: string;
  address: string;
  hobby: string;
}

interface CollectionCreateFormProps {
  open: boolean;
  onCreate: (values: Values) => void;
  onCancel: () => void;
}

const addUser = (props: CollectionCreateFormProps) => {
  const {
    open,
    onCreate,
    onCancel,
  } = props
  const [form] = Form.useForm();

  return (
 <Modal
      open={open}
      title="Create a new collection"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{ modifier: 'public' }}
      >
        <Form.Item
          name="name"
          label="用户名"
          rules={[{ required: true, message: '不能为空' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="手机号"    rules={[{ required: true, message: '不能为空' }]}>
          <Input type="textarea" />
        </Form.Item>
          <Form.Item name="address" label="地址" className="collection-create-form_last-form-item"    rules={[{ required: true, message: '不能为空' }]}>
          <Input type="textarea" />
        </Form.Item>
          <Form.Item name="hobby" label="爱好" className="collection-create-form_last-form-item"    rules={[{ required: true, message: '不能为空' }]}>
          <Input type="textarea" />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default  addUser