webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<div class=\"container\">\n  <!-- <app-add-task></app-add-task> -->\n  <app-personas></app-personas>\n  <app-tasks></app-tasks>\n \n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tasks_tasks_component__ = __webpack_require__("./src/app/components/tasks/tasks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_task_service__ = __webpack_require__("./src/app/services/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_personas_service__ = __webpack_require__("./src/app/services/personas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_add_task_add_task_component__ = __webpack_require__("./src/app/components/add-task/add-task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_header_header_component__ = __webpack_require__("./src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_aplicaciones_personas_personas_component__ = __webpack_require__("./src/app/components/aplicaciones/personas/personas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_tools_alerta_alerta_component__ = __webpack_require__("./src/app/components/tools/alerta/alerta.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_tasks_tasks_component__["a" /* TasksComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_add_task_add_task_component__["a" /* AddTaskComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_aplicaciones_personas_personas_component__["a" /* PersonasComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_tools_alerta_alerta_component__["a" /* AlertaComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap__["a" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__services_task_service__["a" /* TaskService */],
                __WEBPACK_IMPORTED_MODULE_8__services_personas_service__["a" /* PersonasService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-task/add-task.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/add-task/add-task.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-content\">\n    <span class=\"card-title\">Agregar Personas</span>\n    <form (ngSubmit)=\"onSubmit()\" class=\"col s6\">\n      <div >\n          <i class=\"fas fa-address-book\"></i>\n        <div class=\"input-field col-s6\">\n          <input type=\"text\" placeholder=\"Agregar Apellido\" [(ngModel)]=\"task.apellido\" name=\"title\">\n           <label>Apellido</label>\n        </div>\n        <i class=\"fas fa-address-book\"></i>\n        <div class=\"input-field col-s6\">\n            <input type=\"text\" placeholder=\"Agregar Nombre\" [(ngModel)]=\"task.nombre\" name=\"description\">\n            <label>Nombre</label>\n          </div>\n      </div>\n      <input type=\"submit\" class=\"btn light-blue\">\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/add-task/add-task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_task_service__ = __webpack_require__("./src/app/services/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddTaskComponent = /** @class */ (function () {
    function AddTaskComponent(taskService) {
        this.taskService = taskService;
        this.task = {
            apellido: '',
            nombre: ''
        };
    }
    AddTaskComponent.prototype.ngOnInit = function () {
    };
    AddTaskComponent.prototype.onSubmit = function () {
        if (this.task.apellido != '' && this.task.nombre != '') {
            this.taskService.addTask(this.task);
            this.task.apellido = '';
            this.task.nombre = '';
        }
    };
    AddTaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-add-task',
            template: __webpack_require__("./src/app/components/add-task/add-task.component.html"),
            styles: [__webpack_require__("./src/app/components/add-task/add-task.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_task_service__["a" /* TaskService */]])
    ], AddTaskComponent);
    return AddTaskComponent;
}());



/***/ }),

/***/ "./src/app/components/aplicaciones/personas/personas.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-content\">\n      <span class=\"card-title\">Agregar Personas</span>\n      <form (ngSubmit)=\"onSubmit()\" class=\"col s6\">\n        <div >\n          <i class=\"fas fa-address-book\"></i>\n          <div class=\"input-field col-s6\">\n            <input type=\"text\" placeholder=\"Agregar Apellido\" [(ngModel)]=\"persona.apellido\" name=\"apellido\">\n            <label>Apellido</label>\n          </div>\n          <i class=\"fas fa-address-book\"></i>\n          <div class=\"input-field col-s6\">\n            <input type=\"text\" placeholder=\"Agregar Nombre\" [(ngModel)]=\"persona.nombre\" name=\"nombre\">\n            <label>Nombre</label>\n          </div>\n          <div class=\"input-field col-s6\">\n            <input type=\"text\" placeholder=\"Agregar Documento\" [(ngModel)]=\"persona.documento\" name=\"documento\">\n            <label>Documento</label>\n          </div>\n          <div class=\"input-field col-s6\">\n            <input type=\"text\" placeholder=\"Agregar Domicilio\" [(ngModel)]=\"persona.domicilio\" name=\"domicilio\">\n            <label>Domicilio</label>\n          </div>\n        </div>\n        <input type=\"submit\" class=\"btn light-blue\">\n      </form>\n    </div>\n\n   \n      \n  </div>\n\n  \n  <app-alerta [defaultAlerts]=\"defaultAlerts\"></app-alerta>\n  <!-- <app-alerta></app-alerta>  -->\n\n  \n  "

/***/ }),

