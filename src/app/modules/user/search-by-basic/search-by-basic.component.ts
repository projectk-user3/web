import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../services/rest.service';
import { AppConstants } from '../../../constants/config.constants';

@Component({
  selector: 'app-search-by-basic',
  templateUrl: './search-by-basic.component.html',
  styleUrls: ['./search-by-basic.component.scss']
})
export class SearchByBasicComponent implements OnInit {
  gender = '';
  ageFrom = '';
  ageTo = '';
  profile: any;
  noDataPresent = false;
  constructor(private _restService: RestService) { }

  ngOnInit() {
  }
  search() {
    const postData = {
      'gender': this.gender,
      'ageFrom': this.ageFrom,
      'ageTo': this.ageTo
    };
    this._restService.httpPostCall(AppConstants.searchEndPoint,postData).subscribe((res: any) => {
      this.profile = res;
      console.log(res);
    }, error => {
      this.noDataPresent = true;
    });
  }
}
