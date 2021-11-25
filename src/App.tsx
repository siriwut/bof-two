import React from 'react';
import Home from './pages/Home'
import Register from './pages/Register'
import Products from './pages/Product'
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
const { Header, Content, Footer,  } = Layout

function App() {
  const menuItems = [
      { id: '1', text: 'Home', url: '/' },
      { id: '2', text: 'Register', url: '/register' },
      { id: '3', text: 'Product', url: '/products' }
  ]

  return (
    <div className="App">
        <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            {menuItems.map((item) => {
                return <Menu.Item key={item.id}><Link to={item.url}>{item.text}</Link></Menu.Item>;
            })}
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Tape ©2018</Footer>
      </Layout>
    </div>
  );
}

export default App;
