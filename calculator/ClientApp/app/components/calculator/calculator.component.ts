import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'calculator',
    template: require('./calculator.component.html'),
    styles: [require('./calculator.component.css')]
})
export class CalculatorComponent {
    public initialValue = true;
    public previousValue = '';
    public currentValue = '';
    public resultValue = 0;
    public operatorValue = '';

    public numberClick(btn) {

        if (this.initialValue) {
            this.currentValue = btn.toString();
            this.initialValue = false;
        }
        else {
            this.currentValue += btn;
        }
    }

    add = function () {

        if (this.operatorValue && this.operatorValue.length > 0 && this.operatorValue != '+') {
            this.calculate();
        }

        this.operatorValue = '+';

        if (!(this.initialValue)) {
            if (this.previousValue && this.previousValue.length > 0) {
                this.previousValue = (parseInt(this.previousValue) + parseInt(this.currentValue)).toString();
                this.currentValue = '';
                this.initialValue = true;
            }
            else {
                this.previousValue = this.currentValue;
                this.currentValue = '';
                this.initialValue = true;
            }
        }

    }

        subtract = function () {

            if (this.operatorValue && this.operatorValue.length > 0 && this.operatorValue != '-') {
                this.calculate();
                this.operatorValue = '-';
            return;
        }

        this.operatorValue = '-';

        if (!(this.initialValue)) {
            if (this.previousValue && this.previousValue.length > 0) {
                this.previousValue = (parseInt(this.previousValue) - parseInt(this.currentValue)).toString();
                this.currentValue = '';
                this.initialValue = true;
            }
            else {
                this.previousValue = this.currentValue;
                this.currentValue = '';
                this.initialValue = true;
            }
        }

    }

    multiply = function () {

        if (this.operatorValue && this.operatorValue.length > 0 && this.operatorValue != '*') {
            this.calculate();
            this.operatorValue = '*';
            return;
        }

        this.operatorValue = '*';

        if (!(this.initialValue)) {
            if (this.previousValue && this.previousValue.length > 0) {
                this.previousValue = (parseInt(this.previousValue) * parseInt(this.currentValue)).toString();
                this.currentValue = '';
                this.initialValue = true;
            }
            else {
                this.previousValue = this.currentValue;
                this.currentValue = '';
                this.initialValue = true;
            }
        }

    }

    divide = function () {

        if (this.operatorValue && this.operatorValue.length > 0 && this.operatorValue != '/') {
            this.calculate();
            this.operatorValue = '/';
            return;
        }

        this.operatorValue = '/';

        if (!(this.initialValue)) {
            if (this.previousValue && this.previousValue.length > 0) {
                this.previousValue = (parseInt(this.previousValue) / parseInt(this.currentValue)).toString();
                this.currentValue = '';
                this.initialValue = true;
            }
            else {
                this.previousValue = this.currentValue;
                this.currentValue = '';
                this.initialValue = true;
            }
        }

    }

    calculate = function () {

        if (this.previousValue && this.previousValue.length > 0 && this.currentValue && this.currentValue.length > 0) {
            if (this.operatorValue == '+') {
                this.previousValue = (parseInt(this.previousValue) + parseInt(this.currentValue)).toString();
            }

            if (this.operatorValue == '-') {
                this.previousValue = (parseInt(this.previousValue) - parseInt(this.currentValue)).toString();
            }
            if (this.operatorValue == '*') {
                this.previousValue = (parseInt(this.previousValue) * parseInt(this.currentValue)).toString();
            }

            if (this.operatorValue == '/') {
                this.previousValue = (parseInt(this.previousValue) / parseInt(this.currentValue)).toString();
            }

            this.currentValue = '';
            this.initialValue = true;
            this.operatorValue = '';
        }
    }

    clear = function () {
        this.initialValue = true;
        this.previousValue = '';
        this.currentValue = '';
        this.resultValue = 0;
        this.operatorValue = '';
    }

}
