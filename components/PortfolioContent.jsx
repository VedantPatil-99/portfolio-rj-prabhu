import {
	AboutSection,
	AchievementsSection,
	ContactSection,
	EventsSection,
	ExperienceSection,
	HeroSection,
	ServicesSection,
	TestimonialsSection,
	FeedbackSection,
} from "@/components/sections";
import FloatingBookNow from "./FloatingBookNow";

async function PortfolioContent() {
	return (
		<>
			<FloatingBookNow />
			<HeroSection />
			<AboutSection />
			<EventsSection />
			<ExperienceSection />
			<AchievementsSection />
			<ServicesSection />
			<TestimonialsSection />
			<ContactSection />
			<FeedbackSection />
		</>
	);
}

export default PortfolioContent;
