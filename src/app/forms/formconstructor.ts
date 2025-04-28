import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { сlothingType } from "../class/Сlothing/ClothingType";
import { bodyPartValidator } from "../validators/bodyPartValidator";

export function formConstructor(
    type: string,
    productForm: FormGroup,
    fb: FormBuilder
){
    const controlsToRemove = [
        'size',
        'season',
        'heel',
        'bodyPart',
        'belt'
    ];
    controlsToRemove.forEach((control) => {
        if (productForm.contains(control)) {
            productForm.removeControl(control);
        }
    });
   
    if (type == сlothingType[0] || type == сlothingType[1] || type == сlothingType[3] || type == сlothingType[3]) {
        productForm.addControl('size', fb.control(1 , [Validators.required, Validators.min(0), Validators.max(300)]));
        productForm.addControl('season', fb.control('winter', [Validators.required, Validators.pattern('winter|summer|autumn|spring')]));
        if (type == сlothingType[1]) {
            productForm.addControl('heel', fb.control(false, [Validators.required, Validators.pattern('true|false')]));
        }
        if (type == сlothingType[3]) {
            productForm.addControl('belt', fb.control(false, [Validators.required, Validators.pattern('true|false')]));
        }
        productForm.addControl('bodyPart', fb.control('hand', [Validators.required, bodyPartValidator()]));
        
    } else if (type == сlothingType[2]) {
        productForm.addControl('bodyPart', fb.control('hand', [Validators.required, bodyPartValidator()]));
    }
}