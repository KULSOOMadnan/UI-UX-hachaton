// import { Rule } from "sanity";

// export default {
//     name: 'order',
//     title: 'Order',
//     type: 'document',
//     fields: [
//       {
//         name: 'customerId',
//         title: 'Customer',
//         type: 'reference',
//         to: [{ type: 'customer' }],
//         validation: (Rule : Rule) => Rule.required(),
//       },
//       {
//         name: 'products',
//         title: 'Products',
//         type: 'array',
//         of: [
//           {
//             type: 'object',
//             fields: [
//               {
//                 name: 'productId',
//                 title: 'Product',
//                 type: 'reference',
//                 to: [{ type: 'product' }],
//                 validation: (Rule : Rule) => Rule.required(),
//               },
//               {
//                 name: 'quantity',
//                 title: 'Quantity',
//                 type: 'number',
//                 validation: (Rule : Rule) => Rule.required().min(1),
//               },
//             ],
//           },
//         ],
//       },
//       {
//         name: 'totalAmount',
//         title: 'Total Amount',
//         type: 'number',
//         validation: (Rule : Rule) => Rule.required().min(0),
//       },
//       {
//         name: 'status',
//         title: 'Status',
//         type: 'string',
//         options: {
//           list: [
//             { title: 'Pending', value: 'Pending' },
//             { title: 'Shipped', value: 'Shipped' },
//             { title: 'Completed', value: 'Completed' },
//           ],
//         },
//         validation: (Rule : Rule) => Rule.required(),
//       },
//       {
//         name: 'createdAt',
//         title: 'Created At',
//         type: 'datetime',
//         initialValue: () => new Date().toISOString(),
//       },
//     ],
//   };
// schemas/order.js
export const order = {
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
        
        { name: "address_line1", title: "Address Line 1", type: "string" },
        { name: "city_locality", title: "City", type: "string" },
        { name: "state_province", title: "State", type: "string" },
        { name: "postal_code", title: "Postal Code", type: "string" },
        { name: "country_code", title: "Country Code", type: "string" },
      ],
    },
    { name: "trackingNumber", title: "Tracking Number", type: "string" },
    { name: "shipmentCost", title: "Shipment Cost", type: "number" },
    { name: "trackingUrl", title: "Tracking URL", type: "url" },
    { name: "createdAt", title: "Created At", type: "datetime" },
    { name: "carrierCode", title: "Carrier Code", type: "string" },
    { name: "labelPrint", title: "Created At", type: "url" },
    { name: "AdditionalInfo", title: "Additional Info", type: "string" },

  ],
};
