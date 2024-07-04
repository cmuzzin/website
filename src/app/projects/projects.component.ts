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
    'rmch-photos/rmch1.PNG',
    'rmch-photos/rmch2.PNG',
    'rmch-photos/rmch3.PNG',
    'rmch-photos/rmch4.PNG',
    'rmch-photos/rmch5.PNG',
    'rmch-photos/rmch6.PNG',
    'rmch-photos/rmch7.PNG',
    'rmch-photos/rmch8.PNG',
    'rmch-photos/rmch9.PNG',
    'rmch-photos/rmch10.PNG',
    'rmch-photos/rmch11.PNG',
    'rmch-photos/rmch12.PNG',
    'rmch-photos/rmch13.PNG',
    'rmch-photos/rmch14.PNG',
  ];
}
