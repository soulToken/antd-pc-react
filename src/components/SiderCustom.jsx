import React, { Component } from 'react';
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';
import routes from '@/router/config';
import SiderMenu from './SiderMenu';
import {connect} from "react-redux"
import './slide.less'
const { Sider } = Layout;

class SiderCustom extends Component {
    static getDerivedStateFromProps (props, state) { 
        if (props.collapsed !== state.collapsed) {
            const state1 = SiderCustom.setMenuOpen(props);
            const state2 = SiderCustom.onCollapse(props.collapsed);
            return {
                ...state1,
                ...state2,
                other:'harry',
                firstHide: state.collapsed !== props.collapsed && props.collapsed, // 两个不等时赋值props属性值否则为false
                openKey: state.openKey || (!props.collapsed && state1.openKey)
            }
        }
        return null;
    }
    static setMenuOpen = props => {
        const { pathname } = props.location;
        return {
            openKey: pathname.substr(0, pathname.lastIndexOf('/')),
            selectedKey: pathname
        };
    };
    static onCollapse = (collapsed) => {
        console.log(collapsed);
        return {
            collapsed,
            firstHide: collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        };
    };
    state = {
        collapsed: false,
        mode: 'inline',
        openKey: '',
        other:'',
        selectedKey: '',
        asideWidth:200, //默认宽度
        firstHide: false, // 点击收缩菜单，第一次隐藏展开子菜单，openMenu时恢复
    };
    componentDidMount() {
        // this.setMenuOpen(this.props);
        const state = SiderCustom.setMenuOpen(this.props);
 
        this.setState(state);
   

    }
    menuClick = e => {
        this.setState({
            selectedKey: e.key
        });
        console.log(this.state);
        const { popoverHide } = this.props; // 响应式布局控制小屏幕点击菜单时隐藏菜单操作
        popoverHide && popoverHide();
    };
    openMenu = v => {
        console.log(v);
        this.setState({
            openKey: v[v.length - 1],
            firstHide: false,
        })
    };
    mousedown(e){
        let _this = this;
        var resize = document.getElementById("resize");
        var startX = e.clientX;
        resize.left = resize.offsetLeft;
        document.onmousemove = function(e) {
          var endX = e.clientX;
          var moveLen = resize.left + (endX - startX);  
           
          if (moveLen < 150) {
            if(moveLen<100){
                return 
            }
            _this.props.changeWidth(moveLen)
            _this.setState({
                collapsed:true,
                asideWidth:moveLen
            })
          }
          else if (moveLen > 400) {
            _this.setState({
                collapsed:true
            })
            moveLen = 400;
            _this.props.changeWidth(moveLen)
            _this.setState({
                asideWidth:moveLen
            })
            _this.mainLeft = moveLen + 5 + "px";
            resize.style.left = moveLen + "px";
          } else {
            _this.props.changeWidth(moveLen)
            _this.setState({
                collapsed:true
            })
            _this.asideWidth = moveLen + "px";
            _this.mainLeft = moveLen + 5 + "px";
            _this.setState({
                asideWidth:moveLen
            })
            resize.style.left = moveLen + "px";
          }
        }
        document.onmouseup = function(e) {
          document.onmousemove = null;
          document.onmouseup = null;
          resize.releaseCapture && resize.releaseCapture();
        }
        resize.setCapture && resize.setCapture();
        return false;
      
    }
    render() {
        return (
            <div>
            {
                !this.state.collapsed &&
               
            <div onMouseDown={this.mousedown.bind(this)} className="resize" id="resize"  style={{left: this.state.asideWidth }}></div>
           }
            <Sider
                trigger={null}
                breakpoint="lg"
                theme="light"
                collapsed={this.props.collapsed}
                width={this.state.asideWidth+5}
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0
                }}
               
            >
                <div className="logo" >
                        {/* {this.state.other} */}

                </div>

                <SiderMenu
                    menus={routes}
                    onClick={this.menuClick}
                    mode="inline"
                    theme="light"
                   
                    selectedKeys={[this.state.selectedKey]}
                    openKeys={ this.state.firstHide?null:[this.state.openKey]}
                    onOpenChange={this.openMenu}
                />
                <style>
                    {`
                    #nprogress .spinner{
                        left: ${this.state.collapsed ? '70px' : '206px'};
                        right: 0 !important;
                    }
                    `}
                </style>
            </Sider>
            </div>
        )
    }
}
let mapDispatchToProps=(dispatch)=>{
    return {
        changeWidth(width){
            dispatch({type:'CHANGE_WIDTH',width:width})
        }
    }
}
export default connect(null,mapDispatchToProps)((withRouter(SiderCustom)))