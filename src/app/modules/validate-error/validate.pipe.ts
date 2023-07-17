import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validate'
})
export class ValidatePipe implements PipeTransform {

  transform(errors: any | null, fieldName: string): any {
    if (errors) {
      if (errors.required) {
        return `${fieldName} is required.`;
      }
      if (errors.email) {
        return `${fieldName} is not Valid`;
      }
      if (errors.minlength) {
        return `${fieldName} should be greater than equal ${errors.minlength.requiredLength} characters.`;
      }
      if (errors.maxlength) {
        return `${fieldName} should be less than equal ${errors.maxlength.requiredLength} characters.`;
      }
      if (errors.min) {
        return `${fieldName} should be greater than ${errors.min.min}.`;
      }
      if (errors.max) {
        return `${fieldName} should be less than ${errors.max.max}.`;
      }
      if(errors.whitespace){
        return `${fieldName} is required.`;
      }
    }
    return null;
  }

}
