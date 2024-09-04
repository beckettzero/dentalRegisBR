"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_menu1_menu1_component_ts"],{

/***/ 8404:
/*!******************************************!*\
  !*** ./src/app/menu1/menu1.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Menu1Component: () => (/* binding */ Menu1Component)
/* harmony export */ });
/* harmony import */ var C_Users_UserAdminQro_Documents_DentalRegis_dentalRegisIonic_dentalRegisIonic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);

var _Menu1Component;






class Menu1Component {
  constructor(router, alertCtrl) {
    this.router = router;
    this.alertCtrl = alertCtrl;
    this.conditionsWithColors = [{
      condition: 'Caries',
      color: '#FF0000'
    }, {
      condition: 'Diente Obturado',
      color: '#00FF00'
    }, {
      condition: 'Ausente',
      color: '#0000FF'
    }, {
      condition: 'Fractura',
      color: '#FFFF00'
    }, {
      condition: 'Resina',
      color: '#FF00FF'
    }, {
      condition: 'Amalgama',
      color: '#00FFFF'
    }, {
      condition: 'Erosion',
      color: '#000000'
    }, {
      condition: 'Obturación',
      color: '#FFFFFF'
    }, {
      condition: 'Sellante',
      color: '#FF0000'
    }, {
      condition: 'Enfermedad Periodontal',
      color: '#00FF00'
    }, {
      condition: 'Mal posición dentaria',
      color: '#0000FF'
    }, {
      condition: 'Exodoncia',
      color: '#FFFF00'
    }, {
      condition: 'Corona',
      color: '#FF00FF'
    }, {
      condition: 'Prótesis',
      color: '#00FFFF'
    }, {
      condition: 'Mancha Blanca',
      color: '#000000'
    }, {
      condition: 'Otro',
      color: '#FFFFFF'
    }];
    // Mapa para almacenar los colores seleccionados por sección
    this.colors = {
      section1: '#FFFFFF',
      section2: '#FFFFFF',
      section3: '#FFFFFF',
      section4: '#FFFFFF',
      center: '#FFFFFF'
    };
    // Mapa para almacenar las selecciones de colores
    this.selectedColors = {};
  }
  // Método para seleccionar un color para una sección
  selectColor(section) {
    var _this = this;
    return (0,C_Users_UserAdminQro_Documents_DentalRegis_dentalRegisIonic_dentalRegisIonic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertCtrl.create({
        header: 'Select Condition',
        inputs: _this.conditionsWithColors.map(item => ({
          name: item.condition,
          type: 'radio',
          label: item.condition,
          value: item.color,
          // Envía el color correspondiente
          checked: _this.colors[section] === item.color // Marca el color actual si está asignado
        })),
        buttons: [{
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'OK',
          handler: selectedColor => {
            _this.colors[section] = selectedColor; // Actualiza el color de la sección
          }
        }]
      });
      yield alert.present();
    })();
  }
  ngOnInit() {
    this.checkAuthentication();
  }
  ionViewWillEnter() {
    this.checkAuthentication();
  }
  checkAuthentication() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      this.router.navigate(['/']); // Redirige al login si no está autenticado
    }
  }
  goToRegistrarPacientes() {
    this.router.navigate(['/registrar-pacientes']);
  }
  goToAdministrarPacientes() {
    this.router.navigate(['/administrar-pacientes']);
  }
}
_Menu1Component = Menu1Component;
_Menu1Component.ɵfac = function Menu1Component_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Menu1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController));
};
_Menu1Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _Menu1Component,
  selectors: [["app-menu1"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 77,
  vars: 7,
  consts: [[3, "translucent"], [1, "ion-text-center"], [1, "ion-padding", 3, "fullscreen"], ["collapse", "condense"], ["size", "large", 1, "ion-text-center"], [1, "ion-text-center", "ion-margin-top"], ["expand", "block", "color", "primary", 3, "click"], ["expand", "block", "color", "secondary", 3, "click"], ["width", "300", "height", "300", "viewBox", "0 0 300 300", "xmlns", "http://www.w3.org/2000/svg"], ["width", "300", "height", "300"], ["points", "0,0 150,150 0,300", "stroke", "#000000", 3, "click"], ["points", "300,0 150,150 0,0", "stroke", "#000000", 3, "click"], ["points", "300,0 150,150 300,300", "stroke", "#000000", 3, "click"], ["points", "0,300 150,150 300,300", "stroke", "#000000", 3, "click"], ["cx", "150", "cy", "150", "rx", "75", "ry", "50", "stroke", "#000000", 3, "click"], ["size", "auto"], ["color", "danger"], ["color", "primary"], ["color", "secondary"], ["color", "tertiary"], ["color", "warning"], ["color", "success"], ["color", "medium"], ["color", "dark"], ["color", "light"]],
  template: function Menu1Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Men\u00FA Principal");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-content", 2)(5, "ion-header", 3)(6, "ion-toolbar")(7, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Men\u00FA Principal");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5)(10, "ion-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Menu1Component_Template_ion_button_click_10_listener() {
        return ctx.goToRegistrarPacientes();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Registrar Paciente ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Menu1Component_Template_ion_button_click_12_listener() {
        return ctx.goToAdministrarPacientes();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Administrar Pacientes ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-header")(15, "ion-toolbar")(16, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Color Selector");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "svg", 8)(20, "svg", 9)(21, "polygon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Menu1Component_Template_polygon_click_21_listener() {
        return ctx.selectColor("section1");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "polygon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Menu1Component_Template_polygon_click_22_listener() {
        return ctx.selectColor("section2");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "polygon", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Menu1Component_Template_polygon_click_23_listener() {
        return ctx.selectColor("section3");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "polygon", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Menu1Component_Template_polygon_click_24_listener() {
        return ctx.selectColor("section4");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ellipse", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Menu1Component_Template_ellipse_click_25_listener() {
        return ctx.selectColor("center");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-grid")(27, "ion-row")(28, "ion-col", 15)(29, "ion-button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Caries");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-col", 15)(32, "ion-button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "1 Diente Obturado");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-col", 15)(35, "ion-button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "2 Ausente");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-col", 15)(38, "ion-button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "3 Fractura");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ion-col", 15)(41, "ion-button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "4 Resina");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ion-col", 15)(44, "ion-button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "5 Amalgama");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "ion-col", 15)(47, "ion-button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "6 Erosi\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "ion-col", 15)(50, "ion-button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "7 Obturaci\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "ion-row")(53, "ion-col", 15)(54, "ion-button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "8 Sellante");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "ion-col", 15)(57, "ion-button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "9 Enfermedad Periodontal");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "ion-col", 15)(60, "ion-button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "10 Mal posici\u00F3n dentaria");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "ion-col", 15)(63, "ion-button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "11 Exodoncia");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "ion-col", 15)(66, "ion-button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "12 Corona");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "ion-col", 15)(69, "ion-button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "13 Pr\u00F3tesis");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "ion-col", 15)(72, "ion-button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "14 Mancha Blanca");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "ion-col", 15)(75, "ion-button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "15 Otro");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("fill", ctx.colors["section1"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("fill", ctx.colors["section2"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("fill", ctx.colors["section3"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("fill", ctx.colors["section4"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("fill", ctx.colors["center"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar],
  styles: [".outlined-label[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 6px;\n  border: 2px solid var(--ion-color-primary);\n  border-radius: 4px;\n  font-weight: bold;\n  color: var(--ion-color-primary);\n  background-color: var(--ion-background-color);\n  transition: all 0.3s ease;\n}\n\nion-item.ion-focused[_ngcontent-%COMP%]   .outlined-label[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-primary-shade);\n  color: var(--ion-color-primary-shade);\n}\n\n\n\n.custom-banner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 20px;\n}\n\n.accordion-content[_ngcontent-%COMP%] {\n  padding: 15px;\n  background-color: #f2f2f2;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWVudTEvbWVudTEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2Q0FBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUU7RUFDRSw0Q0FBQTtFQUNBLHFDQUFBO0FBQ0o7O0FBRUUsMkJBQUE7QUFDRjtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLm91dGxpbmVkLWxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDJweCA2cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIH1cclxuICBcclxuICBpb24taXRlbS5pb24tZm9jdXNlZCAub3V0bGluZWQtbGFiZWwge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSk7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUpO1xyXG4gIH1cclxuICBcclxuICAvKiBFc3RpbG9zIHBlcnNvbmFsaXphZG9zICovXHJcbi5jdXN0b20tYmFubmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmFjY29yZGlvbi1jb250ZW50IHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_menu1_menu1_component_ts.js.map