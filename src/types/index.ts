export enum STATUS {
  PENDING = 'pending',
  RESOLVED = 'resolved',
  FAILED = 'failed',
}

export interface IJobs {
  _id: string;
  status: STATUS;
  result?: any;
  createdAt: Date;
  resolvedAt?: Date;
}
