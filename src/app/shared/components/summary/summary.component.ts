import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JobsService } from 'src/app/core/services/jobs.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  totalJobs: Observable<number> = new Observable()

  constructor(private jobsService: JobsService) { }

  ngOnInit(): void {
    this.totalJobs = this.jobsService.totalJobs$;
  }

}
