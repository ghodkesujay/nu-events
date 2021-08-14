import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class AdminAuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const userType = localStorage.getItem('user-type')
        if (userType == 'admin') return true;
        this.router.navigate(["login"], { queryParams: { returnUrl: state.url } });
        return false
    }
}
