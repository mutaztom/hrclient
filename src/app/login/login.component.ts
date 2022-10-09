import { Input, Component, Output, EventEmitter,OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private router: Router,private route:ActivatedRoute ) {}
  ngOnInit(): void {
  }
  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
      this.router.navigate(['servicecenter']);

    }
  }
  @Input()
  error!: string | null;

  @Output() submitEM = new EventEmitter();
}
