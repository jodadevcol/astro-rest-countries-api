export function hasDarkMode() {
	return window.localStorage.getItem("__DARK_MODE__") === "true" ? true : false
}

export function setDarkMode({ isDark }: { isDark: boolean }) {
	if (!isDark) {
		document.documentElement.classList.remove("dark")
		window.localStorage.setItem("__DARK_MODE__", "false")
	} else {
		document.documentElement.classList.add("dark")
		window.localStorage.setItem("__DARK_MODE__", "true")
	}
}
