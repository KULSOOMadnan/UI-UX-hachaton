export const orders = {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    { name: "customerId", title: "Customer ID", type: "string" },
    { name: "fullName", title: "Customer Full Name", type: "string" },

    {
      name: "shipTo",
      title: "Shipping Address",
      type: "object",
      fields: [
        { name: "name", title: "Name", type: "string" },
        { name: "email", title: "Email", type: "string" },
        { name: "phone", title: "Phone", type: "string" },
        
        { name: "addressLine1", title: "Address Line 1", type: "string" },
        { name: "city", title: "City", type: "string" },
        { name: "state", title: "State", type: "string" },
        { name: "postalCode", title: "Postal Code", type: "string" },
        { name: "country", title: "Country Code", type: "string" },
      ],
    },
    { name: "trackingNumber", title: "Tracking Number", type: "string" },
 
    { name: "shipmentCost", title: "Shipment Cost", type: "number" },
    { name: "trackingUrl", title: "Tracking URL", type: "url" },
    { name: "createdAt", title: "Created At", type: "datetime" },
    { name: "carrierCode", title: "Carrier Code", type: "string" },
    { name: "labelPrint", title: "Created At", type: "url" },
    { name: "AdditionalInfo", title: "Additional Info", type: "string" },
    {
      name: "status",
      title: "Order Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Processing", value: "processing" },
          { title: "Shipped", value: "shipped" },
          { title: "Delivered", value: "delivered" },
          { title: "Canceled", value: "canceled" },
        ],
        layout: "radio", // Optional: Use "radio" or "dropdown" for UI
      },
    }
  ],
};

