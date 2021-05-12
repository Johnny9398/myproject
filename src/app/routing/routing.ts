export const MainRoutes = [
    {
        path: '',
        loadChildren: () => import('../website/home/home.module').then(m => m.HomeModule)
    },

    {
        path: 'home',
        loadChildren: () => import('../website/home/home.module').then(m => m.HomeModule)
    },

    {
        path: 'contact',
        loadChildren: () => import('../website/home/contact/contact.module').then(m => m.ContactModule)
    },

    {
        path: 'aboutus',
        loadChildren: () => import('../website/home/aboutus/aboutus.module').then(m => m.AboutusModule)
    },

    {
        path: 'services',
        loadChildren: () => import('../website/home/services/services.module').then(m => m.ServicesModule)
    },

    {
        path: 'course',
        loadChildren: () => import('../website/home/courses/courses.module').then(m => m.CoursesModule)
    },

    {
        path: 'login',
        loadChildren: () => import('../website/home/login/login.module').then(m => m.LoginModule)
    },

    {
        path: 'signup',
        loadChildren: () => import('../website/home/signup/signup.module').then(m => m.SignupModule)
    },


]
