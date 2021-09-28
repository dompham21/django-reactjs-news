import { Navigate, useRoutes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import AdminLayout from '../Pages/AdminLayout';
import GuessGuard from './GuessGuard';
import AuthGuard from './AuthGuard';



const Loadable = (Component) => (props) => {
    return (
      <Suspense
        fallback={
          <div> Loading ... </div>
        }
      >
        <Component {...props} />
      </Suspense>
    );
};

export default function Router() {
    return useRoutes([
        {
            path: '/',
            element: <Home/>,
        },
        {
            path: 'post/:id',
            element: <DetailPost/>
        },
        {
            path: 'login',
            element: 
                <GuessGuard>
                    <Login/>
                </GuessGuard>
        },
        {
            path: 'register',
            element: 
                <GuessGuard>
                    <Register/>
                </GuessGuard>
        },
        {
            path: 'admin',
            element: 
                // <AuthGuard>
                    <AdminLayout/>,
                // </AuthGuard>,
            children: [
                { path: '/', element: <Navigate to="/admin/dashboard" replace /> },
                { path: 'dashboard', element: <DashBoard /> },
                { 
                    path: 'user', 
                    children: [
                        { path: '/', element: <AdminManagerUser /> },
                        { path: 'edit', element: <CreateUser /> },
                        { path: 'create', element: <EditProfileUser /> },
                    ]
                },
                { 
                    path: 'post', 
                    children: [
                        { path: '/', element: <AdminManagerPost /> },
                        { path: 'create', element: <CreatePost /> },
                    ]
                },
            ]
        },
        {
            path: '*',
            element: <Page404/>
        }
    ])
}

//Import Component
const Home = Loadable(lazy(()=>import('../Pages/Home')))
const DetailPost = Loadable(lazy(() => import('../Pages/DetailPost')))
const Page404 = Loadable(lazy(() => import('../Pages/Page404')))
const DashBoard = Loadable(lazy(()=> import('../Pages/AdminDashboard')))
const AdminManagerUser = Loadable(lazy(()=> import('../Pages/AdminManagerUser')))
const CreateUser = Loadable(lazy(()=> import('../Pages/CreateUser')))
const EditProfileUser = Loadable(lazy(()=> import('../Pages/EditProfileUser')))
const AdminManagerPost = Loadable(lazy(()=> import('../Pages/AdminManagerPost')))
const CreatePost = Loadable(lazy(()=> import('../Pages/CreatePost')))
const Login = Loadable(lazy(()=> import('../Pages/Login')))
const Register = Loadable(lazy(()=> import('../Pages/Register')))