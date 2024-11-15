
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'canfly'
})

export class CanFlyPipe implements PipeTransform {
    transform(value: boolean): '✅'|'❌' {
        return (value) ? '✅' : '❌';
    }
}