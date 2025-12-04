<!-- index.html -->
<!DOCTYPE html>
<html ng-app="invoiceApp" lang="en" ng-controller="InvoiceCtrl">
<head>
  <meta charset="UTF-8" />
  <title>Invoice Schedule</title>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.3/angular.min.js"></script>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 1em;
      background: #fff;
      color: #000;
    }
    h1 {
      font-size: 1.8em;
      margin-bottom: 0.1em;
    }
    h2 {
      font-weight: bold;
      margin-top: 0;
    }
    small {
      color: #777;
      font-weight: 600;
    }
    .container {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
      margin-top: 1rem;
    }
    .box {
      border: 1px solid #ddd;
      border-radius: 12px;
      padding: 1.5rem;
      min-width: 280px;
      max-width: 330px;
      box-sizing: border-box;
    }
    .summary-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
      line-height: 1.3;
    }
    .summary-label {
      color: #777;
      font-weight: 600;
      font-size: 0.9rem;
    }
    .summary-value {
      font-weight: 600;
      font-size: 1rem;
    }
    .green {
      color: #2f8c2f;
    }
    .orange {
      color: #c25400;
    }
    /* Purchase Orders */
    .po-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }
    .btn-add {
      background: #06061b;
      color: white;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      padding: 0.5rem 1rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 0.3rem;
      font-size: 0.9rem;
    }
    .btn-add:hover {
      background: #303059;
    }
    .po-card {
      background: #f8f8f8;
      border-radius: 12px;
      padding: 1rem;
      color: #333;
      font-size: 0.9rem;
      box-sizing: border-box;
      position: relative;
    }
    .po-topline {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    .tag {
      background: #d8d8d8;
      border-radius: 12px;
      padding: 0.15rem 0.7rem;
      font-weight: 600;
      font-size: 0.8rem;
      color: #444;
    }
    .po-amount {
      font-weight: 700;
      font-size: 1.1rem;
    }
    .po-default {
      color: gray;
      font-weight: 600;
    }
    .po-default span {
      color: #9a9a9a;
      display: block;
      font-weight: 400;
      font-size: 0.8rem;
      margin-top: 0.1rem;
    }
    .po-delete {
      color: #bf3f3f;
      font-weight: 700;
      cursor: pointer;
      margin-left: auto;
      font-size: 1.2rem;
      user-select: none;
    }
    .po-delete:hover {
      color: #ff0000;
    }
    .po-details {
      font-size: 0.85rem;
      color: #767676;
      line-height: 1.3;
    }
    /* Utility for icon + */
    .plus-icon {
      font-weight: 700;
      font-size: 1.3rem;
      line-height: 1;
    }
  </style>
</head>
<body>

  <h1>Invoice Schedule</h1>
  <small>Website Redesign Project - Acme Corporation</small>

  <div class="container">

    <section class="box" aria-label="Summary">
      <h2>Summary</h2>

      <div class="summary-row">
        <div class="summary-label">Total PO(s) Amount</div>
        <div class="summary-value">{{ formatCurrency(summary.totalPOAmount) }}</div>
      </div>

      <div class="summary-row">
        <div class="summary-label">Pending Scheduled</div>
        <div class="summary-value orange">{{ formatCurrency(summary.pendingScheduled) }}</div>
      </div>

      <div class="summary-row">
        <div class="summary-label"># of Invoices Scheduled</div>
        <div class="summary-value">{{ summary.invoicesScheduled }}</div>
      </div>

      <div class="summary-row">
        <div class="summary-label"># of Invoices Generated</div>
        <div class="summary-value">{{ summary.invoicesGenerated }}</div>
      </div>

      <div class="summary-row">
        <div class="summary-label">Total Invoiced Amount (Excl. tax)</div>
        <div class="summary-value green">{{ formatCurrency(summary.totalInvoicedAmount) }}</div>
      </div>

      <div class="summary-row">
        <div class="summary-label">Pending to Invoice Amount</div>
        <div class="summary-value orange">{{ formatCurrency(summary.pendingInvoiceAmount) }}</div>
      </div>

    </section>

    <section class="box" aria-label="Purchase Orders">
      <div class="po-header">
        <h2>Purchase Orders</h2>
        <button type="button" class="btn-add" ng-click="addPurchaseOrder()">
          <span class="plus-icon">+</span> Add Purchase Order
        </button>
      </div>

      <div class="po-card" ng-repeat="po in purchaseOrders track by po.id">
        <div class="po-topline">
          <div class="tag">PO #{{po.poNumber}}</div>
          <div class="tag">{{po.currency}}</div>
          <div class="po-amount">{{ formatCurrency(po.amount, po.currency) }}</div>
          <div class="po-default">
            Default<br><span>Vendor</span>
          </div>
          <div role="button" aria-label="Delete purchase order" ng-click="deletePurchaseOrder(po.id)" class="po-delete" tabindex="0" ng-keypress="keyPressDelete($event, po.id)">🗑︎</div>
        </div>
        <div class="po-details">
          Date: {{po.date | date:'MM/dd/yyyy'}}<br>
          {{po.note}}
        </div>
      </div>

    </section>

  </div>

<script>
  angular.module('invoiceApp', [])
    .controller('InvoiceCtrl', ['$scope', function($scope) {
      $scope.summary = {
        totalPOAmount: 100000.00,
        pendingScheduled: 0.00,
        invoicesScheduled: 8,
        invoicesGenerated: 4,
        totalInvoicedAmount: 33333.33,
        pendingInvoiceAmount: 66666.67
      };

      $scope.purchaseOrders = [
        {
          id: 1,
          poNumber: 'PO-2025-001',
          currency: 'USD',
          amount: 100000.00,
          date: new Date(2025, 1, 12),  // month is 0-based
          note: 'Initial project purchase order'
        }
      ];

      $scope.formatCurrency = function (value, currency) {
        currency = currency || 'USD';
        return new Intl.NumberFormat('en-US', {style: 'currency', currency: currency}).format(value);
      };

      $scope.addPurchaseOrder = function() {
        // Example logic to add a dummy purchase order (can be enhanced)
        const nextId = $scope.purchaseOrders.length ?
          Math.max(...$scope.purchaseOrders.map(po => po.id)) + 1 : 1;
        $scope.purchaseOrders.push({
          id: nextId,
          poNumber: 'PO-2025-00' + nextId,
          currency: 'USD',
          amount: 0,
          date: new Date(),
          note: 'New purchase order'
        });
      };

      $scope.deletePurchaseOrder = function(id) {
        $scope.purchaseOrders = $scope.purchaseOrders.filter(po => po.id !== id);
      };

      $scope.keyPressDelete = function(event, id) {
        if(event.key === 'Enter' || event.key === ' ') {
          $scope.deletePurchaseOrder(id);
          event.preventDefault();
          $scope.$apply();
        }
      };
    }]);
</script>
</body>
</html>