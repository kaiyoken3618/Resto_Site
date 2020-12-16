import { Component, OnInit } from '@angular/core'; 
import{FormGroup,FormControl,Validators} from '@angular/forms'   
import{ActivatedRoute} from '@angular/router' 
import{RestoService} from '../resto.service'

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {

  constructor(private router:ActivatedRoute,private resto : RestoService ) { }              
  alert : boolean = false
   
  editResto = new FormGroup 
  (  
    { 
      name : new FormControl('',Validators.required), 
      address : new FormControl('',Validators.required),
      email : new FormControl('',Validators.required)
     
    }   
  )

  ngOnInit(): void  
  { 
      console.warn(this.router.snapshot.params.id)  
      this.resto.getCurrentResto(this.router.snapshot.params.id).subscribe((result)=> 
      {
        //console.warn(result) 
        this.editResto = new FormGroup 
        (  
          { 
            name : new FormControl(result['name'],Validators.required), 
            address : new FormControl(result['address'],Validators.required),
            email : new FormControl(result['email'],Validators.required)
           
          }   
        )
      })  
    }
   
  collection(item: any) 
  { 
    console.warn("item",this.editResto.value)  
    this.resto.updateResto(this.router.snapshot.params.id,this.editResto.value).subscribe((result)=>{ 
       
      console.warn("result",result) 
    
      this.alert = true
   
    
    })

  } 
  closeAlert() 
  { 
    this.alert = false
  }


}
