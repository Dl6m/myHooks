import { lazy, Suspense } from 'react';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import { Button } from 'antd';
import './App.css';
// import Echarts from './views/echarts'
import Dtxr from './views/dtxr';
import LayoutEffect from './views/LayoutEffect';
const BulletFrameAssembly = lazy(() => import('./views/bulletFrameAssembly'));
const RollingComponent = lazy(() => import('./views/rollingComponent'));
const MyComponent = lazy(() => import('./views/ech/index'));

function App() {
  return (
    <>
      <div id="Appdiv">
        <Button type="dashed">
          <NavLink to={'/bulletFrameAssembly'}>弹窗组件</NavLink>
        </Button>
        <Button type="ghost">
          <NavLink to={'/rollingComponent'}>滚动组件</NavLink>
        </Button>
        <Button type="ghost">
          <NavLink to={'/dtxr'}>动态渲染雷彪</NavLink>
        </Button>
        <Button type="ghost">
          <NavLink to={'/echarts'}>echarts</NavLink>
        </Button>
        <Button type="ghost">
          <NavLink to={'/ech'}>echarts2</NavLink>
        </Button>
        <Button type="ghost">
          <NavLink to={'/LayoutEffect'}>LayoutEffect</NavLink>
        </Button>
      </div>
      <Suspense fallback={<span>页面加载汇总</span>}>
        <Switch>
          <Route exact path={'/bulletFrameAssembly'} component={BulletFrameAssembly}></Route>
          <Route exact path={'/rollingComponent'} component={RollingComponent}></Route>
          <Route path={'/'} exact>
            <Redirect to={'/bulletFrameAssembly'}></Redirect>
          </Route>
          <Route exact path={'/dtxr'} component={Dtxr}></Route>
          <Route exact path={'/ech'} component={MyComponent}></Route>
          <Route exact path={'/LayoutEffect'} component={LayoutEffect}></Route>
          {/* <Route exact path={'/echarts'} component={Echarts}></Route> */}
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
