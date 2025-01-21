import { Rule } from "sanity";

export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      {
        name: 'customerId',
        title: 'Customer',
        type: 'reference',
        to: [{ type: 'customer' }],
        validation: (Rule : Rule) => Rule.required(),
      },
      {
        name: 'products',
        title: 'Products',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'productId',
                title: 'Product',
                type: 'reference',
                to: [{ type: 'product' }],
                validation: (Rule : Rule) => Rule.required(),
              },
              {
                name: 'quantity',
                title: 'Quantity',
                type: 'number',
                validation: (Rule : Rule) => Rule.required().min(1),
              },
            ],
          },
        ],
      },
      {
        name: 'totalAmount',
        title: 'Total Amount',
        type: 'number',
        validation: (Rule : Rule) => Rule.required().min(0),
      },
      {
        name: 'status',
        title: 'Status',
        type: 'string',
        options: {
          list: [
            { title: 'Pending', value: 'Pending' },
            { title: 'Shipped', value: 'Shipped' },
            { title: 'Completed', value: 'Completed' },
          ],
        },
        validation: (Rule : Rule) => Rule.required(),
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
        initialValue: () => new Date().toISOString(),
      },
    ],
  };
  