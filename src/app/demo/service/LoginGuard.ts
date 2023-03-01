import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {LocalStorageService} from "angular-2-local-storage";

@Injectable()
export class LoginGuard implements CanActivate{

    constructor(private localStorageService: LocalStorageService, private router: Router) {

    }

    canActivate(gidilecekSayfa: ActivatedRouteSnapshot, gelinenSayfa: RouterStateSnapshot): boolean {
        if (this.localStorageService.get("userName") == "gncy" && this.localStorageService.get("password") == "1234")
            return true;

        this.router.navigate(["login"]);

        return false;
    }
}
