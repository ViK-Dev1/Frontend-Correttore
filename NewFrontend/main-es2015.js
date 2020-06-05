(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app-navbar.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-navbar.html ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"MainContainer\">\r\n  <header *ngIf=\"role\" [style.background-image]=\"colGrad[role-1]\">\r\n    <div class=\"navbar\">\r\n      <div href=\"#\" class=\"logo\" routerLink=\"/\" (click)=\"updateSession()\"></div>\r\n      <!--<div class=\"hamburger\">\r\n        <div class=\"line\"></div>\r\n        <div class=\"line\"></div>\r\n        <div class=\"line\"></div>\r\n        <div class=\"line\"></div>\r\n      </div> -->\r\n      <div class=\"nav-links\">\r\n        <ul>\r\n          <li>\r\n            <a\r\n              href=\"#\"\r\n              routerLink=\"/\"\r\n              (click)=\"updateSession()\"\r\n              [style.color]=\"colore\"\r\n              >Homepage</a\r\n            >\r\n          </li>\r\n          <li *ngIf=\"role === 4\">\r\n            <a href=\"#\" routerLink=\"/docenti\">Docenti</a>\r\n          </li>\r\n          <li *ngIf=\"role === 3\">\r\n            <a href=\"#\" routerLink=\"/studenti\">Studenti</a>\r\n          </li>\r\n          <li *ngIf=\"role === 3 || role === 4\">\r\n            <a href=\"#\" routerLink=\"/gruppi\">Gruppi</a>\r\n          </li>\r\n          <li *ngIf=\"role === 3 || role === 2\">\r\n            <!--  || role === 2 -->\r\n            <a href=\"#\" routerLink=\"/verifiche\">Verifiche</a>\r\n          </li>\r\n          <!--<li *ngIf=\"role === 3 || role === 4\">\r\n            <a href=\"#\" routerLink=\"/sleep\">Problemi</a>\r\n          </li> -->\r\n          <li>\r\n            <a href=\"#\" routerLink=\"/esercizi\">Esercizi</a>\r\n          </li>\r\n          <li><a href=\"#\" routerLink=\"/about\">About</a></li>\r\n          <li *ngIf=\"role === 2 || role === 3 || role === 4\">\r\n            <div (click)=\"doLogout()\" class=\"outICON\">\r\n              <!-- routerLink=\"/sleep\" (mouseenter)=\"isWRound = !isWRound\"\r\n              [style.background-color]=\"wRound()\" -->\r\n              <svg\r\n                height=\"512pt\"\r\n                viewBox=\"0 0 512.016 512\"\r\n                width=\"512pt\"\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n              >\r\n                <path\r\n                  d=\"m496 240.007812h-202.667969c-8.832031 0-16-7.167968-16-16 0-8.832031 7.167969-16 16-16h202.667969c8.832031 0 16 7.167969 16 16 0 8.832032-7.167969 16-16 16zm0 0\"\r\n                />\r\n                <path\r\n                  d=\"m416 320.007812c-4.097656 0-8.191406-1.558593-11.308594-4.691406-6.25-6.253906-6.25-16.386718 0-22.636718l68.695313-68.691407-68.695313-68.695312c-6.25-6.25-6.25-16.382813 0-22.632813 6.253906-6.253906 16.386719-6.253906 22.636719 0l80 80c6.25 6.25 6.25 16.382813 0 22.632813l-80 80c-3.136719 3.15625-7.230469 4.714843-11.328125 4.714843zm0 0\"\r\n                />\r\n                <path\r\n                  d=\"m170.667969 512.007812c-4.566407 0-8.898438-.640624-13.226563-1.984374l-128.386718-42.773438c-17.46875-6.101562-29.054688-22.378906-29.054688-40.574219v-384c0-23.53125 19.136719-42.6679685 42.667969-42.6679685 4.5625 0 8.894531.6406255 13.226562 1.9843755l128.382813 42.773437c17.472656 6.101563 29.054687 22.378906 29.054687 40.574219v384c0 23.53125-19.132812 42.667968-42.664062 42.667968zm-128-480c-5.867188 0-10.667969 4.800782-10.667969 10.667969v384c0 4.542969 3.050781 8.765625 7.402344 10.28125l127.785156 42.582031c.917969.296876 2.113281.46875 3.480469.46875 5.867187 0 10.664062-4.800781 10.664062-10.667968v-384c0-4.542969-3.050781-8.765625-7.402343-10.28125l-127.785157-42.582032c-.917969-.296874-2.113281-.46875-3.476562-.46875zm0 0\"\r\n                />\r\n                <path\r\n                  d=\"m325.332031 170.675781c-8.832031 0-16-7.167969-16-16v-96c0-14.699219-11.964843-26.667969-26.664062-26.667969h-240c-8.832031 0-16-7.167968-16-16 0-8.832031 7.167969-15.9999995 16-15.9999995h240c32.363281 0 58.664062 26.3046875 58.664062 58.6679685v96c0 8.832031-7.167969 16-16 16zm0 0\"\r\n                />\r\n                <path\r\n                  d=\"m282.667969 448.007812h-85.335938c-8.832031 0-16-7.167968-16-16 0-8.832031 7.167969-16 16-16h85.335938c14.699219 0 26.664062-11.96875 26.664062-26.667968v-96c0-8.832032 7.167969-16 16-16s16 7.167968 16 16v96c0 32.363281-26.300781 58.667968-58.664062 58.667968zm0 0\"\r\n                />\r\n              </svg>\r\n            </div>\r\n          </li>\r\n          <li *ngIf=\"role === 1\">\r\n            <div routerLink=\"/login\" class=\"loginICON\">\r\n              <svg\r\n                version=\"1.1\"\r\n                id=\"Capa_1\"\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n                xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                x=\"0px\"\r\n                y=\"0px\"\r\n                viewBox=\"0 0 512 512\"\r\n                style=\"enable-background: new 0 0 512 512;\"\r\n                xml:space=\"preserve\"\r\n              >\r\n                <g>\r\n                  <g>\r\n                    <path\r\n                      d=\"M131.5,472H60.693c-8.538,0-13.689-4.765-15.999-7.606c-3.988-4.906-5.533-11.29-4.236-17.519\r\n\t\t\t\tc20.769-99.761,108.809-172.616,210.445-174.98c1.693,0.063,3.39,0.105,5.097,0.105c1.722,0,3.434-0.043,5.142-0.107\r\n\t\t\t\tc24.853,0.567,49.129,5.24,72.236,13.917c10.34,3.885,21.871-1.352,25.754-11.693c3.883-10.34-1.352-21.871-11.693-25.754\r\n\t\t\t\tc-3.311-1.244-6.645-2.408-9.995-3.512C370.545,220.021,392,180.469,392,136C392,61.01,330.991,0,256,0\r\n\t\t\t\tc-74.991,0-136,61.01-136,136c0,44.509,21.492,84.092,54.643,108.918c-30.371,9.998-58.871,25.546-83.813,46.062\r\n\t\t\t\tc-45.732,37.617-77.529,90.086-89.532,147.743c-3.762,18.066,0.744,36.622,12.363,50.908C25.221,503.847,42.364,512,60.693,512\r\n\t\t\t\tH131.5c11.046,0,20-8.954,20-20C151.5,480.954,142.546,472,131.5,472z M160,136c0-52.935,43.065-96,96-96s96,43.065,96,96\r\n\t\t\t\tc0,51.367-40.554,93.438-91.326,95.885c-1.557-0.028-3.114-0.052-4.674-0.052c-1.564,0-3.127,0.023-4.689,0.051\r\n\t\t\t\tC200.546,229.43,160,187.362,160,136z\"\r\n                    />\r\n                    <path\r\n                      d=\"M496.689,344.607c-8.561-19.15-27.845-31.558-49.176-31.607h-62.372c-0.045,0-0.087,0-0.133,0\r\n\t\t\t\tc-22.5,0-42.13,13.26-50.029,33.807c-1.051,2.734-2.336,6.178-3.677,10.193H200.356c-5.407,0-10.583,2.189-14.35,6.068\r\n\t\t\t\tl-34.356,35.388c-7.567,7.794-7.529,20.203,0.085,27.95l35,35.612c3.76,3.826,8.9,5.981,14.264,5.981h65c11.046,0,20-8.954,20-20\r\n\t\t\t\tc0-11.046-8.954-20-20-20h-56.614l-15.428-15.698L208.814,397h137.491c9.214,0,17.235-6.295,19.426-15.244\r\n\t\t\t\tc1.618-6.607,3.648-12.959,6.584-20.596c1.936-5.036,6.798-8.16,12.741-8.16c0.013,0,0.026,0,0.039,0h62.371\r\n\t\t\t\tc5.656,0.013,10.524,3.053,12.705,7.932c5.369,12.012,11.78,30.608,11.828,50.986c0.048,20.529-6.356,39.551-11.739,51.894\r\n\t\t\t\tc-2.17,4.978-7.079,8.188-12.56,8.188c-0.011,0-0.022,0-0.033,0h-63.125c-5.533-0.013-10.716-3.573-12.896-8.858\r\n\t\t\t\tc-2.339-5.671-4.366-12.146-6.197-19.797c-2.571-10.742-13.367-17.366-24.105-14.796c-10.743,2.571-17.367,13.364-14.796,24.106\r\n\t\t\t\tc2.321,9.699,4.978,18.118,8.121,25.738c8.399,20.364,27.939,33.555,49.827,33.606h63.125c0.043,0,0.083,0,0.126,0\r\n\t\t\t\tc21.351-0.001,40.647-12.63,49.18-32.201c6.912-15.851,15.137-40.511,15.072-67.975\r\n\t\t\t\tC511.935,384.434,503.638,360.153,496.689,344.607z\"\r\n                    />\r\n                    <circle cx=\"431\" cy=\"412\" r=\"20\" />\r\n                  </g>\r\n                </g>\r\n              </svg>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </header>\r\n\r\n  <div class=\"dynamicDiv\" [style.background-image]=\"colGrad[role-1]\">\r\n    <!-- [style.background-image]=\"colGrad[role-1]\" -->\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dynamicPages/docenti/docenti.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dynamicPages/docenti/docenti.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-body\">\n  <div class=\"main-div\">\n    <div class=\"title\">\n      <div *ngIf=\"this.pag != 1\" class=\"back\" (click)=\"pagElenco()\"></div>\n      <h1>{{ title }}</h1>\n    </div>\n    <h2 *ngIf=\"docenti.length <= 0\" class=\"err\">\n      Docenti non trovati\n    </h2>\n    <div class=\"table1\" *ngIf=\"this.pag === 1\">\n      <div class=\"card addCard\" (click)=\"pagCrea()\">\n        <div class=\"layer\">\n          <div class=\"addlogo\"></div>\n          <h4>Add Docente</h4>\n        </div>\n      </div>\n      <div\n        class=\"card\"\n        *ngFor=\"let doc of docenti\"\n        (click)=\"pagModifica(doc.id, doc.name, doc.surname, doc.username)\"\n      >\n        <div class=\"doclogo\"></div>\n        <h3>{{ doc.surname }}</h3>\n      </div>\n    </div>\n\n    <form *ngIf=\"this.pag > 1\">\n      <div class=\"form1\">\n        <div class=\"fields\">\n          <h2>Nome :</h2>\n          <input\n            type=\"text\"\n            name=\"nome\"\n            [(ngModel)]=\"nome\"\n            placeholder=\"Nome\"\n            autocomplete=\"off\"\n          />\n        </div>\n        <div class=\"fields\">\n          <h2>Cognome :</h2>\n          <input\n            type=\"text\"\n            name=\"cognome\"\n            [(ngModel)]=\"cognome\"\n            placeholder=\"Cognome\"\n            autocomplete=\"off\"\n          />\n        </div>\n        <div class=\"fields\">\n          <h2>Username :</h2>\n          <input\n            type=\"text\"\n            name=\"usr\"\n            [(ngModel)]=\"usr\"\n            placeholder=\"Username\"\n            autocomplete=\"off\"\n            [readonly]=\"this.pag === 3\"\n          />\n        </div>\n        <div class=\"fields\">\n          <h2>Password :</h2>\n          <input\n            class=\"psw\"\n            [type]=\"this.vis1 ? 'text' : 'password'\"\n            name=\"psw\"\n            [(ngModel)]=\"psw\"\n            placeholder=\"Password\"\n            autocomplete=\"off\"\n          />\n          <div class=\"vis\" *ngIf=\"!vis1\" (mousedown)=\"changeVis('1')\">\n            <svg\n              version=\"1.1\"\n              id=\"Capa_1\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n              xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n              x=\"0px\"\n              y=\"0px\"\n              viewBox=\"0 0 511.992 511.992\"\n              style=\"enable-background:new 0 0 511.992 511.992;\"\n              xml:space=\"preserve\"\n            >\n              <g>\n                <g>\n                  <path\n                    d=\"M510.096,249.937c-4.032-5.867-100.928-143.275-254.101-143.275C124.56,106.662,7.44,243.281,2.512,249.105\n          c-3.349,3.968-3.349,9.792,0,13.781C7.44,268.71,124.56,405.329,255.995,405.329S504.549,268.71,509.477,262.886\n          C512.571,259.217,512.848,253.905,510.096,249.937z M255.995,383.996c-105.365,0-205.547-100.48-230.997-128\n          c25.408-27.541,125.483-128,230.997-128c123.285,0,210.304,100.331,231.552,127.424\n          C463.013,282.065,362.256,383.996,255.995,383.996z\"\n                  />\n                </g>\n              </g>\n              <g>\n                <g>\n                  <path\n                    d=\"M255.995,170.662c-47.061,0-85.333,38.272-85.333,85.333s38.272,85.333,85.333,85.333s85.333-38.272,85.333-85.333\n          S303.056,170.662,255.995,170.662z M255.995,319.996c-35.285,0-64-28.715-64-64s28.715-64,64-64s64,28.715,64,64\n          S291.28,319.996,255.995,319.996z\"\n                  />\n                </g>\n              </g>\n            </svg>\n          </div>\n          <div class=\"Nvis\" *ngIf=\"vis1\" (mouseup)=\"changeVis('1')\">\n            <svg\n              version=\"1.1\"\n              id=\"Capa_1\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n              xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n              x=\"0px\"\n              y=\"0px\"\n              viewBox=\"0 0 488.85 488.85\"\n              style=\"enable-background:new 0 0 488.85 488.85;\"\n              xml:space=\"preserve\"\n            >\n              <g>\n                <path\n                  d=\"M244.425,98.725c-93.4,0-178.1,51.1-240.6,134.1c-5.1,6.8-5.1,16.3,0,23.1c62.5,83.1,147.2,134.2,240.6,134.2\n\t\ts178.1-51.1,240.6-134.1c5.1-6.8,5.1-16.3,0-23.1C422.525,149.825,337.825,98.725,244.425,98.725z M251.125,347.025\n\t\tc-62,3.9-113.2-47.2-109.3-109.3c3.2-51.2,44.7-92.7,95.9-95.9c62-3.9,113.2,47.2,109.3,109.3\n\t\tC343.725,302.225,302.225,343.725,251.125,347.025z M248.025,299.625c-33.4,2.1-61-25.4-58.8-58.8c1.7-27.6,24.1-49.9,51.7-51.7\n\t\tc33.4-2.1,61,25.4,58.8,58.8C297.925,275.625,275.525,297.925,248.025,299.625z\"\n                />\n              </g>\n            </svg>\n          </div>\n        </div>\n        <div class=\"fields\">\n          <h2>Reinserisci Password :</h2>\n          <input\n            class=\"psw\"\n            [type]=\"this.vis2 ? 'text' : 'password'\"\n            name=\"psw1\"\n            [(ngModel)]=\"psw1\"\n            placeholder=\"Reinserisci Password\"\n            autocomplete=\"off\"\n          />\n          <div class=\"vis\" *ngIf=\"!vis2\" (mousedown)=\"changeVis('2')\">\n            <svg\n              version=\"1.1\"\n              id=\"Capa_1\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n              xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n              x=\"0px\"\n              y=\"0px\"\n              viewBox=\"0 0 511.992 511.992\"\n              style=\"enable-background:new 0 0 511.992 511.992;\"\n              xml:space=\"preserve\"\n            >\n              <g>\n                <g>\n                  <path\n                    d=\"M510.096,249.937c-4.032-5.867-100.928-143.275-254.101-143.275C124.56,106.662,7.44,243.281,2.512,249.105\n          c-3.349,3.968-3.349,9.792,0,13.781C7.44,268.71,124.56,405.329,255.995,405.329S504.549,268.71,509.477,262.886\n          C512.571,259.217,512.848,253.905,510.096,249.937z M255.995,383.996c-105.365,0-205.547-100.48-230.997-128\n          c25.408-27.541,125.483-128,230.997-128c123.285,0,210.304,100.331,231.552,127.424\n          C463.013,282.065,362.256,383.996,255.995,383.996z\"\n                  />\n                </g>\n              </g>\n              <g>\n                <g>\n                  <path\n                    d=\"M255.995,170.662c-47.061,0-85.333,38.272-85.333,85.333s38.272,85.333,85.333,85.333s85.333-38.272,85.333-85.333\n          S303.056,170.662,255.995,170.662z M255.995,319.996c-35.285,0-64-28.715-64-64s28.715-64,64-64s64,28.715,64,64\n          S291.28,319.996,255.995,319.996z\"\n                  />\n                </g>\n              </g>\n            </svg>\n          </div>\n          <div class=\"Nvis\" *ngIf=\"vis2\" (mouseup)=\"changeVis('2')\">\n            <svg\n              version=\"1.1\"\n              id=\"Capa_1\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n              xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n              x=\"0px\"\n              y=\"0px\"\n              viewBox=\"0 0 488.85 488.85\"\n              style=\"enable-background:new 0 0 488.85 488.85;\"\n              xml:space=\"preserve\"\n            >\n              <g>\n                <path\n                  d=\"M244.425,98.725c-93.4,0-178.1,51.1-240.6,134.1c-5.1,6.8-5.1,16.3,0,23.1c62.5,83.1,147.2,134.2,240.6,134.2\n\t\ts178.1-51.1,240.6-134.1c5.1-6.8,5.1-16.3,0-23.1C422.525,149.825,337.825,98.725,244.425,98.725z M251.125,347.025\n\t\tc-62,3.9-113.2-47.2-109.3-109.3c3.2-51.2,44.7-92.7,95.9-95.9c62-3.9,113.2,47.2,109.3,109.3\n\t\tC343.725,302.225,302.225,343.725,251.125,347.025z M248.025,299.625c-33.4,2.1-61-25.4-58.8-58.8c1.7-27.6,24.1-49.9,51.7-51.7\n\t\tc33.4-2.1,61,25.4,58.8,58.8C297.925,275.625,275.525,297.925,248.025,299.625z\"\n                />\n              </g>\n            </svg>\n          </div>\n        </div>\n        <div class=\"fields\">\n          <input\n            *ngIf=\"this.pag === 2\"\n            class=\"submitBTN\"\n            type=\"submit\"\n            value=\"Crea\"\n            (click)=\"crea()\"\n          />\n          <input\n            *ngIf=\"this.pag === 3\"\n            class=\"submitBTN\"\n            type=\"submit\"\n            value=\"Modifica\"\n            (click)=\"modifica()\"\n          />\n        </div>\n        <div class=\"fields ddelete\" *ngIf=\"this.pag === 3\">\n          <h2>Vuoi eliminare questo studente ?</h2>\n          <button class=\"submitBTN del\" (click)=\"elimina()\">\n            Elimina\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dynamicPages/exercises/exercises.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dynamicPages/exercises/exercises.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-body\">\n  <div class=\"main-div\">\n    <div class=\"title\">\n      <div\n        *ngIf=\"this.pag != 1\"\n        class=\"back\"\n        (click)=\"\n          this.globvar.userRole === 3 ? pagElenco(false) : pagElenco(true)\n        \"\n      ></div>\n      <h1>{{ title }}</h1>\n      <div\n        class=\"iconss\"\n        *ngIf=\"(this.pag === 2 || this.pag === 4) && this.globvar.userRole < 3\"\n      >\n        <div\n          [ngClass]=\"\n            this.pag === 2 && this.globvar.userRole < 3 ? 'activeBTN' : ''\n          \"\n          (click)=\"pagPdf()\"\n        >\n          <svg\n            class=\"logoo1\"\n            version=\"1.1\"\n            id=\"Layer_1\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n            xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n            x=\"0px\"\n            y=\"0px\"\n            viewBox=\"0 0 512 512\"\n            style=\"enable-background: new 0 0 512 512;\"\n            xml:space=\"preserve\"\n          >\n            <g>\n              <g>\n                <path\n                  d=\"M494.479,138.557L364.04,3.018C362.183,1.09,359.621,0,356.945,0h-194.41c-21.757,0-39.458,17.694-39.458,39.442v137.789 H44.29c-16.278,0-29.521,13.239-29.521,29.513v147.744C14.769,370.761,28.012,384,44.29,384h78.787v88.627 c0,21.71,17.701,39.373,39.458,39.373h295.238c21.757,0,39.458-17.653,39.458-39.351V145.385 C497.231,142.839,496.244,140.392,494.479,138.557z M359.385,26.581l107.079,111.265H359.385V26.581z M44.29,364.308 c-5.42,0-9.828-4.405-9.828-9.82V206.744c0-5.415,4.409-9.821,9.828-9.821h265.882c5.42,0,9.828,4.406,9.828,9.821v147.744 c0,5.415-4.409,9.82-9.828,9.82H44.29z M477.538,472.649c0,10.84-8.867,19.659-19.766,19.659H162.535 c-10.899,0-19.766-8.828-19.766-19.68V384h167.403c16.278,0,29.521-13.239,29.521-29.512V206.744 c0-16.274-13.243-29.513-29.521-29.513H142.769V39.442c0-10.891,8.867-19.75,19.766-19.75h177.157v128 c0,5.438,4.409,9.846,9.846,9.846h128V472.649z\"\n                />\n              </g>\n            </g>\n            <g>\n              <g>\n                <path\n                  d=\"M132.481,249.894c-3.269-4.25-7.327-7.01-12.173-8.279c-3.154-0.846-9.923-1.269-20.308-1.269H72.596v84.577h17.077 v-31.904h11.135c7.731,0,13.635-0.404,17.712-1.212c3-0.654,5.952-1.99,8.856-4.01c2.904-2.019,5.298-4.798,7.183-8.336 c1.885-3.538,2.827-7.904,2.827-13.096C137.385,259.634,135.75,254.144,132.481,249.894z M117.856,273.173 c-1.288,1.885-3.067,3.269-5.337,4.154s-6.769,1.327-13.5,1.327h-9.346v-24h8.25c6.154,0,10.25,0.192,12.288,0.577 c2.769,0.5,5.058,1.75,6.865,3.75c1.808,2,2.712,4.539,2.712,7.615C119.789,269.096,119.144,271.288,117.856,273.173z\"\n                />\n              </g>\n            </g>\n            <g>\n              <g>\n                <path\n                  d=\"M219.481,263.452c-1.846-5.404-4.539-9.971-8.077-13.702s-7.789-6.327-12.75-7.789c-3.692-1.077-9.058-1.615-16.096-1.615 h-31.212v84.577h32.135c6.308,0,11.346-0.596,15.115-1.789c5.039-1.615,9.039-3.865,12-6.75c3.923-3.808,6.942-8.788,9.058-14.942 c1.731-5.039,2.596-11.039,2.596-18C222.25,275.519,221.327,268.856,219.481,263.452z M202.865,298.183 c-1.154,3.789-2.644,6.51-4.471,8.163c-1.827,1.654-4.125,2.827-6.894,3.519c-2.115,0.539-5.558,0.808-10.327,0.808h-12.75v0 v-56.019h7.673c6.961,0,11.635,0.269,14.019,0.808c3.192,0.692,5.827,2.019,7.904,3.981c2.077,1.962,3.692,4.692,4.846,8.192 c1.154,3.5,1.731,8.519,1.731,15.058C204.596,289.231,204.019,294.394,202.865,298.183z\"\n                />\n              </g>\n            </g>\n            <g>\n              <g>\n                <polygon\n                  points=\"294.827,254.654 294.827,240.346 236.846,240.346 236.846,324.923 253.923,324.923 253.923,288.981 289.231,288.981 289.231,274.673 253.923,274.673 253.923,254.654 \"\n                />\n              </g>\n            </g>\n          </svg>\n          <h3>Problema</h3>\n        </div>\n        <div\n          [ngClass]=\"\n            this.pag === 4 && this.globvar.userRole < 3 ? 'activeBTN actv1' : ''\n          \"\n          (click)=\"pagSottomissione()\"\n        >\n          <svg\n            class=\"logoo2\"\n            id=\"Layer_1\"\n            enable-background=\"new 0 0 496.009 496.009\"\n            height=\"512\"\n            viewBox=\"0 0 496.009 496.009\"\n            width=\"512\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n          >\n            <path\n              d=\"m475.015.815-464 151.617c-13.104 4.282-14.999 22.106-3.073 29.04l175.35 101.963c5.532 3.217 12.446 2.829 17.582-.986l49.292-36.606-36.606 49.292c-3.814 5.137-4.202 12.052-.986 17.583l101.963 175.35c6.942 11.936 24.762 10.02 29.041-3.073l151.617-464c4.067-12.459-7.782-24.234-20.18-20.18zm-150.766 440.297-78.712-135.365 94.913-127.805c4.729-6.37 4.078-15.243-1.532-20.853-5.609-5.61-14.484-6.262-20.853-1.532l-127.805 94.914-135.364-78.713 400.087-130.733zm-156.258-90.468-106.238 106.237c-6.248 6.247-16.379 6.249-22.627 0-6.249-6.248-6.249-16.379 0-22.627l106.238-106.237c6.25-6.247 16.381-6.249 22.627 0 6.249 6.248 6.249 16.379 0 22.627zm-140.349 4.02c-6.249-6.249-6.249-16.379 0-22.627l41.92-41.921c6.248-6.249 16.379-6.249 22.627 0 6.249 6.249 6.249 16.379 0 22.627l-41.92 41.921c-6.247 6.247-16.379 6.248-22.627 0zm178.25 49.154c6.249 6.248 6.249 16.379 0 22.627l-41.921 41.92c-3.124 3.125-7.219 4.687-11.313 4.687-14.127 0-21.421-17.207-11.313-27.314l41.921-41.92c6.247-6.249 16.378-6.249 22.626 0z\"\n            />\n          </svg>\n          <h3>Consegna</h3>\n        </div>\n      </div>\n    </div>\n    <h2 *ngIf=\"esercizi.length <= 0 && this.pag === 1\" class=\"err\">\n      Esercizi non trovati\n    </h2>\n    <div class=\"table1\" *ngIf=\"this.pag === 1\">\n      <div\n        [ngClass]=\"this.globvar.userRole > 2 ? 'card addCard' : ''\"\n        *ngIf=\"this.globvar.userRole === 3 || this.globvar.userRole === 4\"\n        (click)=\"pagCrea()\"\n      >\n        <div class=\"layer\">\n          <div class=\"addlogo\"></div>\n          <h4>Aggiungi Esercizio</h4>\n        </div>\n      </div>\n      <div\n        [ngClass]=\"this.giveStyle()\"\n        *ngFor=\"let ex of esercizi\"\n        (click)=\"\n          this.globvar.userRole === 3\n            ? pagModifica(ex.id)\n            : pagProblema(ex.id, ex.title)\n        \"\n      >\n        <div\n          class=\"eyeLogo\"\n          *ngIf=\"this.globvar.userRole === 3 && ex.is_public === '1'\"\n        ></div>\n        <div\n          [style.position]=\"\n            this.globvar.userRole === 3 && ex.is_public === '1'\n              ? 'null'\n              : 'relative'\n          \"\n          [style.margin-top]=\"\n            this.globvar.userRole === 3 && ex.is_public === '1' ? null : '25px'\n          \"\n        >\n          <svg\n            class=\"exlogo\"\n            version=\"1.1\"\n            id=\"Capa_1\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n            xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n            x=\"0px\"\n            y=\"0px\"\n            width=\"522.468px\"\n            height=\"522.469px\"\n            viewBox=\"0 0 522.468 522.469\"\n            style=\"enable-background: new 0 0 522.468 522.469;\"\n            xml:space=\"preserve\"\n          >\n            <g>\n              <g>\n                <path\n                  d=\"M325.762,70.513l-17.706-4.854c-2.279-0.76-4.524-0.521-6.707,0.715c-2.19,1.237-3.669,3.094-4.429,5.568L190.426,440.53 c-0.76,2.475-0.522,4.809,0.715,6.995c1.237,2.19,3.09,3.665,5.568,4.425l17.701,4.856c2.284,0.766,4.521,0.526,6.71-0.712 c2.19-1.243,3.666-3.094,4.425-5.564L332.042,81.936c0.759-2.474,0.523-4.808-0.716-6.999 C330.088,72.747,328.237,71.272,325.762,70.513z\"\n                />\n                <path\n                  d=\"M166.167,142.465c0-2.474-0.953-4.665-2.856-6.567l-14.277-14.276c-1.903-1.903-4.093-2.857-6.567-2.857 s-4.665,0.955-6.567,2.857L2.856,254.666C0.95,256.569,0,258.759,0,261.233c0,2.474,0.953,4.664,2.856,6.566l133.043,133.044 c1.902,1.906,4.089,2.854,6.567,2.854s4.665-0.951,6.567-2.854l14.277-14.268c1.903-1.902,2.856-4.093,2.856-6.57 c0-2.471-0.953-4.661-2.856-6.563L51.107,261.233l112.204-112.201C165.217,147.13,166.167,144.939,166.167,142.465z\"\n                />\n                <path\n                  d=\"M519.614,254.663L386.567,121.619c-1.902-1.902-4.093-2.857-6.563-2.857c-2.478,0-4.661,0.955-6.57,2.857l-14.271,14.275 c-1.902,1.903-2.851,4.09-2.851,6.567s0.948,4.665,2.851,6.567l112.206,112.204L359.163,373.442 c-1.902,1.902-2.851,4.093-2.851,6.563c0,2.478,0.948,4.668,2.851,6.57l14.271,14.268c1.909,1.906,4.093,2.854,6.57,2.854 c2.471,0,4.661-0.951,6.563-2.854L519.614,267.8c1.903-1.902,2.854-4.096,2.854-6.57 C522.468,258.755,521.517,256.565,519.614,254.663z\"\n                />\n              </g>\n            </g>\n          </svg>\n        </div>\n        <h3>{{ ex.title }}</h3>\n      </div>\n    </div>\n\n    <form\n      *ngIf=\"\n        this.pag > 1 &&\n        (this.globvar.userRole === 3 || this.globvar.userRole === 4)\n      \"\n    >\n      <div class=\"form1\">\n        <div class=\"fields\">\n          <h2>Titolo :</h2>\n          <input\n            type=\"text\"\n            name=\"titolo\"\n            [(ngModel)]=\"nome\"\n            placeholder=\"Scrivi qui il titolo\"\n            autocomplete=\"off\"\n          />\n        </div>\n        <div class=\"fields\">\n          <h2>Sottotitolo :</h2>\n          <input\n            type=\"text\"\n            name=\"sottotitolo\"\n            [(ngModel)]=\"nomes\"\n            placeholder=\"Scrivi qui il sottotitolo\"\n            autocomplete=\"off\"\n            required\n          />\n        </div>\n        <div class=\"fields\">\n          <h2>Stato :</h2>\n          <div\n            class=\"vis\"\n            *ngIf=\"probVis\"\n            (click)=\"pag > 1 ? cambiaVis() : null\"\n          >\n            <svg\n              version=\"1.1\"\n              id=\"Capa_1\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n              xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n              x=\"0px\"\n              y=\"0px\"\n              viewBox=\"0 0 511.992 511.992\"\n              style=\"enable-background: new 0 0 511.992 511.992;\"\n              xml:space=\"preserve\"\n            >\n              <g>\n                <g>\n                  <path\n                    d=\"M510.096,249.937c-4.032-5.867-100.928-143.275-254.101-143.275C124.56,106.662,7.44,243.281,2.512,249.105\n\t\t\tc-3.349,3.968-3.349,9.792,0,13.781C7.44,268.71,124.56,405.329,255.995,405.329S504.549,268.71,509.477,262.886\n\t\t\tC512.571,259.217,512.848,253.905,510.096,249.937z M255.995,383.996c-105.365,0-205.547-100.48-230.997-128\n\t\t\tc25.408-27.541,125.483-128,230.997-128c123.285,0,210.304,100.331,231.552,127.424\n\t\t\tC463.013,282.065,362.256,383.996,255.995,383.996z\"\n                  />\n                </g>\n              </g>\n              <g>\n                <g>\n                  <path\n                    d=\"M255.995,170.662c-47.061,0-85.333,38.272-85.333,85.333s38.272,85.333,85.333,85.333s85.333-38.272,85.333-85.333\n\t\t\tS303.056,170.662,255.995,170.662z M255.995,319.996c-35.285,0-64-28.715-64-64s28.715-64,64-64s64,28.715,64,64\n\t\t\tS291.28,319.996,255.995,319.996z\"\n                  />\n                </g>\n              </g>\n            </svg>\n            <h3>Visibile</h3>\n          </div>\n          <div\n            class=\"Nvis\"\n            *ngIf=\"!probVis\"\n            (click)=\"pag > 1 ? cambiaVis() : null\"\n          >\n            <svg\n              version=\"1.1\"\n              id=\"Capa_1\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n              xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n              x=\"0px\"\n              y=\"0px\"\n              viewBox=\"0 0 512.001 512.001\"\n              style=\"enable-background: new 0 0 512.001 512.001;\"\n              xml:space=\"preserve\"\n            >\n              <g>\n                <g>\n                  <path\n                    d=\"M316.332,195.662c-4.16-4.16-10.923-4.16-15.083,0c-4.16,4.16-4.16,10.944,0,15.083\n\t\t\tc12.075,12.075,18.752,28.139,18.752,45.248c0,35.285-28.715,64-64,64c-17.109,0-33.173-6.656-45.248-18.752\n\t\t\tc-4.16-4.16-10.923-4.16-15.083,0c-4.16,4.139-4.16,10.923,0,15.083c16.085,16.128,37.525,25.003,60.331,25.003\n\t\t\tc47.061,0,85.333-38.272,85.333-85.333C341.334,233.187,332.46,211.747,316.332,195.662z\"\n                  />\n                </g>\n              </g>\n              <g>\n                <g>\n                  <path\n                    d=\"M270.87,172.131c-4.843-0.853-9.792-1.472-14.869-1.472c-47.061,0-85.333,38.272-85.333,85.333\n\t\t\tc0,5.077,0.619,10.027,1.493,14.869c0.917,5.163,5.419,8.811,10.475,8.811c0.619,0,1.237-0.043,1.877-0.171\n\t\t\tc5.781-1.024,9.664-6.571,8.64-12.352c-0.661-3.627-1.152-7.317-1.152-11.157c0-35.285,28.715-64,64-64\n\t\t\tc3.84,0,7.531,0.491,11.157,1.131c5.675,1.152,11.328-2.859,12.352-8.64C280.534,178.702,276.652,173.155,270.87,172.131z\"\n                  />\n                </g>\n              </g>\n              <g>\n                <g>\n                  <path\n                    d=\"M509.462,249.102c-2.411-2.859-60.117-70.208-139.712-111.445c-5.163-2.709-11.669-0.661-14.379,4.587\n\t\t\tc-2.709,5.227-0.661,11.669,4.587,14.379c61.312,31.744,110.293,81.28,127.04,99.371c-25.429,27.541-125.504,128-230.997,128\n\t\t\tc-35.797,0-71.872-8.64-107.264-25.707c-5.248-2.581-11.669-0.341-14.229,4.971c-2.581,5.291-0.341,11.669,4.971,14.229\n\t\t\tc38.293,18.496,77.504,27.84,116.523,27.84c131.435,0,248.555-136.619,253.483-142.443\n\t\t\tC512.854,258.915,512.833,253.091,509.462,249.102z\"\n                  />\n                </g>\n              </g>\n              <g>\n                <g>\n                  <path\n                    d=\"M325.996,118.947c-24.277-8.171-47.829-12.288-69.995-12.288c-131.435,0-248.555,136.619-253.483,142.443\n\t\t\tc-3.115,3.669-3.371,9.003-0.597,12.992c1.472,2.112,36.736,52.181,97.856,92.779c1.813,1.216,3.84,1.792,5.888,1.792\n\t\t\tc3.435,0,6.827-1.664,8.875-4.8c3.264-4.885,1.92-11.52-2.987-14.763c-44.885-29.845-75.605-65.877-87.104-80.533\n\t\t\tc24.555-26.667,125.291-128.576,231.552-128.576c19.861,0,41.131,3.755,63.189,11.157c5.589,2.005,11.648-1.088,13.504-6.699\n\t\t\tC334.572,126.862,331.585,120.825,325.996,118.947z\"\n                  />\n                </g>\n              </g>\n              <g>\n                <g>\n                  <path\n                    d=\"M444.865,67.128c-4.16-4.16-10.923-4.16-15.083,0L67.116,429.795c-4.16,4.16-4.16,10.923,0,15.083\n\t\t\tc2.091,2.069,4.821,3.115,7.552,3.115c2.731,0,5.461-1.045,7.531-3.115L444.865,82.211\n\t\t\tC449.025,78.051,449.025,71.288,444.865,67.128z\"\n                  />\n                </g>\n              </g>\n            </svg>\n            <h3>Non Visibile</h3>\n          </div>\n        </div>\n        <div class=\"fields\">\n          <h2>Livello:</h2>\n          <select name=\"livello\" class=\"cmbbox\">\n            <option value=\"1\">1</option>\n            <option value=\"2\">2</option>\n            <option value=\"3\">3</option>\n            <option value=\"4\">4</option>\n            <option value=\"5\">5</option>\n          </select>\n        </div>\n        <div class=\"fields\">\n          <h2>Categoria:</h2>\n          <select name=\"category_id\" class=\"cmbbox\">\n            <option *ngFor=\"let dd of this.catList\" value=\"{{ dd.id }}\">{{\n              dd.description\n            }}</option>\n          </select>\n          <button class=\"addBTN\">+</button>\n        </div>\n        <div class=\"fields\">\n          <h2>Numero Test Case :</h2>\n          <select name=\"test_cases\" class=\"cmbbox\">\n            <option value=\"1\">1</option>\n            <option value=\"2\">2</option>\n            <option value=\"3\">3</option>\n            <option value=\"4\">4</option>\n            <option value=\"5\">5</option>\n            <option value=\"6\">6</option>\n            <option value=\"7\">7</option>\n            <option value=\"8\">8</option>\n            <option value=\"9\">9</option>\n            <option value=\"10\">10</option>\n          </select>\n        </div>\n        <div class=\"fields\" *ngIf=\"this.pag > 1\">\n          <input\n            *ngIf=\"this.pag === 2\"\n            class=\"submitBTN\"\n            type=\"submit\"\n            value=\"Crea\"\n            (click)=\"crea_modifica(1)\"\n          />\n          <input\n            *ngIf=\"this.pag === 3\"\n            class=\"submitBTN\"\n            type=\"submit\"\n            value=\"Modifica\"\n            (click)=\"crea_modifica(2)\"\n          />\n        </div>\n\n        <div class=\"fields ddelete\" *ngIf=\"this.pag === 3\">\n          <h2>Vuoi eliminare questo esercizio ?</h2>\n          <button class=\"submitBTN del\" (click)=\"elimina()\">\n            Elimina\n          </button>\n        </div>\n      </div>\n      <div class=\"fileLoaders\">\n        <div class=\"containerF\">\n          <h2>Descrizione (.pdf)</h2>\n          <div class=\"containerF1\">\n            <input\n              type=\"file\"\n              id=\"file\"\n              class=\"inputfile\"\n              (change)=\"change1(0, $event.target.files)\"\n            />\n            <label class=\"btn-2\" for=\"file\">{{ filesNames[0] }}</label>\n          </div>\n        </div>\n        <div class=\"containerF\">\n          <h2>Materiale (.zip)</h2>\n          <div class=\"containerF1\">\n            <input\n              type=\"file\"\n              id=\"file2\"\n              class=\"inputfile\"\n              (change)=\"change1(2, $event.target.files)\"\n            />\n            <label class=\"btn-2\" for=\"file2\">{{ filesNames[2] }}</label>\n          </div>\n        </div>\n        <div class=\"containerF\">\n          <h2>Soluzione (.zip)</h2>\n          <div class=\"containerF1\">\n            <input\n              type=\"file\"\n              id=\"file1\"\n              class=\"inputfile\"\n              (change)=\"change1(1, $event.target.files)\"\n            />\n            <label class=\"btn-2\" for=\"file1\">{{ filesNames[1] }}</label>\n          </div>\n        </div>\n      </div>\n    </form>\n\n    <div\n      *ngIf=\"(this.pag === 2 || this.pag === 4) && this.globvar.userRole < 3\"\n      class=\"pagEsercizio\"\n    >\n      <iframe\n        *ngIf=\"this.pag === 2\"\n        [attr.src]=\"this.filePDF\"\n        type=\"application/pdf\"\n      ></iframe>\n\n      <div *ngIf=\"this.pag === 4\" class=\"submissionss\">\n        <h2>Carica qui il tuo codice:</h2>\n        <h3>(il file deve avere l'estensione .c)</h3>\n        <input\n          type=\"file\"\n          name=\"file\"\n          id=\"file\"\n          class=\"inputfile\"\n          (change)=\"changeTask($event.target.files)\"\n        />\n        <label class=\"btn-2\" for=\"file\">{{ filemsg }}</label>\n        <input\n          *ngIf=\"this.pag === 4\"\n          class=\"submitBTN\"\n          type=\"submit\"\n          value=\"Carica\"\n          (click)=\"caricaSub(this.idE)\"\n        />\n      </div>\n    </div>\n  </div>\n</div>\n\n<!--\n[style.position]=\"this.globvar.userRole === 3 ? null : 'relative'\"\n        [style.margin-top]=\"this.globvar.userRole === 3 ? null : '20px'  \n-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dynamicPages/gruppi/gruppi.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dynamicPages/gruppi/gruppi.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-body\">\n  <div class=\"main-div\">\n    <div class=\"title\">\n      <div *ngIf=\"this.pag != 1\" class=\"back\" (click)=\"pagElenco()\"></div>\n      <h1>{{ title }}</h1>\n    </div>\n    <h2 *ngIf=\"gruppi.length <= 0 && this.pag === 1\" class=\"err\">\n      Gruppi non trovati\n    </h2>\n    <div class=\"table1\" *ngIf=\"this.pag === 1\">\n      <div\n        class=\"card addCard\"\n        *ngIf=\"this.globvar.userRole === 3 || this.globvar.userRole === 4\"\n        (click)=\"pagCrea()\"\n      >\n        <div class=\"layer\">\n          <div class=\"addlogo\"></div>\n          <h4>Aggiungi Gruppo</h4>\n        </div>\n      </div>\n      <div\n        class=\"card\"\n        *ngFor=\"let gr of gruppi\"\n        (click)=\"pagModifica(gr['id'], gr['description'])\"\n      >\n        <div class=\"grlogo\"></div>\n        <h3>{{ gr.description }}</h3>\n      </div>\n    </div>\n    <form *ngIf=\"this.pag > 1\">\n      <div class=\"form1\">\n        <div class=\"fields fname\">\n          <h2>Nome del gruppo:</h2>\n          <input\n            type=\"text\"\n            name=\"Nome\"\n            placeholder=\"Scrivi qui il nome\"\n            [(ngModel)]=\"nome\"\n            autocomplete=\"off\"\n          />\n          <input\n            *ngIf=\"this.pag === 2\"\n            class=\"submitBTN\"\n            type=\"submit\"\n            value=\"Crea\"\n            (click)=\"crea(nome)\"\n          />\n          <input\n            *ngIf=\"this.pag === 3\"\n            class=\"submitBTN\"\n            type=\"submit\"\n            value=\"Modifica\"\n            (click)=\"modifica(nome)\"\n          />\n        </div>\n        <div class=\"fields fname1\" *ngIf=\"this.pag === 2\">\n          <h2>Oppure</h2>\n        </div>\n        <div class=\"fields fname2\" *ngIf=\"this.pag === 2\">\n          <h2>Carica il gruppo da file .csv :</h2>\n          <input\n            type=\"file\"\n            name=\"file\"\n            id=\"file\"\n            class=\"inputfile\"\n            (change)=\"change1($event.target.files)\"\n          />\n          <label class=\"btn-2\" for=\"file\">{{ filemsg }}</label>\n          <input\n            *ngIf=\"this.pag === 2\"\n            class=\"submitBTN\"\n            type=\"submit\"\n            value=\"Carica\"\n            (click)=\"no()\"\n          />\n        </div>\n        <div class=\"fields ddelete\" *ngIf=\"this.pag === 3\">\n          <h2>Vuoi eliminare questo gruppo ?</h2>\n          <button class=\"submitBTN del\" (click)=\"elimina()\">\n            Elimina\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dynamicPages/niente/niente.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dynamicPages/niente/niente.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-body\">\n  <div class=\"center1\" routerLink=\"/\">\n    <div class=\"logo\"></div>\n    <h2>Page not found</h2>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dynamicPages/studenti/studenti.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dynamicPages/studenti/studenti.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-body\">\n  <div class=\"main-div\">\n    <div class=\"title\">\n      <div *ngIf=\"this.pag != 1\" class=\"back\" (click)=\"back(this.pag)\"></div>\n      <h1>{{ title }}</h1>\n    </div>\n    <h2 *ngIf=\"studenti.length <= 0 && this.pag === 1\" class=\"err\">\n      Studenti non trovati\n    </h2>\n    <div class=\"table12\" *ngIf=\"this.pag === 1\">\n      <div class=\"thead\" (click)=\"pagCrea()\">\n        <div class=\"layer1\">\n          <div class=\"vuoto\"><div class=\"logo1\"></div></div>\n          <div class=\"campo c1\">Username</div>\n          <div class=\"campo c1\">Nome</div>\n          <div class=\"campo c1\">Cognome</div>\n        </div>\n      </div>\n\n      <div\n        class=\"rowss\"\n        *ngFor=\"let stud of this.studenti\"\n        (click)=\"pagModifica(stud.id, stud.name, stud.surname, stud.username)\"\n      >\n        <div class=\"vuoto\"><div class=\"logo\"></div></div>\n        <div class=\"campo\">{{ stud.username }}</div>\n        <div class=\"campo\">{{ stud.name }}</div>\n        <div class=\"campo\">{{ stud.surname }}</div>\n      </div>\n    </div>\n\n    <form *ngIf=\"this.pag > 1\">\n      <div class=\"form1\">\n        <div class=\"fields\">\n          <h2>Nome :</h2>\n          <input\n            type=\"text\"\n            name=\"nome\"\n            [(ngModel)]=\"nome\"\n            placeholder=\"Nome\"\n            autocomplete=\"off\"\n          />\n        </div>\n        <div class=\"fields\">\n          <h2>Cognome :</h2>\n          <input\n            type=\"text\"\n            name=\"cognome\"\n            [(ngModel)]=\"cognome\"\n            placeholder=\"Cognome\"\n            autocomplete=\"off\"\n          />\n        </div>\n        <div class=\"fields\">\n          <h2>Username :</h2>\n          <input\n            type=\"text\"\n            name=\"usr\"\n            [(ngModel)]=\"usr\"\n            placeholder=\"Username\"\n            autocomplete=\"off\"\n            [readonly]=\"this.pag === 3\"\n          />\n        </div>\n        <div class=\"fields\">\n          <h2>Password :</h2>\n          <input\n            class=\"psw\"\n            [type]=\"this.vis1 ? 'text' : 'password'\"\n            name=\"psw\"\n            [(ngModel)]=\"psw\"\n            placeholder=\"Password\"\n            autocomplete=\"off\"\n          />\n          <div class=\"vis\" *ngIf=\"!vis1\" (mousedown)=\"changeVis('1')\">\n            <svg\n              version=\"1.1\"\n              id=\"Capa_1\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n              xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n              x=\"0px\"\n              y=\"0px\"\n              viewBox=\"0 0 511.992 511.992\"\n              style=\"enable-background: new 0 0 511.992 511.992;\"\n              xml:space=\"preserve\"\n            >\n              <g>\n                <g>\n                  <path\n                    d=\"M510.096,249.937c-4.032-5.867-100.928-143.275-254.101-143.275C124.56,106.662,7.44,243.281,2.512,249.105\n          c-3.349,3.968-3.349,9.792,0,13.781C7.44,268.71,124.56,405.329,255.995,405.329S504.549,268.71,509.477,262.886\n          C512.571,259.217,512.848,253.905,510.096,249.937z M255.995,383.996c-105.365,0-205.547-100.48-230.997-128\n          c25.408-27.541,125.483-128,230.997-128c123.285,0,210.304,100.331,231.552,127.424\n          C463.013,282.065,362.256,383.996,255.995,383.996z\"\n                  />\n                </g>\n              </g>\n              <g>\n                <g>\n                  <path\n                    d=\"M255.995,170.662c-47.061,0-85.333,38.272-85.333,85.333s38.272,85.333,85.333,85.333s85.333-38.272,85.333-85.333\n          S303.056,170.662,255.995,170.662z M255.995,319.996c-35.285,0-64-28.715-64-64s28.715-64,64-64s64,28.715,64,64\n          S291.28,319.996,255.995,319.996z\"\n                  />\n                </g>\n              </g>\n            </svg>\n          </div>\n          <div class=\"Nvis\" *ngIf=\"vis1\" (mouseup)=\"changeVis('1')\">\n            <svg\n              version=\"1.1\"\n              id=\"Capa_1\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n              xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n              x=\"0px\"\n              y=\"0px\"\n              viewBox=\"0 0 488.85 488.85\"\n              style=\"enable-background: new 0 0 488.85 488.85;\"\n              xml:space=\"preserve\"\n            >\n              <g>\n                <path\n                  d=\"M244.425,98.725c-93.4,0-178.1,51.1-240.6,134.1c-5.1,6.8-5.1,16.3,0,23.1c62.5,83.1,147.2,134.2,240.6,134.2\n\t\ts178.1-51.1,240.6-134.1c5.1-6.8,5.1-16.3,0-23.1C422.525,149.825,337.825,98.725,244.425,98.725z M251.125,347.025\n\t\tc-62,3.9-113.2-47.2-109.3-109.3c3.2-51.2,44.7-92.7,95.9-95.9c62-3.9,113.2,47.2,109.3,109.3\n\t\tC343.725,302.225,302.225,343.725,251.125,347.025z M248.025,299.625c-33.4,2.1-61-25.4-58.8-58.8c1.7-27.6,24.1-49.9,51.7-51.7\n\t\tc33.4-2.1,61,25.4,58.8,58.8C297.925,275.625,275.525,297.925,248.025,299.625z\"\n                />\n              </g>\n            </svg>\n          </div>\n        </div>\n        <div class=\"fields\">\n          <h2>Reinserisci Password :</h2>\n          <input\n            class=\"psw\"\n            [type]=\"this.vis2 ? 'text' : 'password'\"\n            name=\"psw1\"\n            [(ngModel)]=\"psw1\"\n            placeholder=\"Reinserisci Password\"\n            autocomplete=\"off\"\n          />\n          <div class=\"vis\" *ngIf=\"!vis2\" (mousedown)=\"changeVis('2')\">\n            <svg\n              version=\"1.1\"\n              id=\"Capa_1\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n              xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n              x=\"0px\"\n              y=\"0px\"\n              viewBox=\"0 0 511.992 511.992\"\n              style=\"enable-background: new 0 0 511.992 511.992;\"\n              xml:space=\"preserve\"\n            >\n              <g>\n                <g>\n                  <path\n                    d=\"M510.096,249.937c-4.032-5.867-100.928-143.275-254.101-143.275C124.56,106.662,7.44,243.281,2.512,249.105\n          c-3.349,3.968-3.349,9.792,0,13.781C7.44,268.71,124.56,405.329,255.995,405.329S504.549,268.71,509.477,262.886\n          C512.571,259.217,512.848,253.905,510.096,249.937z M255.995,383.996c-105.365,0-205.547-100.48-230.997-128\n          c25.408-27.541,125.483-128,230.997-128c123.285,0,210.304,100.331,231.552,127.424\n          C463.013,282.065,362.256,383.996,255.995,383.996z\"\n                  />\n                </g>\n              </g>\n              <g>\n                <g>\n                  <path\n                    d=\"M255.995,170.662c-47.061,0-85.333,38.272-85.333,85.333s38.272,85.333,85.333,85.333s85.333-38.272,85.333-85.333\n          S303.056,170.662,255.995,170.662z M255.995,319.996c-35.285,0-64-28.715-64-64s28.715-64,64-64s64,28.715,64,64\n          S291.28,319.996,255.995,319.996z\"\n                  />\n                </g>\n              </g>\n            </svg>\n          </div>\n          <div class=\"Nvis\" *ngIf=\"vis2\" (mouseup)=\"changeVis('2')\">\n            <svg\n              version=\"1.1\"\n              id=\"Capa_1\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n              xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n              x=\"0px\"\n              y=\"0px\"\n              viewBox=\"0 0 488.85 488.85\"\n              style=\"enable-background: new 0 0 488.85 488.85;\"\n              xml:space=\"preserve\"\n            >\n              <g>\n                <path\n                  d=\"M244.425,98.725c-93.4,0-178.1,51.1-240.6,134.1c-5.1,6.8-5.1,16.3,0,23.1c62.5,83.1,147.2,134.2,240.6,134.2\n\t\ts178.1-51.1,240.6-134.1c5.1-6.8,5.1-16.3,0-23.1C422.525,149.825,337.825,98.725,244.425,98.725z M251.125,347.025\n\t\tc-62,3.9-113.2-47.2-109.3-109.3c3.2-51.2,44.7-92.7,95.9-95.9c62-3.9,113.2,47.2,109.3,109.3\n\t\tC343.725,302.225,302.225,343.725,251.125,347.025z M248.025,299.625c-33.4,2.1-61-25.4-58.8-58.8c1.7-27.6,24.1-49.9,51.7-51.7\n\t\tc33.4-2.1,61,25.4,58.8,58.8C297.925,275.625,275.525,297.925,248.025,299.625z\"\n                />\n              </g>\n            </svg>\n          </div>\n        </div>\n        <div class=\"fields\">\n          <input\n            *ngIf=\"this.pag === 2\"\n            class=\"submitBTN\"\n            type=\"submit\"\n            value=\"Crea\"\n            (click)=\"crea()\"\n          />\n          <input\n            *ngIf=\"this.pag === 3\"\n            class=\"submitBTN\"\n            type=\"submit\"\n            value=\"Modifica\"\n            (click)=\"modifica()\"\n          />\n        </div>\n        <div class=\"fields ddelete\" *ngIf=\"this.pag === 3\">\n          <h2>Vuoi eliminare questo studente ?</h2>\n          <button class=\"submitBTN del\" (click)=\"elimina()\">\n            Elimina\n          </button>\n        </div>\n      </div>\n    </form>\n    <div class=\"tab\" *ngIf=\"this.pag === 2\">\n      <h2 class=\"hp2\">Inserisci/Rimuovi da gruppo:</h2>\n      <div class=\"tabella\">\n        <div class=\"tabH\">\n          <h3 class=\"tH1\">Nome del gruppo</h3>\n        </div>\n        <div class=\"rows\">\n          <div\n            class=\"rowTab\"\n            *ngFor=\"let cl of this.classi\"\n            (mouseenter)=\"cl.hovEff = '1'\"\n            (mouseleave)=\"cl.hovEff = '0'\"\n          >\n            <div class=\"miniLogo\"></div>\n            <div class=\"col1\">\n              <div class=\"Titolo\">{{ cl.description }}</div>\n            </div>\n            <!--<div class=\"add_rem_btn\">\n              <div class=\"addLogo\"></div>\n            </div>-->\n\n            <div class=\"add_rem_btn\">\n              <div\n                *ngIf=\"\n                  (cl.alreadyIN === '0' && cl.hovEff === '1') ||\n                  cl.alreadyIN === '1'\n                \"\n                [ngClass]=\"\n                  cl.alreadyIN === '1' && cl.hovEff === '1'\n                    ? 'emptyL'\n                    : 'addLogo'\n                \"\n                (click)=\"\n                  cl.alreadyIN === '1' && cl.hovEff === '1'\n                    ? null\n                    : putSinG(cl.id)\n                \"\n              ></div>\n              <div\n                class=\"remLogo\"\n                *ngIf=\"cl.hovEff === '1' && cl.alreadyIN === '1'\"\n                (click)=\"delSfromG(cl.id)\"\n              ></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dynamicPages/verifiche/verifiche.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dynamicPages/verifiche/verifiche.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-body\">\n  <div class=\"main-div\">\n    <div class=\"title\">\n      <div\n        *ngIf=\"this.pag != 1 && this.globvar.userRole < 3\"\n        class=\"back\"\n        (click)=\"this.pag < 5 ? pagElenco() : pagEserciziOK()\"\n      ></div>\n      <div\n        *ngIf=\"this.pag != 1 && this.globvar.userRole > 2\"\n        class=\"back\"\n        (click)=\"this.pag == 4 ? backFromRisultati() : pagElenco()\"\n      ></div>\n      <h1>{{ title }}</h1>\n      <div class=\"iconss\" *ngIf=\"this.pag > 4 && this.globvar.userRole === 2\">\n        <div\n          [ngClass]=\"\n            this.pag === 5 && this.globvar.userRole === 2 ? 'activeBTN' : ''\n          \"\n          (click)=\"pagPdf()\"\n        >\n          <svg\n            class=\"logoo1\"\n            version=\"1.1\"\n            id=\"Layer_1\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n            xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n            x=\"0px\"\n            y=\"0px\"\n            viewBox=\"0 0 512 512\"\n            style=\"enable-background: new 0 0 512 512;\"\n            xml:space=\"preserve\"\n          >\n            <g>\n              <g>\n                <path\n                  d=\"M494.479,138.557L364.04,3.018C362.183,1.09,359.621,0,356.945,0h-194.41c-21.757,0-39.458,17.694-39.458,39.442v137.789 H44.29c-16.278,0-29.521,13.239-29.521,29.513v147.744C14.769,370.761,28.012,384,44.29,384h78.787v88.627 c0,21.71,17.701,39.373,39.458,39.373h295.238c21.757,0,39.458-17.653,39.458-39.351V145.385 C497.231,142.839,496.244,140.392,494.479,138.557z M359.385,26.581l107.079,111.265H359.385V26.581z M44.29,364.308 c-5.42,0-9.828-4.405-9.828-9.82V206.744c0-5.415,4.409-9.821,9.828-9.821h265.882c5.42,0,9.828,4.406,9.828,9.821v147.744 c0,5.415-4.409,9.82-9.828,9.82H44.29z M477.538,472.649c0,10.84-8.867,19.659-19.766,19.659H162.535 c-10.899,0-19.766-8.828-19.766-19.68V384h167.403c16.278,0,29.521-13.239,29.521-29.512V206.744 c0-16.274-13.243-29.513-29.521-29.513H142.769V39.442c0-10.891,8.867-19.75,19.766-19.75h177.157v128 c0,5.438,4.409,9.846,9.846,9.846h128V472.649z\"\n                />\n              </g>\n            </g>\n            <g>\n              <g>\n                <path\n                  d=\"M132.481,249.894c-3.269-4.25-7.327-7.01-12.173-8.279c-3.154-0.846-9.923-1.269-20.308-1.269H72.596v84.577h17.077 v-31.904h11.135c7.731,0,13.635-0.404,17.712-1.212c3-0.654,5.952-1.99,8.856-4.01c2.904-2.019,5.298-4.798,7.183-8.336 c1.885-3.538,2.827-7.904,2.827-13.096C137.385,259.634,135.75,254.144,132.481,249.894z M117.856,273.173 c-1.288,1.885-3.067,3.269-5.337,4.154s-6.769,1.327-13.5,1.327h-9.346v-24h8.25c6.154,0,10.25,0.192,12.288,0.577 c2.769,0.5,5.058,1.75,6.865,3.75c1.808,2,2.712,4.539,2.712,7.615C119.789,269.096,119.144,271.288,117.856,273.173z\"\n                />\n              </g>\n            </g>\n            <g>\n              <g>\n                <path\n                  d=\"M219.481,263.452c-1.846-5.404-4.539-9.971-8.077-13.702s-7.789-6.327-12.75-7.789c-3.692-1.077-9.058-1.615-16.096-1.615 h-31.212v84.577h32.135c6.308,0,11.346-0.596,15.115-1.789c5.039-1.615,9.039-3.865,12-6.75c3.923-3.808,6.942-8.788,9.058-14.942 c1.731-5.039,2.596-11.039,2.596-18C222.25,275.519,221.327,268.856,219.481,263.452z M202.865,298.183 c-1.154,3.789-2.644,6.51-4.471,8.163c-1.827,1.654-4.125,2.827-6.894,3.519c-2.115,0.539-5.558,0.808-10.327,0.808h-12.75v0 v-56.019h7.673c6.961,0,11.635,0.269,14.019,0.808c3.192,0.692,5.827,2.019,7.904,3.981c2.077,1.962,3.692,4.692,4.846,8.192 c1.154,3.5,1.731,8.519,1.731,15.058C204.596,289.231,204.019,294.394,202.865,298.183z\"\n                />\n              </g>\n            </g>\n            <g>\n              <g>\n                <polygon\n                  points=\"294.827,254.654 294.827,240.346 236.846,240.346 236.846,324.923 253.923,324.923 253.923,288.981 289.231,288.981 289.231,274.673 253.923,274.673 253.923,254.654 \"\n                />\n              </g>\n            </g>\n          </svg>\n          <h3>Problema</h3>\n        </div>\n        <div\n          [ngClass]=\"\n            this.pag === 6 && this.globvar.userRole === 2\n              ? 'activeBTN actv1'\n              : ''\n          \"\n          (click)=\"pagSottomissione()\"\n        >\n          <svg\n            class=\"logoo2\"\n            id=\"Layer_1\"\n            enable-background=\"new 0 0 496.009 496.009\"\n            height=\"512\"\n            viewBox=\"0 0 496.009 496.009\"\n            width=\"512\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n          >\n            <path\n              d=\"m475.015.815-464 151.617c-13.104 4.282-14.999 22.106-3.073 29.04l175.35 101.963c5.532 3.217 12.446 2.829 17.582-.986l49.292-36.606-36.606 49.292c-3.814 5.137-4.202 12.052-.986 17.583l101.963 175.35c6.942 11.936 24.762 10.02 29.041-3.073l151.617-464c4.067-12.459-7.782-24.234-20.18-20.18zm-150.766 440.297-78.712-135.365 94.913-127.805c4.729-6.37 4.078-15.243-1.532-20.853-5.609-5.61-14.484-6.262-20.853-1.532l-127.805 94.914-135.364-78.713 400.087-130.733zm-156.258-90.468-106.238 106.237c-6.248 6.247-16.379 6.249-22.627 0-6.249-6.248-6.249-16.379 0-22.627l106.238-106.237c6.25-6.247 16.381-6.249 22.627 0 6.249 6.248 6.249 16.379 0 22.627zm-140.349 4.02c-6.249-6.249-6.249-16.379 0-22.627l41.92-41.921c6.248-6.249 16.379-6.249 22.627 0 6.249 6.249 6.249 16.379 0 22.627l-41.92 41.921c-6.247 6.247-16.379 6.248-22.627 0zm178.25 49.154c6.249 6.248 6.249 16.379 0 22.627l-41.921 41.92c-3.124 3.125-7.219 4.687-11.313 4.687-14.127 0-21.421-17.207-11.313-27.314l41.921-41.92c6.247-6.249 16.378-6.249 22.626 0z\"\n            />\n          </svg>\n          <h3>Consegna</h3>\n        </div>\n      </div>\n    </div>\n    <h2\n      *ngIf=\"\n        (verifiche.length <= 0 && this.pag === 1) ||\n        (this.pag === 4 && esLista.length <= 0)\n      \"\n      class=\"err\"\n    >\n      {{ msgg }}\n    </h2>\n    <div class=\"table1\" *ngIf=\"this.pag === 1\">\n      <div\n        class=\"card addCard\"\n        *ngIf=\"this.globvar.userRole === 3 || this.globvar.userRole === 4\"\n        (click)=\"pagCrea()\"\n      >\n        <div class=\"layer\">\n          <div class=\"addlogo\"></div>\n          <h4>Aggiungi Verifica</h4>\n        </div>\n      </div>\n      <div\n        [ngClass]=\"this.globvar.userRole > 2 ? 'card' : 'card cardStud'\"\n        *ngFor=\"let ver of verifiche\"\n        (click)=\"\n          this.globvar.userRole > 2\n            ? pagModifica(ver['id'], ver['description'], ver['is_on'])\n            : pagEsercizi(ver['id'], ver['description'])\n        \"\n      >\n        <div\n          class=\"eyeLogo\"\n          *ngIf=\"this.globvar.userRole === 3 && ver['is_on'] === '1'\"\n        ></div>\n        <div\n          [style.position]=\"\n            this.globvar.userRole === 3 && ver['is_on'] === '1'\n              ? 'null'\n              : 'relative'\n          \"\n          [style.margin-top]=\"\n            this.globvar.userRole === 3 && ver['is_on'] === '1' ? null : '30px'\n          \"\n        >\n          <svg\n            class=\"verlogo\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n            xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n            version=\"1.1\"\n            id=\"Layer_1\"\n            x=\"0px\"\n            y=\"0px\"\n            viewBox=\"0 0 512 512\"\n            style=\"enable-background: new 0 0 512 512;\"\n            xml:space=\"preserve\"\n            width=\"512\"\n            height=\"512\"\n          >\n            <g id=\"XMLID_1203_\">\n              <g id=\"XMLID_1116_\">\n                <g id=\"XMLID_386_\">\n                  <path\n                    id=\"XMLID_387_\"\n                    d=\"M171.759,128h14.518c5.522,0,10-4.477,10-10s-4.478-10-10-10h-14.518c-1.266,0-2.296-1.03-2.296-2.296 V96h12.993c5.522,0,10-4.477,10-10s-4.478-10-10-10h-12.993v-9.704c0-1.266,1.03-2.296,2.296-2.296h14.518 c5.522,0,10-4.477,10-10s-4.478-10-10-10h-14.518c-12.294,0-22.296,10.002-22.296,22.296v39.408 C149.463,117.998,159.465,128,171.759,128z\"\n                  />\n                  <path\n                    id=\"XMLID_388_\"\n                    d=\"M239.254,108h-17.167c-5.522,0-10,4.477-10,10s4.478,10,10,10h17.167c14.337,0,26-11.664,26-26 s-11.663-26-26-26h-1.167c-3.309,0-6-2.691-6-6s2.691-6,6-6h11.512c5.522,0,10-4.477,10-10s-4.478-10-10-10h-11.512 c-14.337,0-26,11.664-26,26s11.663,26,26,26h1.167c3.309,0,6,2.691,6,6S242.563,108,239.254,108z\"\n                  />\n                  <path\n                    id=\"XMLID_389_\"\n                    d=\"M129.254,44h-33c-5.522,0-10,4.477-10,10s4.478,10,10,10h6.5v54c0,5.523,4.478,10,10,10s10-4.477,10-10 V64h6.5c5.522,0,10-4.477,10-10S134.777,44,129.254,44z\"\n                  />\n                  <path\n                    id=\"XMLID_390_\"\n                    d=\"M288.754,64h6.5v54c0,5.523,4.478,10,10,10s10-4.477,10-10V64h6.5c5.522,0,10-4.477,10-10 s-4.478-10-10-10h-33c-5.522,0-10,4.477-10,10S283.232,64,288.754,64z\"\n                  />\n                  <path\n                    id=\"XMLID_895_\"\n                    d=\"M120.462,168h-40c-5.522,0-10,4.477-10,10v40c0,5.523,4.478,10,10,10h40c5.522,0,10-4.477,10-10v-40 C130.462,172.477,125.985,168,120.462,168z M110.462,208h-20v-20h20V208z\"\n                  />\n                  <path\n                    id=\"XMLID_896_\"\n                    d=\"M323.626,218c0,2.63,1.069,5.21,2.93,7.07s4.44,2.93,7.07,2.93s5.21-1.07,7.069-2.93 c1.87-1.86,2.931-4.44,2.931-7.07c0-2.63-1.061-5.21-2.931-7.07c-1.859-1.86-4.43-2.93-7.069-2.93c-2.63,0-5.21,1.07-7.07,2.93 C324.695,212.79,323.626,215.37,323.626,218z\"\n                  />\n                  <path\n                    id=\"XMLID_897_\"\n                    d=\"M293.629,208h-133.5c-5.522,0-10,4.477-10,10s4.478,10,10,10h133.5c5.522,0,10-4.477,10-10 S299.152,208,293.629,208z\"\n                  />\n                  <path\n                    id=\"XMLID_941_\"\n                    d=\"M120.462,272h-40c-5.522,0-10,4.477-10,10v40c0,5.523,4.478,10,10,10h40c5.522,0,10-4.477,10-10v-40 C130.462,276.477,125.985,272,120.462,272z M110.462,312h-20v-20h20V312z\"\n                  />\n                  <path\n                    id=\"XMLID_982_\"\n                    d=\"M120.462,376h-40c-5.522,0-10,4.477-10,10v40c0,5.523,4.478,10,10,10h40c5.522,0,10-4.477,10-10v-40 C130.462,380.477,125.985,376,120.462,376z M110.462,416h-20v-20h20V416z\"\n                  />\n                  <path\n                    id=\"XMLID_983_\"\n                    d=\"M246.004,416h-85.875c-5.522,0-10,4.477-10,10s4.478,10,10,10h85.875c5.522,0,10-4.477,10-10 S251.527,416,246.004,416z\"\n                  />\n                  <path\n                    id=\"XMLID_1111_\"\n                    d=\"M486.004,79.59c-8.791-5.076-19.033-6.423-28.836-3.796c-9.805,2.627-17.999,8.915-23.073,17.706 l-9.625,16.67l0,0.001l0,0.001l-13.465,23.323V34c0-18.748-15.252-34-34-34h-336c-18.748,0-34,15.252-34,34v444 c0,18.748,15.252,34,34,34h336c18.748,0,34-15.252,34-34V287c0-0.454-0.041-0.897-0.1-1.335l79.383-137.495l9.625-16.671 C510.389,113.353,504.15,90.067,486.004,79.59z M462.345,95.112c4.644-1.246,9.495-0.606,13.659,1.798 c8.596,4.963,11.551,15.993,6.588,24.589l-4.625,8.011l-31.177-18l4.625-8.011C453.82,99.335,457.7,96.356,462.345,95.112z M340.627,367.39l-31.177-18l127.34-220.56l31.177,18L340.627,367.39z M303.717,369.173l22.644,13.074l-27.213,20.988 L303.717,369.173z M391.004,478c0,7.72-6.28,14-14,14h-336c-7.72,0-14-6.28-14-14V34c0-7.72,6.28-14,14-14h336 c7.72,0,14,6.28,14,14v134c0,0.042,0.006,0.082,0.006,0.123L307.944,312H160.129c-5.522,0-10,4.477-10,10s4.478,10,10,10h136.268 l-9.267,16.05c-0.652,1.13-1.077,2.377-1.251,3.67l-9.786,72.95c-0.539,4.018,1.4,7.963,4.911,9.99 c1.554,0.897,3.279,1.34,4.999,1.34c2.164,0,4.319-0.702,6.108-2.082l58.283-44.95c1.033-0.797,1.9-1.789,2.553-2.918 l38.057-65.916V478z\"\n                  />\n                </g>\n              </g>\n            </g>\n          </svg>\n        </div>\n        <h3>{{ ver.description }}</h3>\n      </div>\n    </div>\n\n    <div\n      class=\"form\"\n      *ngIf=\"(this.pag == 2 || this.pag == 3) && this.globvar.userRole > 2\"\n    >\n      <div class=\"form1\">\n        <div class=\"fields\">\n          <h2>Titolo :</h2>\n          <input\n            type=\"text\"\n            name=\"Nome\"\n            placeholder=\"Scrivi qui il nome\"\n            [(ngModel)]=\"nome\"\n            autocomplete=\"off\"\n            required\n          />\n          <input\n            *ngIf=\"this.pag === 2\"\n            class=\"submitBTN cas\"\n            type=\"submit\"\n            value=\"Crea\"\n            (click)=\"crea(nome)\"\n          />\n          <button\n            *ngIf=\"this.pag > 2\"\n            class=\"submitBTN risultati\"\n            (click)=\"risultati()\"\n          >\n            Risultati\n          </button>\n          <input\n            *ngIf=\"this.pag === 3\"\n            class=\"submitBTN\"\n            type=\"submit\"\n            value=\"Salva\"\n            (click)=\"modifica()\"\n          />\n        </div>\n\n        <div class=\"fields\">\n          <h2>Stato :</h2>\n          <div\n            class=\"vis\"\n            *ngIf=\"verAttiva\"\n            (click)=\"this.pag === 3 ? cambiaVis() : null\"\n          >\n            <svg\n              version=\"1.1\"\n              id=\"Capa_1\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n              xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n              x=\"0px\"\n              y=\"0px\"\n              viewBox=\"0 0 511.992 511.992\"\n              style=\"enable-background: new 0 0 511.992 511.992;\"\n              xml:space=\"preserve\"\n            >\n              <g>\n                <g>\n                  <path\n                    d=\"M510.096,249.937c-4.032-5.867-100.928-143.275-254.101-143.275C124.56,106.662,7.44,243.281,2.512,249.105\n\t\t\tc-3.349,3.968-3.349,9.792,0,13.781C7.44,268.71,124.56,405.329,255.995,405.329S504.549,268.71,509.477,262.886\n\t\t\tC512.571,259.217,512.848,253.905,510.096,249.937z M255.995,383.996c-105.365,0-205.547-100.48-230.997-128\n\t\t\tc25.408-27.541,125.483-128,230.997-128c123.285,0,210.304,100.331,231.552,127.424\n\t\t\tC463.013,282.065,362.256,383.996,255.995,383.996z\"\n                  />\n                </g>\n              </g>\n              <g>\n                <g>\n                  <path\n                    d=\"M255.995,170.662c-47.061,0-85.333,38.272-85.333,85.333s38.272,85.333,85.333,85.333s85.333-38.272,85.333-85.333\n\t\t\tS303.056,170.662,255.995,170.662z M255.995,319.996c-35.285,0-64-28.715-64-64s28.715-64,64-64s64,28.715,64,64\n\t\t\tS291.28,319.996,255.995,319.996z\"\n                  />\n                </g>\n              </g>\n            </svg>\n            <h3>Attiva</h3>\n          </div>\n          <div\n            class=\"Nvis\"\n            *ngIf=\"!verAttiva\"\n            (click)=\"pag === 3 ? cambiaVis() : null\"\n          >\n            <svg\n              version=\"1.1\"\n              id=\"Capa_1\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n              xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n              x=\"0px\"\n              y=\"0px\"\n              viewBox=\"0 0 512.001 512.001\"\n              style=\"enable-background: new 0 0 512.001 512.001;\"\n              xml:space=\"preserve\"\n            >\n              <g>\n                <g>\n                  <path\n                    d=\"M316.332,195.662c-4.16-4.16-10.923-4.16-15.083,0c-4.16,4.16-4.16,10.944,0,15.083\n\t\t\tc12.075,12.075,18.752,28.139,18.752,45.248c0,35.285-28.715,64-64,64c-17.109,0-33.173-6.656-45.248-18.752\n\t\t\tc-4.16-4.16-10.923-4.16-15.083,0c-4.16,4.139-4.16,10.923,0,15.083c16.085,16.128,37.525,25.003,60.331,25.003\n\t\t\tc47.061,0,85.333-38.272,85.333-85.333C341.334,233.187,332.46,211.747,316.332,195.662z\"\n                  />\n                </g>\n              </g>\n              <g>\n                <g>\n                  <path\n                    d=\"M270.87,172.131c-4.843-0.853-9.792-1.472-14.869-1.472c-47.061,0-85.333,38.272-85.333,85.333\n\t\t\tc0,5.077,0.619,10.027,1.493,14.869c0.917,5.163,5.419,8.811,10.475,8.811c0.619,0,1.237-0.043,1.877-0.171\n\t\t\tc5.781-1.024,9.664-6.571,8.64-12.352c-0.661-3.627-1.152-7.317-1.152-11.157c0-35.285,28.715-64,64-64\n\t\t\tc3.84,0,7.531,0.491,11.157,1.131c5.675,1.152,11.328-2.859,12.352-8.64C280.534,178.702,276.652,173.155,270.87,172.131z\"\n                  />\n                </g>\n              </g>\n              <g>\n                <g>\n                  <path\n                    d=\"M509.462,249.102c-2.411-2.859-60.117-70.208-139.712-111.445c-5.163-2.709-11.669-0.661-14.379,4.587\n\t\t\tc-2.709,5.227-0.661,11.669,4.587,14.379c61.312,31.744,110.293,81.28,127.04,99.371c-25.429,27.541-125.504,128-230.997,128\n\t\t\tc-35.797,0-71.872-8.64-107.264-25.707c-5.248-2.581-11.669-0.341-14.229,4.971c-2.581,5.291-0.341,11.669,4.971,14.229\n\t\t\tc38.293,18.496,77.504,27.84,116.523,27.84c131.435,0,248.555-136.619,253.483-142.443\n\t\t\tC512.854,258.915,512.833,253.091,509.462,249.102z\"\n                  />\n                </g>\n              </g>\n              <g>\n                <g>\n                  <path\n                    d=\"M325.996,118.947c-24.277-8.171-47.829-12.288-69.995-12.288c-131.435,0-248.555,136.619-253.483,142.443\n\t\t\tc-3.115,3.669-3.371,9.003-0.597,12.992c1.472,2.112,36.736,52.181,97.856,92.779c1.813,1.216,3.84,1.792,5.888,1.792\n\t\t\tc3.435,0,6.827-1.664,8.875-4.8c3.264-4.885,1.92-11.52-2.987-14.763c-44.885-29.845-75.605-65.877-87.104-80.533\n\t\t\tc24.555-26.667,125.291-128.576,231.552-128.576c19.861,0,41.131,3.755,63.189,11.157c5.589,2.005,11.648-1.088,13.504-6.699\n\t\t\tC334.572,126.862,331.585,120.825,325.996,118.947z\"\n                  />\n                </g>\n              </g>\n              <g>\n                <g>\n                  <path\n                    d=\"M444.865,67.128c-4.16-4.16-10.923-4.16-15.083,0L67.116,429.795c-4.16,4.16-4.16,10.923,0,15.083\n\t\t\tc2.091,2.069,4.821,3.115,7.552,3.115c2.731,0,5.461-1.045,7.531-3.115L444.865,82.211\n\t\t\tC449.025,78.051,449.025,71.288,444.865,67.128z\"\n                  />\n                </g>\n              </g>\n            </svg>\n            <h3>Disattivata</h3>\n          </div>\n        </div>\n        <div class=\"tab\" *ngIf=\"this.pag === 3\">\n          <h2 class=\"hp2\">Aggiungi/Togli esercizi:</h2>\n          <div class=\"tabella\">\n            <div class=\"tabH\">\n              <h3 class=\"tH1\">Nome</h3>\n              <h3 class=\"tH2\">Liv.</h3>\n              <h3 class=\"tH3\">Num. Test Case</h3>\n            </div>\n            <div class=\"rows\">\n              <div\n                class=\"rowTab\"\n                *ngFor=\"let ex of this.esLista\"\n                (mouseenter)=\"ex.hovEff = '1'\"\n                (mouseleave)=\"ex.hovEff = '0'\"\n              >\n                <div class=\"miniLogo\"></div>\n                <div class=\"col1\">\n                  <div class=\"Titolo\">{{ ex.title }}</div>\n                  <div class=\"sottoTitolo\">{{ ex.short_title }}</div>\n                </div>\n                <div class=\"col2\">{{ ex.level }}</div>\n                <div class=\"col3\">\n                  {{ ex.test_cases }}\n                  <!--{{ this.catLista[ex.category_id - 1].description }}-->\n                </div>\n                <div class=\"add_rem_btn\">\n                  <div\n                    *ngIf=\"\n                      (ex.alreadyIN === '0' && ex.hovEff === '1') ||\n                      ex.alreadyIN === '1'\n                    \"\n                    [ngClass]=\"\n                      ex.alreadyIN === '1' && ex.hovEff === '1'\n                        ? 'emptyL'\n                        : 'addLogo'\n                    \"\n                    (click)=\"\n                      ex.alreadyIN === '1' && ex.hovEff === '1'\n                        ? null\n                        : aggiungiEs(ex.id)\n                    \"\n                  ></div>\n                  <div\n                    class=\"remLogo\"\n                    *ngIf=\"ex.hovEff === '1' && ex.alreadyIN === '1'\"\n                    (click)=\"togliEs(ex.id)\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"fields ddelete\" *ngIf=\"this.pag === 3\">\n          <h2>Vuoi eliminare questa verifica ?</h2>\n          <button class=\"submitBTN del\" (click)=\"elimina()\">\n            Elimina\n          </button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"pagRis\" *ngIf=\"this.pag === 4 && this.globvar.userRole > 2\">\n      <div class=\"btns\">\n        <button class=\"BTN ricarica\" (click)=\"getRisultati()\">Ricarica</button>\n        <button class=\"BTN download\" (click)=\"getRisultatiCSV()\">\n          Download CSV\n        </button>\n      </div>\n      <div class=\"table12\">\n        <div class=\"thead\">\n          <div class=\"vuoto\"><div class=\"logo1\"></div></div>\n          <div class=\"campo c1\">Cognome</div>\n          <div class=\"campo c1\">Nome</div>\n          <div class=\"campo c1\">Username</div>\n          <div class=\"campo c1\">Punteggio</div>\n          <div class=\"vuoto\"><div class=\"logo3\"></div></div>\n        </div>\n        <div class=\"rowss\" *ngFor=\"let stud of this.studsRis\">\n          <div class=\"layer1\">\n            <div class=\"vuoto\"><div class=\"logo1\"></div></div>\n            <div\n              class=\"campo\"\n              (click)=\"getTestDetailsStud(stud.ID, stud.name, stud.surname)\"\n            >\n              {{ stud.surname }}\n            </div>\n            <div\n              class=\"campo\"\n              (click)=\"getTestDetailsStud(stud.ID, stud.name, stud.surname)\"\n            >\n              {{ stud.name }}\n            </div>\n            <div\n              class=\"campo\"\n              (click)=\"getTestDetailsStud(stud.ID, stud.name, stud.surname)\"\n            >\n              {{ stud.username }}\n            </div>\n            <div\n              class=\"campo\"\n              (click)=\"getTestDetailsStud(stud.ID, stud.name, stud.surname)\"\n            >\n              {{ stud.result }}\n            </div>\n            <div class=\"vuoto\">\n              <div\n                class=\"logo2\"\n                (click)=\"\n                  getAllTestDetailsStud(stud.ID, stud.name, stud.surname)\n                \"\n              ></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"this.pag === 4 && this.globvar.userRole === 2\">\n      <div class=\"table1\" *ngIf=\"esLista.length > 0\">\n        <div\n          [ngClass]=\"this.globvar.userRole > 2 ? 'card' : 'card cardStud'\"\n          *ngFor=\"let ex of this.esLista\"\n          (click)=\"pagProblema(ex.id, ex.title)\"\n        >\n          <div\n            class=\"eyeLogo\"\n            *ngIf=\"this.globvar.userRole === 3 && ex.is_public === '1'\"\n          ></div>\n          <div\n            [style.position]=\"\n              this.globvar.userRole === 3 && ex.is_public === '1'\n                ? 'null'\n                : 'relative'\n            \"\n            [style.margin-top]=\"\n              this.globvar.userRole === 3 && ex.is_public === '1'\n                ? null\n                : '25px'\n            \"\n          >\n            <svg\n              class=\"exlogo\"\n              version=\"1.1\"\n              id=\"Capa_1\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n              xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n              x=\"0px\"\n              y=\"0px\"\n              width=\"522.468px\"\n              height=\"522.469px\"\n              viewBox=\"0 0 522.468 522.469\"\n              style=\"enable-background: new 0 0 522.468 522.469;\"\n              xml:space=\"preserve\"\n            >\n              <g>\n                <g>\n                  <path\n                    d=\"M325.762,70.513l-17.706-4.854c-2.279-0.76-4.524-0.521-6.707,0.715c-2.19,1.237-3.669,3.094-4.429,5.568L190.426,440.53 c-0.76,2.475-0.522,4.809,0.715,6.995c1.237,2.19,3.09,3.665,5.568,4.425l17.701,4.856c2.284,0.766,4.521,0.526,6.71-0.712 c2.19-1.243,3.666-3.094,4.425-5.564L332.042,81.936c0.759-2.474,0.523-4.808-0.716-6.999 C330.088,72.747,328.237,71.272,325.762,70.513z\"\n                  />\n                  <path\n                    d=\"M166.167,142.465c0-2.474-0.953-4.665-2.856-6.567l-14.277-14.276c-1.903-1.903-4.093-2.857-6.567-2.857 s-4.665,0.955-6.567,2.857L2.856,254.666C0.95,256.569,0,258.759,0,261.233c0,2.474,0.953,4.664,2.856,6.566l133.043,133.044 c1.902,1.906,4.089,2.854,6.567,2.854s4.665-0.951,6.567-2.854l14.277-14.268c1.903-1.902,2.856-4.093,2.856-6.57 c0-2.471-0.953-4.661-2.856-6.563L51.107,261.233l112.204-112.201C165.217,147.13,166.167,144.939,166.167,142.465z\"\n                  />\n                  <path\n                    d=\"M519.614,254.663L386.567,121.619c-1.902-1.902-4.093-2.857-6.563-2.857c-2.478,0-4.661,0.955-6.57,2.857l-14.271,14.275 c-1.902,1.903-2.851,4.09-2.851,6.567s0.948,4.665,2.851,6.567l112.206,112.204L359.163,373.442 c-1.902,1.902-2.851,4.093-2.851,6.563c0,2.478,0.948,4.668,2.851,6.57l14.271,14.268c1.909,1.906,4.093,2.854,6.57,2.854 c2.471,0,4.661-0.951,6.563-2.854L519.614,267.8c1.903-1.902,2.854-4.096,2.854-6.57 C522.468,258.755,521.517,256.565,519.614,254.663z\"\n                  />\n                </g>\n              </g>\n            </svg>\n          </div>\n          <h3\n            [style.margin-top]=\"\n              this.pag === 4 && this.globvar.userRole === 2 ? '0px' : '20px'\n            \"\n          >\n            {{ ex.title }}\n          </h3>\n        </div>\n      </div>\n    </div>\n\n    <div\n      *ngIf=\"this.pag > 4 && this.globvar.userRole === 2\"\n      class=\"pagEsercizio\"\n    >\n      <iframe\n        *ngIf=\"this.pag === 5\"\n        [attr.src]=\"this.filePDF\"\n        type=\"application/pdf\"\n      ></iframe>\n\n      <div *ngIf=\"this.pag === 6\" class=\"submissionss\">\n        <h2>Carica qui il tuo codice:</h2>\n        <h3>(il file deve avere l'estensione .c)</h3>\n        <input\n          type=\"file\"\n          name=\"file\"\n          id=\"file\"\n          class=\"inputfile\"\n          (change)=\"changeTask($event.target.files)\"\n        />\n        <label class=\"btn-2\" for=\"file\">{{ filemsg }}</label>\n        <input\n          class=\"submitBTN\"\n          type=\"submit\"\n          value=\"Carica\"\n          (click)=\"caricaSub()\"\n        />\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/staticPages/about/about.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staticPages/about/about.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"head-about\">\n    <h2>About</h2>\n  </div>\n  <p>\n    Il Correttore Automatico è una web app svilpuppata dal professor Bugatti\n    insieme ad alcuni studenti del Galilei di Crema (5IA - 2020).\n  </p>\n  <p>\n    Questo correttore ha lo scopo di creare un ambiente web dove permettere ai\n    propri studenti di affrontare dei problemi tipicamente algoritmici e\n    sottoporre le proprie soluzioni, nella forma di codice C/C++, ricevendo una\n    valutazione su quanti casi di test vengono risolti correttamente, sullo\n    stile delle Olimpiadi di Informatica o di altre gare online (Google Code\n    Jam, Codeforces, ecc.).\n  </p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/staticPages/homepage/homepage.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staticPages/homepage/homepage.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-body\">\n  <div class=\"firstLine\">\n    <div class=\"logo\"></div>\n    <div class=\"titlediv\">\n      <h1>{{ title }}</h1>\n    </div>\n  </div>\n  <div class=\"secLine\">\n    <div class=\"mysign\">\n      Powered by\n      <p>ViK</p>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/staticPages/login/login.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staticPages/login/login.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-body\">\n  <form>\n    <div class=\"login-form\">\n      <div class=\"logo\"></div>\n      <div class=\"title\">Login</div>\n      <div class=\"subtitle\">Beta</div>\n      <div class=\"fields\">\n        <div class=\"username\">\n          <svg viewBox=\"-42 0 512 512.001\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path\n              d=\"m210.351562 246.632812c33.882813 0 63.21875-12.152343 87.195313-36.128906 23.96875-23.972656 36.125-53.304687 36.125-87.191406 0-33.875-12.152344-63.210938-36.128906-87.191406-23.976563-23.96875-53.3125-36.121094-87.191407-36.121094-33.886718 0-63.21875 12.152344-87.191406 36.125s-36.128906 53.308594-36.128906 87.1875c0 33.886719 12.15625 63.222656 36.128906 87.195312 23.980469 23.96875 53.316406 36.125 87.191406 36.125zm-65.972656-189.292968c18.394532-18.394532 39.972656-27.335938 65.972656-27.335938 25.996094 0 47.578126 8.941406 65.976563 27.335938 18.394531 18.398437 27.339844 39.980468 27.339844 65.972656 0 26-8.945313 47.578125-27.339844 65.976562-18.398437 18.398438-39.980469 27.339844-65.976563 27.339844-25.992187 0-47.570312-8.945312-65.972656-27.339844-18.398437-18.394531-27.34375-39.976562-27.34375-65.976562 0-25.992188 8.945313-47.574219 27.34375-65.972656zm0 0\"\n            />\n            <path\n              d=\"m426.128906 393.703125c-.691406-9.976563-2.089844-20.859375-4.148437-32.351563-2.078125-11.578124-4.753907-22.523437-7.957031-32.527343-3.3125-10.339844-7.808594-20.550781-13.375-30.335938-5.769532-10.15625-12.550782-19-20.160157-26.277343-7.957031-7.613282-17.699219-13.734376-28.964843-18.199219-11.226563-4.441407-23.667969-6.691407-36.976563-6.691407-5.226563 0-10.28125 2.144532-20.042969 8.5-6.007812 3.917969-13.035156 8.449219-20.878906 13.460938-6.707031 4.273438-15.792969 8.277344-27.015625 11.902344-10.949219 3.542968-22.066406 5.339844-33.042969 5.339844-10.96875 0-22.085937-1.796876-33.042968-5.339844-11.210938-3.621094-20.300782-7.625-26.996094-11.898438-7.769532-4.964844-14.800782-9.496094-20.898438-13.46875-9.753906-6.355468-14.808594-8.5-20.035156-8.5-13.3125 0-25.75 2.253906-36.972656 6.699219-11.257813 4.457031-21.003906 10.578125-28.96875 18.199219-7.609375 7.28125-14.390625 16.121094-20.15625 26.273437-5.558594 9.785157-10.058594 19.992188-13.371094 30.339844-3.199219 10.003906-5.875 20.945313-7.953125 32.523437-2.0625 11.476563-3.457031 22.363282-4.148437 32.363282-.679688 9.777344-1.023438 19.953125-1.023438 30.234375 0 26.726562 8.496094 48.363281 25.25 64.320312 16.546875 15.746094 38.4375 23.730469 65.066406 23.730469h246.53125c26.621094 0 48.511719-7.984375 65.0625-23.730469 16.757813-15.945312 25.253906-37.589843 25.253906-64.324219-.003906-10.316406-.351562-20.492187-1.035156-30.242187zm-44.90625 72.828125c-10.933594 10.40625-25.449218 15.464844-44.378906 15.464844h-246.527344c-18.933594 0-33.449218-5.058594-44.378906-15.460938-10.722656-10.207031-15.933594-24.140625-15.933594-42.585937 0-9.59375.316406-19.066407.949219-28.160157.617187-8.921874 1.878906-18.722656 3.75-29.136718 1.847656-10.285156 4.199219-19.9375 6.996094-28.675782 2.683593-8.378906 6.34375-16.675781 10.882812-24.667968 4.332031-7.617188 9.316407-14.152344 14.816407-19.417969 5.144531-4.925781 11.628906-8.957031 19.269531-11.980469 7.066406-2.796875 15.007812-4.328125 23.628906-4.558594 1.050781.558594 2.921875 1.625 5.953125 3.601563 6.167969 4.019531 13.277344 8.605469 21.136719 13.625 8.859375 5.648437 20.273437 10.75 33.910156 15.152344 13.941406 4.507812 28.160156 6.796875 42.273437 6.796875 14.113282 0 28.335938-2.289063 42.269532-6.792969 13.648437-4.410156 25.058594-9.507813 33.929687-15.164063 8.042969-5.140624 14.953125-9.59375 21.121094-13.617187 3.03125-1.972656 4.902344-3.042969 5.953125-3.601563 8.625.230469 16.566406 1.761719 23.636719 4.558594 7.636719 3.023438 14.121093 7.058594 19.265625 11.980469 5.5 5.261719 10.484375 11.796875 14.816406 19.421875 4.542969 7.988281 8.207031 16.289062 10.886719 24.660156 2.800781 8.75 5.15625 18.398438 7 28.675782 1.867187 10.433593 3.132812 20.238281 3.75 29.144531v.007812c.636719 9.058594.957031 18.527344.960937 28.148438-.003906 18.449219-5.214844 32.378906-15.9375 42.582031zm0 0\"\n            />\n          </svg>\n          <input\n            type=\"text\"\n            name=\"usrnm\"\n            placeholder=\"Username\"\n            [(ngModel)]=\"user\"\n            autocomplete=\"off\"\n          />\n        </div>\n        <div class=\"password\">\n          <svg class=\"svg-icon\" viewBox=\"0 0 20 20\">\n            <path\n              d=\"M17.308,7.564h-1.993c0-2.929-2.385-5.314-5.314-5.314S4.686,4.635,4.686,7.564H2.693c-0.244,0-0.443,0.2-0.443,0.443v9.3c0,0.243,0.199,0.442,0.443,0.442h14.615c0.243,0,0.442-0.199,0.442-0.442v-9.3C17.75,7.764,17.551,7.564,17.308,7.564 M10,3.136c2.442,0,4.43,1.986,4.43,4.428H5.571C5.571,5.122,7.558,3.136,10,3.136 M16.865,16.864H3.136V8.45h13.729V16.864z M10,10.664c-0.854,0-1.55,0.696-1.55,1.551c0,0.699,0.467,1.292,1.107,1.485v0.95c0,0.243,0.2,0.442,0.443,0.442s0.443-0.199,0.443-0.442V13.7c0.64-0.193,1.106-0.786,1.106-1.485C11.55,11.36,10.854,10.664,10,10.664 M10,12.878c-0.366,0-0.664-0.298-0.664-0.663c0-0.366,0.298-0.665,0.664-0.665c0.365,0,0.664,0.299,0.664,0.665C10.664,12.58,10.365,12.878,10,12.878\"\n            ></path></svg\n          ><input\n            class=\"inp-psw\"\n            type=\"password\"\n            name=\"psw\"\n            placeholder=\"Password\"\n            [(ngModel)]=\"pass\"\n            autocomplete\n          />\n        </div>\n        <h4 *ngIf=\"bool\">Erroreee di accesso</h4>\n      </div>\n      <input\n        type=\"submit\"\n        class=\"signin-btn\"\n        (click)=\"ciaoO()\"\n        value=\"LOG IN\"\n      />\n      <!-- routerLink=\"/\"\n        <div class=\"link\"><a href=\"#\">Forgot password?</a></div>\n    <div class=\"mysign\">\n      Powered by\n      <p>ViK</p>\n    </div>-->\n    </div>\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-navbar.scss":
/*!*********************************!*\
  !*** ./src/app/app-navbar.scss ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Montserrat&display=swap\");\n.MainContainer {\n  display: flex;\n  flex-flow: column;\n}\n.MainContainer header {\n  height: 5vh;\n  padding-top: 10px;\n  padding-bottom: 5px;\n}\n.MainContainer header .navbar {\n  width: 80vw;\n  margin: 0 auto;\n  display: flex;\n}\n.MainContainer header .navbar .logo {\n  width: 30px;\n  height: 30px;\n  background-image: url('code.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  outline: none;\n}\n.MainContainer header .navbar .logo:hover {\n  transform: scale(1.1);\n}\n.MainContainer header .navbar .nav-links {\n  float: left;\n  margin-left: auto;\n  padding-top: 1vh;\n}\n.MainContainer header .navbar .nav-links ul {\n  list-style-type: none;\n  margin: 0;\n  display: flex;\n  text-align: right;\n}\n.MainContainer header .navbar .nav-links ul li {\n  margin-left: 4vw;\n  text-transform: capitalize;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n}\n.MainContainer header .navbar .nav-links ul li a {\n  color: white;\n  text-decoration: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.MainContainer header .navbar .nav-links ul li a:hover {\n  color: rgba(255, 255, 255, 0.829);\n  font-weight: 500;\n}\n.MainContainer header .navbar .nav-links ul li .loginICON {\n  width: 20px;\n  height: 20px;\n  outline: none;\n}\n.MainContainer header .navbar .nav-links ul li .loginICON svg {\n  width: 20px;\n  height: 20px;\n  fill: white;\n  cursor: pointer;\n}\n.MainContainer header .navbar .nav-links ul li .loginICON svg:hover {\n  fill: rgba(255, 255, 255, 0.829);\n  font-weight: 500;\n}\n.MainContainer header .navbar .nav-links ul li .outICON {\n  width: 20px;\n  height: 20px;\n  outline: none;\n}\n.MainContainer header .navbar .nav-links ul li .outICON svg {\n  width: 20px;\n  height: 20px;\n  fill: white;\n  cursor: pointer;\n}\n.MainContainer header .navbar .nav-links ul li .outICON svg:hover {\n  fill: rgba(255, 255, 255, 0.829);\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFNDSE9PTFxcQ1BFICsgTW9yZVxcNcKwU3VwZXJpb3JlXFxQcm9nZXR0by1GVkFBXFxOZXdGcm9udGVuZC9zcmNcXGFwcFxcYXBwLW5hdmJhci5zY3NzIiwic3JjL2FwcC9hcHAtbmF2YmFyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsOEVBQUE7QUFJUjtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQ0ZGO0FESUU7RUFFRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0hKO0FES0k7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUVBLGFBQUE7QUNKTjtBREtNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0FDSFI7QURJUTtFQUNFLHFCQUFBO0FDRlY7QURNTTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDSlI7QURLUTtFQUdFLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ0xWO0FETVU7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0FDSlo7QURLWTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDSGQ7QURJYztFQUNFLGlDQUFBO0VBQ0EsZ0JBQUE7QUNGaEI7QURLWTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0hkO0FESWM7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRmhCO0FER2dCO0VBQ0UsZ0NBQUE7RUFDQSxnQkFBQTtBQ0RsQjtBREtZO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDSGQ7QURJYztFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNGaEI7QURHZ0I7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0FDRGxCIiwiZmlsZSI6InNyYy9hcHAvYXBwLW5hdmJhci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG4kcHJpbWFyeTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMTQ4OGNjLCAjMmIzMmIyKTtcclxuXHJcbi5NYWluQ29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG5cclxuICBoZWFkZXIge1xyXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGhlaWdodDogNXZoO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG5cclxuICAgIC5uYXZiYXIge1xyXG4gICAgICB3aWR0aDogODB2dztcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAubG9nbyB7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2ltYWdlcy9jb2RlLnBuZ1wiKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLm5hdi1saW5rcyB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDF2aDtcclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICAvL3BhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgICAvL3BhZGRpbmctbGVmdDogMTIwcHg7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0dnc7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODI5KTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sb2dpbklDT04ge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIGZpbGw6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgIGZpbGw6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44MjkpO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3V0SUNPTiB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgZmlsbDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgZmlsbDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgyOSk7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwXCIpO1xuLk1haW5Db250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbn1cbi5NYWluQ29udGFpbmVyIGhlYWRlciB7XG4gIGhlaWdodDogNXZoO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5NYWluQ29udGFpbmVyIGhlYWRlciAubmF2YmFyIHtcbiAgd2lkdGg6IDgwdnc7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLk1haW5Db250YWluZXIgaGVhZGVyIC5uYXZiYXIgLmxvZ28ge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9pbWFnZXMvY29kZS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5NYWluQ29udGFpbmVyIGhlYWRlciAubmF2YmFyIC5sb2dvOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuLk1haW5Db250YWluZXIgaGVhZGVyIC5uYXZiYXIgLm5hdi1saW5rcyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgcGFkZGluZy10b3A6IDF2aDtcbn1cbi5NYWluQ29udGFpbmVyIGhlYWRlciAubmF2YmFyIC5uYXYtbGlua3MgdWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uTWFpbkNvbnRhaW5lciBoZWFkZXIgLm5hdmJhciAubmF2LWxpbmtzIHVsIGxpIHtcbiAgbWFyZ2luLWxlZnQ6IDR2dztcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLk1haW5Db250YWluZXIgaGVhZGVyIC5uYXZiYXIgLm5hdi1saW5rcyB1bCBsaSBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLk1haW5Db250YWluZXIgaGVhZGVyIC5uYXZiYXIgLm5hdi1saW5rcyB1bCBsaSBhOmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44MjkpO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLk1haW5Db250YWluZXIgaGVhZGVyIC5uYXZiYXIgLm5hdi1saW5rcyB1bCBsaSAubG9naW5JQ09OIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5NYWluQ29udGFpbmVyIGhlYWRlciAubmF2YmFyIC5uYXYtbGlua3MgdWwgbGkgLmxvZ2luSUNPTiBzdmcge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBmaWxsOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLk1haW5Db250YWluZXIgaGVhZGVyIC5uYXZiYXIgLm5hdi1saW5rcyB1bCBsaSAubG9naW5JQ09OIHN2Zzpob3ZlciB7XG4gIGZpbGw6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44MjkpO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLk1haW5Db250YWluZXIgaGVhZGVyIC5uYXZiYXIgLm5hdi1saW5rcyB1bCBsaSAub3V0SUNPTiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uTWFpbkNvbnRhaW5lciBoZWFkZXIgLm5hdmJhciAubmF2LWxpbmtzIHVsIGxpIC5vdXRJQ09OIHN2ZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGZpbGw6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uTWFpbkNvbnRhaW5lciBoZWFkZXIgLm5hdmJhciAubmF2LWxpbmtzIHVsIGxpIC5vdXRJQ09OIHN2Zzpob3ZlciB7XG4gIGZpbGw6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44MjkpO1xuICBmb250LXdlaWdodDogNTAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _staticPages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staticPages/homepage/homepage.component */ "./src/app/staticPages/homepage/homepage.component.ts");
