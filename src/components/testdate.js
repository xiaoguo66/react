import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { getLogin } from '../api/login'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class testdate extends Component {
  constructor(props){
    super(props)
    this.state = {
      collapsed: false,
    };
  }
  componentDidMount() {
    getLogin().then(res => {
      console.log(res)
    })
  }
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              首页
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              数据统计
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="用户">
              <Menu.Item key="3">个人中心</Menu.Item>
              <Menu.Item key="4">修改信息</Menu.Item>
              <Menu.Item key="5">上传头像</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="朋友">
              <Menu.Item key="6">邮箱</Menu.Item>
              <Menu.Item key="8">联系人</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              功能
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0', textAlign:'left' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>react 测试</Footer>
        </Layout>
      </Layout>
    );
  }
}
