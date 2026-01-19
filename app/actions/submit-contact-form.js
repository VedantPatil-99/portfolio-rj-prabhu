"use server";

import { serverClient } from "@/sanity/lib/serverClient";

export async function submitContactForm(
	formData,
) {
	try {
		const name = formData.get("name");
		const email = formData.get("email");
		const subject = formData.get("subject");
		const message = formData.get("message");

		// Validate the required fields
		if (!name || !email || !message) {
			return {
				success: false,
				error:
					"Please fill in all required fields",
			};
		}

		// Create the document in Sanity
		const result = await serverClient.create({
			_type: "contact",
			name,
			email,
			subject,
			message,
			submittedAt: new Date().toISOString(),
			status: "new",
		});

		return {
			success: true,
			data: result,
		};
	} catch (error) {
		console.error(
			"Error submitting contact form:",
			error,
		);
		return {
			success: false,
			error:
				"Failed to submit the form. Please try again later.",
		};
	}
}