/* harmony import */ var _staticPages_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./staticPages/about/about.component */ "./src/app/staticPages/about/about.component.ts");
/* harmony import */ var _dynamicPages_exercises_exercises_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dynamicPages/exercises/exercises.component */ "./src/app/dynamicPages/exercises/exercises.component.ts");
/* harmony import */ var _dynamicPages_gruppi_gruppi_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dynamicPages/gruppi/gruppi.component */ "./src/app/dynamicPages/gruppi/gruppi.component.ts");
/* harmony import */ var _dynamicPages_docenti_docenti_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dynamicPages/docenti/docenti.component */ "./src/app/dynamicPages/docenti/docenti.component.ts");
/* harmony import */ var _dynamicPages_studenti_studenti_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dynamicPages/studenti/studenti.component */ "./src/app/dynamicPages/studenti/studenti.component.ts");
/* harmony import */ var _dynamicPages_verifiche_verifiche_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dynamicPages/verifiche/verifiche.component */ "./src/app/dynamicPages/verifiche/verifiche.component.ts");
/* harmony import */ var _staticPages_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./staticPages/login/login.component */ "./src/app/staticPages/login/login.component.ts");
/* harmony import */ var _dynamicPages_niente_niente_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dynamicPages/niente/niente.component */ "./src/app/dynamicPages/niente/niente.component.ts");
/* harmony import */ var _shared_guards_g1_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/guards/g1.guard */ "./src/shared/guards/g1.guard.ts");
/* harmony import */ var _shared_guards_g2_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/guards/g2.guard */ "./src/shared/guards/g2.guard.ts");
/* harmony import */ var _shared_guards_g3_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/guards/g3.guard */ "./src/shared/guards/g3.guard.ts");
/* harmony import */ var _shared_guards_g4_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/guards/g4.guard */ "./src/shared/guards/g4.guard.ts");
/* harmony import */ var _shared_guards_g5_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/guards/g5.guard */ "./src/shared/guards/g5.guard.ts");

















