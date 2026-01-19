"use client";

import Image from "next/image";

export function ProfileImage({
	imageUrl,
	firstName,
	lastName,
}) {
	return (
		<div className="relative w-full max-w-125 mx-auto aspect-square md:aspect-4/5 lg:aspect-square rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl group">
			<Image
				src={imageUrl}
				alt={`${firstName} ${lastName}`}
				fill
				className="object-cover transition-transform duration-500 group-hover:scale-105"
				priority
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
			/>

			{/* Optional: A subtle gradient overlay at the bottom for better text contrast if needed later */}
			<div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
		</div>
	);
}
