import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService } from "../../../services/_services/user.service";
import { first } from "rxjs/operators";

@Component({
  selector: 'app-search-by-basic',
  templateUrl: './search-by-basic.component.html',
  styleUrls: ['./search-by-basic.component.scss']
})
export class SearchByBasicComponent implements OnInit {
  users: any;
  searchForm: FormGroup;
  loading = false;
  submitted = false;
  noDataPresent = false;
  constructor(private _userService: UserService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      gender: ['', Validators.required],
      ageTo: ['', Validators.required],
      ageFrom: ['', Validators.required]
    });
  }
  get f() { return this.searchForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.searchForm.invalid) {
      return;
    }

    this.loading = true;
    const postData = {
      'gender': this.f.gender.value,
      'ageFrom': this.f.ageFrom.value,
      'ageTo':this.f.ageTo.value
    };
    this._userService.getAll(postData).pipe(first()).subscribe(users => {
      this.users = users;
      console.log(users);
      this.loading = false;
    }, error => {
      this.noDataPresent = true;
      this.loading = false;
    });


  }
}
