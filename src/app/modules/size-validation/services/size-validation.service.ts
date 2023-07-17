import { Injectable } from '@angular/core';
import { AlertService } from '../../alert/alert.service';

@Injectable({
  providedIn: 'root'
})
export class SizeValidationService {

  constructor(

  ) { }

  /**
   * 
   * @param file 
   * @param maxSize max size in kb
   */
  imageSizeValidation(file: File, maxSize: number, type: 'Image'|'Audio'|'Video'|'File'): { isValid: boolean, errMsg: string } {
    const fileSize = file.size;
    if (Math.floor(fileSize / 1000) > maxSize) {
      return {
        isValid: false,
        errMsg: `${type} should be less then ${maxSize} kb`
      }
    }

    return { isValid: true, errMsg: '' }
  }
}
