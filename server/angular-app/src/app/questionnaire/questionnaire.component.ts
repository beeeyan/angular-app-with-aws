import { Component, OnInit, Output } from '@angular/core';
import { Questionnaire } from '../questionnaire';
// import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {

  questionnaire : Questionnaire = {
    comment: "",
    satisfaction: 0,
    expection: "",
    improvement: "",
  };
  // questionnaireForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  test(): void{
    alert(this.questionnaire.comment);
    alert(this.questionnaire.satisfaction);
  }

}
