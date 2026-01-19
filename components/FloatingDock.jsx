import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import { FloatingDockClient } from "./FloatingDockClient";

const NAVIGATION_QUERY =
	defineQuery(`*[_type == "navigation"] | order(order asc){
  title,
  href,
  icon,
  isExternal
}`);

export async function FloatingDock() {
	const { data: navItems } = await sanityFetch({
		query: NAVIGATION_QUERY,
	});

	// Pass Sanity items to client. If you want to add manual items like Feedback here,
	// you can append them to the array before passing it.
	return (
		<FloatingDockClient
			navItems={navItems || []}
		/>
	);
}
