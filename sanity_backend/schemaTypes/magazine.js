import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'magazine',
  title: 'Magazine',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'issuuLink',
      title: 'Issuu Link',
      type: 'url',
    }),
    defineField({
      name: 'linkedArticle',
      title: 'Linked Article',
      type: 'array',
      of: [{type: 'reference', to: {type: 'post'}}],
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),

    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
    }),
  ],
})