const routes = [
    { path: "", component: _staticPages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"], pathMatch: "full" },
    //da sistemare
    { path: "docenti", component: _dynamicPages_docenti_docenti_component__WEBPACK_IMPORTED_MODULE_7__["DocentiComponent"], canActivate: [_shared_guards_g1_guard__WEBPACK_IMPORTED_MODULE_12__["G1Guard"]] },
    { path: "studenti", component: _dynamicPages_studenti_studenti_component__WEBPACK_IMPORTED_MODULE_8__["StudentiComponent"], canActivate: [_shared_guards_g2_guard__WEBPACK_IMPORTED_MODULE_13__["G2Guard"]] },
    { path: "gruppi", component: _dynamicPages_gruppi_gruppi_component__WEBPACK_IMPORTED_MODULE_6__["GruppiComponent"], canActivate: [_shared_guards_g3_guard__WEBPACK_IMPORTED_MODULE_14__["G3Guard"]] },
    {
        path: "verifiche",
        component: _dynamicPages_verifiche_verifiche_component__WEBPACK_IMPORTED_MODULE_9__["VerificheComponent"],
        canActivate: [_shared_guards_g5_guard__WEBPACK_IMPORTED_MODULE_16__["G5Guard"]],
    },
    { path: "sleep", component: _dynamicPages_niente_niente_component__WEBPACK_IMPORTED_MODULE_11__["NienteComponent"] },
    { path: "esercizi", component: _dynamicPages_exercises_exercises_component__WEBPACK_IMPORTED_MODULE_5__["ExercisesComponent"] },
    { path: "notFound", component: _dynamicPages_niente_niente_component__WEBPACK_IMPORTED_MODULE_11__["NienteComponent"] },
    ///
    { path: "login", component: _staticPages_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], canActivate: [_shared_guards_g4_guard__WEBPACK_IMPORTED_MODULE_15__["G4Guard"]] },
    { path: "about", component: _staticPages_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: "**", redirectTo: "/notFound" },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_global_var_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/global-var.service */ "./src/shared/global-var.service.ts");
/* harmony import */ var _shared_api_call_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/api-call.service */ "./src/shared/api-call.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AppComponent = class AppComponent {
    constructor(globvar, apicalls, router) {
        this.globvar = globvar;
        this.apicalls = apicalls;
        this.router = router;
        this.title = "NewFrontend";
        this.colGrad = [
            "linear-gradient(55deg, #030303, #303030)",
            "linear-gradient(55deg, #030303, #004e92)",
            "linear-gradient(55deg, #001510 15%, #00af8f)",
            "linear-gradient(55deg, #030303 15%, #007324)",
        ];
        this.globvar.usrRoleChanger.subscribe((value) => {
            //console.log("Finalemente: " + value);
            this.role = value;
        });
        let num = Number(sessionStorage.getItem("userRole"));
        if (num != 0) {
            //this.role = Number(sessionStorage.getItem("userRole"));
            this.globvar.userID = sessionStorage.getItem("userID");
            this.globvar.userName = sessionStorage.getItem("userName");
            this.globvar.userRole = Number(sessionStorage.getItem("userRole"));
            this.role = this.globvar.userRole;
        }
        if (num === 0 || num === 1) {
            this.role = 1;
            this.globvar.userRole = this.role;
        }
        /*console.log(
          "roleID: " +
            num +
            "  userID:" +
            sessionStorage.getItem("userID") +
            "  userName:" +
            sessionStorage.getItem("userName")
        );
        console.log("start : " + this.role);*/
    }
    ngOnInit() {
        this.updateSession();
    }
    ngOnChanges(changes) {
        throw new Error("Method not implemented.");
    }
    updateSession() {
        let num = Number(sessionStorage.getItem("userRole"));
        if (num === 0 || num === 1) {
            this.role = 1;
            this.globvar.userRole = this.role;
        }
        else {
            this.role = num;
            this.globvar.userRole = this.role;
            this.globvar.userID = sessionStorage.getItem("userID");
        }
        //console.log("session : " + this.role);
    }
    doLogout() {
        let ress = this.apicalls.getLogout();
        ress.then(() => {
            //console.log("OKK, sei stato disconnesso");
            this.globvar.userID = "";
            this.globvar.userName = "";
            this.globvar.userRole = 1;
            sessionStorage.setItem("userID", this.globvar.userID);
            sessionStorage.setItem("userName", this.globvar.userName);
            sessionStorage.setItem("userRole", String(this.globvar.userRole));
            this.updateSession();
            this.router.navigateByUrl("");
        });
    }
    getPubExercises() {
        //this.apicalls.getPubProblems();
    }
};
AppComponent.ctorParameters = () => [
    { type: _shared_global_var_service__WEBPACK_IMPORTED_MODULE_2__["GlobalVarService"] },
    { type: _shared_api_call_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app-navbar.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app-navbar.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app-navbar.scss */ "./src/app/app-navbar.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _staticPages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./staticPages/homepage/homepage.component */ "./src/app/staticPages/homepage/homepage.component.ts");
/* harmony import */ var _staticPages_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./staticPages/about/about.component */ "./src/app/staticPages/about/about.component.ts");
/* harmony import */ var _dynamicPages_exercises_exercises_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dynamicPages/exercises/exercises.component */ "./src/app/dynamicPages/exercises/exercises.component.ts");
/* harmony import */ var _staticPages_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./staticPages/login/login.component */ "./src/app/staticPages/login/login.component.ts");
/* harmony import */ var _dynamicPages_verifiche_verifiche_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dynamicPages/verifiche/verifiche.component */ "./src/app/dynamicPages/verifiche/verifiche.component.ts");
/* harmony import */ var _dynamicPages_studenti_studenti_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dynamicPages/studenti/studenti.component */ "./src/app/dynamicPages/studenti/studenti.component.ts");
/* harmony import */ var _dynamicPages_docenti_docenti_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dynamicPages/docenti/docenti.component */ "./src/app/dynamicPages/docenti/docenti.component.ts");
/* harmony import */ var _dynamicPages_gruppi_gruppi_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dynamicPages/gruppi/gruppi.component */ "./src/app/dynamicPages/gruppi/gruppi.component.ts");
/* harmony import */ var _dynamicPages_niente_niente_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dynamicPages/niente/niente.component */ "./src/app/dynamicPages/niente/niente.component.ts");
/* harmony import */ var _shared_global_var_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/global-var.service */ "./src/shared/global-var.service.ts");
/* harmony import */ var _shared_api_call_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/api-call.service */ "./src/shared/api-call.service.ts");
/* harmony import */ var _shared_guards_g1_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shared/guards/g1.guard */ "./src/shared/guards/g1.guard.ts");
/* harmony import */ var _shared_guards_g2_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../shared/guards/g2.guard */ "./src/shared/guards/g2.guard.ts");
/* harmony import */ var _shared_guards_g3_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../shared/guards/g3.guard */ "./src/shared/guards/g3.guard.ts");
/* harmony import */ var _shared_guards_g4_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../shared/guards/g4.guard */ "./src/shared/guards/g4.guard.ts");
/* harmony import */ var _shared_guards_g5_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../shared/guards/g5.guard */ "./src/shared/guards/g5.guard.ts");






//component and pagine










