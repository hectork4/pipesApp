import { Pipe, PipeTransform } from "@angular/core";

// pepe | toggleCase => PEPE
// PEPE | toggleCase => pepe

@Pipe({
    name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {
    transform(value: string, toUpper: boolean = false): string {
    console.log('pipe', value, toUpper, value.toUpperCase());   
    return toUpper ? value.toUpperCase() : value.toLowerCase();
    }

}