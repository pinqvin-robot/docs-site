(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{373:function(e,t,s){"use strict";s.r(t);var o=s(3),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"creating-and-configuring-the-zowe-instance-directory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-and-configuring-the-zowe-instance-directory"}},[e._v("#")]),e._v(" Creating and configuring the Zowe instance directory")]),e._v(" "),s("p",[e._v("The Zowe instance directory or "),s("code",[e._v("<INSTANCE_DIRECTORY>")]),e._v(" contains configuration data required to launch a Zowe runtime.  This includes port numbers, location of dependent runtimes such as Java, Node, z/OSMF, as well as log files. When Zowe is started, configuration data will be read from files in the instance directory and logs will be written to files in the instance directory.")]),e._v(" "),s("p",[e._v("The instance directory ``<INSTANCE_DIRECTORY>/bin` contains a number of key scripts")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("zowe-start.sh")]),e._v(" is used to start the Zowe runtime by launching the "),s("code",[e._v("ZWESVSTC")]),e._v(" started task.")]),e._v(" "),s("li",[s("code",[e._v("zowe-stop.sh")]),e._v(" is used to stop the Zowe runtime by terminating the "),s("code",[e._v("ZWESVSTC")]),e._v(" started task.")]),e._v(" "),s("li",[s("code",[e._v("zowe-support.sh")]),e._v(" can be used to capture diagnostics around the Zowe runtime for troubleshooting and off-line problem determination, see "),s("router-link",{attrs:{to:"/troubleshoot/troubleshoot-diagnostics.html"}},[e._v("Capturing diagnostics to assist problem determination")]),e._v(".")],1)]),e._v(" "),s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),s("p",[e._v("Before creating an instance directory, ensure that you have created a keystore directory that contains the Zowe certificate. For more information about how to create a keystore directory, see "),s("router-link",{attrs:{to:"/user-guide/configure-certificates.html"}},[e._v("Creating Zowe certificates")]),e._v(".  Also, ensure that you have already configured the z/OS environment. For information about how to configure the z/OS environment, see "),s("router-link",{attrs:{to:"/user-guide/configure-zos-system.html"}},[e._v("Configuring the z/OS system for Zowe")]),e._v(".")],1),e._v(" "),s("h2",{attrs:{id:"creating-an-instance-directory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-instance-directory"}},[e._v("#")]),e._v(" Creating an instance directory")]),e._v(" "),s("p",[e._v("To create an instance directory, use the "),s("code",[e._v("zowe-configure-instance.sh")]),e._v(" script.")]),e._v(" "),s("p",[e._v("Navigate to the Zowe runtime directory "),s("code",[e._v("<ZOWE_ROOT_DIR>")]),e._v(" and execute the following commands:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("ROOT_DIR"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/bin/zowe-configure-instance.sh -c "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("PATH_TO_INSTANCE_DIR"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),s("p",[e._v("Multiple instance directories can be created and used to launch independent Zowe runtimes from the same Zowe runtime directory.")]),e._v(" "),s("p",[e._v("The Zowe instance directory contains a file "),s("code",[e._v("instance.env")]),e._v(" that stores configuration data. The data is read each time Zowe is started.")]),e._v(" "),s("p",[e._v("The purpose of the instance directory is to hold information in the z/OS File System (zFS) that is created (such as log files) or modified (such as preferences) or configured (such as port numbers) away from the zFS runtime directory for Zowe.  This allows the runtime directory to be read only and to be replaced when a new Zowe release is installed, with customizations being preserved in the instance directory.")]),e._v(" "),s("p",[e._v("If you have an instance directory that is created from a previous release of Zowe 1.8 or later and are installing a newer release of Zowe, then you should run "),s("code",[e._v("zowe-configure-instance.sh -c <PATH_TO_INSTANCE_DIR>")]),e._v(" pointing to the existing instance directory to have it updated with any new values.  The release documentation for each new release will specify when this is required, and the file "),s("code",[e._v("manifest.json")]),e._v(" within each instance directory contains information for which Zowe release it was created from.")]),e._v(" "),s("p",[e._v("In order to allow the "),s("code",[e._v("ZWESVSTC")]),e._v(" started task to have permission to acces the contents of the "),s("code",[e._v("<INSTANCE_DIR>")]),e._v(" the "),s("code",[e._v("zowe-configure-instance.sh")]),e._v(" script sets the group ownership of the top level directory and its child to be "),s("code",[e._v("ZWEADMIN")]),e._v(".  If a different group is used for the "),s("code",[e._v("ZWESVSTC")]),e._v(" started task you can specify this with the optional "),s("code",[e._v("-g")]),e._v(" argument, for example.")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("ROOT_DIR"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/bin/zowe-configure-instance.sh -c "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("PATH_TO_INSTANCE_DIR"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -g "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("GROUP"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),s("h2",{attrs:{id:"reviewing-the-instance-env-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reviewing-the-instance-env-file"}},[e._v("#")]),e._v(" Reviewing the "),s("code",[e._v("instance.env")]),e._v(" file")]),e._v(" "),s("p",[e._v("To operate Zowe, a number of zFS folders need to be located for prerequisites on the platform. Default values are selected when you run "),s("code",[e._v("zowe-configure-instance.sh")]),e._v(". You might want to modify the values.")]),e._v(" "),s("h3",{attrs:{id:"component-groups"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#component-groups"}},[e._v("#")]),e._v(" Component groups")]),e._v(" "),s("p",[s("code",[e._v("LAUNCH_COMPONENT_GROUPS")]),e._v(": This is a comma-separated list of which z/OS microservice groups are started when Zowe launches.")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("GATEWAY")]),e._v(" will start the API mediation layer that includes the API catalog, the API gateway, and the API discovery service.  These three address spaces are Apache Tomcat servers and uses the version of Java on z/OS as determined by the "),s("code",[e._v("JAVA_HOME")]),e._v(" value.")]),e._v(" "),s("li",[s("code",[e._v("DESKTOP")]),e._v(" will start the Zowe desktop that is the browser GUI for hosting Zowe applications such as the 3270 Terminal emulator or the File Explorer.  The Zowe desktop is a node application and uses the version specified by the "),s("code",[e._v("NODE_HOME")]),e._v(" value.")]),e._v(" "),s("li",[e._v("Vendor products may extend Zowe with their own component group that they want to be lifecycled by the Zowe "),s("code",[e._v("ZWESVSTC")]),e._v(" started task and run as a Zowe sub address space.  To do this, specify the fully qualified directory provided by the vendor that contains their Zowe extension scripts.  This directory will contain a "),s("code",[e._v("start.sh")]),e._v(" script "),s("strong",[e._v("(required)")]),e._v(" that is called when the "),s("code",[e._v("ZWESVSTC")]),e._v(" started task is launched, a "),s("code",[e._v("configure.sh")]),e._v(" script "),s("strong",[e._v("(optional)")]),e._v(" that performs any configuration steps such as adding iFrame plug-ins to the Zowe desktop, and a "),s("code",[e._v("validate.sh")]),e._v(" script "),s("strong",[e._v("(optional)")]),e._v(" that can be used to perform any pre-launch validation such as checking system prerequisites. For more information about how a vendor can extend Zowe with a sub address space, see the "),s("router-link",{attrs:{to:"/extend/extend-apiml/onboard-overview.html"}},[e._v("Extending")]),e._v(" section.")],1)]),e._v(" "),s("h3",{attrs:{id:"component-prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#component-prerequisites"}},[e._v("#")]),e._v(" Component prerequisites")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("JAVA_HOME")]),e._v(":  The path where 64-bit Java 8 or later is installed.  Only needs to be specified if not already set as a shell variable.  Defaults to "),s("code",[e._v("/usr/lpp/java/J8.0_64")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("NODE_HOME")]),e._v(":  The path to the Node.js runtime.  Only needs to be specified if not already set as a shell variable.")]),e._v(" "),s("li",[s("code",[e._v("ROOT_DIR")]),e._v(": The directory where the Zowe runtime is located.  Defaults to the location of where "),s("code",[e._v("zowe-configure-instance")]),e._v(" was executed.")]),e._v(" "),s("li",[s("code",[e._v("ZOSMF_PORT")]),e._v(": The port used by z/OSMF REST services.  Defaults to value determined through running "),s("code",[e._v("netstat")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("ZOSMF_HOST")]),e._v(": The host name of the z/OSMF REST API services.")]),e._v(" "),s("li",[s("code",[e._v("ZOWE_EXPLORER_HOST")]),e._v(": The hostname of where the Explorer servers are launched from.  Defaults to running "),s("code",[e._v("hostname -c")]),e._v(".  Ensure that this host name is externally accessible from clients who want to use Zowe as well as internally accessible from z/OS itself.")]),e._v(" "),s("li",[s("code",[e._v("ZOWE_IP_ADDRESS")]),e._v(":  The IP address of your z/OS system which must be externally accessible to clients who want to use Zowe.  This is important to verify for IBM Z Development & Test Environment and cloud systems, where the default that is determined through running "),s("code",[e._v("ping")]),e._v(" and "),s("code",[e._v("dig")]),e._v(" on z/OS return a different IP address from the external address.")]),e._v(" "),s("li",[s("code",[e._v("APIML_ENABLE_SSO")]),e._v(": Define whether single sign-on should be enabled. Use a value of "),s("code",[e._v("true")]),e._v(" or "),s("code",[e._v("false")]),e._v(". Defaults to "),s("code",[e._v("false")]),e._v(".")])]),e._v(" "),s("h3",{attrs:{id:"keystore-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keystore-configuration"}},[e._v("#")]),e._v(" Keystore configuration")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("KEYSTORE_DIRECTORY")]),e._v(": This is a path to a zFS directory containing the certificate that Zowe uses to identify itself and encrypt https:// traffic to its clients accessing REST APIs or web pages.  This also contains a truststore used to hold the public keys of any z/OS services that Zowe is communicating to, such as z/OSMF.  The keystore directory must be created the first time Zowe is installed onto a z/OS system and it can be shared between different Zowe runtimes.   For more information about how to create a keystore directory, see "),s("router-link",{attrs:{to:"/user-guide/configure-certificates.html"}},[e._v("Configuring Zowe certificates")]),e._v(".")],1)]),e._v(" "),s("h3",{attrs:{id:"address-space-names"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#address-space-names"}},[e._v("#")]),e._v(" Address space names")]),e._v(" "),s("p",[e._v("Individual address spaces for different Zowe instances and their subcomponents can be distinguished from each other in RMF records or SDSF views by specifying how they are named.  Address space names are 8 characters long and made up of a prefix "),s("code",[e._v("ZOWE_PREFIX")]),e._v(", instance "),s("code",[e._v("ZOWE_INSTANCE")]),e._v(" followed by an identifier for each subcomponent.")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("ZOWE_PREFIX")]),e._v(": This defines a prefix for Zowe address space STC names.  Defaults to "),s("code",[e._v("ZWE")]),e._v(".")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("ZOWE_INSTANCE")]),e._v(": This is appended to the "),s("code",[e._v("ZOWE_PREFIX")]),e._v(" to build up the address space name.  Defaults to "),s("code",[e._v("1")])])]),e._v(" "),s("li",[s("p",[e._v("A subcomponent will be one of the following values:")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("AC")]),e._v(" - API ML Catalog")]),e._v(" "),s("li",[s("strong",[e._v("AD")]),e._v(" - API ML Discovery Service")]),e._v(" "),s("li",[s("strong",[e._v("AG")]),e._v(" - API ML Gateway")]),e._v(" "),s("li",[s("strong",[e._v("DS")]),e._v(" - App Server")]),e._v(" "),s("li",[s("strong",[e._v("EF")]),e._v(" - Explorer API Data Sets")]),e._v(" "),s("li",[s("strong",[e._v("EJ")]),e._v(" - Explorer API Jobs")]),e._v(" "),s("li",[s("strong",[e._v("SZ")]),e._v(" - ZSS Server")]),e._v(" "),s("li",[s("strong",[e._v("UD")]),e._v(" - Explorer UI Data Sets")]),e._v(" "),s("li",[s("strong",[e._v("UJ")]),e._v(" - Explorer UI Jobs")]),e._v(" "),s("li",[s("strong",[e._v("UU")]),e._v(" - Explorer UI USS")])])])]),e._v(" "),s("p",[e._v("The STC name of the main started task is "),s("code",[e._v("ZOWE_PREFIX")]),e._v("+"),s("code",[e._v("ZOWE_INSTANCE")]),e._v("+"),s("code",[e._v("SV")]),e._v(".")]),e._v(" "),s("p",[s("strong",[e._v("Example:")])]),e._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[e._v("ZOWE_PREFIX=ZWE\nZOWE_INSTANCE=X\n")])])]),s("p",[e._v("the first instance of Zowe API ML Gateway identifier will be as follows:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ZWEXAG\n")])])]),s("p",[s("strong",[e._v("Note:")]),e._v(" If the address space names are not assigned correctly for each subcomponents, check that the step "),s("router-link",{attrs:{to:"/user-guide/configure-zos-system.html#configure-address-space-job-naming"}},[e._v("Configure address space job naming")]),e._v(" has been performed correctly for the z/OS user ID "),s("code",[e._v("ZWESVUSR")]),e._v(".")],1),e._v(" "),s("h3",{attrs:{id:"ports"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ports"}},[e._v("#")]),e._v(" Ports")]),e._v(" "),s("p",[e._v("When Zowe starts, a number of its microservices need to be given port numbers that they can use to allow access to their services.  The two most important port numbers are the "),s("code",[e._v("GATEWAY_PORT")]),e._v(" which is for access to the API gateway through which REST APIs can be viewed and accessed, and "),s("code",[e._v("ZOWE_ZLUX_SERVER_HTTPS_PORT")]),e._v(" which is used to deliver content to client web browsers logging in to the Zowe desktop.  All of the other ports are not typically used by clients and used for intra-service communication by Zowe.")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("CATALOG_PORT")]),e._v(": The port the API catalog service will use.")]),e._v(" "),s("li",[s("code",[e._v("DISCOVERY_PORT")]),e._v(": The port the discovery service will use.")]),e._v(" "),s("li",[s("code",[e._v("GATEWAY_PORT")]),e._v(": The port the API gateway service will use.  This port is used by REST API clients to access z/OS services through the API mediation layer, so should be accessible to these clients.  This is also the port used to log on to the API catalog web page through a browser.")]),e._v(" "),s("li",[s("code",[e._v("JOBS_API_PORT")]),e._v(": The port the jobs API service will use.")]),e._v(" "),s("li",[s("code",[e._v("FILES_API_PORT")]),e._v(": The port the files API service will use.")]),e._v(" "),s("li",[s("code",[e._v("JES_EXPLORER_UI_PORT")]),e._v(": The port the jes-explorer UI service will use.")]),e._v(" "),s("li",[s("code",[e._v("MVS_EXPLORER_UI_PORT")]),e._v(": The port the mvs-explorer UI service will use.")]),e._v(" "),s("li",[s("code",[e._v("USS_EXPLORER_UI_PORT")]),e._v(": The port the uss-explorer UI service will use.")]),e._v(" "),s("li",[s("code",[e._v("ZOWE_ZLUX_SERVER_HTTPS_PORT")]),e._v(": The port used by the Zowe desktop.  It should be accessible to client machines with browsers wanting to log on to the Zowe desktop.")]),e._v(" "),s("li",[s("code",[e._v("ZOWE_ZSS_SERVER_PORT")]),e._v(": This port is used by the ZSS server.")])]),e._v(" "),s("p",[s("strong",[e._v("Note:")]),e._v(" If all of the default port values are acceptable, the ports do not need to be changed. To allocate ports for the Zowe runtime servers, ensure that the ports are not in use.")]),e._v(" "),s("p",[e._v("To determine which ports are not available, follow these steps:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Display a list of ports that are in use with the following command:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("TSO NETSTAT\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Display a list of reserved ports with the following command:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("TSO NETSTAT PORTLIST\n")])])])])]),e._v(" "),s("h4",{attrs:{id:"terminal-ports"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#terminal-ports"}},[e._v("#")]),e._v(" Terminal ports")]),e._v(" "),s("p",[s("strong",[e._v("Note:")]),e._v(" Unlike the ports needed by the Zowe runtime for its Zowe Application Framework and z/OS Services which must be unused, the terminal ports are expected to be in use.")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("ZOWE_ZLUX_SSH_PORT")]),e._v(": The Zowe desktop contains an application "),s("em",[e._v("VT Terminal")]),e._v(" which opens a terminal to z/OS inside the Zowe desktop web page.  This port is the number used by the z/OS SSH service and defaults to 22.  The USS command "),s("code",[e._v("netstat -b | grep SSHD1")]),e._v(" can be used to display the SSH port used on a z/OS system.")]),e._v(" "),s("li",[s("code",[e._v("ZOWE_ZLUX_TELNET_PORT")]),e._v(": The Zowe desktop contains an application "),s("em",[e._v("3270 Terminal")]),e._v(" which opens a 3270 emulator inside the Zowe desktop web page.  This port is the number used by the z/OS telnet service and defaults to 23. The USS command "),s("code",[e._v("netstat -b | grep TN3270")]),e._v(" can be used to display the telnet port used on a z/OS system.")]),e._v(" "),s("li",[s("code",[e._v("ZOWE_ZLUX_SECURITY_TYPE")]),e._v(": The "),s("em",[e._v("3270 Terminal")]),e._v(" application needs to know whether the telnet service is using "),s("code",[e._v("tls")]),e._v(" or "),s("code",[e._v("telnet")]),e._v(" for security.  The default value is blank for "),s("code",[e._v("telnet")]),e._v(".")])]),e._v(" "),s("h3",{attrs:{id:"extensions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extensions"}},[e._v("#")]),e._v(" Extensions")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("ZWEAD_EXTERNAL_STATIC_DEF_DIRECTORIES")]),e._v(":  Full USS path to the directory that contains static API Mediation Layer .yml definition files.  For more information, see "),s("router-link",{attrs:{to:"/extend/extend-apiml/onboard-static-definition.html#add-a-definition-in-the-api-mediation-layer-in-the-zowe-runtime"}},[e._v("Onboard a REST API without code changes required")]),e._v(".  Multiple paths should be semicolon separated. This value allows a Zowe instance to be configured so that the API Mediation Layer can be extended by third party REST API and web UI servers.")],1)]),e._v(" "),s("li",[s("p",[s("code",[e._v("EXTERNAL_COMPONENTS")]),e._v(": For third-party extenders to add the full path to the directory that contains their component lifecycle scripts.  For more information, see "),s("router-link",{attrs:{to:"/extend/lifecycling-with-zwesvstc.html#zowe-extensions"}},[e._v("Zowe lifecycle - Zowe extensions")]),e._v(".")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);