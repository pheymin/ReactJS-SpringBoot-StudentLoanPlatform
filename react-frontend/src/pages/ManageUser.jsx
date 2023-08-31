import React from 'react'
import { useEffect, useState } from 'react'
import { Table, Space, Button, Modal, Breadcrumb } from 'antd';
import UserService from '../services/userService'

const ManageUser = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 100,
      fixed: 'left'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: 150
    },
    {
      title: 'Date of Birth',
      dataIndex: 'dob',
      key: 'dob',
      width: 100
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone',
      key: 'phone',
      width: 100
    },
    {
      title: 'User Type',
      dataIndex: 'userType',
      key: 'userType',
      width: 100,
      filtersSearch: true,
      filters: [
        {
          text: 'Borrower',
          value: 'Borrower',
        },
        {
          text: 'Lender',
          value: 'Lender',
        },
        {
          text: 'Admin',
          value: 'Admin',
        },
      ],
      onFilter: (value, record) => record.userType.indexOf(value) === 0,
    },
    {
      title: 'Address',
      children: [
        {
          title: 'Street',
          dataIndex: 'street',
          key: 'street',
          width: 200,
        },
        {
          title: 'State',
          dataIndex: 'state',
          key: 'state',
          width: 150,
          sorter: (a, b) => a.state.length - b.state.length,
        },
        {
          title: 'City',
          dataIndex: 'city',
          key: 'city',
          width: 150,
          sorter: (a, b) => a.city.length - b.city.length,
        },
        {
          title: 'Postcode',
          dataIndex: 'postcode',
          key: 'postcode',
          width: 100,
        },
      ],
    },
    {
      title: 'Action',
      key: 'action',
      width: 180,
      fixed: 'right',
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={() => handleUpdate(record.key)}>Update</Button>
          <Button onClick={() => handleDelete(record.key)} danger>Delete</Button>
        </Space>
      ),
    },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    UserService.getUsers().then((res) => {
      const newData = res.data.map((user) => {
        return {
          key: user.userID,
          name: user.name,
          email: user.email,
          dob: user.dob,
          phone: user.phone,
          userType: user.userType,
          street: user.street,
          state: user.state,
          city: user.city,
          postcode: user.postcode,
        }
      })
      setData(newData);
    })
  }, [])

  const handleUpdate = (key) => {
    window.location.href = `/admin/update-user?id=${key}`;
  }

  const handleDelete = (key) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this user?',
      content: 'This action cannot be undone.',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        UserService.deleteUser(key).then((res) => {
          setData(data.filter((user) => user.key !== key));
        })
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  return (
    <div className='mx-auto w-5/6 my-5 md:px-20 space-y-5'>
      <Breadcrumb
        separator=">"
        items={[
          {
            title: 'Manage User Account',
          },
        ]}
      />
      <h2>Manage User</h2>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        size="middle"
        scroll={{
          x: 'calc(700px + 50%)',
          // y: 400,
        }}
      />
    </div>
  )
}

export default ManageUser