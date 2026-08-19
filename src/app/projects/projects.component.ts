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

  rmchDMPhotos = [
  'rmch_v2/dm-login.PNG',
  'rmch_v2/dm-signup.PNG',
  'rmch_v2/dm-list.PNG',
  'rmch_v2/dm-map.PNG',
  'rmch_v2/dm-shop-popover.PNG',
  'rmch_v2/dm-roasted.PNG',
  'rmch_v2/dm-add-collection.PNG',
   'rmch_v2/dm-collections.PNG',
  'rmch_v2/dm-collection.PNG',
  'rmch_v2/dm-discover.PNG',
  'rmch_v2/dm-leaderboard.PNG',
  'rmch_v2/dm-nearby-shops.PNG',
  'rmch_v2/dm-submit-shop.PNG',
  'rmch_v2/dm-recent-roasts.PNG',
  'rmch_v2/dm-shop.PNG',
  'rmch_v2/dm-roast.PNG',
  'rmch_v2/dm-roast2.PNG',
  'rmch_v2/dm-photo.PNG',
  'rmch_v2/dm-settings.PNG',
  'rmch_v2/dm-account.PNG',
  'rmch_v2/dm-changepw.PNG',
  'rmch_v2/dm-profile.PNG'
];

rmchLMPhotos = [
  'rmch_v2/lm-login.PNG',
  'rmch_v2/lm-signup.PNG',
  'rmch_v2/lm-list.PNG',
  'rmch_v2/lm-map.PNG',
  'rmch_v2/lm-shop-popover.PNG',
  'rmch_v2/lm-roasted.PNG',
  'rmch_v2/lm-add-collection.PNG',
    'rmch_v2/lm-collections.PNG',
  'rmch_v2/lm-collection.PNG',
  'rmch_v2/lm-discover.PNG',
  'rmch_v2/lm-leaderboard.PNG',
  'rmch_v2/lm-nearby-shops.PNG',
  'rmch_v2/lm-submit-shop.png',
  'rmch_v2/lm-recent-roasts.PNG',
  'rmch_v2/lm-shop.PNG',
  'rmch_v2/lm-roast.PNG',
  'rmch_v2/lm-roast2.PNG',
  'rmch_v2/lm-photo.PNG',
  'rmch_v2/lm-settings.PNG',
  'rmch_v2/lm-account.PNG',
  'rmch_v2/lm-changepw.PNG',
  'rmch_v2/lm-profile.PNG',
];

 afPhotos = [
  'AF/comparison.png',
  'AF/chart.png',
  'AF/distribution-table.png',
  'AF/dist-table-open.png',
  'AF/settings.png',
  'AF/adverse-action.png',
  'AF/af-wizard-aa-step1.png',
  'AF/af-wizard-aa-step2.png',
  'AF/af-wizard-aa-step3.png',
  'AF/af-wizard-aa-step4.png',
  'AF/af-wizard-sa-step1.png',
  'AF/af-wizard-sa-step2.png',
  'AF/af-wizard-sa-step3.png',
  'AF/af-wizard-sa-step4.png',
  'AF/af-wizard-sa-step5.png',
  'AF/af-wizard-sa-step6.png',
];

  osrsLookupPhotos = [
    'osrs-lookup-images/osrs-lookup-home.png',
    'osrs-lookup-images/osrs-lookup-home-recent-searches.png',
    'osrs-lookup-images/osrs-lookup-player-page.png',
    'osrs-lookup-images/osrs-lookup-clan-page.png',
  ];

}
