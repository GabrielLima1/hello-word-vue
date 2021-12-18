const Login = () => import('./login')

export default [
  {
    path: '/login',
    name: 'auth.login',
    component: Login
  }
]