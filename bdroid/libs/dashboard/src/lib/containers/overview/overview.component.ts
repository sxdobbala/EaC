import { Component, OnInit } from '@angular/core';
import { Crumb } from '@bdroid/breadcrumbs';

@Component({
  selector: 'ngx-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  crumbs: ReadonlyArray<Crumb> = [{ name: 'Dashboard', link: '/dashboard' }];

  constructor() {}

  ngOnInit() {}
}