/***/ "./src/app/components/aplicaciones/personas/personas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_personas_service__ = __webpack_require__("./src/app/services/personas.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonasComponent = /** @class */ (function () {
    function PersonasComponent(personasService) {
        this.personasService = personasService;
        this.persona = {
            apellido: '',
            nombre: '',
            documento: 0,
            domicilio: ''
        };
        this.activado = false;
        this.defaultAlerts = [];
    }
    PersonasComponent.prototype.ngOnInit = function () {
    };
    PersonasComponent.prototype.onSubmit = function () {
        this.defaultAlerts = [];
        if (this.persona.apellido != '' && this.persona.nombre != '') {
            this.personasService.addPersona(this.persona);
            this.persona.apellido = '';
            this.persona.nombre = '';
            this.persona.documento = 0;
            this.persona.domicilio = '';
        }
        else {
            //this.activado=true;
            this.defaultAlerts.push({
                type: 'danger',
                msg: 'Falta completar el campo apellido o el campo nombre'
            });
        }
        //this.activado=false;
    };
    PersonasComponent.prototype.desactivarAlerta = function () {
        this.activado = false;
    };
    PersonasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-personas',
            template: __webpack_require__("./src/app/components/aplicaciones/personas/personas.component.html"),
            styles: [],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_personas_service__["a" /* PersonasService */]])
    ], PersonasComponent);
    return PersonasComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"ae-container-fluid ae-container-fluid--full rk-header \">\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Dropdown\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input type=\"text\"   (keyup.enter)=\"buscar_producto( buscarTexto.value )\"  #buscarTexto placeholder=\"Buscar\" >\n    </form>\n  </div>\n</nav>\n</header>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.buscar_producto = function (termino) {
        console.log(termino);
        //this.router.navigate( ['buscar', termino ] );
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/components/header/header.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/tasks/tasks.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/tasks/tasks.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"tasks?.length > 0;else noTasks\">\r\n  <ul *ngFor=\"let task of tasks\" class=\"collection\">\r\n    <li class=\"collection-item\" (dblclick)=\"deleteTask($event, task)\">\r\n      <strong>{{ task.apellido }}</strong> : {{ task.nombre  }} \r\n      <a href=\"#\" class=\"secondary-content\">\r\n        <i (click)=\"deleteTask($event, task)\" class=\"fa fa-trash\"></i>\r\n        <i (click)=\"editTask($event, task)\" class=\"fa fa-pencil\"></i>\r\n      </a>\r\n      <div *ngIf=\"editState && taskToEdit.id === task.id\">\r\n        <form (ngSubmit)=\"updateTask(task)\">\r\n          <div class=\"row\">\r\n            <div class=\"input-field col s6\">\r\n              <input \r\n                type=\"text\" name=\"title\"\r\n                placeholder=\"Edit apellido\" [(ngModel)]=\"task.apellido\">\r\n            </div>\r\n            <div class=\"input-field col s6\">\r\n                <input \r\n                  type=\"text\" name=\"description\"\r\n                  placeholder=\"Edit nombre\" [(ngModel)]=\"task.nombre\">\r\n            </div>\r\n            <input type=\"submit\" class=\"btn\" value=\"Update Task\">\r\n            <button class=\"btn red\" (click)=\"deleteTask($event, task)\">Delete Task</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n    </li>\r\n  </ul>\r\n</div>\r\n\r\n<ng-template #noTasks>\r\n  <h5>No hay Personas Cargada el la Base de Datos.</h5>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/components/tasks/tasks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_task_service__ = __webpack_require__("./src/app/services/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TasksComponent = /** @class */ (function () {
    function TasksComponent(taskService) {
        this.taskService = taskService;
        this.editState = false;
    }
    TasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.getTasks().subscribe(function (tasks) {
            //console.log(tasks);
            _this.tasks = tasks;
        });
    };
    TasksComponent.prototype.deleteTask = function (event, task) {
        var response = confirm('are you sure you want to delete?');
        if (response) {
            this.taskService.deleteTask(task);
        }
        return;
    };
    TasksComponent.prototype.editTask = function (event, task) {
        this.editState = !this.editState;
        this.taskToEdit = task;
    };
    TasksComponent.prototype.updateTask = function (task) {
        this.taskService.updateTask(task);
        this.taskToEdit = null;
        this.editState = false;
    };
    TasksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-tasks',
            template: __webpack_require__("./src/app/components/tasks/tasks.component.html"),
            styles: [__webpack_require__("./src/app/components/tasks/tasks.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_task_service__["a" /* TaskService */]])
    ], TasksComponent);
    return TasksComponent;
}());



