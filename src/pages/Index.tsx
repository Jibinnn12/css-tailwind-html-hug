const Index = () => {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
      </div>
    </div>
  );
};

export default Index;
