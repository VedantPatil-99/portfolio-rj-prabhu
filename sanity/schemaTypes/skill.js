import { defineField, defineType } from "sanity";

export default defineType({
	name: "skill",
	title: "Skills",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Skill Name",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "category",
			title: "Category",
			type: "string",
			options: {
				list: [
					{ title: "Radio Jockey", value: "rj" },
					{ title: "Emcee", value: "emcee" },
					{
						title: "Coaching",
						value: "coaching",
					},
					{ title: "Tools", value: "tools" },
				],
			},
		}),
	],
});
