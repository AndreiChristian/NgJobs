import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { JobApplication } from 'src/app/jobs/models/application';

const MOCK_JOB_APPLICATIONS: JobApplication[] = [
  {
    id: 1,
    position: 'Software Engineer',
    company: 'Tech Corp',
    appliedDate: new Date('2023-07-01'),
    status: 'applied',
    source: 'LinkedIn',
    contactName: 'John Doe',
    contactEmail: 'john.doe@techcorp.com',
    notes: 'First round interview scheduled'
  },
  {
    id: 2,
    position: 'Product Manager',
    company: 'Innovate Inc.',
    appliedDate: new Date('2023-07-15'),
    status: 'interview',
    source: 'Company Website',
    contactName: 'Jane Smith',
    contactEmail: 'jane.smith@innovate.com',
  },
  {
    id: 3,
    position: 'UX Designer',
    company: 'Design Hub',
    appliedDate: new Date('2023-06-30'),
    status: 'offer',
    source: 'Indeed',
    contactName: 'Alice Johnson',
    contactEmail: 'alice.johnson@designhub.com',
    notes: 'Offer received, considering options'
  },
  // More applications...
];








@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private JobsSubject = new BehaviorSubject<JobApplication[]>(MOCK_JOB_APPLICATIONS);
  public jobs$: Observable<JobApplication[]> = this.JobsSubject.asObservable();
  public totalJobs$: Observable<number> = this.JobsSubject.pipe(
    map(jobs => jobs.length)
  )

  constructor() { }

  public isEmpty(): boolean {
    return this.JobsSubject.getValue().length === 0;
  }



  public addJob(application: JobApplication) {

    const values = this.JobsSubject.getValue();

    if (values.length === 0) {
      this.JobsSubject.next([application])
    } else {
      this.JobsSubject.next([...values, application])
    }

  }

  getApplications() { }

  public deleteApplication(id: number) {
    const values = this.JobsSubject.getValue();
    const updatedValues = values.filter(a => a.id !== id);
    this.JobsSubject.next(updatedValues);
  }

  public modifyApplication(id: number, application: JobApplication) {
    const values = this.JobsSubject.getValue();
    const index = values.findIndex(a => a.id === id);

    if (index === -1) return;

    const updatedValues = [...values];
    updatedValues[index] = application;

    this.JobsSubject.next(updatedValues);
  }


}
