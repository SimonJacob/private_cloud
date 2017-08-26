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
  path = [];

  constructor(private folderService: FolderService) {
      this.folderService.getFolder(this.path).subscribe(data => this.files = data);
  }

  gotoFolder(folder: any) {
      if (folder.type == "directory") {
          this.path.push(folder.name);
          this.currentPath += "/" + folder.name;
          this.folderService.getFolder(this.path).subscribe(data => this.files = data);
      }
  }

  backToFolder(index: number) {
      this.path.splice(index);
      this.folderService.getFolder(this.path).subscribe(data => this.files = data);
  }

    beautifySize(size: number) : String {
        let unit = 1000;
        if (size < unit) {
            return size + " B";
        }
        var exp = -1;
        while (size > unit) {
            exp += 1;
            size /= unit;
        }
        let names = 'kMGTP';
        return size.toPrecision(3) + " " + names[exp] + "B";
    }

}
