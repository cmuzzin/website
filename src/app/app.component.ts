import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';;
import { IconsModule } from './icons/icons.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IconsModule, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
