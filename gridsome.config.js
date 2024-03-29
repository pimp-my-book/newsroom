// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
	siteName: "PMB Newsroom",
	siteDescription: "Pimp My Book`s blog where you can find all our updates, announcements and blog posts.",
	icon: "src/favicon.png",
	plugins: [
		{
			use: "gridsome-plugin-tailwindcss",
			options: {
				tailwindConfig: "./tailwind.js"
			}
      
		},
		{
			use: "@gridsome/source-filesystem",
			options: {
				path: "content/**/*.md",
				route: "/content/:slug/",
				typeName: "Content"
			}
		},
		{
			use: "gridsome-plugin-netlify-cms",
			options:{
				publicPath:"/admin"
			}
		}
  
	],
	chainWebpack: config => {
		const svgRule = config.module.rule("svg")
		svgRule.uses.clear()
		svgRule
			.use("vue-svg-loader")
			.loader("vue-svg-loader")
	},

	transformers: {
		remark:{
			externalLinksTarget: "_blank",
			externalLinksRel: ["nofollow", "noopener", "noreferrer"],
			anchorClassName: "icon icon-link"
		}
	}
}
