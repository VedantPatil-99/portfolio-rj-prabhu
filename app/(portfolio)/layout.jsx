import { SanityLive } from "@/sanity/lib/live";
import {
	Geist,
	Geist_Mono,
} from "next/font/google";
import { draftMode } from "next/headers";
import "../globals.css";
import { VisualEditing } from "next-sanity/visual-editing";
import { DisableDraftMode } from "@/components/DisableDraftMode";
import { ThemeProvider } from "@/components/ThemeProvider";
import { FloatingDock } from "@/components/FloatingDock";
import { ModeToggle } from "@/components/DarkModeToggle";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title:
		"RJ Prabhu — Team Building Coach & Emcee",
	description:
		"High-energy team building, corporate games, college fest engagement and community programs by RJ Prabhu.",
};

export default async function RootLayout({
	children,
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<FloatingDock />
					{/* Mode Toggle - Desktop: bottom right next to AI chat, Mobile: top right next to burger menu */}
					<div className="fixed md:right-24 top-5 right-18 md:top-8 md:left-auto z-20">
						<div className="w-10 h-10 md:w-12 md:h-12">
							<ModeToggle />
						</div>
					</div>
					{/* Live content API */}
					<SanityLive />

					{(await draftMode()).isEnabled && (
						<>
							<VisualEditing />
							<DisableDraftMode />
						</>
					)}
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
