"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_page_ts"],{

/***/ 1624:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePage: () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);
var _HomePage;








class HomePage {
  constructor(fb, router, http) {
    this.fb = fb;
    this.router = router;
    this.http = http;
    this.loginForm = this.fb.group({
      username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]
    });
  }
  ngOnInit() {
    this.resetInactivityTimer();
    this.setupInactivityListeners();
  }
  // Manejadores para diferentes eventos de interacción
  onMouseMove() {
    this.resetInactivityTimer();
  }
  onTouchStart() {
    this.resetInactivityTimer();
  }
  onKeyDown() {
    this.resetInactivityTimer();
  }
  onClick() {
    this.resetInactivityTimer();
  }
  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username').value;
      const password = this.loginForm.get('password').value;
      this.http.post('https://www.dentalregisbr.000.pe/loginDB.php', {
        username,
        password
      }).subscribe(response => {
        if (response.status === 'success') {
          // Aquí asumo que `response.usuario_id` es el ID del usuario que viene desde el backend.
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('usuario_id', response.usuario_id); // Guarda el usuario_id en localStorage
          this.router.navigate(['/menu1']);
          this.resetInactivityTimer();
        } else {
          alert('Invalid credentials');
        }
      });
    }
  }
  resetInactivityTimer() {
    if (this.inactivityTimer) {
      clearTimeout(this.inactivityTimer);
    }
    this.inactivityTimer = setTimeout(() => {
      this.logout();
    }, 60000); // 10 segundos
  }
  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/']);
    alert('Session expired due to inactivity.');
  }
  setupInactivityListeners() {
    // Se asegura de que se reinicie el timer para cualquier interacción
    this.onMouseMove();
    this.onTouchStart();
    this.onKeyDown();
    this.onClick();
  }
}
_HomePage = HomePage;
_HomePage.ɵfac = function HomePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
_HomePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _HomePage,
  selectors: [["app-home"]],
  hostBindings: function HomePage_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousemove", function HomePage_mousemove_HostBindingHandler() {
        return ctx.onMouseMove();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"])("touchstart", function HomePage_touchstart_HostBindingHandler() {
        return ctx.onTouchStart();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"])("keydown", function HomePage_keydown_HostBindingHandler() {
        return ctx.onKeyDown();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"])("click", function HomePage_click_HostBindingHandler() {
        return ctx.onClick();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    }
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 31,
  vars: 4,
  consts: [[3, "translucent"], [1, "ion-text-center"], [1, "ion-padding", 3, "fullscreen"], ["collapse", "condense"], ["size", "large", 1, "ion-text-center"], ["id", "login-container", 1, "ion-margin-top", "ion-padding"], [1, "ion-text-uppercase"], [3, "ngSubmit", "formGroup"], ["lines", "none", 1, "ion-margin-bottom"], ["formControlName", "username", "type", "text", "clear-input", "", 1, "outlined-label"], ["formControlName", "password", "type", "password", "clear-input", "", 1, "outlined-label"], ["expand", "block", "type", "submit", "color", "primary", 3, "disabled"], ["expand", "block", "fill", "clear", "color", "secondary", "routerLink", "/register"]],
  template: function HomePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Inicio de Sesi\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-content", 2)(5, "ion-header", 3)(6, "ion-toolbar")(7, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Inicio de Sesi\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5)(10, "ion-card", 1)(11, "ion-card-header")(12, "ion-card-title", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Bienvenido");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Accede a tu cuenta");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-card-content")(17, "form", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function HomePage_Template_form_ngSubmit_17_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Nombre de usuario");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-item", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "ion-input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Contrase\u00F1a");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-item", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "ion-input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Iniciar Sesi\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div")(29, "ion-button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\u00BFNo tienes cuenta? Reg\u00EDstrate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.RouterLinkDelegate],
  styles: ["#container[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n#login-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\nion-card[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 400px;\n}\n\nion-button[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.outlined-label[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 6px;\n  border: 2px solid var(--ion-color-primary);\n  border-radius: 4px;\n  font-weight: bold;\n  color: var(--ion-color-primary);\n  background-color: var(--ion-background-color);\n  transition: all 0.3s ease;\n}\n\nion-item.ion-focused[_ngcontent-%COMP%]   .outlined-label[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-primary-shade);\n  color: var(--ion-color-primary-shade);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7QUFGRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUhGOztBQU1BO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtBQUhGOztBQU9BO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkNBQUE7RUFDQSx5QkFBQTtBQUpGOztBQU9BO0VBQ0UsNENBQUE7RUFDQSxxQ0FBQTtBQUpGIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cblxuI2xvZ2luLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1jYXJkIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cblxuLm91dGxpbmVkLWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAycHggNnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuaW9uLWl0ZW0uaW9uLWZvY3VzZWQgLm91dGxpbmVkLWxhYmVsIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_page_ts.js.map