/***/ }),

/***/ "./src/app/components/tools/alerta/alerta.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n  <div *ngFor=\"let alert of defaultAlerts\">\n      <alert [type]=\"alert.type\" dismissible=\"true\" (onClosed)=\"onClosed(alert)\" >{{ alert.msg }}</alert>\n  </div>\n    \n    \n\n\n\n\n\n  \n  \n"

/***/ }),

/***/ "./src/app/components/tools/alerta/alerta.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertaComponent = /** @class */ (function () {
    function AlertaComponent() {
        this.defaultAlerts = [];
    }
    AlertaComponent.prototype.onClosed = function (dismissedAlert) {
        console.log(dismissedAlert);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Array)
    ], AlertaComponent.prototype, "defaultAlerts", void 0);
    AlertaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-alerta',
            template: __webpack_require__("./src/app/components/tools/alerta/alerta.component.html"),
            styleUrls: [],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], AlertaComponent);
    return AlertaComponent;
}());



/***/ }),

/***/ "./src/app/services/personas.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonasService = /** @class */ (function () {
    function PersonasService(afs) {
        this.afs = afs;
        this.personaCollection = this.afs.collection('persona');
        this.personas = this.personaCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
    }
    PersonasService.prototype.getPersonas = function () {
        return this.personas;
    };
    PersonasService.prototype.addPersona = function (persona) {
        this.personaCollection.add(persona);
    };
    PersonasService.prototype.deletePersona = function (persona) {
        this.personaDoc = this.afs.doc("persona/" + persona.id);
        this.personaDoc.delete();
    };
    PersonasService.prototype.updatePersona = function (persona) {
        this.personaDoc = this.afs.doc("persona/" + persona.id);
        this.personaDoc.update(persona);
    };
    PersonasService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], PersonasService);
    return PersonasService;
}());



/***/ }),

/***/ "./src/app/services/task.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskService = /** @class */ (function () {
    function TaskService(afs) {
        this.afs = afs;
        this.tasksCollection = this.afs.collection('persona');
        // this.tasks = this.afs.collection('tasks').valueChanges();
        this.tasks = this.tasksCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
    }
    TaskService.prototype.getTasks = function () {
        return this.tasks;
    };
    TaskService.prototype.addTask = function (task) {
        this.tasksCollection.add(task);
    };
    TaskService.prototype.deleteTask = function (task) {
        this.taskDoc = this.afs.doc("persona/" + task.id);
        this.taskDoc.delete();
    };
    TaskService.prototype.updateTask = function (task) {
        this.taskDoc = this.afs.doc("persona/" + task.id);
        this.taskDoc.update(task);
    };
    TaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyAjkfbXTo87vM9l2WaxCYknIOEJhkobSdM",
        authDomain: "persona-396e1.firebaseapp.com",
        databaseURL: "https://persona-396e1.firebaseio.com",
        projectId: "persona-396e1",
        storageBucket: "persona-396e1.appspot.com",
        messagingSenderId: "1059111279138"
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map