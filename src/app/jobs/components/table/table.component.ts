import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JobsService } from 'src/app/core/services/jobs.service';
import { JobApplication } from '../../models/application';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  jobs$: Observable<JobApplication[]> = new Observable()

  constructor(private jobsService: JobsService) { }

  ngOnInit(): void {
    this.jobs$ = this.jobsService.jobs$
  }

  modifyStatus(id: number) { }

  deleteJob(id: number) { }

}
