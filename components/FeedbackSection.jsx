import React from "react";

const FeedbackSection = () => {
	return (
		<section
			id="feedback"
			className="py-20 bg-background">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Event Feedback
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						Were you at one of my recent events?
						I&apos;d love to hear your thoughts
						and energy! Leave your feedback below.
					</p>
				</div>

				{/* Responsive Iframe Container */}
				<div className="w-full max-w-4xl mx-auto overflow-hidden rounded-xl border border-border shadow-lg">
					<iframe
						src="https://app.sli.do/event/4im5wKWByPfqEos8aRceQX"
						height="100%"
						width="100%"
						frameBorder="0"
						style={{ minHeight: "600px" }}
						allow="clipboard-write"
						title="Slido Feedback"
						className="w-full"></iframe>
				</div>
			</div>
		</section>
	);
};

export default FeedbackSection;
