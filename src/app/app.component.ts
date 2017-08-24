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
  currentPath = "";

  constructor(private folderService: FolderService) {
      this.folderService.getFolder(this.currentPath).subscribe(data => this.files = data);
  }

  gotoFolder(folder: string) {
      this.currentPath += "/" + folder;
      this.folderService.getFolder(this.currentPath).subscribe(data => this.files = data);

  }


}
