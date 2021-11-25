import { Form, Input, Button, Breadcrumb } from 'antd'


const layout = {
  labelCol: { span: 2 },
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


export default function Home() {
    const onFinish = (values: any) => {
        console.log(values);
      }

  return (
      <>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>App</Breadcrumb.Item>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <Form layout="vertical" {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
          <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email', required: true  }]}>
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'password']} label="Password" rules={[{ required: true  }]}>
            <Input type="password" />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </>
  )
}