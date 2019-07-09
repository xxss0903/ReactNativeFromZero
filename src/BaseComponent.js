import React from 'react';

export default class BaseComponent extends React.Component {
  
  static screen;
  
// 页面组件初始化时获取当前页面的实例
  constructor() {
    super();
    BaseComponent.screen = this;
  }
  
  /// 返回当前页面的navigation
  nav() {
    return this.props.navigation;
  }
  
}