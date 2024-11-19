import { HttpInterceptorFn } from '@angular/common/http';
import { BussyService } from '../_services/bussy.service';
import { inject } from '@angular/core';
import { delay, finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const bussyService = inject(BussyService);
  
  bussyService.busy();

  return next(req).pipe(
    delay(1000),
    finalize(() => {
      bussyService.idle();
    })
  );
};
