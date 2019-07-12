import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../service/common.service';
import { ModalDirective } from 'ngx-bootstrap';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-canban',
  templateUrl: './canban.component.html',
  styleUrls: ['./canban.component.css']
})
export class CanbanComponent implements OnInit {

  lstKanban: any = [];
  all: boolean = true;
  active: boolean = false;
  inprocess: boolean = false;
  inactive: boolean = false;
  isdisabled: boolean = true;
  Listdata: any = [];
  data: any = [];



  kanbanForm: FormGroup;

  @ViewChild('addRecord', name) addRecordModal: ModalDirective;

  ModalShowAdd() {
    this.addRecordModal.show();
    this.kanbanForm.reset();
  }
  close() {
    this.addRecordModal.hide();
  }
  add_Record() {
    if (this.kanbanForm.valid) {
      let kanbanForm = this.kanbanForm.value;
      const index = this.lstKanban.findIndex(x => x.id == kanbanForm.id);
      if (index > -1) {
        this.lstKanban.splice(index, 1, kanbanForm);
      } else {
        kanbanForm.id = (new Date()).getTime();
        this.lstKanban.push(kanbanForm);
        this.lstKanban.map(x => {
          x.all = this.all,
            x.active = this.active,
            x.inprocess = this.inprocess,
            x.inactive = this.inactive;
        });
      }
      this.close();
    }
  }

  selected(index) {
    const selectedData = this.Listdata.map((x: { id: any; active: any; inprocess: any; inactive: any; title: any }) => {
      if (x.id == index.id) {
        x.active = true;
        return index;
      }
      this.lstKanban.find(x => x.active == true)
      if (x.active == true) {
        x.title = "Active";
      }
      else if (x.inprocess == true) {
        x.title = "In Process";
      }
    });
    console.log('selectedData', selectedData)
  }
  constructor(private _cS: CommonService, private fb: FormBuilder) { }

  ngOnInit() {
    this.kanbanForm = this.fb.group({
      name: ['', Validators.required],
    });
    this.lstKanban = this._cS.kanbanData();
    this.lstKanban.map(x => {
      x.all = this.all,
        x.active = this.active,
        x.inprocess = this.inprocess,
        x.inactive = this.inactive;
      if (x.active == true) {
        x.title = "Active";
      }
      else if (x.inprocess == true) {
        x.title = "In Process";
      }
      console.log('lstKanban', this.lstKanban)
    });

    this.lstKanban.map(x => {
      this.Listdata.push(x);

    });
  }
}
