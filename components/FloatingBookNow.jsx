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
				calLink: "rj-prabhu/event-consultation",
				config: {
					layout: "month_view",
					theme: "auto",
				},
				buttonText: "Book an event",
				buttonColor: "#0d001b",
				buttonTextColor: "#ffffff",
			});
			cal("ui", {
				hideEventTypeDetails: false,
				layout: "month_view",
			});
		})();
	}, []);
};

export default FloatingBookNow;
