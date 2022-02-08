import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data: { name: string, age: number, job: string, employed: boolean }[]= [
    { name: 'James', age: 24, job: 'Analyst', employed: true },
    { name: 'Jill', age: 25, job: 'PM',employed: false },
    { name: 'Elyse', age: 25, job: 'Engineer', employed: true }
  ];
  headers: { key: string, label: string}[] = [
    { key: 'employed', label: 'Has a Job'},
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
