
import AsyncComponent from 'src/components/AsyncComponent'
let RouteConfig:Array<{
    path: string,
    component: any
}> = [
   {
      path:'/array',
      component: AsyncComponent(()=>import('src/pages/Array'))
   },
   {
      path:'/list',
      component: AsyncComponent(()=>import('src/pages/List'))
   }
];

const Routes = RouteConfig.map((item) => {
    return {
        exact: true,
        ...item
    }
})

Routes.push({
    path: '/',
    exact: false,
    component: AsyncComponent(() => import('src/pages/error'))
})

export default Routes
