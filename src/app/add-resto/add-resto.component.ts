import { Component, OnInit } from '@angular/core'; 
import{FormGroup,FormControl,Validators} from '@angular/forms' 
import{RestoService} from '../resto.service'

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  constructor(private resto : RestoService) { }  
  alert : boolean = false
  addResto = new FormGroup 
  (  
    { 
      name : new FormControl('',Validators.required), 
      address : new FormControl('',Validators.required),
      email : new FormControl('',Validators.required)
     
    }   
  )
    
  

  ngOnInit(): void {
  } 
   
  collectResto() 
  { 
    this.resto.saveResto(this.addResto.value).subscribe((result)=> 
    { 
      this.alert = true
    }) 
    this.addResto.reset({})
  } 
  closeAlert() 
  { 
    this.alert = false
  }

}
