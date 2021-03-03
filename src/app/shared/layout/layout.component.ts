import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  form: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.authService.verifyToken()
    .subscribe((data) => {
      if(data['msg']){
        this.router.navigate(['auth']);
      }
    })
  }


}
