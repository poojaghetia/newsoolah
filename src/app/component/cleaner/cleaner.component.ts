import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/auth/shared.service';

@Component({
  selector: 'app-cleaner',
  templateUrl: './cleaner.component.html',
  styleUrls: ['./cleaner.component.scss'],


})
export class CleanerComponent implements OnInit {

  rows = [];
  id: string;
  loadingIndicator = true;
  reorderable = true;
  columns = [];
  selected = [];
  deleted = [];
  userData: any;
  filteredData: any;

  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild('hdrTmpl') hdrTmpl: TemplateRef<any>;

  constructor(public router: Router, private sharedservice:SharedService
   ) {

  }

  ngOnInit() {
    this.setPage();
    this.columns = [
      { prop: 'Id', name: 'ID', sortable: false },
      { prop: 'firstName', name: 'First Name' },
      { prop: 'lastName', name: 'Last Name' },
      { prop: 'mobileNo', name: 'Mobile No' },
      { prop: 'email', name: 'Email' },
      { prop: 'Action', name: "Action", cellTemplate: this.hdrTmpl, sortable: false }
    ]

  }
  setPage() {
    this.sharedservice.contractslist().subscribe(data => {
console.log(data);

      this.rows = [];
      this.userData = data
      this.userData.forEach((element, index) => {
        this.rows.push({
          firstName: element.firstName,
          lastName: element.lastName,
          mobileNo: element.mobileNo,
          email: element.email,
          _id: element._id,
          Id: index + 1
        })
        this.filteredData = [...this.rows];
        this.loadingIndicator = false

      });
      this.userData = this.userData
    }, err => {
      console.log(err);
    });
  }

  /* sorting functionality */
  onSort(event) {
    const rows = [...this.rows];
    const sort = event.sorts[0];
    rows.sort((a, b) => {
      return a[sort.prop].localeCompare(b[sort.prop]) * (sort.dir === 'desc' ? -1 : 1);
    });
    this.rows = rows;
    this.userData = [...this.rows];
  }

  /* custom filter start */
  updateFilter(event) {
    if (this.filteredData.length) {
      const val = event.target.value.toLowerCase();

      const keys = Object.keys(this.filteredData[0]);
      const colsAmt = keys.length;
      // filter our data
      const temp = this.filteredData.filter(function (item) {
        // iterate through each row's column data
        let flag = true;
        for (let i = 0; i < colsAmt; i++) {
          // check for a match and RETURN TRUE/FALSE
          if (keys[i] === '_id') { continue; }
          if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 || !val) {
            flag = false;
            return true;
          }
          if (flag && colsAmt === (i + 1)) {
            return false;
          }
        }
      });
      // update the rows
      this.rows = temp;
      this.userData = [...this.rows];
      // Whenever the filter changes, always go back to the first page
      this.table.offset = 0;
    }
  }

  view(id) {
    // this.router.navigate(['Contracts/Contract-details', id], { skipLocationChange: true })

  }

  getRowHeight(row) {
    return row.height;
  }
}