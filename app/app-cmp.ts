"use strict";
import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: "seed-app",
    directives: [ROUTER_DIRECTIVES],
    templateUrl: "./app/app-cmp.html",
    styleUrls: ["./app/app-cmp.css"]
})
export class AppComponent  { }
