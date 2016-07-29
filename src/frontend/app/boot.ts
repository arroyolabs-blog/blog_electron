//boot.ts
///<reference path="../../../node_modules/angular2/typings/browser.d.ts"/> 
import {enableProdMode} from 'angular2/core';  
import {bootstrap} from 'angular2/platform/browser';  
import {AppComponent} from './components/app';

enableProdMode();  
bootstrap(AppComponent, []);  