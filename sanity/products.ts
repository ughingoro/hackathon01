import { defineField, defineType } from "sanity";

export default defineType({
    name: "products",
    type: "document",
    title: "products",
    fields: [
        defineField({
            name: "image",
            type: "image",
            title: "Image",
        }),
        defineField({
            name: "title",
            type: "string",
            title: "Title",

        }),
        defineField({
            name: "descritpion",
            type: "string",
            title: "Description",
        }),
        defineField({
            name: "price",
            type: "number",
            title: "Price",
        }),
        defineField({
            name: "category",
            type: "string",
            title: "Category",
            options: {
                list: [
                    { title: "Men", value: "men" },
                    { title: "Women", value: "women" },
                    { title: "Kids", value: "kids" },
                ]
            }
        }),

    ],
})