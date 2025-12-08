import { useState } from 'react';

const invoiceData = [
  { poNumber: 'PO #PO-2025-001', description: 'Monthly installment 5 of 12', amount: 8333.33, taxRate: 18, taxAmount: 1500.00, totalAmount: 9833.33, dueDate: '14/12/2025' },
  { poNumber: 'PO #PO-2025-001', description: 'Monthly installment 6 of 12', amount: 8333.33, taxRate: 18, taxAmount: 1500.00, totalAmount: 9833.33, dueDate: '14/01/2026' },
  { poNumber: 'PO #PO-2025-001', description: 'Monthly installment 7 of 12', amount: 8333.33, taxRate: 18, taxAmount: 1500.00, totalAmount: 9833.33, dueDate: '14/02/2026' },
  { poNumber: 'PO #PO-2025-001', description: 'Monthly installment 8 of 12', amount: 8333.33, taxRate: 18, taxAmount: 1500.00, totalAmount: 9833.33, dueDate: '14/03/2026' },
  { poNumber: 'PO #PO-2025-001', description: 'Monthly installment 9 of 12', amount: 8333.33, taxRate: 18, taxAmount: 1500.00, totalAmount: 9833.33, dueDate: '14/04/2026' },
  { poNumber: 'PO #PO-2025-001', description: 'Monthly installment 10 of 12', amount: 8333.33, taxRate: 18, taxAmount: 1500.00, totalAmount: 9833.33, dueDate: '14/05/2026' },
  { poNumber: 'PO #PO-2025-001', description: 'Monthly installment 11 of 12', amount: 8333.33, taxRate: 18, taxAmount: 1500.00, totalAmount: 9833.33, dueDate: '14/06/2026' },
  { poNumber: 'PO #PO-2025-001', description: 'Monthly installment 12 of 12', amount: 8333.33, taxRate: 18, taxAmount: 1500.00, totalAmount: 9833.33, dueDate: '14/07/2026' },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState<'pending' | 'generated'>('pending');

  const totalAmount = invoiceData.reduce((sum, item) => sum + item.amount, 0);
  const totalTaxAmount = invoiceData.reduce((sum, item) => sum + item.taxAmount, 0);
  const totalWithTax = invoiceData.reduce((sum, item) => sum + item.totalAmount, 0);

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Invoice Schedule
          </h1>
          <p className="text-muted-foreground mt-1">
            Website Redesign Project - Acme Corporation
          </p>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Summary Card */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-foreground mb-6">Summary</h2>
            
            <div className="grid grid-cols-2 gap-y-6">
              {/* Total PO Amount */}
              <div>
                <p className="stat-label">Total PO(s) Amount</p>
                <p className="stat-value">$100,000.00</p>
              </div>
              
              {/* Pending Scheduled */}
              <div>
                <p className="stat-label">Pending Scheduled</p>
                <p className="stat-value-warning">$0.00</p>
              </div>
              
              {/* Invoices Scheduled */}
              <div>
                <p className="stat-label"># of Invoices Scheduled</p>
                <p className="stat-value">8</p>
              </div>
              
              {/* Invoices Generated */}
              <div>
                <p className="stat-label"># of Invoices Generated</p>
                <p className="stat-value">4</p>
              </div>
              
              {/* Total Invoiced Amount */}
              <div>
                <p className="stat-label">Total Invoiced Amount<br />(Excl. tax)</p>
                <p className="stat-value-success">$33,333.33</p>
              </div>
              
              {/* Pending to Invoice */}
              <div>
                <p className="stat-label">Pending to Invoice Amount</p>
                <p className="stat-value-warning">$66,666.67</p>
              </div>
            </div>
          </div>

          {/* Purchase Orders Card */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">Purchase Orders</h2>
              <button className="btn-primary">
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 4v16m8-8H4" 
                  />
                </svg>
                Add Purchase Order
              </button>
            </div>

            {/* Purchase Order Item */}
            <div className="bg-secondary/50 rounded-xl p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="badge">PO #PO-2025-001</span>
                    <span className="badge">USD</span>
                    <span className="text-lg font-semibold text-foreground">• $100,000.00</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">Default Vendor</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">Date: 02/12/2025</p>
                  <p className="text-sm text-muted-foreground">Initial project purchase order</p>
                </div>
                <button className="btn-icon ml-4">
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Invoice Table Section */}
        <div className="card p-6">
          {/* Tabs and Add Button */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="flex bg-secondary/50 rounded-full p-1">
              <button
                onClick={() => setActiveTab('pending')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === 'pending'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Pending Invoices (8)
              </button>
              <button
                onClick={() => setActiveTab('generated')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === 'generated'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Generated Invoices (4)
              </button>
            </div>
            <button className="btn-primary">
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 4v16m8-8H4" 
                />
              </svg>
              Add Invoice Schedule
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="table-header">PO Number</th>
                  <th className="table-header">Description</th>
                  <th className="table-header text-right">Amount (excl. tax)</th>
                  <th className="table-header text-right">Tax Rate</th>
                  <th className="table-header text-right">Tax Amount</th>
                  <th className="table-header text-right">Total Amount</th>
                  <th className="table-header">Due Date</th>
                  <th className="table-header">Actions</th>
                </tr>
              </thead>
              <tbody>
                {invoiceData.map((invoice, index) => (
                  <tr key={index} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                    <td className="table-cell font-medium">{invoice.poNumber}</td>
                    <td className="table-cell">{invoice.description}</td>
                    <td className="table-cell text-right">${invoice.amount.toFixed(2)}</td>
                    <td className="table-cell text-right">{invoice.taxRate}%</td>
                    <td className="table-cell text-right">${invoice.taxAmount.toFixed(2)}</td>
                    <td className="table-cell text-right font-medium">${invoice.totalAmount.toFixed(2)}</td>
                    <td className="table-cell">{invoice.dueDate}</td>
                    <td className="table-cell">
                      <div className="flex items-center gap-2">
                        {/* Edit Icon */}
                        <button className="btn-icon-sm" title="Edit">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        {/* Prepare Button */}
                        <button className="btn-outline-sm">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Prepare
                        </button>
                        {/* Generate Button */}
                        <button className="btn-outline-sm">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Generate
                        </button>
                        {/* Delete Icon */}
                        <button className="btn-icon-sm text-destructive hover:bg-destructive/10" title="Delete">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {/* Totals Row */}
                <tr className="bg-secondary/30 font-semibold">
                  <td className="table-cell">Total</td>
                  <td className="table-cell"></td>
                  <td className="table-cell text-right">${totalAmount.toFixed(2)}</td>
                  <td className="table-cell"></td>
                  <td className="table-cell text-right">${totalTaxAmount.toFixed(2)}</td>
                  <td className="table-cell text-right">${totalWithTax.toFixed(2)}</td>
                  <td className="table-cell"></td>
                  <td className="table-cell"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
