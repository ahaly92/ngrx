import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.model';
import { Store } from '@ngrx/store';
import * as CustomerActions from '../state/customer.actions';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {
  customers: Customer[];

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch(new CustomerActions.LoadCustomers());
    this.store.subscribe(
      (state) => (this.customers = state.customers.customers)
    );
  }
}
