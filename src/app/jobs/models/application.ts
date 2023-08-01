export interface JobApplication {
  id?: number;
  position: string;
  company: string;
  appliedDate: Date;
  status: 'applied' | 'interview' | 'offer' | 'rejected';
  source: 'LinkedIn' | 'Indeed' | 'Company Website' | 'Other';
  contactName?: string;
  contactEmail?: string;
  notes?: string;
}
