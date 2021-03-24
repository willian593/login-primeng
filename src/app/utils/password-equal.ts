import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export const passwordEqual: ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
  const password = control.get('password');
  const confirmarPassword = control.get('repatPass');

  return password.value === confirmarPassword.value
    ? null
    : { noSonIguales: true };
};

// export const passwordEqual = (pass1Name: string, pass2Name: string) => {
//   return (formGroup: FormGroup) => {
//     const pass1Control = formGroup.controls[pass1Name];
//     const pass2Control = formGroup.controls[pass2Name];

//     if (pass1Control.value === pass2Control.value) {
//       pass2Control.setErrors(null);
//     } else {
//       pass2Control.setErrors({ noEsIgual: true });
//     }
//   };
// };