//services and globvar







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _staticPages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__["HomepageComponent"],
            _staticPages_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
            _dynamicPages_exercises_exercises_component__WEBPACK_IMPORTED_MODULE_9__["ExercisesComponent"],
            _staticPages_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            _dynamicPages_verifiche_verifiche_component__WEBPACK_IMPORTED_MODULE_11__["VerificheComponent"],
            _dynamicPages_studenti_studenti_component__WEBPACK_IMPORTED_MODULE_12__["StudentiComponent"],
            _dynamicPages_docenti_docenti_component__WEBPACK_IMPORTED_MODULE_13__["DocentiComponent"],
            _dynamicPages_gruppi_gruppi_component__WEBPACK_IMPORTED_MODULE_14__["GruppiComponent"],
            _dynamicPages_niente_niente_component__WEBPACK_IMPORTED_MODULE_15__["NienteComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        ],
        providers: [
            _shared_global_var_service__WEBPACK_IMPORTED_MODULE_16__["GlobalVarService"],
            _shared_api_call_service__WEBPACK_IMPORTED_MODULE_17__["ApiCallService"],
            _shared_guards_g1_guard__WEBPACK_IMPORTED_MODULE_18__["G1Guard"],
            _shared_guards_g2_guard__WEBPACK_IMPORTED_MODULE_19__["G2Guard"],
            _shared_guards_g3_guard__WEBPACK_IMPORTED_MODULE_20__["G3Guard"],
            _shared_guards_g4_guard__WEBPACK_IMPORTED_MODULE_21__["G4Guard"],
            _shared_guards_g5_guard__WEBPACK_IMPORTED_MODULE_22__["G5Guard"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/dynamicPages/docenti/docenti.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/dynamicPages/docenti/docenti.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-body .main-div .table1 .card .doclogo {\n  width: 70px;\n  height: 70px;\n  margin-top: 20px;\n  background-image: url('teacher.svg');\n  background-size: contain;\n  background-repeat: no-repeat;\n  fill: white;\n}\n.main-body .main-div .table1 .card h3 {\n  color: black;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 15px;\n  font-weight: 700;\n  text-align: center;\n  margin-top: 20px;\n}\n.main-body .main-div form .form1 .fields div {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  padding: 10px;\n  align-items: center;\n}\n.main-body .main-div form .form1 .fields div svg {\n  margin-right: 20px;\n  width: 28px;\n  height: 28px;\n}\n.main-body .main-div form .form1 .fields .vis svg {\n  fill: #000;\n}\n.main-body .main-div form .form1 .fields .Nvis svg {\n  fill: #000;\n}\n.main-body .main-div form .form1 .fields input {\n  width: 60%;\n  font-size: 16px;\n}\n.main-body .main-div form .form1 .fields .submitBTN {\n  width: 25%;\n  padding: 24px;\n  line-height: 2px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHluYW1pY1BhZ2VzL2RvY2VudGkvRDpcXFNDSE9PTFxcQ1BFICsgTW9yZVxcNcKwU3VwZXJpb3JlXFxQcm9nZXR0by1GVkFBXFxOZXdGcm9udGVuZC9zcmNcXGFwcFxcZHluYW1pY1BhZ2VzXFxkb2NlbnRpXFxkb2NlbnRpLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9keW5hbWljUGFnZXMvZG9jZW50aS9kb2NlbnRpLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7QUNIVjtBRE1RO0VBQ0UsWUFBQTtFQUNBLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0pWO0FEV1U7RUFDRSxlQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDVFo7QURVWTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNSZDtBRFlZO0VBQ0UsVUFBQTtBQ1ZkO0FEZVk7RUFDRSxVQUFBO0FDYmQ7QURnQlU7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQ2RaO0FEZ0JVO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ2RaIiwiZmlsZSI6InNyYy9hcHAvZHluYW1pY1BhZ2VzL2RvY2VudGkvZG9jZW50aS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWJvZHkge1xyXG4gIC5tYWluLWRpdiB7XHJcbiAgICAudGFibGUxIHtcclxuICAgICAgLmNhcmQge1xyXG4gICAgICAgIC5kb2Nsb2dvIHtcclxuICAgICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9pbWFnZXMvdGVhY2hlci5zdmcpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgIGZpbGw6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3JtIHtcclxuICAgICAgLmZvcm0xIHtcclxuICAgICAgICAuZmllbGRzIHtcclxuICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDI4cHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudmlzIHtcclxuICAgICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgICBmaWxsOiAjMDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLk52aXMge1xyXG4gICAgICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICAgIGZpbGw6ICMwMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN1Ym1pdEJUTiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAgYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIubWFpbi1ib2R5IC5tYWluLWRpdiAudGFibGUxIC5jYXJkIC5kb2Nsb2dvIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2ltYWdlcy90ZWFjaGVyLnN2Zyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZmlsbDogd2hpdGU7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAudGFibGUxIC5jYXJkIGgzIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgZm9ybSAuZm9ybTEgLmZpZWxkcyBkaXYge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiBmb3JtIC5mb3JtMSAuZmllbGRzIGRpdiBzdmcge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiBmb3JtIC5mb3JtMSAuZmllbGRzIC52aXMgc3ZnIHtcbiAgZmlsbDogIzAwMDtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IGZvcm0gLmZvcm0xIC5maWVsZHMgLk52aXMgc3ZnIHtcbiAgZmlsbDogIzAwMDtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IGZvcm0gLmZvcm0xIC5maWVsZHMgaW5wdXQge1xuICB3aWR0aDogNjAlO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiBmb3JtIC5mb3JtMSAuZmllbGRzIC5zdWJtaXRCVE4ge1xuICB3aWR0aDogMjUlO1xuICBwYWRkaW5nOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMnB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/dynamicPages/docenti/docenti.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/dynamicPages/docenti/docenti.component.ts ***!
  \***********************************************************/
/*! exports provided: DocentiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocentiComponent", function() { return DocentiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/api-call.service */ "./src/shared/api-call.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.scss */ "./node_modules/sweetalert2/src/sweetalert2.scss");





let DocentiComponent = class DocentiComponent {
    constructor(apicalls) {
        this.apicalls = apicalls;
        this.docenti = [];
        this.title = "Docenti";
        this.pag = 1;
        //variabili form
        this.nome = "";
        this.cognome = "";
        this.usr = "";
        this.psw = "";
        this.psw1 = "";
        this.vis1 = false;
        this.vis2 = false;
    }
    ngOnInit() {
        this.docenti = ["Paolo Fuorvianti"];
        this.updateElenco();
    }
    changeVis(sel1) {
        if (sel1 === "1")
            this.vis1 = !this.vis1;
        else
            this.vis2 = !this.vis2;
    }
    pagElenco() {
        this.pag = 1;
        this.title = "Docenti";
        this.resetForm();
        this.updateElenco();
    }
    updateElenco() {
        let riss1 = [];
        let riss = this.apicalls.getTeachers();
        riss.then((data) => {
            for (let val in data) {
                riss1.push(data[val]);
            }
            this.docenti = riss1;
        });
    }
    pagCrea() {
        this.pag = 2;
        this.title = "Nuovo Docente";
    }
    crea() {
        var checkmsg = this.checkForm();
        if (checkmsg != "") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                icon: "error",
                title: "Oops...",
                text: checkmsg,
            });
        }
        else {
            let riss = this.apicalls.postTeacher(this.nome, this.cognome, this.usr, this.psw);
            riss
                .then((data) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    //conferma
                    icon: "success",
                    title: "<strong>Docente aggiunto!</strong>",
                    timer: 1500,
                });
                this.pagElenco();
            })
                .catch(() => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Si è verificato un errore!",
                });
            });
        }
    }
    pagModifica(idT, no, co, usrnm) {
        this.pag = 3;
        this.title = "Modifica docente: " + idT;
        this.idT = idT;
        this.nome = no;
        this.cognome = co;
        this.usr = usrnm;
    }
    modifica() {
        var checkmsg = this.checkForm();
        if (checkmsg != "") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                icon: "error",
                title: "Oops...",
                text: checkmsg,
            });
        }
        else {
            let riss = this.apicalls.putTeacher(this.idT, this.nome, this.cognome, this.usr, this.psw);
            riss
                .then((data) => {
                if (data != null)
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                        //conferma
                        icon: "success",
                        title: "<strong>Docente modificato!</strong>",
                    });
                else
                    this.pagElenco();
            })
                .catch(() => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Si è verificato un errore!",
                });
            });
        }
    }
    elimina() {
        let riss = this.apicalls.deleteTeacher(this.idT);
        riss.then((data) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                //conferma
                icon: "success",
                title: "<strong>Docente eliminato!</strong>",
            });
            this.pagElenco();
        });
    }
    resetForm() {
        this.nome = "";
        this.cognome = "";
        this.usr = "";
        this.psw = "";
        this.psw1 = "";
    }
    checkForm() {
        if (this.nome === "" ||
            this.cognome === "" ||
            this.usr === "" ||
            this.psw === "" ||
            this.psw1 === "")
            return "Form incompleto!";
        else if (this.psw != this.psw1) {
            return "Reinserisci correttamente la password";
        }
        else
            return "";
    }
};
DocentiComponent.ctorParameters = () => [
    { type: _shared_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] }
];
DocentiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-docenti",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./docenti.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dynamicPages/docenti/docenti.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../gruppi/gruppi.component.scss */ "./src/app/dynamicPages/gruppi/gruppi.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./docenti.component.scss */ "./src/app/dynamicPages/docenti/docenti.component.scss")).default]
    })
], DocentiComponent);



/***/ }),

/***/ "./src/app/dynamicPages/exercises/exercises.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/dynamicPages/exercises/exercises.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Lato:100,300,400,700&display=swap\");\n.main-body .main-div .title {\n  width: 90%;\n}\n.main-body .main-div .title .iconss {\n  height: 60px;\n  width: 400px;\n  float: left;\n  margin-left: auto;\n  display: flex;\n  margin-top: 20px;\n}\n.main-body .main-div .title .iconss div {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-family: \"Lato\", \"sans-serif\";\n  height: 100%;\n  flex: 0.5;\n  border: 2px solid #022442;\n  border-radius: 20px 20px 0px 0px;\n  margin-right: -5px;\n  cursor: pointer;\n}\n.main-body .main-div .title .iconss div .logoo1,\n.main-body .main-div .title .iconss div .logoo2 {\n  height: 30px;\n  width: 30px;\n  margin-right: 10px;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n.main-body .main-div .title .iconss .activeBTN {\n  margin-right: 2px;\n  /*background: linear-gradient(\n    200deg,\n    rgba(97, 162, 221, 1) 0%,\n    rgba(3, 73, 136, 1) 100%\n  );*/\n  background: linear-gradient(55deg, #022442, #004e92);\n}\n.main-body .main-div .title .iconss .activeBTN h3 {\n  color: white;\n}\n.main-body .main-div .title .iconss .activeBTN svg {\n  fill: white;\n}\n.main-body .main-div .title .iconss .actv1 {\n  margin-left: 7px;\n  margin-right: -5px;\n}\n.main-body .main-div .table1 .card .eyeLogo {\n  width: 100%;\n  height: 25px;\n  margin-left: 20px;\n  margin-top: 5px;\n  background-image: url('eye.svg');\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n.main-body .main-div .table1 .card .exlogo {\n  width: 70px;\n  height: 70px;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n.main-body .main-div .table1 .card h3 {\n  width: 80%;\n  font-size: 15px;\n  margin-top: 10px;\n}\n.main-body .main-div .table1 .cardStud {\n  background: linear-gradient(55deg, #022442, #004e92);\n}\n.main-body .main-div .table1 .cardStud .exlogo {\n  fill: white;\n}\n.main-body .main-div .table1 .cardStud h3 {\n  color: white;\n  font-weight: 500;\n}\n.main-body .main-div .table1 .cardStud:hover {\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n}\n.main-body .main-div .table1 .cardGuest {\n  background: linear-gradient(55deg, #1b1b1b, #303030);\n}\n.main-body .main-div .table1 .cardGuest .exlogo {\n  fill: white;\n}\n.main-body .main-div .table1 .cardGuest h3 {\n  color: white;\n  font-weight: 500;\n}\n.main-body .main-div .table1 .cardGuest:hover {\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n}\n.main-body .main-div form {\n  display: flex;\n}\n.main-body .main-div form .form1 {\n  z-index: 19;\n}\n.main-body .main-div form .form1 .fields div {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  padding: 10px;\n  align-items: center;\n}\n.main-body .main-div form .form1 .fields div svg {\n  margin-right: 20px;\n  width: 35px;\n  height: 35px;\n}\n.main-body .main-div form .form1 .fields .vis {\n  fill: #2cc66d;\n}\n.main-body .main-div form .form1 .fields .Nvis {\n  fill: red;\n}\n.main-body .main-div form .form1 .fields h2 {\n  width: 30%;\n}\n.main-body .main-div form .form1 .fields .cmbbox {\n  margin-left: 8%;\n  outline: none;\n  -moz-text-align-last: center;\n       text-align-last: center;\n  width: 15%;\n  height: 30px;\n  background-color: white;\n  border: 2px solid #00af8f;\n  border-radius: 15px;\n}\n.main-body .main-div form .form1 .fields .cmbbox option {\n  padding: 2px;\n}\n.main-body .main-div form .form1 .fields .addBTN {\n  margin-left: 30px;\n  width: 30px;\n  height: 30px;\n  background-color: #00af8f;\n  color: white;\n  border-radius: 50%;\n  border: none;\n  outline: none;\n  text-decoration: none;\n  box-shadow: 0 2px #999;\n}\n.main-body .main-div form .form1 .fields .addBTN:active {\n  box-shadow: 0 1px #666;\n  transform: translateY(4px);\n}\n.main-body .main-div form .fileLoaders {\n  width: 25%;\n  height: 400px;\n  z-index: 20;\n  margin-top: 3%;\n  margin-left: -25%;\n  display: flex;\n  flex-direction: column;\n}\n.main-body .main-div form .fileLoaders .containerF {\n  width: 100%;\n  flex: 1;\n  margin-bottom: 2px;\n  display: flex;\n  flex-direction: column;\n}\n.main-body .main-div form .fileLoaders .containerF h2 {\n  font-family: \"Lato\", sans-serif;\n  padding-top: 17px;\n}\n.main-body .main-div form .fileLoaders .containerF .containerF1 {\n  width: 100%;\n  height: 100%;\n}\n.main-body .main-div form .fileLoaders .containerF .containerF1 .inputfile {\n  height: 0;\n  overflow: hidden;\n  width: 0;\n}\n.main-body .main-div form .fileLoaders .containerF .containerF1 .inputfile + label {\n  border: none;\n  border-radius: 5px;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n  outline: none;\n  padding: 0.8rem 15px;\n  position: relative;\n  transition: all 0.3s;\n  vertical-align: middle;\n  text-align: center;\n  width: 60%;\n  margin-top: 5px;\n}\n.main-body .main-div form .fileLoaders .containerF .containerF1 .inputfile + label.btn-2 {\n  background-color: #23bd64;\n  border-radius: 50px;\n  overflow: hidden;\n}\n.main-body .main-div form .fileLoaders .containerF .containerF1 .inputfile + label.btn-2::before {\n  color: #fff;\n  font-family: \"Lato\";\n  font-size: 100%;\n  height: 100%;\n  right: 130%;\n  line-height: 3.3;\n  position: absolute;\n  top: 0px;\n  transition: all 0.3s;\n}\n.main-body .main-div form .fileLoaders .containerF .containerF1 .inputfile + label.btn-2:hover {\n  background-color: #1b924d;\n}\n.main-body .main-div .pagEsercizio {\n  width: 90%;\n  height: 70vh;\n  border-radius: 20px 0px 20px 20px;\n}\n.main-body .main-div .pagEsercizio iframe,\n.main-body .main-div .pagEsercizio .submissionss {\n  width: 100%;\n  height: 100%;\n  border: none;\n  outline: none;\n  border-radius: 20px 0px 20px 20px;\n  border: 3px solid #022442;\n}\n.main-body .main-div .pagEsercizio .submissionss {\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px;\n  display: flex;\n  flex-direction: column;\n}\n.main-body .main-div .pagEsercizio .submissionss h2 {\n  font-size: 40px;\n  font-family: \"Lato\", \"sans-serif\";\n  margin-bottom: 30px;\n  margin-top: 120px;\n}\n.main-body .main-div .pagEsercizio .submissionss h3 {\n  font-size: 20px;\n  font-family: \"Lato\", \"sans-serif\";\n}\n.main-body .main-div .pagEsercizio .submissionss input {\n  margin-top: 50px;\n  height: 25px;\n  width: 30%;\n  border: none;\n  outline: none;\n  background: none;\n  border-bottom: 1px solid black;\n  color: black;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 1px;\n}\n.main-body .main-div .pagEsercizio .submissionss .submitBTN {\n  width: 25%;\n  padding: 25px;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n  line-height: 5px;\n  font-weight: 400;\n  font-family: \"Lato\", sans-serif;\n  color: white;\n  text-align: center;\n  letter-spacing: 1px;\n  background: linear-gradient(55deg, #022442, #004e92);\n  cursor: pointer;\n}\n.main-body .main-div .pagEsercizio .submissionss .inputfile {\n  height: 0;\n  overflow: hidden;\n  width: 0;\n}\n.main-body .main-div .pagEsercizio .submissionss .inputfile + label {\n  height: 18px;\n  border: none;\n  border-radius: 5px;\n  color: #000;\n  cursor: pointer;\n  display: inline-block;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  outline: none;\n  padding: 0.8rem 15px;\n  position: relative;\n  transition: all 0.3s;\n  vertical-align: middle;\n  text-align: center;\n  width: 22%;\n}\n.main-body .main-div .pagEsercizio .submissionss .inputfile + label.btn-2 {\n  border: 3px solid #022442;\n  border-radius: 50px;\n  overflow: hidden;\n}\n.main-body .main-div .pagEsercizio .submissionss .inputfile + label.btn-2::before {\n  color: #000;\n  font-family: \"Lato\";\n  font-size: 100%;\n  height: 100%;\n  right: 130%;\n  line-height: 3.3;\n  position: absolute;\n  top: 0px;\n  transition: all 0.3s;\n}\n.main-body .main-div .pagEsercizio .submissionss .inputfile + label.btn-2:hover {\n  transform: scale(1.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHluYW1pY1BhZ2VzL2V4ZXJjaXNlcy9EOlxcU0NIT09MXFxDUEUgKyBNb3JlXFw1wrBTdXBlcmlvcmVcXFByb2dldHRvLUZWQUFcXE5ld0Zyb250ZW5kL3NyY1xcYXBwXFxkeW5hbWljUGFnZXNcXGV4ZXJjaXNlc1xcZXhlcmNpc2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9keW5hbWljUGFnZXMvZXhlcmNpc2VzL2V4ZXJjaXNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx3RkFBQTtBQUlKO0VBQ0UsVUFBQTtBQ0ZOO0FER007RUFFRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0ZSO0FESVE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBRUEsWUFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFFQSxlQUFBO0FDSlY7QURLVTs7RUFFRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQ0haO0FETVE7RUFDRSxpQkFBQTtFQUNBOzs7O0tBQUE7RUFLQSxvREFBQTtBQ0pWO0FES1U7RUFDRSxZQUFBO0FDSFo7QURLVTtFQUNFLFdBQUE7QUNIWjtBRE1RO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ0pWO0FEVVE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQ1JWO0FEVVE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUNSVjtBRFdRO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1RWO0FEWU07RUFDRSxvREFBQTtBQ1ZSO0FEWVE7RUFDRSxXQUFBO0FDVlY7QURZUTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ1ZWO0FEWVE7RUFDRSxpREFBQTtBQ1ZWO0FEYU07RUFDRSxvREFBQTtBQ1hSO0FEWVE7RUFDRSxXQUFBO0FDVlY7QURZUTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ1ZWO0FEWVE7RUFDRSxpREFBQTtBQ1ZWO0FEZUk7RUFDRSxhQUFBO0FDYk47QURlTTtFQUNFLFdBQUE7QUNiUjtBRGVVO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ2JaO0FEY1k7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDWmQ7QURlVTtFQUNFLGFBQUE7QUNiWjtBRGVVO0VBQ0UsU0FBQTtBQ2JaO0FEZVU7RUFDRSxVQUFBO0FDYlo7QURlVTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7T0FBQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDYlo7QURjWTtFQUNFLFlBQUE7QUNaZDtBRGVVO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDYlo7QURlWTtFQUNFLHNCQUFBO0VBQ0EsMEJBQUE7QUNiZDtBRG9CTTtFQUVFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ25CUjtBRHFCUTtFQUNFLFdBQUE7RUFDQSxPQUFBO0VBRUEsa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNwQlY7QURzQlU7RUFDRSwrQkFBQTtFQUNBLGlCQUFBO0FDcEJaO0FEc0JVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNwQlo7QURzQlk7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0FDcEJkO0FEc0JZO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ3BCZDtBRHNCYztFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ3BCaEI7QURzQmdCO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxvQkFBQTtBQ3BCbEI7QUR1QmdCO0VBQ0UseUJBQUE7QUNyQmxCO0FENkJJO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtBQzNCTjtBRDhCTTs7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBQzVCUjtBRDhCTTtFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDN0JSO0FEOEJRO0VBQ0UsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQzVCVjtBRDhCUTtFQUNFLGVBQUE7RUFDQSxpQ0FBQTtBQzVCVjtBRDhCUTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUM1QlY7QUQ4QlE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUVBLG9EQUFBO0VBQ0EsZUFBQTtBQzdCVjtBRCtCUTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7QUM3QlY7QUQrQlE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDN0JWO0FEK0JVO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDN0JaO0FEK0JZO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxvQkFBQTtBQzdCZDtBRGdDWTtFQUNFLHFCQUFBO0FDOUJkIiwiZmlsZSI6InNyYy9hcHAvZHluYW1pY1BhZ2VzL2V4ZXJjaXNlcy9leGVyY2lzZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjEwMCwzMDAsNDAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG4ubWFpbi1ib2R5IHtcclxuICAubWFpbi1kaXYge1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgLmljb25zcyB7XHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB0b21hdG87XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgXCJzYW5zLXNlcmlmXCI7XHJcblxyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgZmxleDogMC41O1xyXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAyMjQ0MjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xyXG5cclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIC5sb2dvbzEsXHJcbiAgICAgICAgICAubG9nb28yIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hY3RpdmVCVE4ge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgICAgICAgICAvKmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgMjAwZGVnLFxyXG4gICAgICAgICAgICByZ2JhKDk3LCAxNjIsIDIyMSwgMSkgMCUsXHJcbiAgICAgICAgICAgIHJnYmEoMywgNzMsIDEzNiwgMSkgMTAwJVxyXG4gICAgICAgICAgKTsqL1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDU1ZGVnLCAjMDIyNDQyLCAjMDA0ZTkyKTtcclxuICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgZmlsbDogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hY3R2MSB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRhYmxlMSB7XHJcbiAgICAgIC5jYXJkIHtcclxuICAgICAgICAuZXllTG9nbyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2ltYWdlcy9leWUuc3ZnKTtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5leGxvZ28ge1xyXG4gICAgICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5jYXJkU3R1ZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDU1ZGVnLCAjMDIyNDQyLCAjMDA0ZTkyKTtcclxuXHJcbiAgICAgICAgLmV4bG9nbyB7XHJcbiAgICAgICAgICBmaWxsOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDI1cHggNTBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuY2FyZEd1ZXN0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNTVkZWcsICMxYjFiMWIsICMzMDMwMzApO1xyXG4gICAgICAgIC5leGxvZ28ge1xyXG4gICAgICAgICAgZmlsbDogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAyNXB4IDUwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3JtIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgIC5mb3JtMSB7XHJcbiAgICAgICAgei1pbmRleDogMTk7XHJcbiAgICAgICAgLmZpZWxkcyB7XHJcbiAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnZpcyB7XHJcbiAgICAgICAgICAgIGZpbGw6ICMyY2M2NmQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuTnZpcyB7XHJcbiAgICAgICAgICAgIGZpbGw6IHJlZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jbWJib3gge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogOCU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDBhZjhmO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICBvcHRpb24ge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmFkZEJUTiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhZjhmO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4ICM5OTk7XHJcblxyXG4gICAgICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggIzY2NjtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9ybSB7XHJcbiAgICAgIC5maWxlTG9hZGVycyB7XHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDIwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjUlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgLmNvbnRhaW5lckYge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JleTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTdweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jb250YWluZXJGMSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO1xyXG4gICAgICAgICAgICAuaW5wdXRmaWxlIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW5wdXRmaWxlICsgbGFiZWwge1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwLjhyZW0gMTVweDtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICYuYnRuLTIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNSwgMTg5LCAxMDAsIDEpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMzAlO1xyXG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMy4zO1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKHJnYmEoMzUsIDE4OSwgMTAwLCAxKSwgMTAlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5wYWdFc2VyY2l6aW8ge1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMHB4IDIwcHggMjBweDtcclxuICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB0b21hdG87XHJcblxyXG4gICAgICBpZnJhbWUsXHJcbiAgICAgIC5zdWJtaXNzaW9uc3Mge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4IDBweCAyMHB4IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzAyMjQ0MjtcclxuICAgICAgfVxyXG4gICAgICAuc3VibWlzc2lvbnNzIHtcclxuICAgICAgICAvL3BhZGRpbmc6IDJweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIFwic2Fucy1zZXJpZlwiO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIFwic2Fucy1zZXJpZlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdWJtaXRCVE4ge1xyXG4gICAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDVweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgLy9iYWNrZ3JvdW5kOiByZ2IoNTUsIDIzMywgMTMwKTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg1NWRlZywgIzAyMjQ0MiwgIzAwNGU5Mik7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbnB1dGZpbGUge1xyXG4gICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW5wdXRmaWxlICsgbGFiZWwge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuOHJlbSAxNXB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgd2lkdGg6IDIyJTtcclxuXHJcbiAgICAgICAgICAmLmJ0bi0yIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzAyMjQ0MjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDEzMCU7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMuMztcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjEwMCwzMDAsNDAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAudGl0bGUge1xuICB3aWR0aDogOTAlO1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLnRpdGxlIC5pY29uc3Mge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLnRpdGxlIC5pY29uc3MgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBcInNhbnMtc2VyaWZcIjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbGV4OiAwLjU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMjI0NDI7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xuICBtYXJnaW4tcmlnaHQ6IC01cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC50aXRsZSAuaWNvbnNzIGRpdiAubG9nb28xLFxuLm1haW4tYm9keSAubWFpbi1kaXYgLnRpdGxlIC5pY29uc3MgZGl2IC5sb2dvbzIge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC50aXRsZSAuaWNvbnNzIC5hY3RpdmVCVE4ge1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgLypiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMjAwZGVnLFxuICAgIHJnYmEoOTcsIDE2MiwgMjIxLCAxKSAwJSxcbiAgICByZ2JhKDMsIDczLCAxMzYsIDEpIDEwMCVcbiAgKTsqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNTVkZWcsICMwMjI0NDIsICMwMDRlOTIpO1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLnRpdGxlIC5pY29uc3MgLmFjdGl2ZUJUTiBoMyB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC50aXRsZSAuaWNvbnNzIC5hY3RpdmVCVE4gc3ZnIHtcbiAgZmlsbDogd2hpdGU7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAudGl0bGUgLmljb25zcyAuYWN0djEge1xuICBtYXJnaW4tbGVmdDogN3B4O1xuICBtYXJnaW4tcmlnaHQ6IC01cHg7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAudGFibGUxIC5jYXJkIC5leWVMb2dvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2ltYWdlcy9leWUuc3ZnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLnRhYmxlMSAuY2FyZCAuZXhsb2dvIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLnRhYmxlMSAuY2FyZCBoMyB7XG4gIHdpZHRoOiA4MCU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC50YWJsZTEgLmNhcmRTdHVkIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDU1ZGVnLCAjMDIyNDQyLCAjMDA0ZTkyKTtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC50YWJsZTEgLmNhcmRTdHVkIC5leGxvZ28ge1xuICBmaWxsOiB3aGl0ZTtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC50YWJsZTEgLmNhcmRTdHVkIGgzIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLnRhYmxlMSAuY2FyZFN0dWQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDI1cHggNTBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLnRhYmxlMSAuY2FyZEd1ZXN0IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDU1ZGVnLCAjMWIxYjFiLCAjMzAzMDMwKTtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC50YWJsZTEgLmNhcmRHdWVzdCAuZXhsb2dvIHtcbiAgZmlsbDogd2hpdGU7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAudGFibGUxIC5jYXJkR3Vlc3QgaDMge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAudGFibGUxIC5jYXJkR3Vlc3Q6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDI1cHggNTBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiBmb3JtIC5mb3JtMSB7XG4gIHotaW5kZXg6IDE5O1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgZm9ybSAuZm9ybTEgLmZpZWxkcyBkaXYge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiBmb3JtIC5mb3JtMSAuZmllbGRzIGRpdiBzdmcge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiBmb3JtIC5mb3JtMSAuZmllbGRzIC52aXMge1xuICBmaWxsOiAjMmNjNjZkO1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgZm9ybSAuZm9ybTEgLmZpZWxkcyAuTnZpcyB7XG4gIGZpbGw6IHJlZDtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IGZvcm0gLmZvcm0xIC5maWVsZHMgaDIge1xuICB3aWR0aDogMzAlO1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgZm9ybSAuZm9ybTEgLmZpZWxkcyAuY21iYm94IHtcbiAgbWFyZ2luLWxlZnQ6IDglO1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwYWY4ZjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IGZvcm0gLmZvcm0xIC5maWVsZHMgLmNtYmJveCBvcHRpb24ge1xuICBwYWRkaW5nOiAycHg7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiBmb3JtIC5mb3JtMSAuZmllbGRzIC5hZGRCVE4ge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWY4ZjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3gtc2hhZG93OiAwIDJweCAjOTk5O1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgZm9ybSAuZm9ybTEgLmZpZWxkcyAuYWRkQlROOmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IDAgMXB4ICM2NjY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgZm9ybSAuZmlsZUxvYWRlcnMge1xuICB3aWR0aDogMjUlO1xuICBoZWlnaHQ6IDQwMHB4O1xuICB6LWluZGV4OiAyMDtcbiAgbWFyZ2luLXRvcDogMyU7XG4gIG1hcmdpbi1sZWZ0OiAtMjUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgZm9ybSAuZmlsZUxvYWRlcnMgLmNvbnRhaW5lckYge1xuICB3aWR0aDogMTAwJTtcbiAgZmxleDogMTtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgZm9ybSAuZmlsZUxvYWRlcnMgLmNvbnRhaW5lckYgaDIge1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmctdG9wOiAxN3B4O1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgZm9ybSAuZmlsZUxvYWRlcnMgLmNvbnRhaW5lckYgLmNvbnRhaW5lckYxIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IGZvcm0gLmZpbGVMb2FkZXJzIC5jb250YWluZXJGIC5jb250YWluZXJGMSAuaW5wdXRmaWxlIHtcbiAgaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMDtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IGZvcm0gLmZpbGVMb2FkZXJzIC5jb250YWluZXJGIC5jb250YWluZXJGMSAuaW5wdXRmaWxlICsgbGFiZWwge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMC44cmVtIDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgZm9ybSAuZmlsZUxvYWRlcnMgLmNvbnRhaW5lckYgLmNvbnRhaW5lckYxIC5pbnB1dGZpbGUgKyBsYWJlbC5idG4tMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyM2JkNjQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiBmb3JtIC5maWxlTG9hZGVycyAuY29udGFpbmVyRiAuY29udGFpbmVyRjEgLmlucHV0ZmlsZSArIGxhYmVsLmJ0bi0yOjpiZWZvcmUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcmlnaHQ6IDEzMCU7XG4gIGxpbmUtaGVpZ2h0OiAzLjM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgZm9ybSAuZmlsZUxvYWRlcnMgLmNvbnRhaW5lckYgLmNvbnRhaW5lckYxIC5pbnB1dGZpbGUgKyBsYWJlbC5idG4tMjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjkyNGQ7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAucGFnRXNlcmNpemlvIHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA3MHZoO1xuICBib3JkZXItcmFkaXVzOiAyMHB4IDBweCAyMHB4IDIwcHg7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAucGFnRXNlcmNpemlvIGlmcmFtZSxcbi5tYWluLWJvZHkgLm1haW4tZGl2IC5wYWdFc2VyY2l6aW8gLnN1Ym1pc3Npb25zcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAwcHggMjBweCAyMHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjMDIyNDQyO1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLnBhZ0VzZXJjaXppbyAuc3VibWlzc2lvbnNzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLnBhZ0VzZXJjaXppbyAuc3VibWlzc2lvbnNzIGgyIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIFwic2Fucy1zZXJpZlwiO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAxMjBweDtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC5wYWdFc2VyY2l6aW8gLnN1Ym1pc3Npb25zcyBoMyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBcInNhbnMtc2VyaWZcIjtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC5wYWdFc2VyY2l6aW8gLnN1Ym1pc3Npb25zcyBpbnB1dCB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDMwJTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLnBhZ0VzZXJjaXppbyAuc3VibWlzc2lvbnNzIC5zdWJtaXRCVE4ge1xuICB3aWR0aDogMjUlO1xuICBwYWRkaW5nOiAyNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbGluZS1oZWlnaHQ6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDU1ZGVnLCAjMDIyNDQyLCAjMDA0ZTkyKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLnBhZ0VzZXJjaXppbyAuc3VibWlzc2lvbnNzIC5pbnB1dGZpbGUge1xuICBoZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAwO1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLnBhZ0VzZXJjaXppbyAuc3VibWlzc2lvbnNzIC5pbnB1dGZpbGUgKyBsYWJlbCB7XG4gIGhlaWdodDogMThweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiAjMDAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDAuOHJlbSAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAyMiU7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAucGFnRXNlcmNpemlvIC5zdWJtaXNzaW9uc3MgLmlucHV0ZmlsZSArIGxhYmVsLmJ0bi0yIHtcbiAgYm9yZGVyOiAzcHggc29saWQgIzAyMjQ0MjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC5wYWdFc2VyY2l6aW8gLnN1Ym1pc3Npb25zcyAuaW5wdXRmaWxlICsgbGFiZWwuYnRuLTI6OmJlZm9yZSB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LWZhbWlseTogXCJMYXRvXCI7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICByaWdodDogMTMwJTtcbiAgbGluZS1oZWlnaHQ6IDMuMztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAucGFnRXNlcmNpemlvIC5zdWJtaXNzaW9uc3MgLmlucHV0ZmlsZSArIGxhYmVsLmJ0bi0yOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/dynamicPages/exercises/exercises.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/dynamicPages/exercises/exercises.component.ts ***!
  \***************************************************************/
/*! exports provided: ExercisesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExercisesComponent", function() { return ExercisesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/api-call.service */ "./src/shared/api-call.service.ts");
/* harmony import */ var _shared_global_var_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/global-var.service */ "./src/shared/global-var.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.scss */ "./node_modules/sweetalert2/src/sweetalert2.scss");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");








