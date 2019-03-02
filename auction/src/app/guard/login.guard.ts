import { CanActivate } from '@angular/router/src/utils/preactivation';

export class LoginGuard implements CanActivate {
    path: import("@angular/router").ActivatedRouteSnapshot[];
    route: import("@angular/router").ActivatedRouteSnapshot;
    canActivate() {
        const loggedIn: boolean = Math.random() < 0.5;

        if (!loggedIn) {
            console.log('用户未登录');
        }
        return loggedIn;
    }
}
