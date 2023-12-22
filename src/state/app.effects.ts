import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppService } from "src/app/app.service";
import { map, exhaustMap, catchError, mergeMap } from 'rxjs/operators';
import { EMPTY } from "rxjs";
import { getUser, getUserSuccess } from "./app.actions";
import { IUserData } from "src/models/user.interface";

@Injectable()
export class AppEffects {

  loadUsers$ = createEffect(() =>
  this.actions$.pipe(
    ofType(getUser),
    exhaustMap(() => this.appService.getUser()
      .pipe(
        map((userData:IUserData)=> getUserSuccess({userData})),
        catchError(() => EMPTY)
      ))
    )
  );


  constructor(
    private actions$: Actions,
    private appService: AppService
  ) {}
}
