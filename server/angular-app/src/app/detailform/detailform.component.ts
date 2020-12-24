import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Radioandtext } from '../model/radioandtext';

@Component({
  selector: 'app-detailform',
  templateUrl: './detailform.component.html',
  styleUrls: ['./detailform.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DetailformComponent implements OnInit {

  radioandtext: Radioandtext = {
    value: '',
    text: ''
  }
  
  options: string[] = ["オプション1", "オプション2", "その他"];

  constructor(
  ) { }

  ngOnInit(): void {
  }

  confirmData(): void {
    console.log("value : " + this.radioandtext.value);
    console.log("text : " + this.radioandtext.text);
  }
}
