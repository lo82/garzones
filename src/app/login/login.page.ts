import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../api/authentication.service';
import { TokenService } from '../api/token.service';
import { LoginUsuario } from '../class/LoginUsuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


    datosForm: FormGroup = new FormGroup({
       nombreUsuario: new FormControl(''),
       password: new FormControl('')
     });
     form: any = {};
     usuario!: LoginUsuario;
     isLogged = false;
     isLoginFail = false;
     roles: string[] = [];
     errorMsg = '';
     nombreUsuario: string ='';
     password: string ='';
     constructor(private authService: AuthenticationService, private tokenService: TokenService, private router: Router) { }

     ngOnInit() {
       if (this.tokenService.getToken()) {
         this.isLogged = true;
         this.isLoginFail = false;
         this.roles = this.tokenService.getAuthorities();
       }

     }


     onLogin(): void {

     console.log(this.nombreUsuario);
     }


     click(){
       this.usuario = new LoginUsuario(this.nombreUsuario, this.password);

       this.authService.login(this.usuario).subscribe(data => {
         this.tokenService.setToken(data.token);
         this.tokenService.setUserName(data.nombreUsuario);
         this.tokenService.setAuthorities(data.authorities);

         this.isLogged = true;
         this.isLoginFail = false;
         this.roles = this.tokenService.getAuthorities();

         this.router.navigate(['home']);

       },
         (err: any) => {
           this.isLogged = false;
           this.isLoginFail = true;
           this.errorMsg = err.error.message;
         }
       );



  }



  handleRefresh(event:any) {
     setTimeout(() => {
       // Any calls to load data go here
       event.target.complete();
     }, 2000);
   }
}
