import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CUSTOMERS } from '../../../services/data';

@Component({ selector: 'app-admin-customers', imports: [CurrencyPipe], templateUrl: './admin-customers.component.html', styleUrl: '../products/admin-products.component.scss' })
export class AdminCustomersComponent { customers = CUSTOMERS; }
