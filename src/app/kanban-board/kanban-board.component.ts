import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from '../service/common.service';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css']
})
export class KanbanBoardComponent implements OnInit {
  kanbanForm: FormGroup;
  lstKanban: any = [];
  all: boolean = true;
  active: boolean = false;
  inprocess: boolean = false;
  inactive: boolean = false;
  isdisabled: boolean = true;




  @ViewChild('addRecord', name) addRec: ModalDirective;

  ModalShowAdd() {
    this.addRec.show();
    this.kanbanForm.reset();
  }
  close() {
    this.addRec.hide();
  }
  //#region add task
  add_Record() {
    if (this.kanbanForm.valid) {
      let kanbanForm = this.kanbanForm.value;
      const index = this.lstKanban.findIndex(x => x.id == kanbanForm.id);
      if (index > -1) {
        this.lstKanban.splice(index, 1, kanbanForm);
      } else {
        kanbanForm.id = this.lstKanban.lengh + 1;
        this.lstKanban.push(kanbanForm);
        kanbanForm.all = true;
        //localStorage.setItem("addedTask", JSON.stringify(this.lstKanban));
      }
      this.close();
    }
  }
  //#endregion add record

  //#region active
  _active(index) {
    this.all = false;
    this.active = true;
    this.inprocess = false;
    this.inactive = false;
    index.all = this.all;
    index.inprocess = this.inprocess;
    index.inactive = this.inactive;
    index.active = this.active;
    if (this.all = false) {
      this.lstKanban.splice(index, 1)
    }
  }
  //#endregion  active


  //#region inprocess
  inProcess(index) {
    this.all = false;
    index.all = this.all;
    this.active = false;
    this.inactive = false;
    this.inprocess = true;
    index.active = this.active;
    index.inactive = this.inactive;
    index.inprocess = this.inprocess
    if (this.all = false) {
      this.lstKanban.splice(index, 1)
    }
  }
  //#endregion inprocess


  //#region inactive
  inActive(index) {
    this.all = false;
    index.all = this.all;
    this.inprocess = false;
    this.active = false;
    this.inactive = true;
    index.inprocess = this.inprocess;
    index.active = this.active;
    index.inactive = this.inactive
    if (this.all = false) {
      this.lstKanban.splice(index, 1);
    }
  }
  //#endregion inactive

  constructor(private fb: FormBuilder, private _cS: CommonService) { }

  ngOnInit() {
    document.querySelector('body').classList.add('back-box');
    this.kanbanForm = this.fb.group({
      name: ['', Validators.required],
    });
    this.lstKanban = this._cS.kanbanData(); // service data
    this.lstKanban.map(x => {
      x.all = this.all,
        x.active = this.active,
        x.inprocess = this.inprocess,
        x.inactive = this.inactive;
    });
  }
}
