import {
	Geist,
	Geist_Mono,
} from "next/font/google";

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
		"Studio: RJ Prabhu — Team Building Coach & Emcee",
	description: "Manage Content of portfolio.",
};

function Layout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}

export default Layout;
