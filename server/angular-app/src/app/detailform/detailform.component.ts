import { Component, OnInit } from '@angular/core';

import { Radioandtext } from '../model/radioandtext';

@Component({
  selector: 'app-detailform',
  templateUrl: './detailform.component.html',
  styleUrls: ['./detailform.component.scss']
})
export class DetailformComponent implements OnInit {
  // チェックボックス用
  checked = false;

  radioandtext : Radioandtext = {
    value: 0,
    text: ''
  }

  options: string[] = ["オプション1", "オプション2", "その他"];


  constructor(
  ) { }

  ngOnInit(): void {
  }

confirmData(): void{
  console.log("value : " + this.radioandtext.value);
  console.log("text : " + this.radioandtext.text);
}


}
