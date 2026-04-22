export interface PendingProviderApproval {
  id: string;
  providerName: string;
  category: string;
  experience: number;
  location: string;
  submittedAt: string;
  verificationStatus: "under_review" | "documents_pending";
}

export interface AdminRecentBooking {
  id: string;
  customerName: string;
  providerName: string;
  service: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  date: string;
  amount: number;
}

export interface AdminReportedIssue {
  id: string;
  title: string;
  reportedBy: string;
  category: string;
  priority: "low" | "medium" | "high";
  status: "open" | "in_review" | "resolved";
  createdAt: string;
}
