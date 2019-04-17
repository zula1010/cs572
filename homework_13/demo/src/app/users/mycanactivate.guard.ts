import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})

export class MyCanActivateGuard implements CanActivate {
    constructor(private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        console.log(route);
        console.log(state);
        if (route.params['uuid'] < 10)
            return true;
        else {
            this.router.navigate(['err']);
        }
    }
}