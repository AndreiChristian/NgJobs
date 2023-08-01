export interface JobApplication {
  id: string;
  position: string;
  company: string;
  appliedDate: Date;
  status: 'applied' | 'interview' | 'offer' | 'rejected';
  source: 'LinkedIn' | 'Indeed' | 'Company Website' | 'Other';
  contactName?: string;
  contactEmail?: string;
  notes?: string;
}
