const Login = () => import('./signin')
const Singup = () => import('./signup')
const ResetPassword = () => import('./reset-password')

export default [
  {
    path: '/signin',
    name: 'auth.signin',
    component: Login
  },
  {
    path: '/signup',
    name: 'auth.signup',
    component: Singup
  },
  {
    path: '/reset-password',
    name: 'auth.reset-password',
    component: ResetPassword
  }
]