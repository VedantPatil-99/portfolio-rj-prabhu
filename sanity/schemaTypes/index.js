import achievement from "./achievement";
import contact from "./contact";
import experience from "./experience";
import navigation from "./navigation";
import profile from "./profile";
import service from "./service";
import skill from "./skill";
import siteSettings from "./siteSettings";
import testimonial from "./testimonial";
import event from "./event";

export const schema = {
	types: [
		profile,
		experience,
		skill,
		testimonial,
		achievement,
		service,
		contact,
		siteSettings,
		navigation,
		event,
	],
};
