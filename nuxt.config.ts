// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: {
				lang: "en"
			},
			title: "leonides.dev",
			meta: [
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1"
				},
				{
					charset: "utf-8"
				},
				{
					hid: "description",
					name: "description",
					content:
						"Howdy! My name is Michael, and I build stuff for the web. Here on my website you can contact me and view my resume."
				},
				{
					hid: "og:site_name",
					name: "og:site_name",
					content: "leonides.dev"
				},
				{
					hid: "og:type",
					name: "og:type",
					content: "website"
				},
				{
					hid: "og:image",
					name: "og:image",
					content: "https://leonides.dev/assets/images/avi.jpeg"
				}
			],
			link: [
				{
					rel: "stylesheet",
					href: "assets/styles/css/all.min.css"
				}
			]
		}
	},
	css: ["~/assets/styles/global.scss"],
	modules: []
});
