import Image from "next/image";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import { Calendar, MapPin } from "lucide-react";

const EVENTS_QUERY = defineQuery(`
  *[_type == "event"] | order(date desc) {
    _id,
    title,
    date,
    location,
    description,
    images
  }
`);

export async function EventsSection() {
	const { data: events } = await sanityFetch({
		query: EVENTS_QUERY,
	});

	if (!events || events.length === 0) return null;

	return (
		<section
			id="events"
			className="py-8 md:py-20 bg-background/50">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-5xl font-bold mb-4">
						Recent{" "}
						<span className="text-primary">
							Events
						</span>
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						Highlights from my recent shows,
						corporate events, and workshops.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{events.map((event) => (
						<div
							key={event._id}
							className="group bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
							{/* Image Carousel (Horizontal Scroll) */}
							<div className="relative aspect-4/3 w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide flex">
								{event.images?.map(
									(img, index) => (
										<div
											key={index}
											className="relative min-w-full h-full snap-center">
											<Image
												src={urlFor(img)
													.width(600)
													.height(450)
													.url()}
												alt={`${event.title} image ${index + 1}`}
												fill
												className="object-cover"
											/>
										</div>
									),
								)}

								{/* Visual Hint for Multiple Images */}
								{event.images?.length > 1 && (
									<div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
										1/{event.images.length}
									</div>
								)}
							</div>

							{/* Event Content */}
							<div className="p-6 space-y-3">
								<div className="flex items-center justify-between text-xs text-muted-foreground font-medium uppercase tracking-wider">
									<div className="flex items-center gap-1.5">
										<Calendar className="w-3.5 h-3.5" />
										{new Date(
											event.date,
										).toLocaleDateString(
											undefined,
											{
												month: "short",
												day: "numeric",
												year: "numeric",
											},
										)}
									</div>
									{event.location && (
										<div className="flex items-center gap-1.5">
											<MapPin className="w-3.5 h-3.5" />
											{event.location}
										</div>
									)}
								</div>

								<h3 className="text-xl font-bold group-hover:text-primary transition-colors">
									{event.title}
								</h3>

								{event.description && (
									<p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
										{event.description}
									</p>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
