import { Component } from '@angular/core';

import {FolderService} from './folder.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  folderName = 'Home';
  files = [];

  constructor(private folderService: FolderService) {
      this.folderService.getFolder('').subscribe(data => this.files = data);
  }


}
