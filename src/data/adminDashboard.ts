import type {
  AdminRecentBooking,
  AdminReportedIssue,
  PendingProviderApproval,
} from "../types/adminDashboard";

export const pendingProviderApprovals: PendingProviderApproval[] = [
  {
    id: "PA-101",
    providerName: "Metro Fix Plumbing",
    category: "Plumber",
    experience: 5,
    location: "BTM Layout",
    submittedAt: "2026-04-21",
    verificationStatus: "under_review",
  },
  {
    id: "PA-102",
    providerName: "Shine Home Services",
    category: "Cleaner",
    experience: 4,
    location: "Whitefield",
    submittedAt: "2026-04-20",
    verificationStatus: "documents_pending",
  },
  {
    id: "PA-103",
    providerName: "Glow Beauty Visits",
    category: "Beautician",
    experience: 6,
    location: "Indiranagar",
    submittedAt: "2026-04-19",
    verificationStatus: "under_review",
  },
];

export const adminRecentBookings: AdminRecentBooking[] = [
  {
    id: "BK-9001",
    customerName: "Anjali Menon",
    providerName: "Arun Electrical Works",
    service: "Fan installation",
    status: "confirmed",
    date: "2026-04-24",
    amount: 499,
  },
  {
    id: "BK-9002",
    customerName: "Rahul Nair",
    providerName: "QuickFix Plumbing",
    service: "Leakage repair",
    status: "pending",
    date: "2026-04-24",
    amount: 399,
  },
  {
    id: "BK-9003",
    customerName: "Meera Joseph",
    providerName: "Sparkle Home Cleaning",
    service: "Kitchen cleaning",
    status: "completed",
    date: "2026-04-22",
    amount: 699,
  },
];

export const adminReportedIssues: AdminReportedIssue[] = [
  {
    id: "IS-301",
    title: "Provider arrived late for confirmed booking",
    reportedBy: "Customer - Priya S.",
    category: "Service Quality",
    priority: "high",
    status: "open",
    createdAt: "2026-04-22",
  },
  {
    id: "IS-302",
    title: "Payment mismatch after service completion",
    reportedBy: "Customer - Deepak R.",
    category: "Payments",
    priority: "medium",
    status: "in_review",
    createdAt: "2026-04-21",
  },
  {
    id: "IS-303",
    title: "Provider profile missing verification documents",
    reportedBy: "System flag",
    category: "Compliance",
    priority: "low",
    status: "resolved",
    createdAt: "2026-04-20",
  },
];
