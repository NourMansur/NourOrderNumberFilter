
Shopware.Component.override('sw-order-list', {
    data() {
        return {
            defaultFilters: [
                'nour-order-number-filter',
                'affiliate-code-filter',
                'campaign-code-filter',
                'document-filter',
                'order-date-filter',
                'order-value-filter',
                'status-filter',
                'payment-status-filter',
                'delivery-status-filter',
                'payment-method-filter',
                'shipping-method-filter',
                'sales-channel-filter',
                'billing-country-filter',
                'customer-group-filter',
                'shipping-country-filter',
                'customer-group-filter',
                'tag-filter',
                'line-item-filter',
            ]
        };
    },
    computed:{
        listFilters() {
            
            return this.filterFactory.create('order', {
                'nour-order-number-filter': {
                    property: "orderNumber", 
                    label: "Order Number",
                    placeholder: "Order Number",
                    valueProperty: 'key',
                    labelProperty: 'key',
                },
                'affiliate-code-filter': {
                    property: 'affiliateCode',
                    type: 'multi-select-filter',
                    label: this.$tc('sw-order.filters.affiliateCodeFilter.label'),
                    placeholder: this.$tc('sw-order.filters.affiliateCodeFilter.placeholder'),
                    valueProperty: 'key',
                    labelProperty: 'key',
                    options: this.availableAffiliateCodes,
                },
                'campaign-code-filter': {
                    property: 'campaignCode',
                    type: 'multi-select-filter',
                    label: this.$tc('sw-order.filters.campaignCodeFilter.label'),
                    placeholder: this.$tc('sw-order.filters.campaignCodeFilter.placeholder'),
                    valueProperty: 'key',
                    labelProperty: 'key',
                    options: this.availableCampaignCodes,
                },
                'document-filter': {
                    property: 'documents',
                    label: this.$tc('sw-order.filters.documentFilter.label'),
                    placeholder: this.$tc('sw-order.filters.documentFilter.placeholder'),
                    optionHasCriteria: this.$tc('sw-order.filters.documentFilter.textHasCriteria'),
                    optionNoCriteria: this.$tc('sw-order.filters.documentFilter.textNoCriteria'),
                },
                'order-date-filter': {
                    property: 'orderDateTime',
                    label: this.$tc('sw-order.filters.orderDateFilter.label'),
                    dateType: 'datetime-local',
                },
                'status-filter': {
                    property: 'stateMachineState',
                    criteria: this.getStatusCriteria('order.state'),
                    label: this.$tc('sw-order.filters.statusFilter.label'),
                    placeholder: this.$tc('sw-order.filters.statusFilter.placeholder'),
                },
                'payment-status-filter': {
                    property: 'transactions.stateMachineState',
                    criteria: this.getStatusCriteria('order_transaction.state'),
                    label: this.$tc('sw-order.filters.paymentStatusFilter.label'),
                    placeholder: this.$tc('sw-order.filters.paymentStatusFilter.placeholder'),
                },
                'delivery-status-filter': {
                    property: 'deliveries.stateMachineState',
                    criteria: this.getStatusCriteria('order_delivery.state'),
                    label: this.$tc('sw-order.filters.deliveryStatusFilter.label'),
                    placeholder: this.$tc('sw-order.filters.deliveryStatusFilter.placeholder'),
                },
                'payment-method-filter': {
                    property: 'transactions.paymentMethod',
                    label: this.$tc('sw-order.filters.paymentMethodFilter.label'),
                    placeholder: this.$tc('sw-order.filters.paymentMethodFilter.placeholder'),
                },
                'shipping-method-filter': {
                    property: 'deliveries.shippingMethod',
                    label: this.$tc('sw-order.filters.shippingMethodFilter.label'),
                    placeholder: this.$tc('sw-order.filters.shippingMethodFilter.placeholder'),
                },
                'sales-channel-filter': {
                    property: 'salesChannel',
                    label: this.$tc('sw-order.filters.salesChannelFilter.label'),
                    placeholder: this.$tc('sw-order.filters.salesChannelFilter.placeholder'),
                },
                'billing-country-filter': {
                    property: 'billingAddress.country',
                    label: this.$tc('sw-order.filters.billingCountryFilter.label'),
                    placeholder: this.$tc('sw-order.filters.billingCountryFilter.placeholder'),
                },
                'shipping-country-filter': {
                    property: 'deliveries.shippingOrderAddress.country',
                    label: this.$tc('sw-order.filters.shippingCountryFilter.label'),
                    placeholder: this.$tc('sw-order.filters.shippingCountryFilter.placeholder'),
                },
                'customer-group-filter': {
                    property: 'orderCustomer.customer.group',
                    label: this.$tc('sw-order.filters.customerGroupFilter.label'),
                    placeholder: this.$tc('sw-order.filters.customerGroupFilter.placeholder'),
                },
                'tag-filter': {
                    property: 'tags',
                    label: this.$tc('sw-order.filters.tagFilter.label'),
                    placeholder: this.$tc('sw-order.filters.tagFilter.placeholder'),
                },
                'line-item-filter': {
                    property: 'lineItems.product',
                    label: this.$tc('sw-order.filters.productFilter.label'),
                    placeholder: this.$tc('sw-order.filters.productFilter.placeholder'),
                    criteria: this.productCriteria,
                    displayVariants: true,
                },
            });
        }
    }
})