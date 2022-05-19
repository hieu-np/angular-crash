import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  text: string = '';
  day: string = '';
  reminder: boolean = false;
  constructor() { }

  ngOnInit(): void {}

  onSubmit(){
    if(!this.text){
      alert('Please add a task!!!!');
      return;
    }


    // Những thứ cần gửi đến server
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    // Ko gửi ở nơi đây, mà gửi ở component cha, tạo sự kiện emit event

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
