import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as CustomerActions from './customer.actions';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../customer.model';
@Injectable()
export class CustomerEffect {
  constructor(private actions$: Actions, private http: HttpClient) {}

  @Effect()
  loadCustomer$: Observable<Action> = this.actions$.pipe(
    ofType<CustomerActions.LoadCustomers>(
      CustomerActions.CustomerActionTypes.LOAD_CUSTOMERS
    ),
    mergeMap(() =>
      this.http.get<Customer[]>('http://localhost:3000/customers').pipe(
        map((customers: Customer[]) => {
          return new CustomerActions.LoadCustomersSuccess(customers);
        }),
        catchError((err) => of(new CustomerActions.LoadCustomersFail(err)))
      )
    )
  );
}

