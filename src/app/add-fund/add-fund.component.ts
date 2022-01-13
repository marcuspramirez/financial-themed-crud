import { Component, OnInit } from '@angular/core';
import { FundService } from '../fund.service';
import { Fund } from '../fund/fund.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-fund',
  templateUrl: './add-fund.component.html',
  styleUrls: ['./add-fund.component.scss']
})
export class AddFundComponent implements OnInit {

fund: Fund = {};

  constructor(private fundService: FundService, private router: Router) { }

  ngOnInit(): void {
  }

  add(){
    this.fundService.addFund(this.fund).subscribe(payload => {
      this.router.navigateByUrl('/funds');
    })
  }

}
