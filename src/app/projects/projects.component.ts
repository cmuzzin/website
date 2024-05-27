import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  mopsPhotos = [
    'email-flow-images/email1.png', 
    'email-flow-images/email2.png',
    'email-flow-images/email3.png',
    'email-flow-images/email4.png',
    'email-flow-images/email5.png',
    'email-flow-images/email6.png',
    'email-flow-images/email6.png'
  ];
  mcmPhotos = [
    'mcm-images/mcm-login.png',
    'mcm-images/mcm-calendar.png',
    'mcm-images/mcm-day.png',
    'mcm-images/mcm-search.png',
    'mcm-images/mcm-admin.png',
    'mcm-images/mcm-edit-group.png',

  ];
  spcPhotos = [
    'spc-images/spc1.png', 
    'spc-images/spc2.png',
    'spc-images/spc3.png',
    'spc-images/spc4.png',
    'spc-images/spc5.png',
    'spc-images/spc6.png',
    'spc-images/spc7.png',
    'spc-images/spc8.png',
    'spc-images/spc9.png',
    'spc-images/spc10.png',
  ];

  rmchPhotos = [
    'rmch-photos/sign-in.PNG',
    'rmch-photos/sign-up.PNG',
    'rmch-photos/map.PNG',
    'rmch-photos/marker.PNG',
    'rmch-photos/tab2.PNG',
    'rmch-photos/nobm.PNG',
    'rmch-photos/search.PNG',
    'rmch-photos/suggest.PNG',
    'rmch-photos/shop.PNG',
    'rmch-photos/rating.PNG',
    'rmch-photos/map.PNG',
    'rmch-photos/settings.PNG',
    'rmch-photos/profile.PNG',
    'rmch-photos/submission.PNG',
  ];
}
