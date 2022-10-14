import { Component, OnInit } from '@angular/core';
import { RtrestclientService } from '../rtrestclient.service';
import { Employee } from './employee';

@Component({
  selector: 'app-empinfo',
  templateUrl: './empinfo.component.html',
  styleUrls: ['./empinfo.component.css']
})
export class EmpinfoComponent implements OnInit {
employee:Employee={"emid":-1,"name":"None","salary":0.0,"department":"none","section":"none"};;
  constructor(private rtservice:RtrestclientService) { }

  ngOnInit(): void {
    this.loadEmpinfo();
  }
private loadEmpinfo():void{
this.rtservice.getEmp(161).subscribe(e=>{
  this.employee=e[0];
});
}
}