let ExercisesComponent = class ExercisesComponent {
    constructor(apicalls, fb, domSanitizer, globvar) {
        this.apicalls = apicalls;
        this.fb = fb;
        this.domSanitizer = domSanitizer;
        this.globvar = globvar;
        this.pag = 1; //1 elenco, 2 crea | pdf problema, 3 modifica, 4  submissions
        this.title = "Esercizi";
        //variabili from
        this.nome = "";
        this.nomes = "";
        this.probVis = false;
        this.liv = 0;
        this.cat = 0;
        this.nTestC = 0;
        //crea modifica esercizio
        this.files = [null, null, null]; //0 description, 1 solution, 2 material
        this.filesNames = ["Choose a file", "Choose a file", "Choose a file"]; //0 description, 1 solution, 2 material
        //task
        this.file1 = null;
        this.fileName1 = "";
        this.filemsg = "Choose a file";
        this.esercizi = [];
    }
    //metodi di prova
    ciap(num) {
        //console.log("ciao " + num);
    }
    ngOnInit() {
        this.esercizi = [
            "Numeri Perfetti",
        ]; /*,
          "Pacchi Postali 2",
          "Asini e Vacche",
          "Gara di capre",
          "Asini e Vacche",
          "Plants vs Zombies",
          "Plants vs Zombies2",
          "Plants vs Zombies3",
          "Canguri Saltellanti"
        ];*/
        this.formGroup = this.fb.group({
            task: [""],
            description: [""],
            solution: [""],
            material: [""],
        });
        if (this.globvar.userRole === 1 || this.globvar.userRole === 2) {
            // se guest o studente
            //console.log("publicEx");
            this.updateElenco(true);
        }
        else {
            //console.log("privateEx");
            this.updateElenco(false);
        }
    }
    giveStyle() {
        switch (this.globvar.userRole) {
            case 1:
                return "card cardGuest";
                break;
            case 2:
                return "card cardStud";
                break;
            case 3:
                return "card";
                break;
            case 4:
                return "card";
                break;
        }
    }
    cambiaVis() {
        this.probVis = !this.probVis;
        //console.log("Stato " + this.probVis);
    }
    getID(id) {
        console.log(id);
    }
    pagPdf() {
        this.pag = 2;
        this.filemsg = "Choose a file";
        this.formGroup.get("task").setValue(null);
        this.file1 = null;
    }
    updateElenco(pub) {
        let riss;
        if (pub) {
            riss = this.apicalls.getPubProblems();
            this.filemsg = "Choose a file";
            this.formGroup.get("task").setValue(null);
            this.file1 = null;
        }
        else {
            riss = this.apicalls.getTasks();
            this.formGroup.get("description").setValue(null);
            this.formGroup.get("solution").setValue(null);
            this.formGroup.get("material").setValue(null);
            this.filesNames = ["Choose a file", "Choose a file", "Choose a file"];
            this.files[0] = null;
            this.files[1] = null;
            this.files[2] = null;
        }
        riss.then((data) => {
            this.esercizi = [];
            for (let val in data) {
                this.esercizi.push(data[val]);
            }
            //console.log(this.esercizi);
        });
    }
    pagElenco(pub) {
        this.title = "Esercizi";
        this.pag = 1;
        this.updateElenco(pub);
        this.nome = "";
        this.nomes = "";
        this.probVis = false;
        this.liv = 0;
        this.cat = 0;
        this.nTestC = 0;
        this.files = [null, null, null];
    }
    pagModifica(idE) {
        this.idE = idE;
        this.title = "Modifica Esercizio";
        this.pag = 3; // modifica / crea
        let riss = this.apicalls.getTaskById(idE);
        riss
            .then((data) => {
            //console.log(data);
            this.nome = data["title"];
            this.nomes = data["short_title"];
            this.probVis = data["is_public"] === "1" ? true : false;
            document.getElementsByName("livello")[0].value =
                data["level"];
            document.getElementsByName("test_cases")[0].value =
                data["test_cases"];
            let riss1 = this.apicalls.getCategories();
            let rss = [];
            riss1.then((data1) => {
                for (let dd in data1) {
                    if (data1[dd]["id"] === data["category_id"]) {
                        rss.push(data1[dd]);
                        break;
                    }
                }
                for (let dd in data1) {
                    if (data1[dd]["id"] != data["category_id"]) {
                        rss.push(data1[dd]);
                    }
                }
                this.catList = rss;
            });
        })
            .catch(this.apicalls.handleError);
    }
    elimina() {
        let riss = this.apicalls.deleteTasks(this.idE);
        riss.then((data) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                //conferma
                icon: "success",
                title: "<strong>Esercizio eliminato!</strong>",
                timer: 1000,
            });
            this.pagElenco(false);
        });
    }
    pagProblema(idE, nome) {
        this.pag = 2;
        this.nome = nome;
        this.idE = idE;
        this.title = "Esercizio : " + this.nome;
        //console.log(idE + " " + this.nome);
        let riss = this.apicalls.getProblemPdf(this.idE);
        riss.subscribe((downloaded) => {
            //console.log("ciao1" + "  " + downloaded);
            this.filePDF = this.domSanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(downloaded));
        }, (error) => {
            console.log(error);
            //console.log("ciao2");
        });
    }
    pagSottomissione() {
        this.pag = 4;
        //this.title = "Esercizio : " + this.nome;
        //console.log("Sottomissione " + this.idE + " " + this.nome);
    }
    pagCrea() {
        this.title = "Crea Esercizio";
        this.pag = 2;
        let riss = this.apicalls.getCategories();
        let rss = [];
        riss.then((data) => {
            for (let dd in data) {
                rss.push(data[dd]);
            }
            this.catList = rss;
            console.log(this.catList);
        });
        //console.log("Pagina crea " + this.pag);
    }
    change1(sel, files) {
        //console.log(sel);
        if (files.length > 0) {
            var nome = files.item(0).name;
            //console.log(nome);
            switch (sel) {
                case 0:
                    if (!(nome.split(".").pop() === "pdf")) {
                        // non pdf
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            icon: "error",
                            title: "File non supportato",
                            text: "Questo file non ha l'estensione .pdf",
                        });
                        this.filesNames[0] = "Choose a file";
                    }
                    else {
                        this.filesNames[0] = nome;
                        this.files[sel] = files.item(0);
                        this.formGroup.get("description").setValue(this.files[sel]);
                        /*console.log(
                          "File " +
                            nome +
                            "caricato " +
                            this.files[sel] +
                            " size: " +
                            this.files[sel].size
                        );*/
                    }
                    break;
                case 1:
                    if (nome.split(".").pop() === "rar") {
                        // non zip
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            icon: "error",
                            title: "File non supportato",
                            text: "Questo file ha estensione .rar",
                        });
                        this.filesNames[1] = "Choose a file";
                    }
                    else if (!(nome.split(".").pop() === "zip")) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            icon: "error",
                            title: "File non supportato",
                            text: "Questo file non ha l'estensione .zip",
                        });
                        this.filesNames[1] = "Choose a file";
                    }
                    else {
                        this.filesNames[1] = nome;
                        this.files[sel] = files.item(0);
                        this.formGroup.get("solution").setValue(this.files[sel]);
                        /*console.log(
                          "File " +
                            nome +
                            "caricato " +
                            this.files[sel] +
                            " size: " +
                            this.files[sel].size
                        );*/
                    }
                    break;
                case 2:
                    if (nome.split(".").pop() === "rar") {
                        // non zip
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            icon: "error",
                            title: "File non supportato",
                            text: "Questo file ha estensione .rar",
                        });
                        this.filesNames[2] = "Choose a file";
                    }
                    else if (!(nome.split(".").pop() === "zip")) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            icon: "error",
                            title: "File non supportato",
                            text: "Questo file non ha l'estensione .zip",
                        });
                        this.filesNames[2] = "Choose a file";
                    }
                    else {
                        this.filesNames[2] = nome;
                        this.files[sel] = files.item(0);
                        this.formGroup.get("material").setValue(this.files[sel]);
                        /*console.log(
                          "File " +
                            nome +
                            "caricato " +
                            this.files[sel] +
                            " size: " +
                            this.files[sel].size
                        );*/
                    }
                    break;
                default: {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        icon: "error",
                        title: "Non va bene",
                        text: "Errore",
                    });
                }
            }
        }
    }
    changeTask(files) {
        if (files.length > 0) {
            var nome = files.item(0).name;
            if (!(nome.split(".").pop() === "c")) {
                //non .c
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    icon: "error",
                    title: "File non supportato",
                    text: "Questo file non ha l'estensione .c",
                });
                this.filemsg = "Choose a file";
            }
            else {
                this.filemsg = nome;
                this.file1 = files.item(0);
                this.formGroup.get("task").setValue(this.file1);
                /*console.log(
                  "File caricato " + this.file1.name + " size: " + this.file1.size
                );*/
            }
        }
    }
    caricaSub(idE) {
        if (this.file1 != null) {
            //puoi mandarlo
            const form = new FormData(); //creazione oggetto form da mandare
            form.append("submission", this.file1);
            let riss1 = this.apicalls.postSubmission(idE, form);
            riss1
                .then((data) => {
                let lung = data.lines.length;
                let ristr = ((Number.parseFloat(data.score) / lung) * 100)
                    .toString()
                    .substring(0, 5);
                let punt = Number.parseFloat(ristr);
                console.log(punt);
                //console.log(punt);
                if (punt >= 60.0)
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        //conferma
                        icon: "success",
                        title: "<strong>Risultato</strong>",
                        text: "Punteggio: " + punt + "/100",
                    });
                else
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        //conferma
                        icon: "warning",
                        title: "<strong>Risultato</strong>",
                        html: "<strong>Punteggio: " +
                            punt +
                            "/100" +
                            "</strong><br><br> Esercitati ancora!",
                    });
                //this.pagElenco(false);
                //console.log(data);
            })
                .catch(() => sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                icon: "error",
                title: "Oops...",
                text: "Si è verificato un errore!",
            }));
        }
        else {
            //non si può mandare perchè manca il file
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                icon: "error",
                title: "Oops...",
                text: "Non hai indicato il file da caricare!",
            });
        }
    }
    crea_modifica(num) {
        this.liv = Number.parseInt(document.getElementsByName("livello")[0].value);
        this.cat = Number.parseInt(document.getElementsByName("category_id")[0].value);
        this.nTestC = Number.parseInt(document.getElementsByName("test_cases")[0].value);
        const form = new FormData(); //creazione oggetto form da mandare
        form.append("title", this.nome);
        form.append("short_title", this.nomes);
        form.append("is_public", this.probVis ? "1" : "0");
        form.append("level", this.liv + "");
        form.append("test_cases", this.nTestC + "");
        form.append("category_id", this.cat + "");
        let varrr1 = this.formGroup.get("description").value;
        if (this.files[0] != null)
            form.append("description", varrr1);
        let varrr2 = this.formGroup.get("solution").value;
        if (this.files[1] != null)
            form.append("solution", varrr2);
        let varrr3 = this.formGroup.get("material").value;
        if (this.files[2] != null)
            form.append("material", varrr3);
        varrr1 = "";
        varrr2 = "";
        varrr3 = "";
        //form.forEach((val) => console.log(val));
        if (this.checkForm()) {
            if (num === 1) {
                //crea
                if (this.files[0] != null &&
                    this.files[1] != null &&
                    this.files[2] != null) {
                    let riss1 = this.apicalls.postTasks(form);
                    riss1
                        .then((data) => {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            //conferma
                            icon: "success",
                            title: "<strong>Esercizio aggiunto!</strong>",
                            timer: 1000,
                        });
                        this.pagElenco(false);
                        //console.log(data);
                    })
                        .catch(() => sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Si è verificato un errore!",
                    }));
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Non hai caricato alcuni file!",
                    });
                }
            }
            else {
                //modifica
                let riss1 = this.apicalls.postTask(this.idE, form);
                riss1
                    .then((data) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        //conferma
                        icon: "success",
                        title: "<strong>Esercizio modificato!</strong>",
                        timer: 1000,
                    });
                    this.pagElenco(false);
                    //console.log(data);
                })
                    .catch(() => sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Si è verificato un errore!",
                }));
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                icon: "error",
                title: "Oops...",
                text: "Form incompleto!",
            });
        }
    }
    checkForm() {
        if (this.nome === "" ||
            this.nomes === "" ||
            this.liv === 0 ||
            //this.cat === 0 ||
            this.nTestC === 0)
            return false;
        else
            return true;
    }
};
ExercisesComponent.ctorParameters = () => [
    { type: _shared_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] },
    { type: _shared_global_var_service__WEBPACK_IMPORTED_MODULE_3__["GlobalVarService"] }
];
ExercisesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-exercises",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./exercises.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dynamicPages/exercises/exercises.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../gruppi/gruppi.component.scss */ "./src/app/dynamicPages/gruppi/gruppi.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./exercises.component.scss */ "./src/app/dynamicPages/exercises/exercises.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../verifiche/verifiche.component.scss */ "./src/app/dynamicPages/verifiche/verifiche.component.scss")).default]
    })
], ExercisesComponent);



/***/ }),

/***/ "./src/app/dynamicPages/gruppi/gruppi.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/dynamicPages/gruppi/gruppi.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap\");\n* {\n  margin: 0;\n  padding: 0;\n  color: black;\n}\n.main-body {\n  background-image: linear-gradient(315deg, #ebebeb 0%, #d4d4d4 74%);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  color: black;\n}\n.main-body .main-div {\n  padding-left: 10vw;\n  padding-top: 45px;\n}\n.main-body .main-div .title {\n  display: flex;\n  align-items: center;\n}\n.main-body .main-div .title .back {\n  width: 30px;\n  height: 30px;\n  background-image: url('left-arrow.svg');\n  background-size: contain;\n  background-repeat: no-repeat;\n  margin-top: 5px;\n  margin-right: 20px;\n  cursor: pointer;\n}\n.main-body .main-div .form1 {\n  width: 80%;\n  margin-top: 3%;\n  margin-left: 35px;\n  font-family: \"Lato\", sans-serif;\n  font-size: 15px;\n}\n.main-body .main-div .form1 h2 {\n  margin: 15px;\n  color: black;\n  font-weight: 400;\n  width: 25%;\n}\n.main-body .main-div .form1 .fields {\n  width: 60%;\n  padding: 2px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px;\n}\n.main-body .main-div .form1 .fields input {\n  margin-top: 4px;\n  height: 25px;\n  width: 30%;\n  border: none;\n  outline: none;\n  background: none;\n  border-bottom: 1px solid black;\n  color: black;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 1px;\n}\n.main-body .main-div .form1 .fields .submitBTN {\n  width: 25%;\n  padding: 20px;\n  padding-left: 5px;\n  padding-right: 5px;\n  border: none;\n  outline: none;\n  float: left;\n  margin-left: auto;\n  border-radius: 5px;\n  line-height: 5px;\n  margin-right: 10%;\n  font-weight: 400;\n  font-family: \"Lato\", sans-serif;\n  color: white;\n  text-align: center;\n  letter-spacing: 1px;\n  background-color: #23bd64;\n  cursor: pointer;\n}\n.main-body .main-div .form1 .fname {\n  width: 80%;\n}\n.main-body .main-div .form1 .fname1 {\n  font-size: 10px;\n}\n.main-body .main-div .form1 .fname2 {\n  width: 100%;\n}\n.main-body .main-div .form1 .fname2 .submitBTN {\n  width: 15%;\n  margin-left: 125px;\n}\n.main-body .main-div .form1 .fname2 .inputfile {\n  height: 0;\n  overflow: hidden;\n  width: 0;\n}\n.main-body .main-div .form1 .fname2 .inputfile + label {\n  border: none;\n  border-radius: 5px;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n  outline: none;\n  padding: 0.8rem 15px;\n  position: relative;\n  transition: all 0.3s;\n  vertical-align: middle;\n  text-align: center;\n  width: 10%;\n  margin-top: 5px;\n}\n.main-body .main-div .form1 .fname2 .inputfile + label.btn-2 {\n  background-color: #23bd64;\n  border-radius: 50px;\n  overflow: hidden;\n}\n.main-body .main-div .form1 .fname2 .inputfile + label.btn-2::before {\n  color: #fff;\n  font-family: \"Lato\";\n  font-size: 100%;\n  height: 100%;\n  right: 130%;\n  line-height: 3.3;\n  position: absolute;\n  top: 0px;\n  transition: all 0.3s;\n}\n.main-body .main-div .form1 .fname2 .inputfile + label.btn-2:hover {\n  background-color: #1b924d;\n}\n.main-body .main-div .form1 .ddelete {\n  flex-direction: column;\n  align-items: flex-start;\n  font-size: 13px;\n}\n.main-body .main-div .form1 .ddelete h2 {\n  color: black;\n  font-weight: 400;\n  width: 100%;\n}\n.main-body .main-div .form1 .ddelete .del {\n  width: 17%;\n  padding: 15px;\n  padding-left: 5px;\n  padding-right: 5px;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n  line-height: 5px;\n  margin-left: 45%;\n  font-weight: 400;\n  font-family: \"Lato\", sans-serif;\n  color: white;\n  text-align: center;\n  letter-spacing: 1px;\n  cursor: pointer;\n  background-color: #e21b1b;\n}\n.main-body h1 {\n  font-size: 45px;\n  font-family: \"Lato\", sans-serif;\n  font-weight: 700;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.main-body .err {\n  color: #6e6e6e;\n  font-size: 20px;\n  font-family: \"Lato\", sans-serif;\n  font-weight: 700;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  margin-top: 30px;\n}\n.main-body .table1 {\n  width: 75vw;\n  height: 100%;\n  border-radius: 10px;\n  margin-top: 8px;\n  padding-top: 8px;\n  display: flex;\n  flex-wrap: wrap;\n}\n.main-body .table1 .card {\n  width: 200px;\n  height: 160px;\n  background-image: linear-gradient(310deg, #52b8a3 24%, #61e9b3 64%);\n  display: flex;\n  flex-direction: column;\n  border-radius: 10px;\n  align-items: center;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  margin-right: 30px;\n}\n.main-body .table1 .card .grlogo {\n  width: 80px;\n  height: 80px;\n  margin-top: 20px;\n  background-image: url('classe.svg');\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n.main-body .table1 .card h3 {\n  color: black;\n  width: 50%;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n  font-weight: 700;\n  text-align: center;\n}\n.main-body .table1 .card:hover {\n  transform: scale(1.05);\n  transition: 0.2s ease;\n  cursor: pointer;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n.main-body .table1 .card:not(:hover) {\n  transition: 0.1s ease;\n}\n.main-body .table1 .addCard .layer {\n  height: 100%;\n  width: 100%;\n  background-color: rgba(248, 247, 216, 0.5);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 10px;\n}\n.main-body .table1 .addCard .layer .addlogo {\n  width: 70px;\n  height: 70px;\n  margin-top: 20px;\n  background-image: url('add-button.svg');\n  background-size: contain;\n  background-repeat: no-repeat;\n  margin-bottom: 20px;\n}\n.main-body .table1 .addCard .layer h4 {\n  color: black;\n  width: 50%;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n  font-weight: 700;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHluYW1pY1BhZ2VzL2dydXBwaS9EOlxcU0NIT09MXFxDUEUgKyBNb3JlXFw1wrBTdXBlcmlvcmVcXFByb2dldHRvLUZWQUFcXE5ld0Zyb250ZW5kL3NyY1xcYXBwXFxkeW5hbWljUGFnZXNcXGdydXBwaVxcZ3J1cHBpLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9keW5hbWljUGFnZXMvZ3J1cHBpL2dydXBwaS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxrRkFBQTtBQUNBLHdGQUFBO0FBRVI7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNBRjtBREdBO0VBRUUsa0VBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0RGO0FERUU7RUFDRSxrQkFBQTtFQUVBLGlCQUFBO0FDREo7QURFSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0FOO0FEQ007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDUjtBREdJO0VBR0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQ0hOO0FES007RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBRUEsVUFBQTtBQ0pSO0FETU07RUFFRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDTFI7QURNUTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0pWO0FETVE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUVBLHlCQUFBO0VBQ0EsZUFBQTtBQ0xWO0FEUU07RUFDRSxVQUFBO0FDTlI7QURRTTtFQUNFLGVBQUE7QUNOUjtBRFFNO0VBQ0UsV0FBQTtBQ05SO0FET1E7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUNMVjtBRE9RO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtBQ0xWO0FET1E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDTFY7QURPVTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0xaO0FET1k7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLG9CQUFBO0FDTGQ7QURRWTtFQUNFLHlCQUFBO0FDTmQ7QURXTTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDVFI7QURVUTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNSVjtBRFdRO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNUVjtBRGNFO0VBQ0UsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBQ1pKO0FEZUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLGdCQUFBO0FDYko7QURlRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSxhQUFBO0VBQ0EsZUFBQTtBQ2ZKO0FEZ0JJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtRUFBQTtFQUtBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNsQk47QURvQk07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0FDbEJSO0FEcUJNO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDbkJSO0FEc0JNO0VBQ0Usc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxxRkFBQTtBQ3BCUjtBRHNCTTtFQUNFLHFCQUFBO0FDcEJSO0FEd0JNO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUN0QlI7QUR3QlE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUN0QlY7QUR3QlE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUN0QlYiLCJmaWxlIjoic3JjL2FwcC9keW5hbWljUGFnZXMvZ3J1cHBpL2dydXBwaS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzozMDAsNDAwLDcwMCw5MDAmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubWFpbi1ib2R5IHtcclxuICAvL2JhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2ViZWJlYiAwJSwgI2Q0ZDRkNCA3NCUpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIC5tYWluLWRpdiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwdnc7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xyXG4gICAgcGFkZGluZy10b3A6IDQ1cHg7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAuYmFjayB7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9pbWFnZXMvbGVmdC1hcnJvdy5zdmcpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0xIHtcclxuICAgICAgLy9zdHlsZVxyXG4gICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JhbDtcclxuICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuXHJcbiAgICAgIGgyIHtcclxuICAgICAgICBtYXJnaW46IDE1cHg7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XHJcbiAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgfVxyXG4gICAgICAuZmllbGRzIHtcclxuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IGxpZ2h0Y3lhbjtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3VibWl0QlROIHtcclxuICAgICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgLy9iYWNrZ3JvdW5kOiByZ2IoNTUsIDIzMywgMTMwKTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzUsIDE4OSwgMTAwLCAxKTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmZuYW1lIHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5mbmFtZTEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgfVxyXG4gICAgICAuZm5hbWUyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAuc3VibWl0QlROIHtcclxuICAgICAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbnB1dGZpbGUge1xyXG4gICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW5wdXRmaWxlICsgbGFiZWwge1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuOHJlbSAxNXB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuXHJcbiAgICAgICAgICAmLmJ0bi0yIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNSwgMTg5LCAxMDAsIDEpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJMYXRvXCI7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICByaWdodDogMTMwJTtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMy4zO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKHJnYmEoMzUsIDE4OSwgMTAwLCAxKSwgMTAlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuZGRlbGV0ZSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZWwge1xyXG4gICAgICAgICAgd2lkdGg6IDE3JTtcclxuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogNXB4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDQ1JTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyMWIxYjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmVyciB7XHJcbiAgICBjb2xvcjogcmdiKDExMCwgMTEwLCAxMTApO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcbiAgLnRhYmxlMSB7XHJcbiAgICB3aWR0aDogNzV2dztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgIDMxMGRlZyxcclxuICAgICAgICAjNTJiOGEzIDI0JSxcclxuICAgICAgICAjNjFlOWIzIDY0JVxyXG4gICAgICApOyAvL2xpbmVhci1ncmFkaWVudCgzMTVkZWcsICM0YzRjZDggMTIlLCAjMzFjMWU5IDg0JSk7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuXHJcbiAgICAgIC5ncmxvZ28ge1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2ltYWdlcy9jbGFzc2Uuc3ZnXCIpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMjBweCAyNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDEwcHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiAgICAgIH1cclxuICAgICAgJjpub3QoOmhvdmVyKSB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4xcyBlYXNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYWRkQ2FyZCB7XHJcbiAgICAgIC5sYXllciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAyNDcsIDIxNiwgMC41KTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgICAgICAuYWRkbG9nbyB7XHJcbiAgICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vaW1hZ2VzL2FkZC1idXR0b24uc3ZnKTtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDozMDAmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzozMDAsNDAwLDcwMCw5MDAmZGlzcGxheT1zd2FwXCIpO1xuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubWFpbi1ib2R5IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2ViZWJlYiAwJSwgI2Q0ZDRkNCA3NCUpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IHtcbiAgcGFkZGluZy1sZWZ0OiAxMHZ3O1xuICBwYWRkaW5nLXRvcDogNDVweDtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC50aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAudGl0bGUgLmJhY2sge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vaW1hZ2VzL2xlZnQtYXJyb3cuc3ZnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLmZvcm0xIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLXRvcDogMyU7XG4gIG1hcmdpbi1sZWZ0OiAzNXB4O1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC5mb3JtMSBoMiB7XG4gIG1hcmdpbjogMTVweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogNDAwO1xuICB3aWR0aDogMjUlO1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLmZvcm0xIC5maWVsZHMge1xuICB3aWR0aDogNjAlO1xuICBwYWRkaW5nOiAycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC5mb3JtMSAuZmllbGRzIGlucHV0IHtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAzMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC5mb3JtMSAuZmllbGRzIC5zdWJtaXRCVE4ge1xuICB3aWR0aDogMjUlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBsaW5lLWhlaWdodDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzYmQ2NDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLmZvcm0xIC5mbmFtZSB7XG4gIHdpZHRoOiA4MCU7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAuZm9ybTEgLmZuYW1lMSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC5mb3JtMSAuZm5hbWUyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAuZm9ybTEgLmZuYW1lMiAuc3VibWl0QlROIHtcbiAgd2lkdGg6IDE1JTtcbiAgbWFyZ2luLWxlZnQ6IDEyNXB4O1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLmZvcm0xIC5mbmFtZTIgLmlucHV0ZmlsZSB7XG4gIGhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDA7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAuZm9ybTEgLmZuYW1lMiAuaW5wdXRmaWxlICsgbGFiZWwge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMC44cmVtIDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwJTtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLmZvcm0xIC5mbmFtZTIgLmlucHV0ZmlsZSArIGxhYmVsLmJ0bi0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzYmQ2NDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC5mb3JtMSAuZm5hbWUyIC5pbnB1dGZpbGUgKyBsYWJlbC5idG4tMjo6YmVmb3JlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHJpZ2h0OiAxMzAlO1xuICBsaW5lLWhlaWdodDogMy4zO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC5mb3JtMSAuZm5hbWUyIC5pbnB1dGZpbGUgKyBsYWJlbC5idG4tMjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjkyNGQ7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAuZm9ybTEgLmRkZWxldGUge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLmZvcm0xIC5kZGVsZXRlIGgyIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogNDAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC5mb3JtMSAuZGRlbGV0ZSAuZGVsIHtcbiAgd2lkdGg6IDE3JTtcbiAgcGFkZGluZzogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGxpbmUtaGVpZ2h0OiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiA0NSU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyMWIxYjtcbn1cbi5tYWluLWJvZHkgaDEge1xuICBmb250LXNpemU6IDQ1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4ubWFpbi1ib2R5IC5lcnIge1xuICBjb2xvcjogIzZlNmU2ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLm1haW4tYm9keSAudGFibGUxIHtcbiAgd2lkdGg6IDc1dnc7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ubWFpbi1ib2R5IC50YWJsZTEgLmNhcmQge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTYwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTBkZWcsICM1MmI4YTMgMjQlLCAjNjFlOWIzIDY0JSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cbi5tYWluLWJvZHkgLnRhYmxlMSAuY2FyZCAuZ3Jsb2dvIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vaW1hZ2VzL2NsYXNzZS5zdmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5tYWluLWJvZHkgLnRhYmxlMSAuY2FyZCBoMyB7XG4gIGNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDUwJTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluLWJvZHkgLnRhYmxlMSAuY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwIDIwcHggMjVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxMHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuLm1haW4tYm9keSAudGFibGUxIC5jYXJkOm5vdCg6aG92ZXIpIHtcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlO1xufVxuLm1haW4tYm9keSAudGFibGUxIC5hZGRDYXJkIC5sYXllciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAyNDcsIDIxNiwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5tYWluLWJvZHkgLnRhYmxlMSAuYWRkQ2FyZCAubGF5ZXIgLmFkZGxvZ28ge1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vaW1hZ2VzL2FkZC1idXR0b24uc3ZnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm1haW4tYm9keSAudGFibGUxIC5hZGRDYXJkIC5sYXllciBoNCB7XG4gIGNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDUwJTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/dynamicPages/gruppi/gruppi.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/dynamicPages/gruppi/gruppi.component.ts ***!
  \*********************************************************/
/*! exports provided: GruppiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GruppiComponent", function() { return GruppiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/api-call.service */ "./src/shared/api-call.service.ts");
/* harmony import */ var _shared_global_var_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/global-var.service */ "./src/shared/global-var.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.scss */ "./node_modules/sweetalert2/src/sweetalert2.scss");






let GruppiComponent = class GruppiComponent {
    constructor(apicalls, globvar) {
        this.apicalls = apicalls;
        this.globvar = globvar;
        this.pag = 1; //1 elenco normale, 2 crea, 3 modifica/elimina
        this.title = "Gruppi";
        //variabili form
        this.nome = "";
        this.idG = -1;
        this.filemsg = "Choose a file";
        this.gruppi = [];
    }
    ngOnInit() {
        //this.gruppi = ["3IA", "4IB", "5IA"];
        this.updateElenco();
    }
    updateElenco() {
        let riss1 = [];
        let riss = this.apicalls.getGruppi();
        riss.then((data) => {
            for (let val in data) {
                riss1.push(data[val]);
            }
            this.gruppi = riss1;
            //console.log(this.gruppi);
        });
    }
    pagCrea() {
        this.title = "Nuovo Gruppo";
        this.pag = 2;
    }
    crea(nome) {
        if (nome === "" || nome === undefined) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                icon: "error",
                title: "Oops...",
                text: "Form incompleto!",
            });
        }
        else {
            let riss = this.apicalls.postGruppo(nome);
            riss
                .then((data) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    //conferma
                    icon: "success",
                    title: "<strong>Gruppo creato!</strong>",
                    timer: 1500,
                });
                this.pagElenco();
            })
                .catch(() => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Si è verificato un errore!",
                });
            });
        }
    }
    pagElenco() {
        if (this.pag === 2) {
            this.filemsg = "Choose a file";
            document.getElementById("file").value = ""; //reset del file
        }
        this.title = "Gruppi";
        this.pag = 1;
        this.updateElenco();
        this.nome = "";
        this.idG = -1;
    }
    pagModifica(id, desc) {
        this.title = "Modifica gruppo: " + desc;
        this.pag = 3;
        this.idG = id;
        this.nome = desc;
    }
    modifica(nome) {
        if (nome === "" || nome === undefined) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                icon: "error",
                title: "Oops...",
                text: "Form incompleto!",
            });
        }
        else {
            let riss = this.apicalls.putGruppo(nome, this.idG);
            riss
                .then((data) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    //conferma
                    icon: "success",
                    title: "<strong>Gruppo modificato!</strong>",
                    timer: 1500,
                });
                this.pagElenco();
            })
                .catch(() => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Si è verificato un errore!",
                });
            });
        }
    }
    no() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            icon: "warning",
            title: "Non disponibile",
            text: "Ci dispiace ma questa funzione non è ancora disponibile.",
        });
    }
    elimina() {
        let riss = this.apicalls.deleteGruppo(this.idG);
        riss
            .then((data) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                //conferma
                icon: "success",
                title: "<strong>Gruppo eliminato!</strong>",
                timer: 1500,
            });
            this.pagElenco();
        })
            .catch(() => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                icon: "error",
                title: "Oops...",
                text: "Si è verificato un errore!",
            });
        });
    }
    change1(files) {
        var nome = files.item(0).name;
        if (!(nome.split(".").pop() === "csv")) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                icon: "error",
                title: "Non va bene",
                text: "Questo file non è .csv",
            });
            this.filemsg = "Choose a file";
        }
        else {
            this.filemsg = nome;
        }
    }
};
GruppiComponent.ctorParameters = () => [
    { type: _shared_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] },
    { type: _shared_global_var_service__WEBPACK_IMPORTED_MODULE_3__["GlobalVarService"] }
];
GruppiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-gruppi",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gruppi.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dynamicPages/gruppi/gruppi.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gruppi.component.scss */ "./src/app/dynamicPages/gruppi/gruppi.component.scss")).default]
    })
], GruppiComponent);



/***/ }),

/***/ "./src/app/dynamicPages/niente/niente.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/dynamicPages/niente/niente.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Lato:100,300&display=swap\");\n* {\n  margin: 0;\n  padding: 0;\n  color: black;\n}\n.main-body {\n  background-image: linear-gradient(315deg, #ebebeb 0%, #d4d4d4 74%);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n}\n.main-body .center1 {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n.main-body .center1 .logo {\n  width: 270px;\n  height: 270px;\n  background-image: url('panda.svg');\n  background-size: contain;\n  background-repeat: no-repeat;\n  margin-bottom: 30px;\n  margin-top: -20px;\n}\n.main-body .center1 h2 {\n  font-family: \"Lato\", \"sans-serif\";\n  color: black;\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHluYW1pY1BhZ2VzL25pZW50ZS9EOlxcU0NIT09MXFxDUEUgKyBNb3JlXFw1wrBTdXBlcmlvcmVcXFByb2dldHRvLUZWQUFcXE5ld0Zyb250ZW5kL3NyY1xcYXBwXFxkeW5hbWljUGFnZXNcXG5pZW50ZVxcbmllbnRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9keW5hbWljUGFnZXMvbmllbnRlL25pZW50ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxnRkFBQTtBQUVSO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDQUY7QURHQTtFQUNFLGtFQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFFQSx1QkFBQTtBQ0ZGO0FER0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDREo7QURHSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0ROO0FER0k7RUFDRSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDRE4iLCJmaWxlIjoic3JjL2FwcC9keW5hbWljUGFnZXMvbmllbnRlL25pZW50ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86MTAwLDMwMCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5tYWluLWJvZHkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNlYmViZWIgMCUsICNkNGQ0ZDQgNzQlKTtcclxuICAvL2JhY2tncm91bmQtY29sb3I6IHJnYigxOCwgMjUsIDgyKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy9hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC5jZW50ZXIxIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgLmxvZ28ge1xyXG4gICAgICB3aWR0aDogMjcwcHg7XHJcbiAgICAgIGhlaWdodDogMjcwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9pbWFnZXMvcGFuZGEuc3ZnKTtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAgIH1cclxuICAgIGgyIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBcInNhbnMtc2VyaWZcIjtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86MTAwLDMwMCZkaXNwbGF5PXN3YXBcIik7XG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5tYWluLWJvZHkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZWJlYmViIDAlLCAjZDRkNGQ0IDc0JSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubWFpbi1ib2R5IC5jZW50ZXIxIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tYWluLWJvZHkgLmNlbnRlcjEgLmxvZ28ge1xuICB3aWR0aDogMjcwcHg7XG4gIGhlaWdodDogMjcwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9pbWFnZXMvcGFuZGEuc3ZnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cbi5tYWluLWJvZHkgLmNlbnRlcjEgaDIge1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIFwic2Fucy1zZXJpZlwiO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/dynamicPages/niente/niente.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/dynamicPages/niente/niente.component.ts ***!
  \*********************************************************/
/*! exports provided: NienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NienteComponent", function() { return NienteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NienteComponent = class NienteComponent {
    constructor() { }
    ngOnInit() {
    }
};
NienteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-niente',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./niente.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dynamicPages/niente/niente.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./niente.component.scss */ "./src/app/dynamicPages/niente/niente.component.scss")).default]
    })
], NienteComponent);



/***/ }),

