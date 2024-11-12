export type Contact = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  position?: string;
  tags: string[];
  customFields: Record<string, string>;
  assignedTo?: string;
  status: 'active' | 'inactive' | 'lead' | 'customer';
  lastContactedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
};

export type Activity = {
  id: string;
  contactId: string;
  type: 'call' | 'meeting' | 'email' | 'note' | 'task';
  title: string;
  description?: string;
  date: Date;
  status: 'pending' | 'completed' | 'cancelled';
  assignedTo?: string;
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
};

export type Deal = {
  id: string;
  contactId: string;
  title: string;
  value: number;
  stage: 'lead' | 'contacted' | 'proposal' | 'negotiation' | 'closed-won' | 'closed-lost';
  probability: number;
  expectedCloseDate?: Date;
  assignedTo?: string;
  notes: string[];
  createdAt: Date;
  updatedAt: Date;
};

export type Task = {
  id: string;
  title: string;
  description?: string;
  type: 'follow_up' | 'call' | 'meeting' | 'email' | 'other';
  status: 'pending' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high';
  dueDate: Date;
  assignedTo?: string;
  contactId?: string;
  dealId?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type User = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'sales_rep';
  createdAt: Date;
  updatedAt: Date;
};