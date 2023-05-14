"use client";

import { useState,useEffect } from "react";

export default function UseDarkSide() {
	const [theme, setTheme] = useState(typeof window !== 'undefined' ? localStorage.theme : null);
	const colorTheme = theme === "dark" ? "light" : "dark";
	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove(colorTheme);
		root.classList.add(theme);
		localStorage.setItem('theme', theme);
	}, [theme, colorTheme]);

	return [colorTheme, setTheme];
}