/***/ "./src/app/dynamicPages/studenti/studenti.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/dynamicPages/studenti/studenti.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-body .main-div .table12 {\n  width: 90%;\n  height: 70vh;\n  margin: 20px auto;\n  margin-top: 30px;\n  margin-left: 0px;\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n  align-items: center;\n}\n.main-body .main-div .table12 .thead,\n.main-body .main-div .table12 .rowss {\n  display: flex;\n  flex-direction: row;\n  height: 55px;\n  width: 98%;\n  background-image: linear-gradient(240deg, #4ae4b3 25%, #61e9b3 75%);\n  border-radius: 25px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  cursor: pointer;\n}\n.main-body .main-div .table12 .thead .layer1,\n.main-body .main-div .table12 .rowss .layer1 {\n  width: 100%;\n  background-color: rgba(248, 247, 216, 0.5);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border-radius: 25px;\n  overflow: hidden;\n}\n.main-body .main-div .table12 .thead .campo,\n.main-body .main-div .table12 .rowss .campo {\n  text-align: left;\n  width: 55%;\n  padding-top: 15px;\n  padding-left: 20px;\n  margin-right: 3px;\n  font-size: 15px;\n  font-family: \"Lato\", \"sans-serif\";\n  font-weight: 700;\n}\n.main-body .main-div .table12 .thead .c1,\n.main-body .main-div .table12 .rowss .c1 {\n  padding-top: 5px;\n  font-size: 16px;\n  font-weight: 900;\n}\n.main-body .main-div .table12 .thead .vuoto,\n.main-body .main-div .table12 .rowss .vuoto {\n  height: 45px;\n  width: 45px;\n  padding-left: 40px;\n  padding-right: 40px;\n}\n.main-body .main-div .table12 .thead .vuoto .logo1,\n.main-body .main-div .table12 .thead .vuoto .logo,\n.main-body .main-div .table12 .rowss .vuoto .logo1,\n.main-body .main-div .table12 .rowss .vuoto .logo {\n  height: 35px;\n  width: 35px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 8px;\n  background-image: url('student.svg');\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n.main-body .main-div .table12 .thead .vuoto .logo1,\n.main-body .main-div .table12 .rowss .vuoto .logo1 {\n  background-image: url('add-button.svg');\n  height: 32px;\n  width: 32px;\n  margin-top: 7px;\n}\n.main-body .main-div .table12 .thead {\n  background-color: rgba(248, 247, 216, 0.5);\n  height: 55px;\n}\n.main-body .main-div .table12 .rowss {\n  margin-top: 15px;\n}\n.main-body .main-div .table12 .rowss:hover {\n  transform: scale(1.008);\n  transition: 0.2s ease;\n  cursor: pointer;\n}\n.main-body .main-div .table12 .rowss:not(:hover) {\n  transition: 0.1s ease;\n}\n.main-body .main-div form .form1 .fields div {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  padding: 10px;\n  align-items: center;\n}\n.main-body .main-div form .form1 .fields div svg {\n  margin-right: 20px;\n  width: 28px;\n  height: 28px;\n}\n.main-body .main-div form .form1 .fields .vis svg {\n  fill: #000;\n}\n.main-body .main-div form .form1 .fields .Nvis svg {\n  fill: #000;\n}\n.main-body .main-div form .form1 .fields input {\n  width: 60%;\n  font-size: 16px;\n}\n.main-body .main-div form .form1 .fields .submitBTN {\n  width: 25%;\n  padding: 24px;\n  line-height: 2px;\n  margin-left: auto;\n  margin-right: -5%;\n  margin-top: 25px;\n}\n.main-body .main-div .tab {\n  position: absolute;\n  top: 19%;\n  left: 59%;\n  font-family: \"Lato\", \"sans-serif\";\n  display: flex;\n  flex-direction: column;\n}\n.main-body .main-div .tab .hp2 {\n  font-weight: 400;\n  width: 100%;\n}\n.main-body .main-div .tab .tabella {\n  height: 38vh;\n  width: 500px;\n  display: flex;\n  flex-direction: column;\n  margin-top: 25px;\n  margin-bottom: 10px;\n}\n.main-body .main-div .tab .tabella .tabH {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  font-family: \"Lato\", \"sans-serif\";\n  font-weight: 400;\n  font-size: 15px;\n  padding-left: 95px;\n  margin-bottom: 5px;\n  /*.tH2 {\n    width: 55px;\n    text-align: center;\n  }\n  .tH3 {\n    width: 30%;\n  }*/\n}\n.main-body .main-div .tab .tabella .tabH .tH1 {\n  width: 35%;\n}\n.main-body .main-div .tab .tabella .rows {\n  overflow-y: scroll;\n  height: 100%;\n}\n.main-body .main-div .tab .tabella .rows .rowTab {\n  width: 100%;\n  height: 50px;\n  background-color: rgba(211, 209, 209, 0.768);\n  margin-bottom: 15px;\n  border-radius: 30px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: row;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  /*\n  .col2 {\n    font-size: 20px;\n    width: 50px;\n    //align-self: center;\n    text-align: center;\n    padding-top: 8px;\n  }\n  .col3 {\n    width: 30%;\n    margin-top: 3px;\n    font-size: 18px;\n    //align-self: center;\n    margin-left: 5px;\n    padding-top: 8px;\n  }*/\n}\n.main-body .main-div .tab .tabella .rows .rowTab .miniLogo {\n  height: 35px;\n  width: 35px;\n  margin-left: 30px;\n  margin-right: 30px;\n  background-image: url('classe.svg');\n  background-repeat: no-repeat;\n  background-size: contain;\n  align-self: center;\n}\n.main-body .main-div .tab .tabella .rows .rowTab .add_rem_btn {\n  margin-top: 10px;\n  height: 35px;\n  width: 35px;\n}\n.main-body .main-div .tab .tabella .rows .rowTab .add_rem_btn .addLogo,\n.main-body .main-div .tab .tabella .rows .rowTab .add_rem_btn .remLogo {\n  height: 35px;\n  width: 35px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  align-self: center;\n}\n.main-body .main-div .tab .tabella .rows .rowTab .add_rem_btn .addLogo {\n  margin-left: auto;\n  background-image: url('success.svg');\n  margin-top: 0px;\n}\n.main-body .main-div .tab .tabella .rows .rowTab .add_rem_btn .emptyL {\n  background-image: none;\n}\n.main-body .main-div .tab .tabella .rows .rowTab .add_rem_btn .remLogo {\n  margin-left: auto;\n  background-image: url('stop.svg');\n}\n.main-body .main-div .tab .tabella .rows .rowTab .col1 {\n  font-size: 20px;\n  font-family: \"Lato\", \"sans-serif\";\n  font-weight: 300;\n  width: 65%;\n}\n.main-body .main-div .tab .tabella .rows .rowTab .Titolo {\n  line-height: 55px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHluYW1pY1BhZ2VzL3N0dWRlbnRpL0Q6XFxTQ0hPT0xcXENQRSArIE1vcmVcXDXCsFN1cGVyaW9yZVxcUHJvZ2V0dG8tRlZBQVxcTmV3RnJvbnRlbmQvc3JjXFxhcHBcXGR5bmFtaWNQYWdlc1xcc3R1ZGVudGlcXHN0dWRlbnRpLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9keW5hbWljUGFnZXMvc3R1ZGVudGkvc3R1ZGVudGkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNETjtBREdNOztFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUVBQUE7RUFFQSxtQkFBQTtFQUNBLGlGQUFBO0VBRUEsZUFBQTtBQ0hSO0FES1E7O0VBQ0UsV0FBQTtFQUNBLDBDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDRlY7QURJUTs7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQ0RWO0FER1E7O0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNBVjtBREVROztFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NWO0FEQVU7Ozs7RUFFRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0FDSVo7QURGVTs7RUFDRSx1Q0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0taO0FERE07RUFDRSwwQ0FBQTtFQUNBLFlBQUE7QUNHUjtBRERNO0VBQ0UsZ0JBQUE7QUNHUjtBREZRO0VBQ0UsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNJVjtBREZRO0VBQ0UscUJBQUE7QUNJVjtBREdVO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0RaO0FERVk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQWQ7QURJWTtFQUNFLFVBQUE7QUNGZDtBRE9ZO0VBQ0UsVUFBQTtBQ0xkO0FEUVU7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQ05aO0FEUVU7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDTlo7QURXSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxpQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ1ROO0FEV007RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUNUUjtBRFdNO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDVFI7QURVUTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFJQTs7Ozs7O0lBQUE7QUNMVjtBREVVO0VBQ0UsVUFBQTtBQ0FaO0FEVVE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUNSVjtBRFNVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlGQUFBO0VBZ0RFOzs7Ozs7Ozs7Ozs7Ozs7SUFBQTtBQ3ZDZDtBRE5ZO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsbUNBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUNPZDtBREpZO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ01kO0FESmM7O0VBRUUsWUFBQTtFQUNBLFdBQUE7RUFFQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUNLaEI7QURIYztFQUNFLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0FDS2hCO0FESGM7RUFDRSxzQkFBQTtBQ0toQjtBREhjO0VBQ0UsaUJBQUE7RUFDQSxpQ0FBQTtBQ0toQjtBRERZO0VBQ0UsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDR2Q7QURjWTtFQUNFLGlCQUFBO0FDWmQiLCJmaWxlIjoic3JjL2FwcC9keW5hbWljUGFnZXMvc3R1ZGVudGkvc3R1ZGVudGkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1ib2R5IHtcclxuICAubWFpbi1kaXYge1xyXG4gICAgLnRhYmxlMTIge1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAudGhlYWQsXHJcbiAgICAgIC5yb3dzcyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGhlaWdodDogNTVweDtcclxuICAgICAgICB3aWR0aDogOTglO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyNDBkZWcsICM0YWU0YjMgMjUlLCAjNjFlOWIzIDc1JSk7XHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjQwZGVnLCAjMDA3NjYwIDE1JSwgIzAwOWY4MiA3NSUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpLFxyXG4gICAgICAgICAgMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgIC5sYXllcjEge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMjQ3LCAyMTYsIDAuNSk7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbXBvIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICB3aWR0aDogNTUlO1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgXCJzYW5zLXNlcmlmXCI7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYzEge1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC52dW90byB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICB3aWR0aDogNDVweDtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAubG9nbzEsXHJcbiAgICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2ltYWdlcy9zdHVkZW50LnN2Zyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sb2dvMSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9pbWFnZXMvYWRkLWJ1dHRvbi5zdmcpO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC50aGVhZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDI0NywgMjE2LCAwLjUpO1xyXG4gICAgICAgIGhlaWdodDogNTVweDtcclxuICAgICAgfVxyXG4gICAgICAucm93c3Mge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDA4KTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpub3QoOmhvdmVyKSB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3JtIHtcclxuICAgICAgLmZvcm0xIHtcclxuICAgICAgICAuZmllbGRzIHtcclxuICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDI4cHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudmlzIHtcclxuICAgICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgICBmaWxsOiAjMDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLk52aXMge1xyXG4gICAgICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICAgIGZpbGw6ICMwMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN1Ym1pdEJUTiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC01JTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC50YWIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMTklO1xyXG4gICAgICBsZWZ0OiA1OSU7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgXCJzYW5zLXNlcmlmXCI7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAuaHAyIHtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC50YWJlbGxhIHtcclxuICAgICAgICBoZWlnaHQ6IDM4dmg7XHJcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgLnRhYkgge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgXCJzYW5zLXNlcmlmXCI7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA5NXB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgLnRIMSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvKi50SDIge1xyXG4gICAgICAgICAgICB3aWR0aDogNTVweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRIMyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICB9Ki9cclxuICAgICAgICB9XHJcbiAgICAgICAgLnJvd3Mge1xyXG4gICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgLnJvd1RhYiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjExLCAyMDksIDIwOSwgMC43NjgpO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSksXHJcbiAgICAgICAgICAgICAgMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuXHJcbiAgICAgICAgICAgIC5taW5pTG9nbyB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDI1MCwgMjUxKTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vaW1hZ2VzL2NsYXNzZS5zdmcpO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmFkZF9yZW1fYnRuIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICAgICAgICAgICAgLmFkZExvZ28sXHJcbiAgICAgICAgICAgICAgLnJlbUxvZ28ge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmFkZExvZ28ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9pbWFnZXMvc3VjY2Vzcy5zdmdcIik7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5lbXB0eUwge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnJlbUxvZ28ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9pbWFnZXMvc3RvcC5zdmdcIik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY29sMSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgXCJzYW5zLXNlcmlmXCI7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICB3aWR0aDogNjUlO1xyXG4gICAgICAgICAgICB9IC8qXHJcbiAgICAgICAgICAgIC5jb2wyIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgLy9hbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbDMge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAvL2FsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAgICAgICAgIH0qL1xyXG4gICAgICAgICAgICAuVGl0b2xvIHtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIubWFpbi1ib2R5IC5tYWluLWRpdiAudGFibGUxMiB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNzB2aDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC50YWJsZTEyIC50aGVhZCxcbi5tYWluLWJvZHkgLm1haW4tZGl2IC50YWJsZTEyIC5yb3dzcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogNTVweDtcbiAgd2lkdGg6IDk4JTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI0MGRlZywgIzRhZTRiMyAyNSUsICM2MWU5YjMgNzUlKTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAudGFibGUxMiAudGhlYWQgLmxheWVyMSxcbi5tYWluLWJvZHkgLm1haW4tZGl2IC50YWJsZTEyIC5yb3dzcyAubGF5ZXIxIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAyNDcsIDIxNiwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC50YWJsZTEyIC50aGVhZCAuY2FtcG8sXG4ubWFpbi1ib2R5IC5tYWluLWRpdiAudGFibGUxMiAucm93c3MgLmNhbXBvIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDU1JTtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBcInNhbnMtc2VyaWZcIjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC50YWJsZTEyIC50aGVhZCAuYzEsXG4ubWFpbi1ib2R5IC5tYWluLWRpdiAudGFibGUxMiAucm93c3MgLmMxIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogOTAwO1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLnRhYmxlMTIgLnRoZWFkIC52dW90byxcbi5tYWluLWJvZHkgLm1haW4tZGl2IC50YWJsZTEyIC5yb3dzcyAudnVvdG8ge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiA0NXB4O1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAudGFibGUxMiAudGhlYWQgLnZ1b3RvIC5sb2dvMSxcbi5tYWluLWJvZHkgLm1haW4tZGl2IC50YWJsZTEyIC50aGVhZCAudnVvdG8gLmxvZ28sXG4ubWFpbi1ib2R5IC5tYWluLWRpdiAudGFibGUxMiAucm93c3MgLnZ1b3RvIC5sb2dvMSxcbi5tYWluLWJvZHkgLm1haW4tZGl2IC50YWJsZTEyIC5yb3dzcyAudnVvdG8gLmxvZ28ge1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAzNXB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9pbWFnZXMvc3R1ZGVudC5zdmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAudGFibGUxMiAudGhlYWQgLnZ1b3RvIC5sb2dvMSxcbi5tYWluLWJvZHkgLm1haW4tZGl2IC50YWJsZTEyIC5yb3dzcyAudnVvdG8gLmxvZ28xIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2ltYWdlcy9hZGQtYnV0dG9uLnN2Zyk7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG4gIG1hcmdpbi10b3A6IDdweDtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC50YWJsZTEyIC50aGVhZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAyNDcsIDIxNiwgMC41KTtcbiAgaGVpZ2h0OiA1NXB4O1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLnRhYmxlMTIgLnJvd3NzIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC50YWJsZTEyIC5yb3dzczpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMDgpO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC50YWJsZTEyIC5yb3dzczpub3QoOmhvdmVyKSB7XG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZTtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IGZvcm0gLmZvcm0xIC5maWVsZHMgZGl2IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgZm9ybSAuZm9ybTEgLmZpZWxkcyBkaXYgc3ZnIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyOHB4O1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgZm9ybSAuZm9ybTEgLmZpZWxkcyAudmlzIHN2ZyB7XG4gIGZpbGw6ICMwMDA7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiBmb3JtIC5mb3JtMSAuZmllbGRzIC5OdmlzIHN2ZyB7XG4gIGZpbGw6ICMwMDA7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiBmb3JtIC5mb3JtMSAuZmllbGRzIGlucHV0IHtcbiAgd2lkdGg6IDYwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgZm9ybSAuZm9ybTEgLmZpZWxkcyAuc3VibWl0QlROIHtcbiAgd2lkdGg6IDI1JTtcbiAgcGFkZGluZzogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDJweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogLTUlO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLnRhYiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOSU7XG4gIGxlZnQ6IDU5JTtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBcInNhbnMtc2VyaWZcIjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC50YWIgLmhwMiB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLnRhYiAudGFiZWxsYSB7XG4gIGhlaWdodDogMzh2aDtcbiAgd2lkdGg6IDUwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLnRhYiAudGFiZWxsYSAudGFiSCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIFwic2Fucy1zZXJpZlwiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogOTVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAvKi50SDIge1xuICAgIHdpZHRoOiA1NXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAudEgzIHtcbiAgICB3aWR0aDogMzAlO1xuICB9Ki9cbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC50YWIgLnRhYmVsbGEgLnRhYkggLnRIMSB7XG4gIHdpZHRoOiAzNSU7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAudGFiIC50YWJlbGxhIC5yb3dzIHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAudGFiIC50YWJlbGxhIC5yb3dzIC5yb3dUYWIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMSwgMjA5LCAyMDksIDAuNzY4KTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICAvKlxuICAuY29sMiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIC8vYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xuICB9XG4gIC5jb2wzIHtcbiAgICB3aWR0aDogMzAlO1xuICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgLy9hbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xuICB9Ki9cbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC50YWIgLnRhYmVsbGEgLnJvd3MgLnJvd1RhYiAubWluaUxvZ28ge1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAzNXB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vaW1hZ2VzL2NsYXNzZS5zdmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC50YWIgLnRhYmVsbGEgLnJvd3MgLnJvd1RhYiAuYWRkX3JlbV9idG4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAzNXB4O1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLnRhYiAudGFiZWxsYSAucm93cyAucm93VGFiIC5hZGRfcmVtX2J0biAuYWRkTG9nbyxcbi5tYWluLWJvZHkgLm1haW4tZGl2IC50YWIgLnRhYmVsbGEgLnJvd3MgLnJvd1RhYiAuYWRkX3JlbV9idG4gLnJlbUxvZ28ge1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAzNXB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC50YWIgLnRhYmVsbGEgLnJvd3MgLnJvd1RhYiAuYWRkX3JlbV9idG4gLmFkZExvZ28ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vaW1hZ2VzL3N1Y2Nlc3Muc3ZnXCIpO1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAudGFiIC50YWJlbGxhIC5yb3dzIC5yb3dUYWIgLmFkZF9yZW1fYnRuIC5lbXB0eUwge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLnRhYiAudGFiZWxsYSAucm93cyAucm93VGFiIC5hZGRfcmVtX2J0biAucmVtTG9nbyB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9pbWFnZXMvc3RvcC5zdmdcIik7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAudGFiIC50YWJlbGxhIC5yb3dzIC5yb3dUYWIgLmNvbDEge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgXCJzYW5zLXNlcmlmXCI7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHdpZHRoOiA2NSU7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAudGFiIC50YWJlbGxhIC5yb3dzIC5yb3dUYWIgLlRpdG9sbyB7XG4gIGxpbmUtaGVpZ2h0OiA1NXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/dynamicPages/studenti/studenti.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/dynamicPages/studenti/studenti.component.ts ***!
  \*************************************************************/
/*! exports provided: StudentiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentiComponent", function() { return StudentiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/api-call.service */ "./src/shared/api-call.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.scss */ "./node_modules/sweetalert2/src/sweetalert2.scss");





let StudentiComponent = class StudentiComponent {
    constructor(apicalls) {
        this.apicalls = apicalls;
        this.title = "Studenti";
        this.pag = 1; ////1 elenco normale, 2 crea, 3 modifica/elimina
        this.studenti = [];
        this.classi = [];
        //variabili form
        this.nome = "";
        this.cognome = "";
        this.usr = "";
        this.psw = "";
        this.psw1 = "";
        this.vis1 = false;
        this.vis2 = false;
        //variabili check quando si crea
        //inGroup: boolean = false;
        this.done = false;
    }
    ngOnInit() {
        this.classi = [
            "Classe  5IA",
            "Classe  5IB",
            "Classe  4IA",
            "Classe  4IB",
            "Classe  3IA",
            "Classe  3IB",
        ];
        this.studenti = ["Tommo"]; //, "Jimmy","Sammy","Manny",];
        this.updateElenco();
    }
    updateElenco() {
        let riss1 = [];
        let riss = this.apicalls.getStudents();
        riss.then((data) => {
            for (let val in data) {
                riss1.push(data[val]);
            }
            this.studenti = riss1;
            //console.log(this.studenti);
        });
    }
    changeVis(sel1) {
        if (sel1 === "1")
            this.vis1 = !this.vis1;
        else
            this.vis2 = !this.vis2;
    }
    back(num) {
        if (num === 2 && this.done) {
            // !this.inGroup &&
            //se ho creato lo studente e non è in gruppo
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                icon: "error",
                title: "Oops...",
                text: "Devi inserire lo studente in un gruppo",
            });
        }
        else {
            //this.inGroup = false;
            this.done = false;
            this.pagElenco();
        }
    }
    pagElenco() {
        this.pag = 1;
        this.title = "Studenti";
        this.updateElenco();
        this.resetForm();
    }
    pagCrea() {
        this.pag = 2;
        this.title = "Nuovo Studente";
        this.getClassi();
    }
    crea() {
        var checkmsg = this.checkForm();
        //this.inGroup = false;
        if (checkmsg != "") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                icon: "error",
                title: "Oops...",
                text: checkmsg,
            });
        }
        else {
            let riss = this.apicalls.postStudent(this.nome, this.cognome, this.usr, this.psw);
            riss
                .then((data) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    //conferma
                    icon: "success",
                    title: "<strong>Studente aggiunto!</strong>",
                    timer: 1500,
                });
                this.done = true;
                this.idS = data["id"];
                //this.pagElenco();
            })
                .catch(() => {
                this.done = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Si è verificato un errore!",
                });
            });
        }
    }
    pagModifica(idS, no, co, usrnm) {
        this.pag = 3;
        this.title = "Modifica studente: " + idS;
        this.idS = idS;
        this.nome = no;
        this.cognome = co;
        this.usr = usrnm;
        this.getClassi();
    }
    modifica() {
        var checkmsg = this.checkForm();
        if (checkmsg != "") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                icon: "error",
                title: "Oops...",
                text: checkmsg,
            });
        }
        else {
            let riss = this.apicalls.putStudent(this.idS, this.nome, this.cognome, this.usr, this.psw);
            riss
                .then((data) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    //conferma
                    icon: "success",
                    title: "<strong>Studente modificato!</strong>",
                    timer: 1500,
                });
                this.pagElenco();
            })
                .catch(() => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Si è verificato un errore!",
                });
            });
        }
    }
    putSinG(idG) {
        //console.log("classe: " + idG + " | student: " + this.idS);
        let riss = this.apicalls.putSinG(this.idS, idG);
        riss
            .then((data) => {
            if (data == null)
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    //conferma
                    icon: "success",
                    title: "<strong>Studente aggiunto al gruppo!</strong>",
                    timer: 1500,
                });
            this.pagElenco();
        })
            .catch(() => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                icon: "error",
                title: "Oops...",
                text: "Si è verificato un errore!",
            });
        });
    }
    delSfromG(idG) {
        let riss = this.apicalls.delSfromG(this.idS, idG);
        riss
            .then((data) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                //conferma
                icon: "success",
                title: "<strong>Studente rimosso dal gruppo!</strong>",
                timer: 1500,
            });
            //this.pagElenco();
        })
            .catch(() => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                icon: "error",
                title: "Oops...",
                text: "Si è verificato un errore!",
            });
        });
    }
    getClassi() {
        let riss1 = [];
        let riss = this.apicalls.getGruppi();
        riss.then((data) => {
            for (let val in data) {
                data[val]["alreadyIN"] = "0";
                data[val]["hovEff"] = "0";
                riss1.push(data[val]);
            }
            this.classi = riss1;
            //console.log(this.classi);
        });
    }
    elimina() {
        let riss = this.apicalls.deleteStudent(this.idS);
        riss
            .then((data) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                //conferma
                icon: "success",
                title: "<strong>Studente eliminato!</strong>",
                timer: 1500,
            });
            this.pagElenco();
        })
            .catch(() => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                icon: "error",
                title: "Oops...",
                text: "Si è verificato un errore!",
            });
        });
    }
    resetForm() {
        this.nome = "";
        this.cognome = "";
        this.usr = "";
        this.psw = "";
        this.psw1 = "";
    }
    checkForm() {
        if (this.nome === "" ||
            this.cognome === "" ||
            this.usr === "" ||
            this.psw === "" ||
            this.psw1 === "")
            return "Form incompleto!";
        else if (this.psw != this.psw1) {
            return "Reinserisci correttamente la password";
        }
        else
            return "";
    }
};
StudentiComponent.ctorParameters = () => [
    { type: _shared_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] }
];
StudentiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-studenti",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./studenti.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dynamicPages/studenti/studenti.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../gruppi/gruppi.component.scss */ "./src/app/dynamicPages/gruppi/gruppi.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./studenti.component.scss */ "./src/app/dynamicPages/studenti/studenti.component.scss")).default]
    })
], StudentiComponent);



/***/ }),

