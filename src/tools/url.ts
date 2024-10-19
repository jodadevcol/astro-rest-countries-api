// console.log(searchParams.has("topic")); // true
// console.log(searchParams.has("topic", "fish")); // false
// console.log(searchParams.get("topic") === "api"); // true
// console.log(searchParams.getAll("topic")); // ["api"]
// console.log(searchParams.get("foo") === null); // true
// console.log(searchParams.append("topic", "webdev"));
// console.log(searchParams.toString()); // "q=URLUtils.searchParams&topic=api&topic=webdev"
// console.log(searchParams.set("topic", "More webdev"));
// console.log(searchParams.toString()); // "q=URLUtils.searchParams&topic=More+webdev"
// console.log(searchParams.delete("topic"));
// console.log(searchParams.toString()); // "q=URLUtils.searchParams"

function updateURLParameter(params: URLSearchParams) {
	window.history.replaceState(null, "", `?${params.toString()}`)
}

function setParamsURL({
	params,
	values,
}: {
	params: URLSearchParams
	values: { [key: string]: string }
}) {
	for (const key in values) {
		params.set(key, values[key])
	}

	updateURLParameter(params)
}

export { setParamsURL }
