import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from './shared/create/create.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateComponent, {
      width: '15.5rem',
      height: '22rem',
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }
}
