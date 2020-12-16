import { Component, OnInit, Output } from '@angular/core';
import { Questionnaire } from '../model/questionnaire';
import { DynamoService } from '../dynamo.service';
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
  };
  // questionnaireForm: FormGroup;

  constructor(private dynamoService: DynamoService) { }

  ngOnInit(): void {
  }

  addQuestionnaire(): void{
    const result: Promise<boolean> = this.dynamoService.addDynamoDB(this.questionnaire);
    if(result){
      alert("登録完了");
    }else{
      alert("登録失敗");
    }
  }
  getQuestionnaire(): void{
    const result: Promise<any> = this.dynamoService.getDynamoDB();
    alert(result);
  }

}
