import './public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// 挂载的逻辑
function render(props) {
  const { container } = props;
  // 如果容器(container)中存在根节点，直接挂载，否则直接挂载到根id #root
  ReactDOM.render(<App />, container ? container.querySelector('#root') : document.querySelector('#root'));
}

// 如果不是qiankun框架，由原本框架进行渲染
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props) {
  console.log('[react16] props from main framework', props);
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}

<BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/micro-app1' : '/'}></BrowserRouter>