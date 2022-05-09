import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild('refreshForm', { static: false }) refreshForm: any;

  forceReload() {
    this.refreshForm.nativeElement.submit();
  }

  constructor() { }

  ngOnInit(): void {

    // setTimeout(()=> { console.log("HELLO");
    // window.location.href = window.location.href
    // }, 5000)

  }

}
