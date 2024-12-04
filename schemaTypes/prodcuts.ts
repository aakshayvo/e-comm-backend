import {defineField, defineType} from 'sanity'

//old schema

// export default defineType({
//   name: 'product',
//   title: 'Product',
//   type: 'document',
//   fields: [
//     // Title of the product
//     defineField({
//       name: 'title',
//       title: 'Title',
//       type: 'string',
//       validation: (Rule) => Rule.required().min(3).max(100),
//     }),

//     // Description of the product
//     defineField({
//       name: 'description',
//       title: 'Description',
//       type: 'text',
//       validation: (Rule) => Rule.required().min(10).max(500),
//     }),

//     // Image URL for the product
//     defineField({
//       name: 'imageUrl',
//       title: 'Image URL',
//       type: 'url',
//       validation: (Rule) => Rule.required().warning('Should be a valid image URL'),
//     }),

//     // Slug generated from the title
//     defineField({
//       name: 'slug',
//       title: 'Slug',
//       type: 'slug',
//       options: {
//         source: 'title', // Slug is generated from the title
//         maxLength: 96,
//       },
//       validation: (Rule) => Rule.required(),
//     }),
//   ],
// })

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    // Title of the product
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(100),
    }),

    // Description of the product
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required().min(10).max(500),
    }),

    // Image URL for the product
    defineField({
      name: 'imageUrl',
      title: 'Image URL',
      type: 'url',
      validation: (Rule) => Rule.required().warning('Should be a valid image URL'),
    }),

    // Slug generated from the title
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    // Price of the product
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().min(0).warning('Price should be a positive number'),
    }),

    // Discounted price of the product
    defineField({
      name: 'discountedPrice',
      title: 'Discounted Price',
      type: 'number',
      validation: (Rule) => Rule.required().min(0).warning('Price should be a positive number'),
    }),

    // Is the product new
    defineField({
      name: 'isNew',
      title: 'Is New',
      type: 'boolean',
      initialValue: false,
    }),

    // Category of the product
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Electronics', value: 'electronics'},
          {title: 'Clothing', value: 'clothing'},
          {title: 'Accessories', value: 'accessories'},
          {title: 'Home & Kitchen', value: 'home-kitchen'},
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),

    // Product reviews (rating only)
    defineField({
      name: 'reviews',
      title: 'Reviews',
      type: 'number',
      validation: (Rule) =>
        Rule.required().min(1).max(5).warning('Price should be a positive number'),
    }),
  ],
})