/***/ "./src/app/dynamicPages/verifiche/verifiche.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/dynamicPages/verifiche/verifiche.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Lato:100,300,400,700&display=swap\");\n.main-body .main-div .title {\n  width: 90%;\n}\n.main-body .main-div .title .iconss {\n  height: 60px;\n  width: 400px;\n  float: left;\n  margin-left: auto;\n  display: flex;\n  margin-top: 20px;\n}\n.main-body .main-div .title .iconss div {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-family: \"Lato\", \"sans-serif\";\n  height: 100%;\n  flex: 0.5;\n  border: 2px solid #022442;\n  border-radius: 20px 20px 0px 0px;\n  margin-right: -5px;\n  cursor: pointer;\n}\n.main-body .main-div .title .iconss div .logoo1,\n.main-body .main-div .title .iconss div .logoo2 {\n  height: 30px;\n  width: 30px;\n  margin-right: 10px;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n.main-body .main-div .title .iconss .activeBTN {\n  margin-right: 2px;\n  /*background: linear-gradient(\n    200deg,\n    rgba(97, 162, 221, 1) 0%,\n    rgba(3, 73, 136, 1) 100%\n  );*/\n  background: linear-gradient(55deg, #022442, #004e92);\n}\n.main-body .main-div .title .iconss .activeBTN h3 {\n  color: white;\n}\n.main-body .main-div .title .iconss .activeBTN svg {\n  fill: white;\n}\n.main-body .main-div .title .iconss .actv1 {\n  margin-left: 7px;\n  margin-right: -5px;\n}\n.main-body .main-div .form .form1 .fields div {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  padding: 10px;\n  align-items: center;\n}\n.main-body .main-div .form .form1 .fields div svg {\n  margin-right: 20px;\n  width: 35px;\n  height: 35px;\n}\n.main-body .main-div .form .form1 .fields .vis svg {\n  fill: #2cc66d;\n}\n.main-body .main-div .form .form1 .fields .Nvis svg {\n  fill: red;\n}\n.main-body .main-div .form .form1 .fields .risultati {\n  margin-right: -140%;\n  margin-top: 2px;\n  background-image: linear-gradient(320deg, #00b4db 40%, #0083b0);\n  transition: all 0.15s ease-in;\n}\n.main-body .main-div .form .form1 .fields .risultati:hover {\n  transform: scale(1.1);\n}\n.main-body .main-div .form .form1 .tab {\n  width: 90%;\n  display: flex;\n  flex-direction: row;\n}\n.main-body .main-div .form .form1 .tab .tabella {\n  height: 35vh;\n  width: 80%;\n  margin-top: 40px;\n  margin-bottom: 10px;\n}\n.main-body .main-div .form .form1 .tab .tabella .tabH {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  font-family: \"Lato\", \"sans-serif\";\n  font-weight: 400;\n  font-size: 15px;\n  padding-left: 95px;\n  margin-bottom: 5px;\n}\n.main-body .main-div .form .form1 .tab .tabella .tabH .tH1 {\n  width: 35%;\n}\n.main-body .main-div .form .form1 .tab .tabella .tabH .tH2 {\n  width: 55px;\n  text-align: center;\n}\n.main-body .main-div .form .form1 .tab .tabella .tabH .tH3 {\n  width: 30%;\n}\n.main-body .main-div .form .form1 .tab .tabella .rows {\n  overflow-y: scroll;\n  height: 100%;\n}\n.main-body .main-div .form .form1 .tab .tabella .rows .rowTab {\n  width: 100%;\n  height: 50px;\n  background-color: rgba(226, 226, 226, 0.768);\n  margin-bottom: 15px;\n  border-radius: 30px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: row;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n.main-body .main-div .form .form1 .tab .tabella .rows .rowTab .miniLogo {\n  height: 35px;\n  width: 35px;\n  margin-left: 30px;\n  margin-right: 30px;\n  border-radius: 50%;\n  background-image: url('code.svg');\n  background-repeat: no-repeat;\n  background-size: contain;\n  align-self: center;\n}\n.main-body .main-div .form .form1 .tab .tabella .rows .rowTab .add_rem_btn {\n  margin-top: 11px;\n  height: 30px;\n  width: 30px;\n}\n.main-body .main-div .form .form1 .tab .tabella .rows .rowTab .add_rem_btn .addLogo,\n.main-body .main-div .form .form1 .tab .tabella .rows .rowTab .add_rem_btn .remLogo {\n  height: 30px;\n  width: 30px;\n  left: 0;\n  background-repeat: no-repeat;\n  background-size: contain;\n  align-self: center;\n}\n.main-body .main-div .form .form1 .tab .tabella .rows .rowTab .add_rem_btn .addLogo {\n  margin-left: auto;\n  background-image: url('success.svg');\n  margin-top: 0px;\n}\n.main-body .main-div .form .form1 .tab .tabella .rows .rowTab .add_rem_btn .emptyL {\n  background-image: none;\n}\n.main-body .main-div .form .form1 .tab .tabella .rows .rowTab .add_rem_btn .remLogo {\n  margin-left: auto;\n  background-image: url('stop.svg');\n}\n.main-body .main-div .form .form1 .tab .tabella .rows .rowTab .col1 {\n  font-size: 20px;\n  font-family: \"Lato\", \"sans-serif\";\n  font-weight: 400;\n  width: 37%;\n}\n.main-body .main-div .form .form1 .tab .tabella .rows .rowTab .col2 {\n  font-size: 20px;\n  width: 50px;\n  text-align: center;\n  padding-top: 8px;\n}\n.main-body .main-div .form .form1 .tab .tabella .rows .rowTab .col3 {\n  width: 30%;\n  margin-top: 3px;\n  font-size: 18px;\n  margin-left: 5px;\n  padding-top: 8px;\n}\n.main-body .main-div .form .form1 .tab .tabella .rows .rowTab .Titolo,\n.main-body .main-div .form .form1 .tab .tabella .rows .rowTab .sottoTitolo {\n  margin-top: 2px;\n}\n.main-body .main-div .form .form1 .tab .tabella .rows .rowTab .sottoTitolo {\n  height: 20px;\n  font-size: 15px;\n  font-weight: 300;\n}\n.main-body .main-div .pagRis {\n  width: 90%;\n}\n.main-body .main-div .pagRis .btns {\n  padding-left: 70%;\n  margin-top: -40px;\n}\n.main-body .main-div .pagRis .btns .BTN {\n  margin-right: 20px;\n  padding: 18px;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n  line-height: 5px;\n  font-weight: 700;\n  font-family: \"Lato\", sans-serif;\n  color: black;\n  text-align: center;\n  letter-spacing: 1px;\n  background-image: linear-gradient(240deg, #4ae4b3 25%, #4ff3b1 75%);\n  cursor: pointer;\n}\n.main-body .main-div .pagRis .table12 {\n  width: 90%;\n  height: 70vh;\n  margin: 20px auto;\n  margin-top: 30px;\n  margin-left: 0px;\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n  align-items: center;\n}\n.main-body .main-div .pagRis .table12 .thead,\n.main-body .main-div .pagRis .table12 .rowss {\n  display: flex;\n  flex-direction: row;\n  height: 55px;\n  width: 98%;\n  background-image: linear-gradient(240deg, #4ae4b3 25%, #61e9b3 75%);\n  border-radius: 25px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  cursor: pointer;\n}\n.main-body .main-div .pagRis .table12 .thead .layer1,\n.main-body .main-div .pagRis .table12 .rowss .layer1 {\n  width: 100%;\n  background-color: rgba(248, 247, 216, 0.4);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  border-radius: 25px;\n  overflow: hidden;\n}\n.main-body .main-div .pagRis .table12 .thead .campo,\n.main-body .main-div .pagRis .table12 .rowss .campo {\n  text-align: left;\n  width: 55%;\n  height: 100%;\n  padding-left: 20px;\n  margin-right: 3px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  font-size: 15px;\n  font-family: \"Lato\", \"sans-serif\";\n  font-weight: 700;\n}\n.main-body .main-div .pagRis .table12 .thead .c1,\n.main-body .main-div .pagRis .table12 .rowss .c1 {\n  padding-top: 5px;\n  font-size: 16px;\n  font-weight: 900;\n}\n.main-body .main-div .pagRis .table12 .thead .c2,\n.main-body .main-div .pagRis .table12 .rowss .c2 {\n  width: 20%;\n}\n.main-body .main-div .pagRis .table12 .thead .vuoto,\n.main-body .main-div .pagRis .table12 .rowss .vuoto {\n  height: 45px;\n  width: 45px;\n  padding-left: 40px;\n  padding-right: 40px;\n}\n.main-body .main-div .pagRis .table12 .thead .vuoto .logo1,\n.main-body .main-div .pagRis .table12 .thead .vuoto .logo2,\n.main-body .main-div .pagRis .table12 .thead .vuoto .logo3,\n.main-body .main-div .pagRis .table12 .thead .vuoto .logo,\n.main-body .main-div .pagRis .table12 .rowss .vuoto .logo1,\n.main-body .main-div .pagRis .table12 .rowss .vuoto .logo2,\n.main-body .main-div .pagRis .table12 .rowss .vuoto .logo3,\n.main-body .main-div .pagRis .table12 .rowss .vuoto .logo {\n  height: 35px;\n  width: 35px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 8px;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n.main-body .main-div .pagRis .table12 .thead .vuoto .logo,\n.main-body .main-div .pagRis .table12 .thead .vuoto .logo1,\n.main-body .main-div .pagRis .table12 .rowss .vuoto .logo,\n.main-body .main-div .pagRis .table12 .rowss .vuoto .logo1 {\n  height: 32px;\n  width: 32px;\n  margin-top: 7px;\n}\n.main-body .main-div .pagRis .table12 .thead .vuoto .logo1,\n.main-body .main-div .pagRis .table12 .rowss .vuoto .logo1 {\n  background-image: url('result.svg');\n}\n.main-body .main-div .pagRis .table12 .thead .vuoto .logo2,\n.main-body .main-div .pagRis .table12 .rowss .vuoto .logo2 {\n  background-image: url('download.svg');\n  height: 32px;\n  width: 32px;\n  padding: 3px;\n  margin-top: 4px;\n}\n.main-body .main-div .pagRis .table12 .thead .vuoto .logo2:hover,\n.main-body .main-div .pagRis .table12 .rowss .vuoto .logo2:hover {\n  background-color: #47ecb8;\n  border-radius: 5px;\n}\n.main-body .main-div .pagRis .table12 .thead {\n  height: 55px;\n  justify-content: center;\n  align-items: center;\n}\n.main-body .main-div .pagRis .table12 .rowss {\n  margin-top: 15px;\n}\n.main-body .main-div .pagRis .table12 .rowss:hover {\n  transform: scale(1.008);\n  transition: 0.2s ease;\n  cursor: pointer;\n}\n.main-body .main-div .pagRis .table12 .rowss:not(:hover) {\n  transition: 0.1s ease;\n}\n.main-body .main-div .pagEsercizio {\n  width: 90%;\n  height: 70vh;\n  border-radius: 20px 0px 20px 20px;\n}\n.main-body .main-div .pagEsercizio iframe,\n.main-body .main-div .pagEsercizio .submissionss {\n  width: 100%;\n  height: 100%;\n  border: none;\n  outline: none;\n  border-radius: 20px 0px 20px 20px;\n  border: 3px solid #022442;\n}\n.main-body .main-div .pagEsercizio .submissionss {\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px;\n  display: flex;\n  flex-direction: column;\n}\n.main-body .main-div .pagEsercizio .submissionss h2 {\n  font-size: 40px;\n  font-family: \"Lato\", \"sans-serif\";\n  margin-bottom: 30px;\n  margin-top: 120px;\n}\n.main-body .main-div .pagEsercizio .submissionss h3 {\n  font-size: 20px;\n  font-family: \"Lato\", \"sans-serif\";\n}\n.main-body .main-div .pagEsercizio .submissionss input {\n  margin-top: 50px;\n  height: 25px;\n  width: 30%;\n  border: none;\n  outline: none;\n  background: none;\n  border-bottom: 1px solid black;\n  color: black;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 1px;\n}\n.main-body .main-div .pagEsercizio .submissionss .submitBTN {\n  width: 25%;\n  padding: 25px;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n  line-height: 5px;\n  font-weight: 400;\n  font-family: \"Lato\", sans-serif;\n  color: white;\n  text-align: center;\n  letter-spacing: 1px;\n  background: linear-gradient(55deg, #022442, #004e92);\n  cursor: pointer;\n}\n.main-body .main-div .pagEsercizio .submissionss .inputfile {\n  height: 0;\n  overflow: hidden;\n  width: 0;\n}\n.main-body .main-div .pagEsercizio .submissionss .inputfile + label {\n  height: 18px;\n  border: none;\n  border-radius: 5px;\n  color: #000;\n  cursor: pointer;\n  display: inline-block;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  outline: none;\n  padding: 0.8rem 15px;\n  position: relative;\n  transition: all 0.3s;\n  vertical-align: middle;\n  text-align: center;\n  width: 22%;\n}\n.main-body .main-div .pagEsercizio .submissionss .inputfile + label.btn-2 {\n  border: 3px solid #022442;\n  border-radius: 50px;\n  overflow: hidden;\n}\n.main-body .main-div .pagEsercizio .submissionss .inputfile + label.btn-2::before {\n  color: #000;\n  font-family: \"Lato\";\n  font-size: 100%;\n  height: 100%;\n  right: 130%;\n  line-height: 3.3;\n  position: absolute;\n  top: 0px;\n  transition: all 0.3s;\n}\n.main-body .main-div .pagEsercizio .submissionss .inputfile + label.btn-2:hover {\n  transform: scale(1.1);\n}\n.main-body .table1 .card .eyeLogo {\n  width: 100%;\n  height: 25px;\n  margin-left: 20px;\n  margin-top: 5px;\n  background-image: url('eye.svg');\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n.main-body .table1 .card .verlogo,\n.main-body .table1 .card .exlogo {\n  width: 70px;\n  height: 70px;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n.main-body .table1 .card h3 {\n  color: black;\n  width: 100%;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 13px;\n  font-weight: 700;\n  text-align: center;\n  margin-top: 20px;\n}\n.main-body .table1 .cardStud {\n  background: linear-gradient(55deg, #022442, #004e92);\n}\n.main-body .table1 .cardStud .verlogo,\n.main-body .table1 .cardStud .exlogo {\n  fill: white;\n}\n.main-body .table1 .cardStud h3 {\n  color: white;\n  font-weight: 500;\n}\n.main-body .table1 .cardStud:hover {\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHluYW1pY1BhZ2VzL3ZlcmlmaWNoZS9EOlxcU0NIT09MXFxDUEUgKyBNb3JlXFw1wrBTdXBlcmlvcmVcXFByb2dldHRvLUZWQUFcXE5ld0Zyb250ZW5kL3NyY1xcYXBwXFxkeW5hbWljUGFnZXNcXHZlcmlmaWNoZVxcdmVyaWZpY2hlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9keW5hbWljUGFnZXMvdmVyaWZpY2hlL3ZlcmlmaWNoZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx3RkFBQTtBQUlKO0VBQ0UsVUFBQTtBQ0ZOO0FER007RUFFRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0ZSO0FESVE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBRUEsWUFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFFQSxlQUFBO0FDSlY7QURLVTs7RUFFRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQ0haO0FETVE7RUFDRSxpQkFBQTtFQUNBOzs7O0tBQUE7RUFLQSxvREFBQTtBQ0pWO0FES1U7RUFDRSxZQUFBO0FDSFo7QURLVTtFQUNFLFdBQUE7QUNIWjtBRE1RO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ0pWO0FEV1U7RUFFRSxlQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDVlo7QURXWTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNUZDtBRGFZO0VBQ0UsYUFBQTtBQ1hkO0FEZ0JZO0VBQ0UsU0FBQTtBQ2RkO0FEaUJVO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsK0RBQUE7RUFDQSw2QkFBQTtBQ2ZaO0FEZ0JZO0VBQ0UscUJBQUE7QUNkZDtBRGtCUTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNoQlY7QURpQlU7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUVBLGdCQUFBO0VBQ0EsbUJBQUE7QUNoQlo7QURpQlk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDZmQ7QURnQmM7RUFDRSxVQUFBO0FDZGhCO0FEZ0JjO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDZGhCO0FEZ0JjO0VBQ0UsVUFBQTtBQ2RoQjtBRGlCWTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQ2ZkO0FEZ0JjO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlGQUFBO0FDZGhCO0FEaUJnQjtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUNoQmxCO0FEbUJnQjtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNqQmxCO0FEbUJrQjs7RUFFRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFFQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUNsQnBCO0FEb0JrQjtFQUNFLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0FDbEJwQjtBRG9Ca0I7RUFDRSxzQkFBQTtBQ2xCcEI7QURvQmtCO0VBQ0UsaUJBQUE7RUFDQSxpQ0FBQTtBQ2xCcEI7QURzQmdCO0VBQ0UsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDcEJsQjtBRHNCZ0I7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNyQmxCO0FEdUJnQjtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBQ0EsZ0JBQUE7QUN0QmxCO0FEd0JnQjs7RUFFRSxlQUFBO0FDdEJsQjtBRHdCZ0I7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDdEJsQjtBRDhCSTtFQUNFLFVBQUE7QUM1Qk47QUQ2Qk07RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FDM0JSO0FENEJRO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUVBQUE7RUFDQSxlQUFBO0FDMUJWO0FENkJNO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDM0JSO0FENkJROztFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBRUEsbUVBQUE7RUFFQSxtQkFBQTtFQUNBLGlGQUFBO0VBRUEsZUFBQTtBQzlCVjtBRGdDVTs7RUFDRSxXQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQzdCWjtBRCtCVTs7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7QUM1Qlo7QUQ4QlU7O0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUMzQlo7QUQ2QlU7O0VBQ0UsVUFBQTtBQzFCWjtBRDRCVTs7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUN6Qlo7QUQyQlk7Ozs7Ozs7O0VBSUUsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUVBLHdCQUFBO0VBQ0EsNEJBQUE7QUN0QmQ7QUR3Qlk7Ozs7RUFFRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNwQmQ7QURzQlk7O0VBQ0UsbUNBQUE7QUNuQmQ7QURxQlk7O0VBQ0UscUNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDbEJkO0FEbUJjOztFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUNoQmhCO0FEcUJRO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNuQlY7QURxQlE7RUFDRSxnQkFBQTtBQ25CVjtBRG9CVTtFQUNFLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDbEJaO0FEb0JVO0VBQ0UscUJBQUE7QUNsQlo7QUR1Qkk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0FDckJOO0FEd0JNOztFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0FDdEJSO0FEd0JNO0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUN2QlI7QUR3QlE7RUFDRSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDdEJWO0FEd0JRO0VBQ0UsZUFBQTtFQUNBLGlDQUFBO0FDdEJWO0FEd0JRO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ3RCVjtBRHdCUTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsb0RBQUE7RUFDQSxlQUFBO0FDdkJWO0FEMEJRO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtBQ3hCVjtBRDBCUTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUN4QlY7QUQwQlU7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUN4Qlo7QUQwQlk7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLG9CQUFBO0FDeEJkO0FEMkJZO0VBQ0UscUJBQUE7QUN6QmQ7QURrQ007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQ2hDUjtBRG1DTTs7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLHdCQUFBO0VBQ0EsNEJBQUE7QUNsQ1I7QURxQ007RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ25DUjtBRHNDSTtFQUNFLG9EQUFBO0FDcENOO0FEc0NNOztFQUVFLFdBQUE7QUNwQ1I7QURzQ007RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNwQ1I7QURzQ007RUFDRSxpREFBQTtBQ3BDUiIsImZpbGUiOiJzcmMvYXBwL2R5bmFtaWNQYWdlcy92ZXJpZmljaGUvdmVyaWZpY2hlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzoxMDAsMzAwLDQwMCw3MDAmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuLm1haW4tYm9keSB7XHJcbiAgLm1haW4tZGl2IHtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIC5pY29uc3Mge1xyXG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIFwic2Fucy1zZXJpZlwiO1xyXG5cclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGZsZXg6IDAuNTtcclxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMjI0NDI7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogLTVweDtcclxuXHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAubG9nb28xLFxyXG4gICAgICAgICAgLmxvZ29vMiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYWN0aXZlQlROIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gICAgICAgICAgLypiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgIDIwMGRlZyxcclxuICAgICAgICAgICAgcmdiYSg5NywgMTYyLCAyMjEsIDEpIDAlLFxyXG4gICAgICAgICAgICByZ2JhKDMsIDczLCAxMzYsIDEpIDEwMCVcclxuICAgICAgICAgICk7Ki9cclxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg1NWRlZywgIzAyMjQ0MiwgIzAwNGU5Mik7XHJcbiAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgIGZpbGw6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYWN0djEge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDdweDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogLTVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5mb3JtIHtcclxuICAgICAgLmZvcm0xIHtcclxuICAgICAgICAuZmllbGRzIHtcclxuICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogbGlnaHRwaW5rO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnZpcyB7XHJcbiAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgZmlsbDogIzJjYzY2ZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5OdmlzIHtcclxuICAgICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgICBmaWxsOiByZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yaXN1bHRhdGkge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xNDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMjBkZWcsICMwMGI0ZGIgNDAlLCAjMDA4M2IwKTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW47XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudGFiIHtcclxuICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgIC50YWJlbGxhIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNXZoO1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG5cclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgLnRhYkgge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIFwic2Fucy1zZXJpZlwiO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOTVweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgLnRIMSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAudEgyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1NXB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAudEgzIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yb3dzIHtcclxuICAgICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIC5yb3dUYWIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNiwgMjI2LCAyMjYsIDAuNzY4KTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpLFxyXG4gICAgICAgICAgICAgICAgICAwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xyXG5cclxuICAgICAgICAgICAgICAgIC5taW5pTG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMjUwLCAyNTEpO1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2ltYWdlcy9jb2RlLnN2Z1wiKTtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmFkZF9yZW1fYnRuIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTFweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgICAgICAgICAgICAgICAuYWRkTG9nbyxcclxuICAgICAgICAgICAgICAgICAgLnJlbUxvZ28ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLmFkZExvZ28ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2ltYWdlcy9zdWNjZXNzLnN2Z1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLmVtcHR5TCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAucmVtTG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vaW1hZ2VzL3N0b3Auc3ZnXCIpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbDEge1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgXCJzYW5zLXNlcmlmXCI7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNyU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY29sMiB7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgIC8vYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY29sMyB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAvL2FsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5UaXRvbG8sXHJcbiAgICAgICAgICAgICAgICAuc290dG9UaXRvbG8ge1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc290dG9UaXRvbG8ge1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5wYWdSaXMge1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAuYnRucyB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA3MCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbiAgICAgICAgLkJUTiB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxOHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyNDBkZWcsICM0YWU0YjMgMjUlLCAjNGZmM2IxIDc1JSk7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC50YWJsZTEyIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGhlaWdodDogNzB2aDtcclxuICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAudGhlYWQsXHJcbiAgICAgICAgLnJvd3NzIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgICAgICAgd2lkdGg6IDk4JTtcclxuICAgICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogIzM0ZDJmNTtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyNDBkZWcsICM0YWU0YjMgMjUlLCAjNjFlOWIzIDc1JSk7XHJcbiAgICAgICAgICAvL2JhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyNDBkZWcsICMwMDc2NjAgMTUlLCAjMDA5ZjgyIDc1JSk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpLFxyXG4gICAgICAgICAgICAwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgIC5sYXllcjEge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDI0NywgMjE2LCAwLjQpO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jYW1wbyB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1NSU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgXCJzYW5zLXNlcmlmXCI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYzEge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYzIge1xyXG4gICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnZ1b3RvIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNDVweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG5cclxuICAgICAgICAgICAgLmxvZ28xLFxyXG4gICAgICAgICAgICAubG9nbzIsXHJcbiAgICAgICAgICAgIC5sb2dvMyxcclxuICAgICAgICAgICAgLmxvZ28ge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgICAgICAgIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2ltYWdlcy9yZXN1bHQuc3ZnKTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubG9nbyxcclxuICAgICAgICAgICAgLmxvZ28xIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sb2dvMSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2ltYWdlcy9yZXN1bHQuc3ZnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubG9nbzIge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9pbWFnZXMvZG93bmxvYWQuc3ZnKTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3MSwgMjM2LCAxODQpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudGhlYWQge1xyXG4gICAgICAgICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucm93c3Mge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDA4KTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOm5vdCg6aG92ZXIpIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4xcyBlYXNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnBhZ0VzZXJjaXppbyB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIGhlaWdodDogNzB2aDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAwcHggMjBweCAyMHB4O1xyXG4gICAgICAvL2JhY2tncm91bmQtY29sb3I6IHRvbWF0bztcclxuXHJcbiAgICAgIGlmcmFtZSxcclxuICAgICAgLnN1Ym1pc3Npb25zcyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMHB4IDIwcHggMjBweDtcclxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjMDIyNDQyO1xyXG4gICAgICB9XHJcbiAgICAgIC5zdWJtaXNzaW9uc3Mge1xyXG4gICAgICAgIC8vcGFkZGluZzogMnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgXCJzYW5zLXNlcmlmXCI7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgXCJzYW5zLXNlcmlmXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnN1Ym1pdEJUTiB7XHJcbiAgICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgICAgcGFkZGluZzogMjVweDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogNXB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAvL2JhY2tncm91bmQ6IHJnYig1NSwgMjMzLCAxMzApO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDU1ZGVnLCAjMDIyNDQyLCAjMDA0ZTkyKTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbnB1dGZpbGUge1xyXG4gICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW5wdXRmaWxlICsgbGFiZWwge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuOHJlbSAxNXB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgd2lkdGg6IDIyJTtcclxuXHJcbiAgICAgICAgICAmLmJ0bi0yIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzAyMjQ0MjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDEzMCU7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMuMztcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAudGFibGUxIHtcclxuICAgIC5jYXJkIHtcclxuICAgICAgLmV5ZUxvZ28ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2ltYWdlcy9leWUuc3ZnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnZlcmxvZ28sXHJcbiAgICAgIC5leGxvZ28ge1xyXG4gICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9pbWFnZXMvdmVyaWZpY2Euc3ZnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaDMge1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkU3R1ZCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg1NWRlZywgIzAyMjQ0MiwgIzAwNGU5Mik7XHJcblxyXG4gICAgICAudmVybG9nbyxcclxuICAgICAgLmV4bG9nbyB7XHJcbiAgICAgICAgZmlsbDogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgICAgaDMge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB9XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMjVweCA1MHB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzoxMDAsMzAwLDQwMCw3MDAmZGlzcGxheT1zd2FwXCIpO1xuLm1haW4tYm9keSAubWFpbi1kaXYgLnRpdGxlIHtcbiAgd2lkdGg6IDkwJTtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC50aXRsZSAuaWNvbnNzIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNDAwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC50aXRsZSAuaWNvbnNzIGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgXCJzYW5zLXNlcmlmXCI7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxleDogMC41O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDIyNDQyO1xuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAudGl0bGUgLmljb25zcyBkaXYgLmxvZ29vMSxcbi5tYWluLWJvZHkgLm1haW4tZGl2IC50aXRsZSAuaWNvbnNzIGRpdiAubG9nb28yIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAudGl0bGUgLmljb25zcyAuYWN0aXZlQlROIHtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIC8qYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIDIwMGRlZyxcbiAgICByZ2JhKDk3LCAxNjIsIDIyMSwgMSkgMCUsXG4gICAgcmdiYSgzLCA3MywgMTM2LCAxKSAxMDAlXG4gICk7Ki9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDU1ZGVnLCAjMDIyNDQyLCAjMDA0ZTkyKTtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC50aXRsZSAuaWNvbnNzIC5hY3RpdmVCVE4gaDMge1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAudGl0bGUgLmljb25zcyAuYWN0aXZlQlROIHN2ZyB7XG4gIGZpbGw6IHdoaXRlO1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLnRpdGxlIC5pY29uc3MgLmFjdHYxIHtcbiAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLmZvcm0gLmZvcm0xIC5maWVsZHMgZGl2IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLmZvcm0gLmZvcm0xIC5maWVsZHMgZGl2IHN2ZyB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC5mb3JtIC5mb3JtMSAuZmllbGRzIC52aXMgc3ZnIHtcbiAgZmlsbDogIzJjYzY2ZDtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC5mb3JtIC5mb3JtMSAuZmllbGRzIC5OdmlzIHN2ZyB7XG4gIGZpbGw6IHJlZDtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC5mb3JtIC5mb3JtMSAuZmllbGRzIC5yaXN1bHRhdGkge1xuICBtYXJnaW4tcmlnaHQ6IC0xNDAlO1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMjBkZWcsICMwMGI0ZGIgNDAlLCAjMDA4M2IwKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW47XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAuZm9ybSAuZm9ybTEgLmZpZWxkcyAucmlzdWx0YXRpOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLmZvcm0gLmZvcm0xIC50YWIge1xuICB3aWR0aDogOTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLmZvcm0gLmZvcm0xIC50YWIgLnRhYmVsbGEge1xuICBoZWlnaHQ6IDM1dmg7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAuZm9ybSAuZm9ybTEgLnRhYiAudGFiZWxsYSAudGFiSCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIFwic2Fucy1zZXJpZlwiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogOTVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLmZvcm0gLmZvcm0xIC50YWIgLnRhYmVsbGEgLnRhYkggLnRIMSB7XG4gIHdpZHRoOiAzNSU7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAuZm9ybSAuZm9ybTEgLnRhYiAudGFiZWxsYSAudGFiSCAudEgyIHtcbiAgd2lkdGg6IDU1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC5mb3JtIC5mb3JtMSAudGFiIC50YWJlbGxhIC50YWJIIC50SDMge1xuICB3aWR0aDogMzAlO1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLmZvcm0gLmZvcm0xIC50YWIgLnRhYmVsbGEgLnJvd3Mge1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC5mb3JtIC5mb3JtMSAudGFiIC50YWJlbGxhIC5yb3dzIC5yb3dUYWIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNiwgMjI2LCAyMjYsIDAuNzY4KTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLmZvcm0gLmZvcm0xIC50YWIgLnRhYmVsbGEgLnJvd3MgLnJvd1RhYiAubWluaUxvZ28ge1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAzNXB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2ltYWdlcy9jb2RlLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAuZm9ybSAuZm9ybTEgLnRhYiAudGFiZWxsYSAucm93cyAucm93VGFiIC5hZGRfcmVtX2J0biB7XG4gIG1hcmdpbi10b3A6IDExcHg7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAuZm9ybSAuZm9ybTEgLnRhYiAudGFiZWxsYSAucm93cyAucm93VGFiIC5hZGRfcmVtX2J0biAuYWRkTG9nbyxcbi5tYWluLWJvZHkgLm1haW4tZGl2IC5mb3JtIC5mb3JtMSAudGFiIC50YWJlbGxhIC5yb3dzIC5yb3dUYWIgLmFkZF9yZW1fYnRuIC5yZW1Mb2dvIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAuZm9ybSAuZm9ybTEgLnRhYiAudGFiZWxsYSAucm93cyAucm93VGFiIC5hZGRfcmVtX2J0biAuYWRkTG9nbyB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9pbWFnZXMvc3VjY2Vzcy5zdmdcIik7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC5mb3JtIC5mb3JtMSAudGFiIC50YWJlbGxhIC5yb3dzIC5yb3dUYWIgLmFkZF9yZW1fYnRuIC5lbXB0eUwge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLmZvcm0gLmZvcm0xIC50YWIgLnRhYmVsbGEgLnJvd3MgLnJvd1RhYiAuYWRkX3JlbV9idG4gLnJlbUxvZ28ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vaW1hZ2VzL3N0b3Auc3ZnXCIpO1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLmZvcm0gLmZvcm0xIC50YWIgLnRhYmVsbGEgLnJvd3MgLnJvd1RhYiAuY29sMSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBcInNhbnMtc2VyaWZcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgd2lkdGg6IDM3JTtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC5mb3JtIC5mb3JtMSAudGFiIC50YWJlbGxhIC5yb3dzIC5yb3dUYWIgLmNvbDIge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAuZm9ybSAuZm9ybTEgLnRhYiAudGFiZWxsYSAucm93cyAucm93VGFiIC5jb2wzIHtcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAuZm9ybSAuZm9ybTEgLnRhYiAudGFiZWxsYSAucm93cyAucm93VGFiIC5UaXRvbG8sXG4ubWFpbi1ib2R5IC5tYWluLWRpdiAuZm9ybSAuZm9ybTEgLnRhYiAudGFiZWxsYSAucm93cyAucm93VGFiIC5zb3R0b1RpdG9sbyB7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC5mb3JtIC5mb3JtMSAudGFiIC50YWJlbGxhIC5yb3dzIC5yb3dUYWIgLnNvdHRvVGl0b2xvIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAucGFnUmlzIHtcbiAgd2lkdGg6IDkwJTtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC5wYWdSaXMgLmJ0bnMge1xuICBwYWRkaW5nLWxlZnQ6IDcwJTtcbiAgbWFyZ2luLXRvcDogLTQwcHg7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAucGFnUmlzIC5idG5zIC5CVE4ge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBsaW5lLWhlaWdodDogNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjQwZGVnLCAjNGFlNGIzIDI1JSwgIzRmZjNiMSA3NSUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAucGFnUmlzIC50YWJsZTEyIHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA3MHZoO1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLnBhZ1JpcyAudGFibGUxMiAudGhlYWQsXG4ubWFpbi1ib2R5IC5tYWluLWRpdiAucGFnUmlzIC50YWJsZTEyIC5yb3dzcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogNTVweDtcbiAgd2lkdGg6IDk4JTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI0MGRlZywgIzRhZTRiMyAyNSUsICM2MWU5YjMgNzUlKTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAucGFnUmlzIC50YWJsZTEyIC50aGVhZCAubGF5ZXIxLFxuLm1haW4tYm9keSAubWFpbi1kaXYgLnBhZ1JpcyAudGFibGUxMiAucm93c3MgLmxheWVyMSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMjQ3LCAyMTYsIDAuNCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLnBhZ1JpcyAudGFibGUxMiAudGhlYWQgLmNhbXBvLFxuLm1haW4tYm9keSAubWFpbi1kaXYgLnBhZ1JpcyAudGFibGUxMiAucm93c3MgLmNhbXBvIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDU1JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBcInNhbnMtc2VyaWZcIjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC5wYWdSaXMgLnRhYmxlMTIgLnRoZWFkIC5jMSxcbi5tYWluLWJvZHkgLm1haW4tZGl2IC5wYWdSaXMgLnRhYmxlMTIgLnJvd3NzIC5jMSB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC5wYWdSaXMgLnRhYmxlMTIgLnRoZWFkIC5jMixcbi5tYWluLWJvZHkgLm1haW4tZGl2IC5wYWdSaXMgLnRhYmxlMTIgLnJvd3NzIC5jMiB7XG4gIHdpZHRoOiAyMCU7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAucGFnUmlzIC50YWJsZTEyIC50aGVhZCAudnVvdG8sXG4ubWFpbi1ib2R5IC5tYWluLWRpdiAucGFnUmlzIC50YWJsZTEyIC5yb3dzcyAudnVvdG8ge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiA0NXB4O1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAucGFnUmlzIC50YWJsZTEyIC50aGVhZCAudnVvdG8gLmxvZ28xLFxuLm1haW4tYm9keSAubWFpbi1kaXYgLnBhZ1JpcyAudGFibGUxMiAudGhlYWQgLnZ1b3RvIC5sb2dvMixcbi5tYWluLWJvZHkgLm1haW4tZGl2IC5wYWdSaXMgLnRhYmxlMTIgLnRoZWFkIC52dW90byAubG9nbzMsXG4ubWFpbi1ib2R5IC5tYWluLWRpdiAucGFnUmlzIC50YWJsZTEyIC50aGVhZCAudnVvdG8gLmxvZ28sXG4ubWFpbi1ib2R5IC5tYWluLWRpdiAucGFnUmlzIC50YWJsZTEyIC5yb3dzcyAudnVvdG8gLmxvZ28xLFxuLm1haW4tYm9keSAubWFpbi1kaXYgLnBhZ1JpcyAudGFibGUxMiAucm93c3MgLnZ1b3RvIC5sb2dvMixcbi5tYWluLWJvZHkgLm1haW4tZGl2IC5wYWdSaXMgLnRhYmxlMTIgLnJvd3NzIC52dW90byAubG9nbzMsXG4ubWFpbi1ib2R5IC5tYWluLWRpdiAucGFnUmlzIC50YWJsZTEyIC5yb3dzcyAudnVvdG8gLmxvZ28ge1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAzNXB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC5wYWdSaXMgLnRhYmxlMTIgLnRoZWFkIC52dW90byAubG9nbyxcbi5tYWluLWJvZHkgLm1haW4tZGl2IC5wYWdSaXMgLnRhYmxlMTIgLnRoZWFkIC52dW90byAubG9nbzEsXG4ubWFpbi1ib2R5IC5tYWluLWRpdiAucGFnUmlzIC50YWJsZTEyIC5yb3dzcyAudnVvdG8gLmxvZ28sXG4ubWFpbi1ib2R5IC5tYWluLWRpdiAucGFnUmlzIC50YWJsZTEyIC5yb3dzcyAudnVvdG8gLmxvZ28xIHtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMzJweDtcbiAgbWFyZ2luLXRvcDogN3B4O1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLnBhZ1JpcyAudGFibGUxMiAudGhlYWQgLnZ1b3RvIC5sb2dvMSxcbi5tYWluLWJvZHkgLm1haW4tZGl2IC5wYWdSaXMgLnRhYmxlMTIgLnJvd3NzIC52dW90byAubG9nbzEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vaW1hZ2VzL3Jlc3VsdC5zdmcpO1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLnBhZ1JpcyAudGFibGUxMiAudGhlYWQgLnZ1b3RvIC5sb2dvMixcbi5tYWluLWJvZHkgLm1haW4tZGl2IC5wYWdSaXMgLnRhYmxlMTIgLnJvd3NzIC52dW90byAubG9nbzIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vaW1hZ2VzL2Rvd25sb2FkLnN2Zyk7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLnBhZ1JpcyAudGFibGUxMiAudGhlYWQgLnZ1b3RvIC5sb2dvMjpob3Zlcixcbi5tYWluLWJvZHkgLm1haW4tZGl2IC5wYWdSaXMgLnRhYmxlMTIgLnJvd3NzIC52dW90byAubG9nbzI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDdlY2I4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAucGFnUmlzIC50YWJsZTEyIC50aGVhZCB7XG4gIGhlaWdodDogNTVweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAucGFnUmlzIC50YWJsZTEyIC5yb3dzcyB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAucGFnUmlzIC50YWJsZTEyIC5yb3dzczpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMDgpO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC5wYWdSaXMgLnRhYmxlMTIgLnJvd3NzOm5vdCg6aG92ZXIpIHtcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlO1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLnBhZ0VzZXJjaXppbyB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNzB2aDtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAwcHggMjBweCAyMHB4O1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLnBhZ0VzZXJjaXppbyBpZnJhbWUsXG4ubWFpbi1ib2R5IC5tYWluLWRpdiAucGFnRXNlcmNpemlvIC5zdWJtaXNzaW9uc3Mge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMHB4IDIwcHggMjBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgIzAyMjQ0Mjtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC5wYWdFc2VyY2l6aW8gLnN1Ym1pc3Npb25zcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC5wYWdFc2VyY2l6aW8gLnN1Ym1pc3Npb25zcyBoMiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBcInNhbnMtc2VyaWZcIjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgbWFyZ2luLXRvcDogMTIwcHg7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAucGFnRXNlcmNpemlvIC5zdWJtaXNzaW9uc3MgaDMge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgXCJzYW5zLXNlcmlmXCI7XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAucGFnRXNlcmNpemlvIC5zdWJtaXNzaW9uc3MgaW5wdXQge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAzMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC5wYWdFc2VyY2l6aW8gLnN1Ym1pc3Npb25zcyAuc3VibWl0QlROIHtcbiAgd2lkdGg6IDI1JTtcbiAgcGFkZGluZzogMjVweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGxpbmUtaGVpZ2h0OiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg1NWRlZywgIzAyMjQ0MiwgIzAwNGU5Mik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC5wYWdFc2VyY2l6aW8gLnN1Ym1pc3Npb25zcyAuaW5wdXRmaWxlIHtcbiAgaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMDtcbn1cbi5tYWluLWJvZHkgLm1haW4tZGl2IC5wYWdFc2VyY2l6aW8gLnN1Ym1pc3Npb25zcyAuaW5wdXRmaWxlICsgbGFiZWwge1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogIzAwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAwLjhyZW0gMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMjIlO1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLnBhZ0VzZXJjaXppbyAuc3VibWlzc2lvbnNzIC5pbnB1dGZpbGUgKyBsYWJlbC5idG4tMiB7XG4gIGJvcmRlcjogM3B4IHNvbGlkICMwMjI0NDI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubWFpbi1ib2R5IC5tYWluLWRpdiAucGFnRXNlcmNpemlvIC5zdWJtaXNzaW9uc3MgLmlucHV0ZmlsZSArIGxhYmVsLmJ0bi0yOjpiZWZvcmUge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcmlnaHQ6IDEzMCU7XG4gIGxpbmUtaGVpZ2h0OiAzLjM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLm1haW4tYm9keSAubWFpbi1kaXYgLnBhZ0VzZXJjaXppbyAuc3VibWlzc2lvbnNzIC5pbnB1dGZpbGUgKyBsYWJlbC5idG4tMjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbi5tYWluLWJvZHkgLnRhYmxlMSAuY2FyZCAuZXllTG9nbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9pbWFnZXMvZXllLnN2Zyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5tYWluLWJvZHkgLnRhYmxlMSAuY2FyZCAudmVybG9nbyxcbi5tYWluLWJvZHkgLnRhYmxlMSAuY2FyZCAuZXhsb2dvIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLm1haW4tYm9keSAudGFibGUxIC5jYXJkIGgzIHtcbiAgY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5tYWluLWJvZHkgLnRhYmxlMSAuY2FyZFN0dWQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNTVkZWcsICMwMjI0NDIsICMwMDRlOTIpO1xufVxuLm1haW4tYm9keSAudGFibGUxIC5jYXJkU3R1ZCAudmVybG9nbyxcbi5tYWluLWJvZHkgLnRhYmxlMSAuY2FyZFN0dWQgLmV4bG9nbyB7XG4gIGZpbGw6IHdoaXRlO1xufVxuLm1haW4tYm9keSAudGFibGUxIC5jYXJkU3R1ZCBoMyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5tYWluLWJvZHkgLnRhYmxlMSAuY2FyZFN0dWQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDI1cHggNTBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/dynamicPages/verifiche/verifiche.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/dynamicPages/verifiche/verifiche.component.ts ***!
  \***************************************************************/
/*! exports provided: VerificheComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificheComponent", function() { return VerificheComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/api-call.service */ "./src/shared/api-call.service.ts");
/* harmony import */ var _shared_global_var_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/global-var.service */ "./src/shared/global-var.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.scss */ "./node_modules/sweetalert2/src/sweetalert2.scss");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let VerificheComponent = class VerificheComponent {
    constructor(apicalls, globvar, domSanitizer, fb) {
        this.apicalls = apicalls;
        this.globvar = globvar;
        this.domSanitizer = domSanitizer;
        this.fb = fb;
        this.pag = 1; ////1 elenco normale, 2 crea, 3 modifica/elimina, 4 risultati || studenti 4 elenco esercizi, 5 pdf, 6 submission
        this.title = "Verifiche";
        //variabili form
        this.nome = "";
        this.verAttiva = false;
        this.idV = -1;
        this.idE = -1;
        this.verifiche = [];
        this.esLista = [];
        this.studsRis = [];
        this.studRis = [];
        this.hovEffect = false;
        this.msgg = "Verifiche non trovate";
        this.filemsg = "Choose a file";
        //submission
        this.file1 = null;
        this.fileName1 = "";
    }
    ngOnInit() {
        this.verifiche = [
            "Verifica 12-01",
        ]; /*,
          "Verifica 18-01",
          "Verifica 23-01",
          "Verifica 30-01"
        ];*/
        //let riss = this.apicalls.getVerifiche();
        this.updateElenco();
        this.formGroup = this.fb.group({
            task: [""],
        });
        //console.log(this.verifiche);
    }
    prova(id) {
        alert("Funziona " + id);
    }
    risultati() {
        this.pag = 4;
        this.title = "Risultati : " + this.nome;
        this.getRisultati();
    }
    getAllTestDetailsStud(idStud, nome, cognome) {
        let riss1 = this.apicalls.getTestDetailStud(this.idV, idStud);
        riss1
            .then((data) => {
            //scarico i file
            let strr = "";
            var errr = false;
            strr +=
                "<table style='text-align: center; width: 100%;'><tr><th>Esercizio</th><th>Punteggio</th></tr>";
            for (let val in data) {
                strr +=
                    "<tr><td>" +
                        data[val].short_title +
                        "</td><td>" +
                        data[val].score +
                        " / " +
                        data[val].test_cases +
                        "</td></tr>";
                var idTask = data[val].task_id;
                //console.log(
                //  "test: " + this.idV + " | task: " + idTask + " | idStud: " + idStud
                //);
                let riss2 = this.apicalls.getTestTaskStud(this.idV, idTask, idStud);
                riss2.subscribe((downloaded) => {
                    //console.log("file" + "  " + downloaded);
                    let blob = new Blob([downloaded], {
                        type: "text/x-c;charset=UTF-8",
                    });
                    let fileC = window.URL.createObjectURL(blob);
                    const link = document.createElement("a");
                    link.setAttribute("target", "_blank");
                    link.setAttribute("href", fileC);
                    link.setAttribute("download", `${data[val].surname}_${data[val].short_title}.c`);
                    document.body.appendChild(link);
                    link.click();
                    link.remove();
                }, (error) => {
                    errr = true;
                    //console.log(error);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                        icon: "error",
                        title: "Oops",
                        text: "Si è verificato un errore.",
                    });
                });
            }
            if (!errr) {
                strr +=
                    "</table><br><h4 style='font-family='Lato', 'san-serif'; color: darkgrey; font-size=15px;'>I file richiesti stanno arrivando</h4>";
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    icon: "info",
                    title: cognome + " " + nome,
                    html: strr,
                });
                //console.log(data);
            }
        })
            .catch(() => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                icon: "error",
                title: "Oops",
                text: "Si è verificato un errore.",
            });
        });
    }
    getTestDetailsStud(idStud, nome, cognome) {
        let riss1 = this.apicalls.getTestDetailStud(this.idV, idStud);
        riss1
            .then((data) => {
            let strr = "";
            strr +=
                "<table style='text-align: center; width: 100%;'><tr><th>Esercizio</th><th>Punteggio</th><th></th></tr>";
            for (let val in data) {
                strr +=
                    "<tr><td>" +
                        data[val].short_title +
                        "</td><td>" +
                        data[val].score +
                        " / " +
                        data[val].test_cases +
                        "</td></tr>";
            }
            strr += "</table>";
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                icon: "info",
                title: cognome + " " + nome,
                html: strr,
            });
            //console.log(data);
        })
            .catch(() => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                icon: "error",
                title: "Oops",
                text: "Si è verificato un errore.",
            });
        });
    }
    getRisultati() {
        let riss = [];
        let riss1 = this.apicalls.getTestResult(this.idV);
        riss1.then((data) => {
            for (let val in data) {
                data[val].result = data[val].result.substring(0, 5);
                riss.push(data[val]);
            }
            this.studsRis = riss;
            console.log(this.studsRis);
        });
    }
    getRisultatiCSV() {
        // da sistemare
        let riss1 = this.apicalls.getTestResultCSV(this.idV);
        riss1.subscribe((downloaded) => {
            console.log("ciao1" + "  " + downloaded);
            //console.log( downloaded.type + "\n" + downloaded.text().then((data) => console.log(data)));
            let blob = new Blob([downloaded], {
                type: "data:text/csv;charset=utf-8",
            });
            //fileSaver.saveAs(blob, 'employees.json');
            let fileCSV = window.URL.createObjectURL(blob); //this.domSanitizer.bypassSecurityTrustResourceUrl(
            //);
            const link = document.createElement("a");
            link.setAttribute("target", "_blank");
            link.setAttribute("href", fileCSV);
            link.setAttribute("download", `results.csv`);
            document.body.appendChild(link);
            link.click();
            link.remove();
        }, (error) => {
            console.log(error);
            //console.log("ciao2");
        });
    }
    backFromRisultati() {
        this.title = "Modifica : " + this.nome;
        this.pag = 3;
    }
    pagEsercizi(idV, nome) {
        //elenco es. 1 verifica
        this.pag = 4;
        this.msgg = "Esercizi non trovati";
        this.idV = idV;
        this.nome = nome;
        this.title = nome;
        this.filePDF = null;
        let riss1 = this.apicalls.getTasksByTestId(this.idV);
        riss1.then((data) => {
            this.esLista = [];
            for (let val in data) {
                this.esLista.push(data[val]);
            }
            //console.log(this.esLista);
        });
    }
    pagEserciziOK() {
        this.pag = 4;
        this.title = this.nome;
    }
    pagProblema(idE, nome) {
        this.pag = 5;
        this.title = "Esercizio : " + nome;
        //console.log(idE + " " + nome);
        this.filemsg = "Choose a file";
        this.formGroup.get("task").setValue(null);
        this.file1 = null;
        this.idE = idE;
        let riss = this.apicalls.getProblemPdf1(idE);
        riss.subscribe((downloaded) => {
            //console.log("ciao1" + "  " + downloaded);
            this.filePDF = this.domSanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(downloaded));
        }, (error) => {
            console.log(error);
            //console.log("ciao2");
        });
    }
    pagPdf() {
        this.pag = 5;
        this.filemsg = "Choose a file";
        this.formGroup.get("task").setValue(null);
        this.file1 = null;
    }
    pagSottomissione() {
        this.pag = 6;
    }
    changeTask(files) {
        if (files.length > 0) {
            var nome = files.item(0).name;
            if (!(nome.split(".").pop() === "c")) {
                //non .c
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    icon: "error",
                    title: "Non va bene",
                    text: "Questo file non ha l'estensione .c",
                });
                this.filemsg = "Choose a file";
            }
            else {
                this.filemsg = nome;
                this.file1 = files.item(0);
                this.formGroup.get("task").setValue(this.file1);
                /*console.log(
                  "File caricato " + this.file1.name + " size: " + this.file1.size
                );*/
            }
        }
    }
    caricaSub() {
        //console.log(this.idV + " " + this.idE);
        if (this.file1 != null) {
            //puoi mandarlo
            const form = new FormData(); //creazione oggetto form da mandare
            form.append("submission", this.file1);
            let riss1 = this.apicalls.postSubmissionT(this.idE, this.idV, form);
            riss1
                .then((data) => {
                let lung = data.lines.length;
                let ristr = ((Number.parseFloat(data.score) / lung) * 100)
                    .toString()
                    .substring(0, 5);
                let punt = Number.parseFloat(ristr);
                //console.log(punt);
                if (punt >= 60.0)
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                        //conferma
                        icon: "success",
                        title: "<strong>Risultato</strong>",
                        text: "Punteggio: " + punt + "/100",
                    });
                else
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                        //conferma
                        icon: "warning",
                        title: "<strong>Risultato</strong>",
                        html: "<strong>Punteggio: " +
                            punt +
                            "/100" +
                            "</strong><br><br> Esercitati ancora!",
                    });
                //this.pagElenco(false);
                //console.log(data);
            })
                .catch(() => sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                icon: "error",
                title: "Oops...",
                text: "Si è verificato un errore!",
            }));
        }
        else {
            //non si può mandare perchè manca il file
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                icon: "error",
                title: "Oops...",
                text: "Non hai indicato il file da caricare!",
            });
        }
    }
    updateElenco() {
        let riss = this.apicalls.getVerifiche();
        riss.then((data) => {
            this.verifiche = [];
            for (let val in data) {
                this.verifiche.push(data[val]);
            }
            //console.log(this.verifiche);
        });
    }
    pagElenco() {
        this.title = "Verifiche";
        this.pag = 1;
        this.updateElenco();
        this.msgg = "Verifiche non trovate";
        this.nome = "";
        this.verAttiva = false;
        this.esLista = [];
        this.catLista = [];
    }
    elencoEsTab() {
        let riss = this.apicalls.getTasks();
        let rss = [];
        let riss1 = this.apicalls.getTasksByTestId(this.idV);
        let esAlreadyIN = []; // es già dentro in verifica
        let rissCat = this.apicalls.getCategories();
        rissCat
            .then((data) => {
            for (let dd in data) {
                rss.push(data[dd]); //preparo le categorie
            }
            this.catLista = rss;
            //console.log(this.catLista);
        })
            .then(() => {
            riss.then((data) => {
                this.esLista = [];
                rss = [];
                for (let val in data) {
                    let rss1 = this.apicalls.getTaskById(data[val].id);
                    rss1.then((data1) => {
                        if (data1["is_public"] === "0") {
                            riss1.then((data11) => {
                                if (data11["length"] === 0)
                                    data1["alreadyIN"] = "0";
                                else {
                                    for (let val1 in data11) {
                                        if (data11[val1]["title"] === data1["title"]) {
                                            data1["alreadyIN"] = "1";
                                            break;
                                        }
                                        else {
                                            data1["alreadyIN"] = "0";
                                        }
                                    }
                                }
                            });
                            data1["hovEff"] = "0";
                            rss.push(data1);
                        }
                    });
                    //rss.push(data[val]);
                }
                this.esLista = rss;
                //console.log(this.esLista); //lista degli es. da stampare
                riss1.then((data11) => {
                    //esercizi già dentro
                    //console.log(data11);
                });
            });
        });
    }
    pagModifica(id, desc, vis) {
        this.title = "Modifica : " + desc;
        this.pag = 3;
        this.idV = id;
        let vall = vis === "1" ? true : false;
        this.verAttiva = vall;
        this.nome = desc;
        //console.log(id + " " + desc + " " + vis);
        this.elencoEsTab();
    }
    aggiungiEs(idE) {
        let riss = this.apicalls.putTaskInTest(this.idV, idE);
        riss.then(() => {
            //console.log("Esercizio Aggiunto!");
            for (let val32 in this.esLista) {
                if (this.esLista[val32]["id"] === idE)
                    this.esLista[val32]["alreadyIN"] = "1";
            }
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                //conferma
                icon: "success",
                title: "<strong>Esercizio aggiunto!</strong>",
                timer: 1000,
            });
            //this.elencoEsTab();
        });
    }
    togliEs(idE) {
        let riss2 = this.apicalls.remTaskFromTest(this.idV, idE);
        riss2.then((ris) => {
            //console.log("Esercizio Rimosso!");
            for (let val32 in this.esLista) {
                if (this.esLista[val32]["id"] === idE)
                    this.esLista[val32]["alreadyIN"] = "0";
            }
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                //conferma
                icon: "success",
                title: "<strong>Esercizio rimosso!</strong>",
                timer: 1000,
            });
            //this.elencoEsTab();
        });
    }
    modifica() {
        if (this.nome === "" || this.nome === undefined) {
            alert("Form incompleto!");
        }
        else {
            let riss = this.apicalls.putTest(this.nome, this.idV, this.verAttiva);
            riss.then((data) => {
                this.pagElenco();
            });
        }
    }
    pagCrea() {
        this.title = "Crea Verifica";
        this.pag = 2;
    }
    crea(nome) {
        if (nome === "" || nome === undefined) {
            alert("Form incompleto!");
        }
        else {
            let riss = this.apicalls.postTest(nome);
            riss.then((data) => {
                this.pagElenco();
            });
        }
    }
    cambiaVis() {
        this.verAttiva = !this.verAttiva;
    }
    elimina() {
        let riss = this.apicalls.deleteTest(this.idV);
        riss.then((data) => {
            this.pagElenco();
        });
    }
};
VerificheComponent.ctorParameters = () => [
    { type: _shared_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] },
    { type: _shared_global_var_service__WEBPACK_IMPORTED_MODULE_3__["GlobalVarService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }
];
VerificheComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-verifiche",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./verifiche.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dynamicPages/verifiche/verifiche.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../gruppi/gruppi.component.scss */ "./src/app/dynamicPages/gruppi/gruppi.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./verifiche.component.scss */ "./src/app/dynamicPages/verifiche/verifiche.component.scss")).default]
    })
], VerificheComponent);



/***/ }),

