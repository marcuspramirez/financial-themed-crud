import { Component, OnInit } from '@angular/core';
import { FundService } from '../fund.service';
import { Fund } from '../fund/fund.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.scss']
})
export class FundsComponent implements OnInit {

  constructor(private fundService: FundService, private router: Router, private route:ActivatedRoute) { }

  funds:Fund[] = [];
 

  ngOnInit(): void {
    this.fundService.getFunds().subscribe(payload => {
      this.funds = payload;
    })
  }

  edit(fundId:any):void {
    this.router.navigateByUrl(`/funds/${fundId}/edit`)
    
  }

  delete(id: any): void{
    this.fundService.deleteFund(id).subscribe(payload => {
      this.fundService.getFunds().subscribe(payload => {
        this.funds = payload;
      })
    })
    
  }


}
