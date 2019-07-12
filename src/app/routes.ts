import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { AddcategoryComponent } from './user-profile/addcategory/addcategory.component';
import { ViewcategoryComponent } from './user-profile/viewcategory/viewcategory.component';
import { AddfoodComponent } from './user-profile/addfood/addfood.component';
import { ViewfoodComponent } from './user-profile/viewfood/viewfood.component';
import { ViewbookingComponent } from './user-profile/viewbooking/viewbooking.component';
import { ViewuserComponent } from './user-profile/viewuser/viewuser.component';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'userprofile', component: UserProfileComponent, canActivate: [AuthGuard],
        children: [
            {    path: 'AddCategory', component: AddcategoryComponent, },
            {    path: 'ViewCategory', component: ViewcategoryComponent, },
            {    path: 'AddFood', component: AddfoodComponent, },
            {    path: 'ViewFood', component: ViewfoodComponent, },
            {    path: 'booking', component: ViewbookingComponent, },
            {    path: 'reguser', component: ViewuserComponent, },
    ]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];
