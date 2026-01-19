export const getThemeConfig = (theme) => ({
	color: {
		grayscale: {
			hue: 220,
			tint: 6,
			shade: theme === "dark" ? -1 : -4,
		},
		accent: {
			primary:
				theme === "dark" ? "#f1f5f9" : "#0f172a",
			level: 1,
		},
	},
	radius: "round",
	// Add other theme options here
	// chatkit.studio/playground to explore config options
});
