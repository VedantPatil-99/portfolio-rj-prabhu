import {
	AboutSection,
	AchievementsSection,
	ContactSection,
	ExperienceSection,
	HeroSection,
	ServicesSection,
	TestimonialsSection,
} from "@/components/sections";
import FloatingBookNow from "./FloatingBookNow";
import FeedbackSection from "./FeedbackSection";

async function PortfolioContent() {
	return (
		<>
			<FloatingBookNow />
			<HeroSection />
			<AboutSection />
			<TestimonialsSection />
			<ExperienceSection />
			<AchievementsSection />
			<ServicesSection />
			<ContactSection />
			<FeedbackSection />
		</>
	);
}

export default PortfolioContent;
