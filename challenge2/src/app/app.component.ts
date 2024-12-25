import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlockComponent } from "./block/block.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BlockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'challenge2';
}
