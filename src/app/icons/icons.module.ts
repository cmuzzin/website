import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Mail, Github, Linkedin } from 'angular-feather/icons';

const icons = {
  Mail,
  Github,
  Linkedin
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }