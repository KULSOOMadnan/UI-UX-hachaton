// export const order = {
//   name: "order",
//   title: "Order",
//   type: "document",
//   fields: [
//     {
//       name: "sessionId",
//       title: "Session ID",
//       type: "string",
//       description: "The Stripe session ID",
//     },
//     // {
//     //   name: "customer",
//     //   title: "Customer",
//     //   type: "reference",
//     //   to: [{ type: "customer" }],
//     // },
//     {
//       name: "products",
//       title: "Products",
//       type: "array",
//       of: [
//         {
//           type: "object",
//           fields: [
//             { name: "name", title: "Name", type: "string" },
//             { name: "quantity", title: "Quantity", type: "number" },
//             { name: "price", title: "Price", type: "number" },

//           ],
//         },
//       ],
//     },
//     {
//       name: "totalAmount",
//       title: "Total Amount",
//       type: "number",
//     },
//     {
//       name: "status",
//       title: "Order Status",
//       type: "string",
//       options: {
//         list: [
//           { title: "Pending", value: "pending" },
//           { title: "Completed", value: "completed" },
//           { title: "Cancelled", value: "cancelled" },
//         ],
//       },
//       initialValue: "pending",
//     },
//     {
//       name: "createdAt",
//       title: "Created At",
//       type: "datetime",
//       options: { dateFormat: "YYYY-MM-DD", timeFormat: "HH:mm" },
//     },
//     {
//       name: "customer",
//       title: "Customer",
//       type: "array",
//       of: [
//         {
//           type: "object",
//           fields: [
//             { name: "name", title: "Name", type: "string" },
//             { name: "email", title: "Email", type: "string" },

//           ],
//         },
//       ],
//     },
//   ],
// };
import { defineField, defineType } from "sanity";

export const order = defineType({
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    defineField({
      name: "customer",
      title: "Customer",
      type: "reference",
      to: [{ type: "customer" }],
    }),
    defineField({
      name: "products",
      title: "Products",
      type: "array",
      of: [
        defineField({
          name: "product",
          title: "Product",
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "quantity", title: "Quantity", type: "number" },
            { name: "price", title: "Price", type: "number" },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true, // Allows cropping directly in Sanity
              },
            },
            defineField({
              name: "_key",
              title: "Key",
              type: "string",
              initialValue: () => Math.random().toString(36).substring(10), // Generate unique key
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "totalAmount",
      title: "Total Amount",
      type: "number",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Completed", value: "completed" },
          { title: "Cancelled", value: "cancelled" },
        ],
      },
      initialValue: "pending",
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "AdditionalInfo",
      title: "Additional Info",
      type: "string",
    }),
  ],
});
