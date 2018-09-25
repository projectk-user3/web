import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../services/rest.service';
import { AppConstants } from '../../../constants/config.constants';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  receivedLikeCnt: any;
  sendLikeCnt: any;
  recievedMsgCnt:any;
  sendMsgCnt:any;
  favCnt:any;
  noDataPresent = false;
  constructor(private _restService: RestService) { }

  ngOnInit() {
    
    this._restService.httpGetServiceCall(AppConstants.receivedLikeCntEndPoint).subscribe((res: any) => {
      this.receivedLikeCnt = res;
    }, error => {
      this.noDataPresent = true;
    });
    this._restService.httpGetServiceCall(AppConstants.sentLikeCntEndPoint).subscribe((res: any) => {
      this.sendLikeCnt = res;
    }, error => {
      this.noDataPresent = true;
    });
    this._restService.httpGetServiceCall(AppConstants.receivedMsgCntEndPoint).subscribe((res: any) => {
      this.recievedMsgCnt = res;
    }, error => {
      this.noDataPresent = true;
    });
    this._restService.httpGetServiceCall(AppConstants.sentMsgCntEndPoint).subscribe((res: any) => {
      this.sendMsgCnt = res;
    }, error => {
      this.noDataPresent = true;
    });
    this._restService.httpGetServiceCall(AppConstants.sentMsgCntEndPoint).subscribe((res: any) => {
      this._restService = res;
    }, error => {
      this.noDataPresent = true;
    });
  }

}
