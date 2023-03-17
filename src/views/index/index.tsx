import { Button } from 'antd'
import React, { useState } from 'react'
import AddUser from './components/addUser';

export default function index() {
    const [open, setOpen] = useState(false);

    const onCreate = (values: any) => {
        console.log('Received values of form: ', values);
        setOpen(false);
    };

    return (
        <div>
            <Button type="primary" onClick={() => {
                setOpen(true);
                }}>添加用户</Button>
            <AddUser   open={open}
                onCreate={onCreate}
                onCancel={() => {
                setOpen(false);
                }}/>
        </div>
    )
}
