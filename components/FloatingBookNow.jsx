"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const FloatingBookNow = () => {
	useEffect(() => {
		(async function () {
			const cal = await getCalApi({
				namespace: "event-consultation",
			});
			cal("floatingButton", {
				calLink:
					"vedant-patil-0yfhvh/event-consultation",
				config: { layout: "month_view" },
				buttonText: "Book a Event",
				hideButtonIcon: false,
				buttonColor: "#1d0d2b",
				buttonTextColor: "#ffffff",
			});
			cal("ui", {
				cssVarsPerTheme: {
					light: { "cal-brand": "#000000" },
				},
				hideEventTypeDetails: false,
				layout: "month_view",
			});
		})();
	}, []);
};

export default FloatingBookNow;
