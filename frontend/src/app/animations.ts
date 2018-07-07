import { trigger, state, transition, animate, style } from '@angular/animations';

 export const openDiv = trigger('openDiv', [
    state('closed', style({
      height: 0,
      paddingTop: 0,
      paddingBottom: 0,
      opacity: 0
    })),
  
    transition('closed => open', [
      animate('500ms ease-out', style({
        height: '*',
        paddingTop: '*',
        paddingBottom: '*'
      })),
      animate('500ms', style({ opacity: 1 }))
    ]),
  
    transition('open => closed', [
      animate('500ms ease-in')
    ])
  ]);