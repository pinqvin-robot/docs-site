(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{433:function(e,t,o){"use strict";o.r(t);var r=o(15),a=Object(r.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"documentation-guidelines"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#documentation-guidelines","aria-hidden":"true"}},[e._v("#")]),e._v(" Documentation Guidelines")]),e._v(" "),o("p",[e._v("Documentation of Zowe™ comes in various forms depending on the subject being detailed. In general, consider how you can help end users and contributors through external documentation, in-product help, error messages, etc... and open an issue in "),o("a",{attrs:{href:"https://github.com/zowe/docs-site",target:"_blank",rel:"noopener noreferrer"}},[e._v("zowe/docs-site"),o("OutboundLink")],1),e._v(" if you need assistance.")]),e._v(" "),o("h2",{attrs:{id:"contributing-to-external-documentation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#contributing-to-external-documentation","aria-hidden":"true"}},[e._v("#")]),e._v(" Contributing to external documentation")]),e._v(" "),o("p",[e._v("The external documentation for the Zowe project, "),o("a",{attrs:{href:"https://docs.zowe.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zowe Docs"),o("OutboundLink")],1),e._v(", is completely open-source. See "),o("router-link",{attrs:{to:"/contribute/contributing.html"}},[e._v("How to contribute")]),e._v(" for more information about contributing to the documentation.")],1),e._v(" "),o("p",[e._v("Consider: Release Notes, Install/Config/User Guides, Developer Tutorials, etc...")]),e._v(" "),o("h2",{attrs:{id:"component-categories"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#component-categories","aria-hidden":"true"}},[e._v("#")]),e._v(" Component Categories")]),e._v(" "),o("p",[e._v("Provide the following documentation depending on the component that you contribute to:")]),e._v(" "),o("h3",{attrs:{id:"server-core"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#server-core","aria-hidden":"true"}},[e._v("#")]),e._v(" Server Core")]),e._v(" "),o("p",[e._v("Principles of operation and end-user guides (configuration, troubleshooting) should be documented on Zowe Docs site. Code documentation follows language-specific formats.")]),e._v(" "),o("h3",{attrs:{id:"server-security"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#server-security","aria-hidden":"true"}},[e._v("#")]),e._v(" Server Security")]),e._v(" "),o("p",[e._v("Principles of operation and end-user guides (configuration, troubleshooting) should be documented on Zowe Docs site. Code documentation follows language-specific formats.")]),e._v(" "),o("h3",{attrs:{id:"microservices"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#microservices","aria-hidden":"true"}},[e._v("#")]),e._v(" Microservices")]),e._v(" "),o("p",[e._v("Microservices implement a web API, and therefore must be documented for understanding and testing. These web APIs must be accompanied with documentation in the Swagger (https://swagger.io/) format. These documents must be Swagger 2.0, "),o("code",[e._v(".yaml")]),e._v(" extension files. Zowe Application Framework plug-ins that implement microservices should store these files within the "),o("code",[e._v("/doc/swagger")]),e._v(" folder.")]),e._v(" "),o("h3",{attrs:{id:"zowe-desktop-applications"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#zowe-desktop-applications","aria-hidden":"true"}},[e._v("#")]),e._v(" Zowe Desktop Applications")]),e._v(" "),o("p",[e._v("Zowe Desktop applications should include documentation that explains how to use them, such that this documentation can integrate with a Zowe Desktop documentation reader. This is not strictly API documentation, but rather user guides that can display within the Desktop GUI. The preferred documentation format is a "),o("code",[e._v(".md")]),e._v(" extension file that exists in the "),o("code",[e._v("/doc/guide")]),e._v(" folder of an App.")]),e._v(" "),o("h3",{attrs:{id:"web-framework"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#web-framework","aria-hidden":"true"}},[e._v("#")]),e._v(" Web Framework")]),e._v(" "),o("p",[e._v("Principles of operation and end-user guides (configuration, troubleshooting) should be documented on Zowe Docs site. Code documentation follows language-specific formats.")]),e._v(" "),o("h3",{attrs:{id:"cli-plugins"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cli-plugins","aria-hidden":"true"}},[e._v("#")]),e._v(" CLI Plugins")]),e._v(" "),o("p",[e._v("Provide a readme.md file for developers (overview, build, test) as well as end-user documentation for your plug-in on Zowe Docs site.")]),e._v(" "),o("p",[e._v("For more information, see the CLI "),o("a",{attrs:{href:"https://github.com/zowe/zowe-cli/blob/conformance/CONTRIBUTING.md#documentation-guidelines",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation contribution guidelines"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"core-cli-imperative-cli-framework"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#core-cli-imperative-cli-framework","aria-hidden":"true"}},[e._v("#")]),e._v(" Core CLI Imperative CLI Framework")]),e._v(" "),o("p",[e._v("Contributions that affect end users of the CLI should be documented on Zowe Docs site.")]),e._v(" "),o("p",[e._v("Contributions that affect the underlying Imperative CLI Framework should be documented in "),o("a",{attrs:{href:"https://github.com/zowe/imperative/wiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("the GitHub Wiki"),o("OutboundLink")],1),e._v(" for future developers using the framework.")]),e._v(" "),o("p",[e._v("Code documentation follows language-specific formats.")]),e._v(" "),o("h2",{attrs:{id:"programming-languages"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#programming-languages","aria-hidden":"true"}},[e._v("#")]),e._v(" Programming Languages")]),e._v(" "),o("p",[e._v("Each of the common languages in Zowe have code-documentation-generation tools, each with their own in-code comment style requirements to adhere to in order to generate readable API references. Objects and functions of interest should be commented in accordance to the language-specific tools to result in output that serves as the first point of documentation for APIs.")]),e._v(" "),o("h3",{attrs:{id:"typescript"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#typescript","aria-hidden":"true"}},[e._v("#")]),e._v(" Typescript")]),e._v(" "),o("p",[e._v("When writing TypeScript code, comment objects and functions in compliance with "),o("a",{attrs:{href:"http://usejsdoc.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSDoc"),o("OutboundLink")],1),e._v(". If you are writing in an area of the codebase that does not yet have a definition file for JSDoc, define a configuration file that can be used for future documentation of that code.")]),e._v(" "),o("h3",{attrs:{id:"java"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#java","aria-hidden":"true"}},[e._v("#")]),e._v(" Java")]),e._v(" "),o("p",[e._v("When writing TypeScript code, comment objects and functions in the Javadoc format.")]),e._v(" "),o("h3",{attrs:{id:"c"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#c","aria-hidden":"true"}},[e._v("#")]),e._v(" C")]),e._v(" "),o("p",[e._v("When writing C code, comment functions and structures in compliance with Doxygen.")])])},[],!1,null,null,null);t.default=a.exports}}]);