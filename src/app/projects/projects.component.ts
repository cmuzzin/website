import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
    selector: 'app-projects',
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

  rmchPhonePhotos = [
    'rmch_phone/login.png',
    'rmch_phone/signup.png',
    'rmch_phone/map.png',
    'rmch_phone/preview.png',
    'rmch_phone/tab2.png',
    'rmch_phone/search.png',
    'rmch_phone/suggest.png',
    'rmch_phone/settings.png',
    'rmch_phone/profile.png',
    'rmch_phone/shop1.png',
    'rmch_phone/shop2.png',
    'rmch_phone/shop3.png',
    'rmch_phone/noreview.png',
    'rmch_phone/roast.png',
  ];

  rmchTabletPhotos = [
    'rmch_tablet/login.png',
    'rmch_tablet/signup.png',
    'rmch_tablet/map.png',
    'rmch_tablet/preview.png',
    'rmch_tablet/tab2.png',
    'rmch_tablet/search.png',
    'rmch_tablet/suggest.png',
    'rmch_tablet/settings.png',
    'rmch_tablet/profile.png',
    'rmch_tablet/shop.png',
    'rmch_tablet/noreview.png',
    'rmch_tablet/roast.png',
    'rmch_tablet/roast2.png',
  ]
}