/***/ "./src/app/staticPages/about/about.component.scss":
/*!********************************************************!*\
  !*** ./src/app/staticPages/about/about.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Montserrat&display=swap\");\n.container {\n  font-family: \"Montserrat\", sans-serif;\n  color: white;\n  height: 93vh;\n}\n.container .head-about {\n  width: 40vw;\n  padding-top: 10vh;\n  padding-left: 10vh;\n  margin-right: auto;\n  margin-left: auto;\n}\n.container .head-about h2 {\n  text-align: left;\n  font-size: 40px;\n}\n.container p {\n  margin-top: 6vh;\n  padding: 5px;\n  margin-left: 32vw;\n  width: 40vw;\n  text-align: left;\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGljUGFnZXMvYWJvdXQvRDpcXFNDSE9PTFxcQ1BFICsgTW9yZVxcNcKwU3VwZXJpb3JlXFxQcm9nZXR0by1GVkFBXFxOZXdGcm9udGVuZC9zcmNcXGFwcFxcc3RhdGljUGFnZXNcXGFib3V0XFxhYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3RhdGljUGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsOEVBQUE7QUFFUjtFQUNFLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNBRjtBREVFO0VBRUUsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDREo7QURFSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0FOO0FER0U7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUVBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvc3RhdGljUGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbi5jb250YWluZXIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiA5M3ZoO1xyXG5cclxuICAuaGVhZC1hYm91dCB7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IGxpZ2h0c2VhZ3JlZW47XHJcbiAgICB3aWR0aDogNDB2dztcclxuICAgIHBhZGRpbmctdG9wOiAxMHZoO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHZoO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBoMiB7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgcCB7XHJcbiAgICBtYXJnaW4tdG9wOiA2dmg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMnZ3O1xyXG4gICAgd2lkdGg6IDQwdnc7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcFwiKTtcbi5jb250YWluZXIge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA5M3ZoO1xufVxuLmNvbnRhaW5lciAuaGVhZC1hYm91dCB7XG4gIHdpZHRoOiA0MHZ3O1xuICBwYWRkaW5nLXRvcDogMTB2aDtcbiAgcGFkZGluZy1sZWZ0OiAxMHZoO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuLmNvbnRhaW5lciAuaGVhZC1hYm91dCBoMiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cbi5jb250YWluZXIgcCB7XG4gIG1hcmdpbi10b3A6IDZ2aDtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tbGVmdDogMzJ2dztcbiAgd2lkdGg6IDQwdnc7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/staticPages/about/about.component.ts":
/*!******************************************************!*\
  !*** ./src/app/staticPages/about/about.component.ts ***!
  \******************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/staticPages/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.scss */ "./src/app/staticPages/about/about.component.scss")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/staticPages/homepage/homepage.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/staticPages/homepage/homepage.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Montserrat&display=swap\");\n.main-body {\n  width: 100%;\n  margin: 0 auto;\n  height: 93vh;\n  color: white;\n  font-family: \"Montserrat\", sans-serif;\n  display: flex;\n  flex-wrap: wrap;\n}\n.main-body .firstLine {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 90%;\n}\n.main-body .firstLine .logo {\n  padding: 0;\n  width: 35vh;\n  height: 35vh;\n  background-image: url('code.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  outline: none;\n  margin-right: 5vw;\n}\n.main-body .firstLine .titlediv {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  font-size: 4vh;\n}\n.main-body .secLine {\n  height: 40px;\n  width: 100%;\n  float: right;\n}\n.main-body .secLine .mysign {\n  padding-right: 60px;\n  color: white;\n  text-align: right;\n  font-family: \"Lato\", sans-serif;\n  font-size: 18px;\n  font-weight: 300;\n  letter-spacing: 0.5px;\n  display: block;\n}\n.main-body .secLine .mysign p {\n  display: inline;\n  font-size: 22px;\n  font-weight: 400;\n  letter-spacing: 1px;\n  padding-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGljUGFnZXMvaG9tZXBhZ2UvRDpcXFNDSE9PTFxcQ1BFICsgTW9yZVxcNcKwU3VwZXJpb3JlXFxQcm9nZXR0by1GVkFBXFxOZXdGcm9udGVuZC9zcmNcXGFwcFxcc3RhdGljUGFnZXNcXGhvbWVwYWdlXFxob21lcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3RhdGljUGFnZXMvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsOEVBQUE7QUFFUjtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBRUEsWUFBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDREY7QURFRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLFdBQUE7QUNESjtBREVJO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDQU47QURFSTtFQUNFLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsY0FBQTtBQ0FOO0FER0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUVBLFlBQUE7QUNGSjtBREdJO0VBQ0UsbUJBQUE7RUFFQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQ0ZOO0FER007RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvc3RhdGljUGFnZXMvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbi5tYWluLWJvZHkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIC8vYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzdGVlbGJsdWU7XHJcbiAgaGVpZ2h0OiA5M3ZoO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgLmZpcnN0TGluZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIC5sb2dvIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgd2lkdGg6IDM1dmg7XHJcbiAgICAgIGhlaWdodDogMzV2aDtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vaW1hZ2VzL2NvZGUucG5nXCIpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNXZ3O1xyXG4gICAgfVxyXG4gICAgLnRpdGxlZGl2IHtcclxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgIGZvbnQtc2l6ZTogNHZoO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2VjTGluZSB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgLm15c2lnbiB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XHJcblxyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXBcIik7XG4ubWFpbi1ib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IDkzdmg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ubWFpbi1ib2R5IC5maXJzdExpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTAlO1xufVxuLm1haW4tYm9keSAuZmlyc3RMaW5lIC5sb2dvIHtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDM1dmg7XG4gIGhlaWdodDogMzV2aDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vaW1hZ2VzL2NvZGUucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG1hcmdpbi1yaWdodDogNXZ3O1xufVxuLm1haW4tYm9keSAuZmlyc3RMaW5lIC50aXRsZWRpdiB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBmb250LXNpemU6IDR2aDtcbn1cbi5tYWluLWJvZHkgLnNlY0xpbmUge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogcmlnaHQ7XG59XG4ubWFpbi1ib2R5IC5zZWNMaW5lIC5teXNpZ24ge1xuICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYWluLWJvZHkgLnNlY0xpbmUgLm15c2lnbiBwIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/staticPages/homepage/homepage.component.ts":
/*!************************************************************!*\
  !*** ./src/app/staticPages/homepage/homepage.component.ts ***!
  \************************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_global_var_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/global-var.service */ "./src/shared/global-var.service.ts");



let HomepageComponent = class HomepageComponent {
    constructor(globvar) {
        this.globvar = globvar;
        this.title = "Correttore Automatico";
    }
    changeRed() {
        //console.log("valoree: " + this.globvar.coll);
    }
    ngOnInit() { }
};
HomepageComponent.ctorParameters = () => [
    { type: _shared_global_var_service__WEBPACK_IMPORTED_MODULE_2__["GlobalVarService"] }
];
HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-homepage",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./homepage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/staticPages/homepage/homepage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./homepage.component.scss */ "./src/app/staticPages/homepage/homepage.component.scss")).default]
    })
], HomepageComponent);



/***/ }),

/***/ "./src/app/staticPages/login/login.component.scss":
/*!********************************************************!*\
  !*** ./src/app/staticPages/login/login.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-body {\n  width: 100%;\n  height: 93vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-family: \"Lato\", sans-serif;\n  font-weight: 300;\n}\n.main-body .login-form {\n  width: 400px;\n  margin-bottom: 8px;\n  padding: 40px 35px 35px 35px;\n  border-radius: 10px;\n  /*background: radial-gradient(\n    circle,\n    #555555,\n    #535353,\n    #505050,\n    #4e4e4e,\n    #4c4c4c\n  );*/\n}\n.main-body .login-form .logo {\n  background-image: url('code.png');\n  background-size: contain;\n  width: 130px;\n  height: 130px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 50%;\n  margin: 0 auto;\n}\n.main-body .login-form .title {\n  text-align: center;\n  font-size: 40px;\n  font-weight: 100;\n  padding-top: 24px;\n  letter-spacing: 0.5px;\n}\n.main-body .login-form .subtitle {\n  text-align: center;\n  font-size: 12px;\n  padding-top: 14px;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  font-weight: bold;\n}\n.main-body .login-form .fields {\n  width: 75%;\n  padding: 40px 5px 40px 5px;\n  margin: 0 auto;\n}\n.main-body .login-form .fields div {\n  border-bottom: 1px solid #b3b3b3;\n  margin-bottom: 30px;\n  letter-spacing: 5px;\n  display: flex;\n  flex-direction: row;\n}\n.main-body .login-form .fields div input {\n  border: none;\n  outline: none;\n  background: none;\n  width: 100%;\n  font-size: 20px;\n  font-family: \"Lato\", sans-serif;\n  color: white;\n  padding: 7px 10px 8px 3px;\n}\n.main-body .login-form .fields .username svg,\n.main-body .login-form .fields .password svg {\n  height: 30px;\n  fill: white;\n  margin-right: 11px;\n}\n.main-body .login-form .fields .username svg {\n  height: 30px;\n}\n.main-body .login-form .signin-btn {\n  border: none;\n  outline: none;\n  background: none;\n  cursor: pointer;\n  width: 75%;\n  align-items: center;\n  margin-top: -9px;\n  padding: 18px;\n  margin-left: 12.5%;\n  border-radius: 5px;\n  /*border:1px solid white;*/\n  padding-top: 16px;\n  font-size: 22px;\n  font-weight: 400;\n  font-family: \"Lato\", sans-serif;\n  color: white;\n  text-align: center;\n  letter-spacing: 1px;\n  background: linear-gradient(90deg, #37e982 0%, #2dcc70 27%, #23bd64 100%);\n}\n.main-body .login-form .link {\n  padding-top: 25px;\n  text-align: center;\n}\n.main-body .login-form .link a {\n  text-decoration: none;\n  color: white;\n  font-family: \"Lato\", sans-serif;\n  font-size: 18px;\n}\n.main-body .login-form .mysign {\n  text-align: right;\n  padding-top: 40px;\n  font-family: \"Lato\", sans-serif;\n  font-size: 12px;\n  font-weight: 100;\n  letter-spacing: 0.5px;\n  display: block;\n}\n.main-body .login-form .mysign p {\n  display: inline;\n  font-family: \"Lato\", sans-serif;\n  font-size: 17px;\n  font-weight: 400;\n  letter-spacing: 1px;\n  padding-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGljUGFnZXMvbG9naW4vRDpcXFNDSE9PTFxcQ1BFICsgTW9yZVxcNcKwU3VwZXJpb3JlXFxQcm9nZXR0by1GVkFBXFxOZXdGcm9udGVuZC9zcmNcXGFwcFxcc3RhdGljUGFnZXNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3RhdGljUGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREVFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUVBOzs7Ozs7O0tBQUE7QUNNSjtBREdJO0VBQ0UsaUNBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0ROO0FES0k7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNITjtBRE1JO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNKTjtBRE9JO0VBQ0UsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQ0xOO0FET007RUFDRSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNMUjtBRE9RO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNMVjtBRFFNOztFQUVFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNOUjtBRFFNO0VBQ0UsWUFBQTtBQ05SO0FEVUk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUVBLHlFQUFBO0FDVk47QURrQkk7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDaEJOO0FEbUJJO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FDakJOO0FEb0JJO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDbEJOO0FEb0JJO0VBQ0UsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ2xCTiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpY1BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tYm9keSB7XHJcbiAgLy8gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNlYmViZWIgMCUsICNkNGQ0ZDQgNzQlKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDkzdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuXHJcbiAgLmxvZ2luLWZvcm0ge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgcGFkZGluZzogNDBweCAzNXB4IDM1cHggMzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IGxpZ2h0c2VhZ3JlZW47XHJcbiAgICAvKmJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcclxuICAgICAgY2lyY2xlLFxyXG4gICAgICAjNTU1NTU1LFxyXG4gICAgICAjNTM1MzUzLFxyXG4gICAgICAjNTA1MDUwLFxyXG4gICAgICAjNGU0ZTRlLFxyXG4gICAgICAjNGM0YzRjXHJcbiAgICApOyovXHJcblxyXG4gICAgLmxvZ28ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi8uLi8uLi8uLi9pbWFnZXMvY29kZS5wbmcpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgLy9ib3gtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAyNHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1YnRpdGxlIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxNHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICAuZmllbGRzIHtcclxuICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgcGFkZGluZzogNDBweCA1cHggNDBweCA1cHg7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAgICAgZGl2IHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2IzYjNiMztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgcGFkZGluZzogN3B4IDEwcHggOHB4IDNweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnVzZXJuYW1lIHN2ZyxcclxuICAgICAgLnBhc3N3b3JkIHN2ZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGZpbGw6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTFweDtcclxuICAgICAgfVxyXG4gICAgICAudXNlcm5hbWUgc3ZnIHtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2lnbmluLWJ0biB7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB3aWR0aDogNzUlO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tdG9wOiAtOXB4O1xyXG4gICAgICBwYWRkaW5nOiAxOHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTIuNSU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgLypib3JkZXI6MXB4IHNvbGlkIHdoaXRlOyovXHJcbiAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG5cclxuICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAvL2JhY2tncm91bmQ6IHJnYig1NSwgMjMzLCAxMzApO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgOTBkZWcsXHJcbiAgICAgICAgcmdiYSg1NSwgMjMzLCAxMzAsIDEpIDAlLFxyXG4gICAgICAgIHJnYmEoNDUsIDIwNCwgMTEyLCAxKSAyNyUsXHJcbiAgICAgICAgcmdiYSgzNSwgMTg5LCAxMDAsIDEpIDEwMCVcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAubGluayB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpbmsgYSB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuXHJcbiAgICAubXlzaWduIHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5teXNpZ24gcCB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIubWFpbi1ib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTN2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLm1haW4tYm9keSAubG9naW4tZm9ybSB7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBwYWRkaW5nOiA0MHB4IDM1cHggMzVweCAzNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAvKmJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcbiAgICBjaXJjbGUsXG4gICAgIzU1NTU1NSxcbiAgICAjNTM1MzUzLFxuICAgICM1MDUwNTAsXG4gICAgIzRlNGU0ZSxcbiAgICAjNGM0YzRjXG4gICk7Ki9cbn1cbi5tYWluLWJvZHkgLmxvZ2luLWZvcm0gLmxvZ28ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi8uLi8uLi8uLi9pbWFnZXMvY29kZS5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5tYWluLWJvZHkgLmxvZ2luLWZvcm0gLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIHBhZGRpbmctdG9wOiAyNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG4ubWFpbi1ib2R5IC5sb2dpbi1mb3JtIC5zdWJ0aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nLXRvcDogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbi1ib2R5IC5sb2dpbi1mb3JtIC5maWVsZHMge1xuICB3aWR0aDogNzUlO1xuICBwYWRkaW5nOiA0MHB4IDVweCA0MHB4IDVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ubWFpbi1ib2R5IC5sb2dpbi1mb3JtIC5maWVsZHMgZGl2IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiM2IzYjM7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4ubWFpbi1ib2R5IC5sb2dpbi1mb3JtIC5maWVsZHMgZGl2IGlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogN3B4IDEwcHggOHB4IDNweDtcbn1cbi5tYWluLWJvZHkgLmxvZ2luLWZvcm0gLmZpZWxkcyAudXNlcm5hbWUgc3ZnLFxuLm1haW4tYm9keSAubG9naW4tZm9ybSAuZmllbGRzIC5wYXNzd29yZCBzdmcge1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZpbGw6IHdoaXRlO1xuICBtYXJnaW4tcmlnaHQ6IDExcHg7XG59XG4ubWFpbi1ib2R5IC5sb2dpbi1mb3JtIC5maWVsZHMgLnVzZXJuYW1lIHN2ZyB7XG4gIGhlaWdodDogMzBweDtcbn1cbi5tYWluLWJvZHkgLmxvZ2luLWZvcm0gLnNpZ25pbi1idG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDc1JTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogLTlweDtcbiAgcGFkZGluZzogMThweDtcbiAgbWFyZ2luLWxlZnQ6IDEyLjUlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC8qYm9yZGVyOjFweCBzb2xpZCB3aGl0ZTsqL1xuICBwYWRkaW5nLXRvcDogMTZweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMzN2U5ODIgMCUsICMyZGNjNzAgMjclLCAjMjNiZDY0IDEwMCUpO1xufVxuLm1haW4tYm9keSAubG9naW4tZm9ybSAubGluayB7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbi1ib2R5IC5sb2dpbi1mb3JtIC5saW5rIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ubWFpbi1ib2R5IC5sb2dpbi1mb3JtIC5teXNpZ24ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1haW4tYm9keSAubG9naW4tZm9ybSAubXlzaWduIHAge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/staticPages/login/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/staticPages/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/api-call.service */ "./src/shared/api-call.service.ts");



let LoginComponent = class LoginComponent {
    constructor(apiCall) {
        this.apiCall = apiCall;
        this.txt = "Login come: ";
        this.user = "";
        this.pass = "";
        this.bool = false;
    }
    ngOnInit() { }
    ciaoO() {
        //console.log(this.txt + " " + this.user + " " + this.pass);
        this.apiCall.postLogin(this.user, this.pass);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _shared_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/staticPages/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/staticPages/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/shared/api-call.service.ts":
/*!****************************************!*\
  !*** ./src/shared/api-call.service.ts ***!
  \****************************************/
/*! exports provided: ApiCallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiCallService", function() { return ApiCallService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.scss */ "./node_modules/sweetalert2/src/sweetalert2.scss");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _global_var_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global-var.service */ "./src/shared/global-var.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





//import { ResponseContentType } from "@angular/common/http/http";




let ApiCallService = class ApiCallService {
    constructor(http, globvar, router, location) {
        this.http = http;
        this.globvar = globvar;
        this.router = router;
        this.location = location;
        this.baseAppUrl = `http://<indirizzo>/correttoreapi/v1/`;
    }
    /*//////
    GET
  //////*/
    getTestDetailStud(idT, idS) {
        // GET /tests/{test_id}/users/{user_id}/details
        // prende i risultati del test in JSON
        const headerDict = {
            "Content-Type": "application/json",
            "x-authorization-token": `${this.globvar.userID}`,
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headerDict),
        };
        return this.http
            .get(this.baseAppUrl + "tests/" + idT + "/users/" + idS + "/details", requestOptions)
            .toPromise()
            .catch(this.handleError);
    }
    getTestResultCSV(idT) {
        // GET /tests/{id}/results
        // prende i risultati del test in CSV
        const headerDict = {
            "Content-Type": "application/json",
            "x-authorization-token": `${this.globvar.userID}`,
        };
        const requestOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headerDict);
        return this.http.get(this.baseAppUrl + "tests/" + idT + "/results.csv", {
            headers: requestOptions,
            responseType: "blob",
        });
    }
    getTestTaskStud(idTe, idTa, idS) {
        // GET /tests/{id}/task/{id}/student/{id}
        // prende il codice sorgente caricato da uno studente in un eserscizio del test
        const headerDict = {
            //"Content-Type": "application/json",
            "x-authorization-token": `${this.globvar.userID}`,
        };
        const requestOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headerDict);
        return this.http.get(this.baseAppUrl +
            "submissions/tests/" +
            idTe +
            "/tasks/" +
            idTa +
            "/users/" +
            idS, {
            headers: requestOptions,
            responseType: "blob",
        });
    }
    getTestResult(idT) {
        // GET /tests/{id}/results
        // prende i risultati del test in JSON
        const headerDict = {
            "Content-Type": "application/json",
            "x-authorization-token": `${this.globvar.userID}`,
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headerDict),
        };
        return this.http
            .get(this.baseAppUrl + "tests/" + idT + "/results", requestOptions)
            .toPromise()
            .catch(this.handleError);
    }
    getProblemPdf(idE) {
        const headerDict = {
            "x-authorization-token": `${this.globvar.userID}`,
            Accept: "*/*",
        };
        //const requestOptions = {
        const headrs = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headerDict);
        //responseType: Response.a
        //};
        return this.http.get(this.baseAppUrl + `public/problems/${idE}.pdf`, {
            headers: headrs,
            responseType: "blob",
        });
    }
    getProblemPdf1(idE) {
        const headerDict = {
            "x-authorization-token": `${this.globvar.userID}`,
            Accept: "*/*",
        };
        //const requestOptions = {
        const headrs = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headerDict);
        //responseType: Response.a
        //};
        return this.http.get(this.baseAppUrl + `problems/${idE}.pdf`, {
            headers: headrs,
            responseType: "blob",
        });
    }
    getTeachers() {
        // GET /teachers
        const headerDict = {
            "Content-Type": "application/json",
            "x-authorization-token": `${this.globvar.userID}`,
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headerDict),
        };
        return this.http
            .get(this.baseAppUrl + "teachers", requestOptions)
            .toPromise()
            .catch(this.handleError);
    }
    getPubProblems() {
        // GET /public/problems
        //let riss = [];
        return this.http
            .get(this.baseAppUrl + "public/problems")
            .toPromise()
            .catch(this.handleError);
    }
    getTaskById(idE) {
        //GET /tasks/idE
        const headerDict = {
            "Content-Type": "application/json",
            "x-authorization-token": `${this.globvar.userID}`,
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headerDict),
        };
        return this.http
            .get(this.baseAppUrl + "tasks/" + idE, requestOptions)
            .toPromise()
            .catch(this.handleError);
    }
    getTasksByTestId(idT) {
        const headerDict = {
            "Content-Type": "application/json",
            "x-authorization-token": `${this.globvar.userID}`,
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headerDict),
        };
        return this.http
            .get(this.baseAppUrl + "tests/" + idT + "/tasks", requestOptions)
            .toPromise()
            .catch(this.handleError);
    }
    getTasks() {
        // GET /tasks
        const headerDict = {
            "Content-Type": "application/json",
            "x-authorization-token": `${this.globvar.userID}`,
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headerDict),
        };
        return this.http
            .get(this.baseAppUrl + "tasks", requestOptions)
            .toPromise()
            .catch(this.handleError);
    }
    getGruppi() {
        // GET /groups
        const headerDict = {
            "Content-Type": "application/json",
            "x-authorization-token": `${this.globvar.userID}`,
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headerDict),
        };
        //let riss = [];
        return this.http
            .get(this.baseAppUrl + "groups", requestOptions)
            .toPromise()
            .catch(this.handleError);
    }
    getVerifiche() {
        //GET /students
        const headerDict = {
            "Content-Type": "application/json",
            "x-authorization-token": `${this.globvar.userID}`,
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headerDict),
        };
        let riss = [];
        return this.http
            .get(this.baseAppUrl + "tests", requestOptions)
            .toPromise()
            .catch(this.handleError);
    }
    getCategories() {
        //GET /public/categories
        return this.http
            .get(this.baseAppUrl + "public/categories")
            .toPromise()
            .catch();
    }
    getStudents() {
        //GET /students
        const headerDict = {
            "Content-Type": "application/json",
            "x-authorization-token": `${this.globvar.userID}`,
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headerDict),
        };
        let riss = [];
        return this.http
            .get(this.baseAppUrl + "students", requestOptions)
            .toPromise()
            .catch();
        /*.subscribe(
          data => {
            //this.ris1 = data;
            //console.log(data);
            for (let val in data) {
              riss.push(data[val]);
            }
          },
          err => {
            console.log("Error!");
          }
        );
        return riss;*/
    }
    getLogout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //GET /logout
            const headerDict = {
                "Content-Type": "application/json",
                "x-authorization-token": `${this.globvar.userID}`,
            };
            const requestOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headerDict),
            };
            //headerss.append("Content-Type", "application/json");
            //console.log(requestOptions);
            return this.http
                .get(this.baseAppUrl + "logout", requestOptions)
                .toPromise() /*
            .then(res => {
              console.log("OKK, sei stato disconnesso");
              this.globvar.userID = "";
              this.globvar.userName = "";
              this.globvar.userRole = 1;
              this.router.navigateByUrl("");
              sessionStorage.setItem("userID", this.globvar.userID);
              sessionStorage.setItem("userName", this.globvar.userName);
              sessionStorage.setItem("userRole", String(this.globvar.userRole));
              ress = true;
      
              return ress;
            })*/
                .catch(this.handleError);
            //console.log(ress);
        });
    }
    /*//////////
    fine-GET
  //////////*/
    /*////////
     POST
  ////////*/
    postSubmission(idE, formData) {
        //POST /public/submissions/idE
        //formData.forEach((value, data) => console.log(data + " : " + value));
        return this.http
            .post(this.baseAppUrl + "public/submissions/" + idE, formData)
            .toPromise()
            .catch();
    }
    postSubmissionT(idE, idV, formData) {
        //POST /submissions/tests/{test_id}/tasks/{task_id}
        const headerDict = {
            "x-authorization-token": `${this.globvar.userID}`,
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headerDict),
        };
        //formData.forEach((value, data) => console.log(data + " : " + value));
        return this.http
            .post(this.baseAppUrl + "submissions/tests/" + idV + "/tasks/" + idE, formData, requestOptions)
            .toPromise()
            .catch();
    }
    postTeacher(nome, cog, usr, psw) {
        //POST /teachers
        const headerDict = {
            "Content-Type": "application/json",
            "x-authorization-token": `${this.globvar.userID}`,
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headerDict),
        };
        return this.http
            .post(this.baseAppUrl + "teachers", {
            username: usr,
            name: nome,
            surname: cog,
            password: psw,
            role: "teacher",
        }, requestOptions)
            .toPromise()
            .catch(this.handleError);
    }
    postStudent(no, co, usr, psw) {
        //POST /students
        const headerDict = {
            "Content-Type": "application/json",
            "x-authorization-token": `${this.globvar.userID}`,
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headerDict),
        };
        return this.http
            .post(this.baseAppUrl + "students", {
            username: usr,
            name: no,
            surname: co,
            password: psw,
            role: "student",
        }, requestOptions)
            .toPromise()
            .catch(this.handleError);
    }
    postTasks(formData) {
        //POST /tasks
        const headerDict = {
            "x-authorization-token": `${this.globvar.userID}`,
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headerDict),
        };
        formData.forEach((value, data) => console.log(data + " : " + value));
        return this.http
            .post(this.baseAppUrl + "tasks", formData, requestOptions)
            .toPromise()
            .catch();
    }
    postTask(idT, formData) {
        //POST /task/id
        const headerDict = {
            "x-authorization-token": `${this.globvar.userID}`,
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headerDict),
        };
        //formData.forEach((value, data) => console.log(data + " : " + value));
        return this.http
            .post(this.baseAppUrl + "tasks/" + idT, formData, requestOptions)
            .toPromise()
            .catch();
    }
    postTest(desc) {
        //POST /tests
        const headerDict = {
            "Content-Type": "application/json",
            "x-authorization-token": `${this.globvar.userID}`,
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headerDict),
        };
        return this.http
            .post(this.baseAppUrl + "tests", { description: desc }, requestOptions)
            .toPromise()
            .catch(this.handleError);
    }
    postGruppo(desc) {
        //POST /groups
        const headerDict = {
            "Content-Type": "application/json",
            "x-authorization-token": `${this.globvar.userID}`,
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headerDict),
        };
        return this.http
            .post(this.baseAppUrl + "groups", { description: desc }, requestOptions)
            .toPromise()
            .catch(this.handleError);
    }
    postLogin(usr, psw) {
        //POST /public/login
        this.http
            .post(this.baseAppUrl + "public/login", {
            username: usr,
            password: psw,
        })
            .toPromise()
            .then((data) => {
            this.ris1 = data;
            //console.log(this.ris1);
            this.ris1 = {
                rolestr: this.ris1["role"],
                rolenum: 1,
                usrnm: this.ris1["username"],
                userID: this.ris1["token"],
            };
            switch (this.ris1["rolestr"]) {
                case "student":
                    this.ris1["rolenum"] = 2;
                    break;
                case "teacher":
                    this.ris1["rolenum"] = 3;
                    break;
                case "admin":
                    this.ris1["rolenum"] = 4;
                    break;
                default:
                    1;
                    break;
            }
            //aggiornamento variabili globali
            this.globvar.userID = this.ris1["userID"];
            this.globvar.userName = this.ris1["usrnm"];
            this.globvar.changeRole(this.ris1["rolenum"]);
            sessionStorage.setItem("userID", this.globvar.userID);
            sessionStorage.setItem("userName", this.globvar.userName);
            sessionStorage.setItem("userRole", String(this.globvar.userRole));
            /*console.log(
              "id: " +
                this.globvar.userID +
                "| usrnm:" +
                this.globvar.userName +
                "| userRole:" +
                this.globvar.userRole
            );*/
            this.router.navigateByUrl("");
        })
            .catch((err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                icon: "error",
                title: "Oops...",
                text: "Credenziali incorrette o non valide!",
            });
        });
    }
    /*///////////
    fine-POST
  ///////////*/
    /*//////////
         PUT
    //////////*/
    putSinG(idS, idG) {
        //PUT /groups/idG/student/idS
        const headerDict = {
            "x-authorization-token": `${this.globvar.userID}`,
            Accept: "*/*",
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headerDict),
        };
        //console.log(this.baseAppUrl + "groups/" + idG + "/student/" + idS);
        return this.http
            .put(this.baseAppUrl + "groups/" + idG + "/student/" + idS, {}, requestOptions)
            .toPromise()
            .catch(this.handleError);
    }
    putTeacher(idT, no, co, usr, psw) {
        // da rivedere
        //PUT /students/id
        const headerDict = {
            "Content-Type": "application/json",
            "x-authorization-token": `${this.globvar.userID}`,
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headerDict),
        };
        //console.log(this.baseAppUrl + "teachers/" + idT);
        return this.http
            .put(this.baseAppUrl + "teachers/" + idT, {
            username: usr,
            name: no,
            surname: co,
            password: psw,
            role: "teacher",
        }, requestOptions)
            .toPromise();
    }
    putStudent(idS, no, co, usr, psw) {
        //PUT /students/id
        const headerDict = {
            "Content-Type": "application/json",
            "x-authorization-token": `${this.globvar.userID}`,
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headerDict),
        };
        return this.http
            .put(this.baseAppUrl + "students/" + idS, {
            username: usr,
            name: no,
            surname: co,
            password: psw,
            role: "student",
        }, requestOptions)
            .toPromise()
            .catch(this.handleError);
    }
    putTaskInTest(idT, idE) {
        const headerDict = {
            "Content-Type": "application/json",
            "x-authorization-token": `${this.globvar.userID}`,
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headerDict),
        };
        return this.http
            .put(this.baseAppUrl + `tests/${idT}/task/${idE}`, {}, requestOptions)
            .toPromise()
            .catch(this.handleError);
    }
    putGruppo(desc, idG) {
        const headerDict = {
            "Content-Type": "application/json",
            "x-authorization-token": `${this.globvar.userID}`,
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headerDict),
        };
        return this.http
            .put(this.baseAppUrl + "groups/" + idG, { description: desc }, requestOptions)
            .toPromise()
            .catch(this.handleError);
    }
    putTest(desc, idG, vis) {
        const headerDict = {
            "Content-Type": "application/json",
            "x-authorization-token": `${this.globvar.userID}`,
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headerDict),
        };
        return this.http
            .put(this.baseAppUrl + "tests/" + idG, { description: desc, is_on: vis }, requestOptions)
            .toPromise()
            .catch(this.handleError);
    }
    /*//////////
      fine-PUT
    //////////*/
    /*//////////
        DELETE
    //////////*/
    delSfromG(idS, idG) {
        //DELETE /groups/idG/student/idS
        const headerDict = {
            "Content-Type": "application/json",
            "x-authorization-token": `${this.globvar.userID}`,
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headerDict),
        };
        return this.http
            .delete(this.baseAppUrl + "groups/" + idG + "/student/" + idS, requestOptions)
            .toPromise()
            .catch(this.handleError);
    }
    deleteTeacher(idT) {
        //DELETE /delete/id
        const headerDict = {
            "Content-Type": "application/json",
            "x-authorization-token": `${this.globvar.userID}`,
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headerDict),
        };
        return this.http
            .delete(this.baseAppUrl + "teachers/" + idT, requestOptions)
            .toPromise()
            .catch(this.handleError);
    }
    deleteStudent(idS) {
        //DELETE /delete/id
        const headerDict = {
            "Content-Type": "application/json",
            "x-authorization-token": `${this.globvar.userID}`,
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headerDict),
        };
        return this.http
            .delete(this.baseAppUrl + "students/" + idS, requestOptions)
            .toPromise()
            .catch(this.handleError);
    }
    remTaskFromTest(idT, idE) {
        //DELETE /delete/id
        const headerDict = {
            "Content-Type": "application/json",
            "x-authorization-token": `${this.globvar.userID}`,
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headerDict),
        };
        return this.http
            .delete(this.baseAppUrl + `tests/${idT}/task/${idE}`, requestOptions)
            .toPromise()
            .catch(this.handleError);
    }
    deleteTasks(idE) {
        //DELETE /delete/id
        const headerDict = {
            "Content-Type": "application/json",
            "x-authorization-token": `${this.globvar.userID}`,
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headerDict),
        };
        return this.http
            .delete(this.baseAppUrl + "tasks/" + idE, requestOptions)
            .toPromise()
            .catch(this.handleError);
    }
    deleteGruppo(idG) {
        //DELETE /delete/id
        const headerDict = {
            "Content-Type": "application/json",
            "x-authorization-token": `${this.globvar.userID}`,
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headerDict),
        };
        return this.http
            .delete(this.baseAppUrl + "groups/" + idG, requestOptions)
            .toPromise()
            .catch(this.handleError);
    }
    deleteTest(idV) {
        //DELETE /tests/id
        const headerDict = {
            "Content-Type": "application/json",
            "x-authorization-token": `${this.globvar.userID}`,
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headerDict),
        };
        return this.http
            .delete(this.baseAppUrl + "tests/" + idV, requestOptions)
            .toPromise()
            .catch(this.handleError);
    }
    /*//////////
      fine-DEL
    //////////*/
    handleError(error) {
        let errorMessage = "Unknown error!";
        if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = `Error: ${error.error.message}`;
        }
        else {
            // Server-side errors
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["throwError"])(errorMessage);
    }
};
ApiCallService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _global_var_service__WEBPACK_IMPORTED_MODULE_5__["GlobalVarService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] }
];
ApiCallService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], ApiCallService);



/***/ }),

/***/ "./src/shared/global-var.service.ts":
/*!******************************************!*\
  !*** ./src/shared/global-var.service.ts ***!
  \******************************************/
/*! exports provided: GlobalVarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalVarService", function() { return GlobalVarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



/*
@Injectable({
  providedIn: 'root'
})*/
let GlobalVarService = class GlobalVarService {
    constructor() {
        this.userID = ""; //userID o Token
        this.userName = "";
        this.usrRoleChanger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.usrRoleChanger.subscribe(value => {
            this.userRole = value;
        });
    }
    changeRole(role) {
        this.usrRoleChanger.next((this.userRole = role));
    }
};
GlobalVarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], GlobalVarService);



/***/ }),

/***/ "./src/shared/guards/g1.guard.ts":
/*!***************************************!*\
  !*** ./src/shared/guards/g1.guard.ts ***!
  \***************************************/
/*! exports provided: G1Guard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G1Guard", function() { return G1Guard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_shared_global_var_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/global-var.service */ "./src/shared/global-var.service.ts");




let G1Guard = class G1Guard {
    constructor(_router, _globvar) {
        this._router = _router;
        this._globvar = _globvar;
    }
    canActivate() {
        //guard docenti
        if (this._globvar.userRole === 4)
            return true;
        else {
            this._router.navigateByUrl("");
            return false;
        }
    }
};
G1Guard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_shared_global_var_service__WEBPACK_IMPORTED_MODULE_3__["GlobalVarService"] }
];
G1Guard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], G1Guard);



/***/ }),

/***/ "./src/shared/guards/g2.guard.ts":
/*!***************************************!*\
  !*** ./src/shared/guards/g2.guard.ts ***!
  \***************************************/
/*! exports provided: G2Guard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G2Guard", function() { return G2Guard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_shared_global_var_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/global-var.service */ "./src/shared/global-var.service.ts");




let G2Guard = class G2Guard {
    constructor(_router, _globvar) {
        this._router = _router;
        this._globvar = _globvar;
    }
    canActivate() {
        //guard studenti
        if (this._globvar.userRole > 2)
            return true;
        else {
            this._router.navigateByUrl("");
            return false;
        }
    }
};
G2Guard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_shared_global_var_service__WEBPACK_IMPORTED_MODULE_3__["GlobalVarService"] }
];
G2Guard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], G2Guard);



/***/ }),

/***/ "./src/shared/guards/g3.guard.ts":
/*!***************************************!*\
  !*** ./src/shared/guards/g3.guard.ts ***!
  \***************************************/
/*! exports provided: G3Guard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G3Guard", function() { return G3Guard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_shared_global_var_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/global-var.service */ "./src/shared/global-var.service.ts");




let G3Guard = class G3Guard {
    constructor(_router, _globvar) {
        this._router = _router;
        this._globvar = _globvar;
    }
    canActivate() {
        //guard gruppi
        if (this._globvar.userRole > 2)
            return true;
        else {
            this._router.navigateByUrl("");
            return false;
        }
    }
};
G3Guard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_shared_global_var_service__WEBPACK_IMPORTED_MODULE_3__["GlobalVarService"] }
];
G3Guard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], G3Guard);



/***/ }),

/***/ "./src/shared/guards/g4.guard.ts":
/*!***************************************!*\
  !*** ./src/shared/guards/g4.guard.ts ***!
  \***************************************/
/*! exports provided: G4Guard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G4Guard", function() { return G4Guard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_shared_global_var_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/global-var.service */ "./src/shared/global-var.service.ts");




let G4Guard = class G4Guard {
    constructor(_router, _globvar) {
        this._router = _router;
        this._globvar = _globvar;
    }
    canActivate() {
        //guard login
        if (this._globvar.userRole < 2)
            return true;
        else {
            this._router.navigateByUrl("");
            return false;
        }
    }
};
G4Guard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_shared_global_var_service__WEBPACK_IMPORTED_MODULE_3__["GlobalVarService"] }
];
G4Guard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], G4Guard);



/***/ }),

/***/ "./src/shared/guards/g5.guard.ts":
/*!***************************************!*\
  !*** ./src/shared/guards/g5.guard.ts ***!
  \***************************************/
/*! exports provided: G5Guard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G5Guard", function() { return G5Guard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_shared_global_var_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/global-var.service */ "./src/shared/global-var.service.ts");




let G5Guard = class G5Guard {
    constructor(_router, _globvar) {
        this._router = _router;
        this._globvar = _globvar;
    }
    canActivate() {
        //guard login
        if (this._globvar.userRole > 1)
            return true;
        else {
            this._router.navigateByUrl("");
            return false;
        }
    }
};
G5Guard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_shared_global_var_service__WEBPACK_IMPORTED_MODULE_3__["GlobalVarService"] }
];
G5Guard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], G5Guard);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\SCHOOL\CPE + More\5°Superiore\Progetto-FVAA\NewFrontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);