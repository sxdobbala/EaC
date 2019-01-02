import { Component, OnInit } from '@angular/core';
import { cardAnimation } from '@bdroid/animations';
import { Crumb } from '@bdroid/breadcrumbs';

@Component({
  selector: 'ngx-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  animations: [cardAnimation],
})
export class AnimationsComponent implements OnInit {
  crumbs: ReadonlyArray<Crumb> = [
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Experiments', link: '/dashboard/experiments' },
    { name: 'Animations' },
  ];
  animationState: string;

  constructor() {}

  ngOnInit() {}

  startAnimation(state) {
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState() {
    this.animationState = '';
  }
}
