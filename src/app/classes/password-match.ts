import { AbstractControl } from '@angular/forms';

export function passwordMatch(control: AbstractControl): { [key: string]: boolean } | null {
    const pwd = control.get('password');
    const passwordMatch = control.get('confirmPassword');
    if (pwd?.pristine || passwordMatch?.pristine) {
        return null;
    }

    return pwd != undefined && passwordMatch && pwd.value !== passwordMatch.value ?
        { 'invalidPassword': true } :
        null;

}
