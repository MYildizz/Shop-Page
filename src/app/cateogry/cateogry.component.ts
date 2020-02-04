import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from '../services/category.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-cateogry',
  templateUrl: './cateogry.component.html',
  styleUrls: ['./cateogry.component.css'],
  providers: [CategoryService]
})
export class CateogryComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }
  title="Kategori Listesi"
  categories : Category[];
  
  ngOnInit() {
    this.categoryService.getCategories().subscribe(data=>{

      this.categories=data

    });
    
  }

}
