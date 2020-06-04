import { Action } from '@ngrx/store';
import { Customer } from '../customer.model';

export enum CustomerActionTypes {
  LOAD_CUSTOMERS = 'LOAD_CUSTOMERS',
  LOAD_CUSTOMERS_SUCCESS = 'LOAD_CUSTOMERS_SUCCESS',
  LOAD_CUSTOMERS_FAIL = 'LOAD_CUSTOMERS_FAIL',
}

export class LoadCustomers implements Action {
  readonly type = CustomerActionTypes.LOAD_CUSTOMERS;
}

export class LoadCustomersSuccess implements Action {
  readonly type = CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS;
  constructor(public payload: Customer[]) {}
}

export class LoadCustomersFail implements Action {
  readonly type = CustomerActionTypes.LOAD_CUSTOMERS_FAIL;

  constructor(public payload: string) {}
}

export type ActionUnion =
  | LoadCustomers
  | LoadCustomersSuccess
  | LoadCustomersFail;
