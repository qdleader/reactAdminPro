import { userAdd, userList } from '@/http/modules/user';
import { Button } from 'antd'
import { useState, useEffect } from 'react'
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import AddUser from './components/addUser';
import { User } from '@/http/interface';


export default function index() {
    const [open, setOpen] = useState(false);

    const [data,setData] = useState<User.ResUserListItem[] >([])
      
    const columns: ColumnsType<User.ResUserListItem> = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
          },
        {
          title: '创建时间',
          dataIndex: 'createTime',
          key: 'createTime',
          render: (text) => <a>{text}</a>,
        },
        {
          title: '爱好',
          dataIndex: 'hobby',
          key: 'hobby',
          render: (text) => <a>{text}</a>,
        },
        {
          title: '描述',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: '地址',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: '操作',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              {/* <a>Invite {record.hobby}</a> */}
              <a>删除</a>
            </Space>
          ),
        },
      ];
      

      
    const onCreate = async (values: any) => {
        console.log('Received values of form: ', values);

        let data = await userAdd(values)
        setOpen(false);
        getList()
    };
    const getList = async () => {
        let data = await userList()
        data?.map((item:any) => {
            item.key = item._id
        })
        console.log("list", data);
        setData(data)
    }
    useEffect(() => {
        getList()
    },[])

    return (
        <div>
            <Button type="primary" onClick={() => {
                setOpen(true);
                }}>添加用户</Button>
            <AddUser   open={open}
                onCreate={onCreate}
                onCancel={() => {
                setOpen(false);
                }} />
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

