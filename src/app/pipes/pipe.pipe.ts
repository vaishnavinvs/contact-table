import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class PipePipe implements PipeTransform {
  fullName:string = ''
  transform(allDetails:any[],searchKey:string,propertyName:string): any[] {
    // array after transform
    const result:any = []
    if (!allDetails || searchKey =='' || propertyName == '')
    {
      return allDetails
    }
    allDetails.forEach((user:any)=>{
      let text1=user.firstName
      let text2=user.lasrName
      this.fullName=text1.concat(text2)
      if(this.fullName.trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
        result.push(user)
      }
    })
    return result;
  }

}
