import React from 'react';
import { Layout, ConfigProvider, theme } from 'antd';
import { Outlet } from "react-router-dom";

import { Header as HeaderComponent } from '../components/header/Header';
import { Footer as FooterComponent } from '../components/footer/Footer';

import './default.css';

const { Header, Content, Footer } = Layout;

export const DefaultLayout = () => (
  <ConfigProvider theme={{algorithm: theme.darkAlgorithm}}>
    <Layout className="layout">
      <Header style={{background: '#27282b'}}>
        <HeaderComponent />
      </Header>
      <Content className='content-body'>
        <Outlet />
      </Content>
      <Footer>
        <FooterComponent />
      </Footer>
    </Layout>
  </ConfigProvider>
);