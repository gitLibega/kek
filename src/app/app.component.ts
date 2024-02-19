import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button nz-button [nzType]="'primary'" (click)="showModal()"><span>Show Modal</span></button>
    <nz-modal [(nzVisible)]="isVisible" nzTitle="The first Modal" (nzOnCancel)="handleCancel()" (nzOnOk)="handleOk()">
      <ng-container *nzModalContent>
        <nz-select ngModel="lucy">
      <nz-option nzValue="jack" nzLabel="Jack"></nz-option>
      <nz-option nzValue="lucy" nzLabel="Lucy"></nz-option>
      <nz-option nzValue="disabled" nzLabel="Disabled" nzDisabled></nz-option>
    </nz-select>
    
<br\>

<br\>
<br\>
<br\>
<br\>
<br\>
<br\>
<br\>
<br\>
<br\>
<br\>
<br\>
<br\>
<br\>
<br\>
<br\>
<br\>
<br\>
<br\>
<br\>
<br\>
<br\>
<br\>
<br\>
<br\>
<br\>
<br\>
<br\>
<br\>
<br\>
<br\>
<br\>
<br\>
<br\>
<br\>
<br\>
<br\>
<br\>
<br\>
      </ng-container>
    </nz-modal>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isVisible = false;

  constructor() {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
