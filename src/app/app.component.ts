import { timeout } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'teste-token';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    /*this.authService.authentication().pipe(timeout(10000))
      .subscribe((auth: any) => {
        console.log(`TOKEN ENCONTRADO -> ${auth.token}`);
        this.authService.setToken(auth.token);
        this.authService.getUser().subscribe((user: any) => {
          alert(`USER -> ${user.name}`);
      });
    });*/
  }

  submit(): void {
    this.authService.get401Test().subscribe(() => {
        console.log(`EXECUTOU 401`);
    });
  }

  submit2(): void {
    this.authService.getUser().subscribe(() => {
        console.log(`EXECUTOU 401`);
    });
  }

}
