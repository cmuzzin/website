import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsModule } from '../icons/icons.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IconsModule, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
