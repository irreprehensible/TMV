import { ErrorHandler } from '@angular/core';

export class AppErroHandler implements ErrorHandler{
    handleError(error){
        alert('an unexpected error occured');
        console.log(error)
    }
}