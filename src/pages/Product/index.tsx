import { Form, Input, InputNumber, Button, Breadcrumb, Table } from 'antd'



const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
}


export default function Product() {
    const onFinish = (values: any) => {
        console.log(values);
      }

    const products = [{
        key: '1',
        name: 'Product A',
        sku: 'p1',
        price: 100
    }, {
        key: '2',
        name: 'Product B',
        sku: 'p2',
        price: 99
    }, {
        key: '3',
        name: 'Product C',
        sku: 'p3',
        price: 999
    } , {
        key: '4',
        name: 'Product D',
        sku: 'p4',
        price: 120
    }, {
        key: '5',
        name: 'Product E',
        sku: 'p5',
        price: 1.99
    }, {
        key: '6',
        name: 'Product F',
        sku: 'p6',
        price: 29500000000
    }]

    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'SKU',
        dataIndex: 'sku',
        key: 'sku',
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
      },
    ]

  return (
      <>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>App</Breadcrumb.Item>
          <Breadcrumb.Item>Product</Breadcrumb.Item>
        </Breadcrumb>
        <Table columns={columns} dataSource={products} />
      </>
  )
}