import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  let user = localStorage.getItem("userIDWhatIs?");
  let authLoginRouter = inject(Router)
  if (user == null) {
    return authLoginRouter.navigate(['/authentication/login']);
  }else {
    return true;
  }
};
