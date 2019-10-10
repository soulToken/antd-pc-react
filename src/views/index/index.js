import React, { Component } from 'react';
import SvgIcon from "@/components/common/svgIcon/index";
import {Route} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import menuList from '@/router/config'
import SiderCustom from '@/components/SiderCustom';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
class Demo extends Component{
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
    componentDidMount(){
    
      // var param={
      //   count: 0,
      //   variety: 1
      // }
      // StatisticsHistroy(param).then(()=>{
  
      // }) 
      // console.log(menuList)
      // debugger;
     
    }
    render(){
      const {path} = this.props.match;
    return (
      <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
        <div className="logo" />
        <SiderCustom collapsed={this.state.collapsed} />
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{height:'1000px'}}> 
        <SvgIcon iconClass="print"  style={{width:'30px',height:'30px'}} />
               {      
                 menuList.map((r,index) => {
                             const route = r => {  
                               let Component=r.component  
                                return (
                                    <Route
                                        key={r.key}
                                        exact
                                        path={ r.key}
                                        render={
                                          (props)=>{
                                              return <Component   {...props} />
                                          }
                                        }
                                       
                                     />
                               )
                            } 
                       return   r.component ? route(r) : r.subs.map(r => route(r));
                     
                 })
                }
                 {/* <Route render={() => <Redirect to="/404" />} />  */}
    </div>  
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>



   
    );
  }
  }
  export default Demo;
