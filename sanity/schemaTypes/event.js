import { defineField, defineType } from "sanity";

export default defineType({
	name: "event",
	title: "Events",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Event Title",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "date",
			title: "Event Date",
			type: "datetime",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "location",
			title: "Location",
			type: "string",
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "text",
			rows: 3,
		}),
		defineField({
			name: "images",
			title: "Event Images",
			type: "array",
			of: [
				{
					type: "image",
					options: { hotspot: true },
				},
			],
			options: {
				layout: "grid",
			},
			validation: (Rule) =>
				Rule.required().min(1),
		}),
	],
	orderings: [
		{
			title: "Date, Newest First",
			name: "dateDesc",
			by: [{ field: "date", direction: "desc" }],
		},
	],
	preview: {
		select: {
			title: "title",
			subtitle: "date",
			media: "images.0",
		},
	},
});
