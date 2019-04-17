(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{208:function(e,t,a){"use strict";a.r(t);var i=a(0),r=Object(i.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("p",[e._v("Zowe CLI is updated continuously. You can update Zowe CLI to a more recent version using online registry method or the local package method. However, you can only update Zowe CLI using the method that you used to install Zowe CLI.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),a("p",[e._v("Issue the following command:")]),e._v(" "),e._m(3),e._m(4),e._v(" "),a("p",[e._v("Issue the following command:")]),e._v(" "),e._m(5),e._m(6),e._v(" "),a("p",[e._v("You can update Zowe CLI to the latest version from the online registry on Windows, Mac, and Linux computers.")]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" The following steps assume that you set the "),a("code",[e._v("npm")]),e._v(" registries for the "),a("code",[e._v("@brightside")]),e._v(" scopes as described in "),a("router-link",{attrs:{to:"./cli-installcli.html#installing-zowe-cli-from-an-online-registry"}},[e._v("Installing Zowe CLI from an online registry")]),e._v(".")],1),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),a("p",[e._v("Optionally, you can update Zowe CLI (or revert) to a known version. The following example illustrates the syntax to update Zowe CLI to version 3.3.1:")]),e._v(" "),e._m(10),e._m(11),e._v(" "),a("p",[e._v("To update Zowe CLI from an offline ("),a("code",[e._v(".tgz")]),e._v("), local package, uninstall your current package then reinstall from a new package using the Install CA Brightside from a Local Package instructions. For more information, see "),a("router-link",{attrs:{to:"./uninstall.html#uninstalling-zowe-cli-from-the-desktop"}},[e._v("Uninstalling Zowe CLI from the desktop")]),e._v(" and "),a("router-link",{attrs:{to:"./cli-installcli.html#installing-zowe-cli-from-a-local-package"}},[e._v("Installing Zowe CLI from a local package")]),e._v(".")],1),e._v(" "),e._m(12)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"updating-zowe-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#updating-zowe-cli","aria-hidden":"true"}},[this._v("#")]),this._v(" Updating Zowe CLI")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"#optional-identify-the-currently-installed-version-of-zowe-cli"}},[e._v("(Optional) Identify the currently installed version of Zowe CLI")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#optional-identify-the-currently-installed-versions-of-zowe-cli-plug-ins"}},[e._v("(Optional) Identify the currently installed versions of Zowe CLI plug-ins")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#update-zowe-cli-from-the-online-registry"}},[e._v("Update Zowe CLI from the online registry")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#update-or-revert-zowe-cli-to-a-specific-version"}},[e._v("Update or revert Zowe CLI to a specific version")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#update-zowe-cli-from-a-local-package"}},[e._v("Update Zowe CLI from a local package")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"optional-identify-the-currently-installed-version-of-zowe-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#optional-identify-the-currently-installed-version-of-zowe-cli","aria-hidden":"true"}},[this._v("#")]),this._v(" (Optional) Identify the currently installed version of Zowe CLI")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("zowe -V \n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"optional-identify-the-currently-installed-versions-of-zowe-cli-plug-ins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#optional-identify-the-currently-installed-versions-of-zowe-cli-plug-ins","aria-hidden":"true"}},[this._v("#")]),this._v(" (Optional) Identify the currently installed versions of Zowe CLI plug-ins")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("zowe plugins list\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"update-zowe-cli-from-the-online-registry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-zowe-cli-from-the-online-registry","aria-hidden":"true"}},[this._v("#")]),this._v(" Update Zowe CLI from the online registry")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Follow these steps:")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ol",[a("li",[a("p",[e._v("Issue the following command to update Zowe CLI to the most recent "),a("code",[e._v("@lts-incremental")]),e._v(" version:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm install -g @brightside/core@lts-incremental\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Reinstall the plug-ins and update existing plug-ins using the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("zowe plugins install @brightside/cics@lts-incremental @brightside/db2@lts-incremental\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Recreate any user profiles that you created before you updated to the latest version of Zowe CLI.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"update-or-revert-zowe-cli-to-a-specific-version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-or-revert-zowe-cli-to-a-specific-version","aria-hidden":"true"}},[this._v("#")]),this._v(" Update or revert Zowe CLI to a specific version")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("npm install -g @brightside/core@3.3.1\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"update-zowe-cli-from-a-local-package"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-zowe-cli-from-a-local-package","aria-hidden":"true"}},[this._v("#")]),this._v(" Update Zowe CLI from a local package")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Important!")]),this._v(" Recreate any user profiles that you created before the update.")])}],!1,null,null,null);r.options.__file="cli-updatingcli.md";t.default=r.exports}}]);