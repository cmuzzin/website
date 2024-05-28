import { Component } from '@angular/core';
import { IconsModule } from '../icons/icons.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IconsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
