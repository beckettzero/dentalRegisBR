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
/* harmony import */ var C_Users_UserAdminQro_Documents_DentalRegis_dentalRegisIonic_dentalRegisIonic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);

var _HomePage;








class HomePage {
  constructor(fb, router, http, loadingCtrl) {
    this.fb = fb;
    this.router = router;
    this.http = http;
    this.loadingCtrl = loadingCtrl;
    this.loginForm = this.fb.group({
      username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
    });
  }
  showLoading() {
    var _this = this;
    return (0,C_Users_UserAdminQro_Documents_DentalRegis_dentalRegisIonic_dentalRegisIonic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingCtrl.create({
        message: 'Comprobando...',
        duration: 3000
      });
      loading.present();
    })();
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
  return new (__ngFactoryType__ || _HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController));
};
_HomePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _HomePage,
  selectors: [["app-home"]],
  hostBindings: function HomePage_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousemove", function HomePage_mousemove_HostBindingHandler() {
        return ctx.onMouseMove();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("touchstart", function HomePage_touchstart_HostBindingHandler() {
        return ctx.onTouchStart();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("keydown", function HomePage_keydown_HostBindingHandler() {
        return ctx.onKeyDown();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("click", function HomePage_click_HostBindingHandler() {
        return ctx.onClick();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    }
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 15,
  vars: 3,
  consts: [[1, "ion-padding", 3, "fullscreen"], [1, "center-container"], ["src", "/assets/img/dental-logo.webp", "alt", "dentalink logo", 2, "width", "200px"], ["id", "login-container", 1, "ion-margin-top", "ion-padding"], [1, "ion-text-center"], [3, "ngSubmit", "formGroup"], [1, "ion-margin-bottom"], ["label", "Usuario", "label-placement", "floating", "fill", "solid", "formControlName", "username", "type", "text", "clear-input", ""], ["label", "Clave", "label-placement", "floating", "fill", "solid", "formControlName", "password", "type", "password", "clear-input", ""], ["expand", "block", "type", "submit", "color", "success", 2, "margin-top", "20px", 3, "click", "disabled"], ["expand", "block", "fill", "clear", "color", "light", "routerLink", "/register"]],
  template: function HomePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-content", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "ion-card", 4)(5, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function HomePage_Template_form_ngSubmit_5_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-item", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "ion-input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-item", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "ion-input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_10_listener() {
        return ctx.showLoading();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Ingresar ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div")(13, "ion-button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " \u00BFNo tienes cuenta? Reg\u00EDstrate ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.RouterLinkDelegate],
  styles: ["#container[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0%;\n  transform: translateY(-50%);\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: #A2B1B8; \n\n}\n\nion-card[_ngcontent-%COMP%] {\n  box-shadow: 0px 4px 12px rgba(255, 255, 255, 0.1); \n\n  border: 1px solid #e0e0e0; \n\n  border-radius: 15px; \n\n  padding: 20px; \n\n}\n\n.center-container[_ngcontent-%COMP%] {\n  display: flex; \n\n  justify-content: center; \n\n  align-items: center; \n\n  height: 100px; \n\n}\n\n#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n#login-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50%;\n}\n\nion-card[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 400px;\n}\n\nion-button[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.outlined-label[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 6px;\n  border: 2px solid var(--ion-color-primary);\n  border-radius: 4px;\n  font-weight: bold;\n  color: var(--ion-color-primary);\n  background-color: var(--ion-background-color);\n  transition: all 0.3s ease;\n}\n\nion-item.ion-focused[_ngcontent-%COMP%]   .outlined-label[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-primary-shade);\n  color: var(--ion-color-primary-shade);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UscUJBQUEsRUFBQSx3QkFBQTtBQUFGOztBQUdBO0VBQ0UsaURBQUEsRUFBQSxvQkFBQTtFQUNBLHlCQUFBLEVBQUEsbUJBQUE7RUFDQSxtQkFBQSxFQUFBLHVCQUFBO0VBQ0EsYUFBQSxFQUFBLGlDQUFBO0FBQUY7O0FBSUE7RUFDRSxhQUFBLEVBQUEsMkJBQUE7RUFDQSx1QkFBQSxFQUFBLHdCQUFBO0VBQ0EsbUJBQUEsRUFBQSxzQkFBQTtFQUNBLGFBQUEsRUFBQSw4REFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7QUFIRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUpGOztBQU9BO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSxnQkFBQTtBQUpGOztBQVFBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkNBQUE7RUFDQSx5QkFBQTtBQUxGOztBQVFBO0VBQ0UsNENBQUE7RUFDQSxxQ0FBQTtBQUxGIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjQTJCMUI4OyAvKiBFbCBjb2xvciBxdWUgZGVzZWVzICovXG59XG5cbmlvbi1jYXJkIHtcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTsgLyogR3Jvc29yIChzb21icmEpICovXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7IC8qIEJvcmRlIG9wY2lvbmFsICovXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7IC8qIEJvcmRlcyByZWRvbmRlYWRvcyAqL1xuICBwYWRkaW5nOiAyMHB4OyAvKiBFc3BhY2lhZG8gaW50ZXJubyAob3BjaW9uYWwpICovXG59XG5cblxuLmNlbnRlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4OyAgICAgICAgICAgICAgLyogQWN0aXZhIGVsIG1vZG8gZmxleGJveCAqL1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgICAgIC8qIENlbnRyYWRvIGhvcml6b250YWwgKi9cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgICAgICAvKiBDZW50cmFkbyB2ZXJ0aWNhbCAqL1xuICBoZWlnaHQ6IDEwMHB4OyAgICAgICAgICAgICAgIC8qIEhhY2UgcXVlIGVsIGNvbnRlbmVkb3Igb2N1cGUgdG9kYSBsYSBhbHR1cmEgZGUgbGEgdmVudGFuYSAqL1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cblxuI2xvZ2luLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDUwJTtcbn1cblxuaW9uLWNhcmQge1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuXG4ub3V0bGluZWQtbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDJweCA2cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG5pb24taXRlbS5pb24tZm9jdXNlZCAub3V0bGluZWQtbGFiZWwge1xuICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_page_ts.js.map