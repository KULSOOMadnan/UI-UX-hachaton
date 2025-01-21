import { Rule } from "sanity";

export default {
  name: "customer",
  title: "Customer",
  type: "document",
  fields: [
    {
      name: "fullName",
      title: "Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required().min(3).max(50),
    },
    {
      name: "email",
      title: "Email",
      type: "email",
      validation: (Rule: Rule) => Rule.required().email(),
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
      validation: (Rule: Rule) => Rule.required().min(10).max(15),
    },
    {
      name: "address",
      title: "Address",
      type: "object",
      fields: [
        { name: "street", title: "Street", type: "string" },
        { name: "city", title: "City", type: "string" },
        { name: "state", title: "State", type: "string" },
        { name: "zip", title: "Zip Code", type: "string" },
      ],
    },
  ],
};
