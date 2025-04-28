import { AbstractControl, ValidatorFn } from "@angular/forms";

export function isValidBodyPart(value: string): boolean {
    if(value == 'head' || value == 'chest' || value == 'leg' || value == 'hand' ) return true;
    return false;
}

export function bodyPartValidator(): ValidatorFn{
    return(control: AbstractControl
    ): { [key: string]: boolean } | null => {
        let valid = !control.value || isValidBodyPart(control.value);
        return valid ? null : { bodyPart: true };
    }
}