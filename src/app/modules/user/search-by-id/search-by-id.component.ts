import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../services/rest.service';
import { AppConstants } from '../../../constants/config.constants';

@Component({
  selector: 'app-search-by-id',
  templateUrl: './search-by-id.component.html',
  styleUrls: ['./search-by-id.component.scss']
})
export class SearchByIdComponent implements OnInit {

  profileId: '';
  byIdProfileList: any;
  noDataPresent = false;

  constructor(private _restService: RestService) { }

  ngOnInit() {
  }

  searchById() {
    this._restService.httpGetServiceCall(AppConstants.searchByIdEndPoint).subscribe((res: any) => {
      this.byIdProfileList = res.data;
    }, error => {
      this.noDataPresent = true;
    });
  }
}
