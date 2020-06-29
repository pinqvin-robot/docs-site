(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{371:function(e,t,s){"use strict";s.r(t);var a=s(3),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"installing-and-configuring-the-zowe-cross-memory-server-zwesistc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-and-configuring-the-zowe-cross-memory-server-zwesistc"}},[e._v("#")]),e._v(" Installing and configuring the Zowe cross memory server (ZWESISTC)")]),e._v(" "),s("p",[e._v("The Zowe cross memory server provides privileged cross-memory services to the Zowe Desktop and runs as an\nAPF-authorized program. The same cross memory server can be used by multiple Zowe desktops. You must install, configure, and launch the cross memory server if you want to use the Zowe desktop. Otherwise, you can skip this step.")]),e._v(" "),s("p",[e._v("To install and configure the cross memory server, you must create or edit APF-authorized load libraries, program properties table (PPT) entries, and a parmlib. This requires familiarity with z/OS.")]),e._v(" "),s("p",[e._v("The cross memory server runtime artifacts, the JCL for the started tasks, the parmlib, and members containing sample configuration commands are installed in the "),s("code",[e._v("SZWESAMP")]),e._v(" PDS SAMPLIB.  The load modules for the cross memory server and an auxiliary server it uses are installed in the "),s("code",[e._v("SZWEAUTH")]),e._v(" PDS load library.  The location of these for a convenience build depends on the value of the "),s("code",[e._v("zowe-install.sh -h")]),e._v(" argument, see "),s("router-link",{attrs:{to:"/user-guide/install-zowe-zos-convenience-build.html#step-3-choose-a-dataset-hlq-for-the-samplib-and-loadlib"}},[e._v("Install Zowe z/OS convenience build")]),e._v(". For an SMP/E installation, the location is the value of\n"),s("code",[e._v("$datasetPrefixIn")]),e._v(" in the member "),s("code",[e._v("AZWE001.F1(ZWE3ALOC)")]),e._v(".")],1),e._v(" "),s("p",[e._v("The cross memory server is a long running angel process server that runs under the started task "),s("code",[e._v("ZWESISTC")]),e._v(" with the user ID "),s("code",[e._v("ZWESIUSR")]),e._v(" and group of "),s("code",[e._v("ZWEADMIN")]),e._v(".")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("ZWESISTC")]),e._v(" started task runs the load module "),s("code",[e._v("ZWESIS01")]),e._v(", serves the Zowe desktop that is running under the "),s("code",[e._v("ZWESVSTC")]),e._v(" started task, and provides it with secure services that require elevated privileges, such as supervisor state, system key, or APF-authorization.")]),e._v(" "),s("p",[e._v("Under some situations in support of a Zowe extension, the cross memory server will start, control, and stop an auxiliary address space. This run as a "),s("code",[e._v("ZWESASTC")]),e._v(" started task that runs the load module "),s("code",[e._v("ZWESAUX")]),e._v(".  Under normal Zowe operation, you will not see any auxiliary address spaces started. However, if you have installed a vendor product running on top of Zowe, this may use the auxiliary service so it should be configured to be launchable.")]),e._v(" "),s("p",[e._v("To install the cross memory server, take the following steps either "),s("a",{attrs:{href:"#copy-cross-memory-data-set-members-manually"}},[e._v("manually")]),e._v(" by using "),s("code",[e._v("cp")]),e._v(" commands or use the supplied "),s("a",{attrs:{href:"#copy-cross-memory-data-set-members-automatically"}},[e._v("convenience script")]),e._v(" "),s("code",[e._v("zowe-install-xmem.sh")]),e._v(" for an automated installation process.")]),e._v(" "),s("h2",{attrs:{id:"step-1-copy-the-cross-memory-proclib-and-load-library"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-1-copy-the-cross-memory-proclib-and-load-library"}},[e._v("#")]),e._v(" Step 1: Copy the cross memory PROCLIB and load library")]),e._v(" "),s("h3",{attrs:{id:"copy-cross-memory-data-set-members-manually"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copy-cross-memory-data-set-members-manually"}},[e._v("#")]),e._v(" Copy cross memory data set members manually")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Copy the load modules and add JCL to a PROCLIB:")]),e._v(" "),s("p",[e._v("For the cross memory server to be started, its load modules need to be moved to an APF-authorized PDSE, and its JCL PROCLIB members moved to a PDS in the JES concatenation path.")]),e._v(" "),s("p",[e._v("a. "),s("strong",[e._v("Load modules")]),e._v(" The cross memory server has two load modules, "),s("code",[e._v("ZWESIS01")]),e._v(" and "),s("code",[e._v("ZWESAUX")]),e._v(", provided in the PDS "),s("code",[e._v("SZWEAUTH")]),e._v(" created during the installation of Zowe.  To manually copy the files to a user-defined data set, you can issue the following commands:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cp -X ZWESIS01 \"//'<zwes_loadlib>(ZWESIS01)'\"\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cp -X ZWESAUX \"//'<zwes_loadlib>(ZWESAUX)'\"\n")])])]),s("p",[e._v("Where "),s("code",[e._v("<zwes_loadlib>")]),e._v(" is the name of the data set, for example ZWES.SISLOAD. The "),s("code",[e._v("<zwes_loadlib>")]),e._v(" data set must be a PDSE due to language requirements.")]),e._v(" "),s("p",[e._v("b. "),s("strong",[e._v("Proc libraries")]),e._v(" The cross memory server PROCLIB JCL is "),s("code",[e._v("ZWESISTC")]),e._v(" and the auxiliary address space PROCLIB JCL is "),s("code",[e._v("ZWESASTC")]),e._v(".")]),e._v(" "),s("p",[e._v("You must specify the "),s("code",[e._v("<zwes_loadlib>")]),e._v(" data set where "),s("code",[e._v("ZWESIS01")]),e._v(" and "),s("code",[e._v("ZWESAUX")]),e._v(" were copied to, in the STEPLIB DD statement of the two PROCLIB JCL members "),s("code",[e._v("ZWESISTC")]),e._v(" and "),s("code",[e._v("ZWESASTC")]),e._v(" respectively so that the appropriate version of the software is loaded correctly.")]),e._v(" "),s("p",[e._v("Do not add the "),s("code",[e._v("<zwes_loadlib>")]),e._v(" data set to the system LNKLST or LPALST concatenations.")])]),e._v(" "),s("li",[s("p",[e._v("Add a "),s("code",[e._v("ZWESIP00")]),e._v(" PARMLIB member for the "),s("code",[e._v("ZWESISTC")]),e._v(" started task:")]),e._v(" "),s("p",[e._v("When started, the ZWESISTC started task must find a valid ZWESIPxx PARMLIB member. The "),s("code",[e._v("SZWESAMP")]),e._v(" PDS contains the member "),s("code",[e._v("ZWESIP00")]),e._v(" containing default configuration values. You can copy this member to your system PARMLIB data set, or allocate the default PDS data set ZWES.SISAMP that is specified in the ZWESISTC started task JCL.")])])]),e._v(" "),s("h3",{attrs:{id:"copy-cross-memory-data-set-members-automatically"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copy-cross-memory-data-set-members-automatically"}},[e._v("#")]),e._v(" Copy cross memory data set members automatically")]),e._v(" "),s("p",[e._v("Instead of the manual steps "),s("a",{attrs:{href:"#copy-cross-memory-data-set-members-manually"}},[e._v("described above")]),e._v(", a convenience script "),s("code",[e._v("<ROOT_DIR>/scripts/utils/zowe-install-xmem.sh")]),e._v(" is shipped with Zowe to help with copying the cross memory and auxiliary address space PROCLIB members, the PARMLIB member, and the load libraries.")]),e._v(" "),s("p",[e._v("The script "),s("code",[e._v("zowe-install-xmem.sh -d <dataSetPrefix> -b <loadlib> -a <parmlib> [-r <proclib> -l <log_directory>]")]),e._v(" has the following parameters:")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[s("code",[e._v("-d <dataSetPrefix>")])]),e._v(" - Source PDS Prefix")]),e._v(" "),s("p",[e._v("Data set prefix of the source PDS where .SZWESAMP(ZWESVSTC) was installed into.")]),e._v(" "),s("p",[e._v("For an installation from a convenience build, this will be the value of "),s("code",[e._v("zowe-install.sh -h")]),e._v(" when the build was installed. See "),s("router-link",{attrs:{to:"/user-guide/install-zowe-zos-convenience-build.html#step-3-choose-a-dataset-hlq-for-the-samplib-and-loadlib"}},[e._v("Install Zowe z/OS convenience build")])],1),e._v(" "),s("p",[e._v("For an SMP/E installation, this will be the value of "),s("code",[e._v("$datasetPrefixIn")]),e._v(" in the member "),s("code",[e._v("AZWE001.F1(ZWE3ALOC)")]),e._v(".")])]),e._v(" "),s("li",[s("p",[s("strong",[s("code",[e._v("-b <loadlib>")])]),e._v(" - Target DSN Load Library")]),e._v(" "),s("p",[e._v("This is the data set name of the PDSE where members "),s("code",[e._v("ZWESIS01")]),e._v(" and "),s("code",[e._v("ZWESAUX")]),e._v(" will be copied into.  This must be an APF-authorized PDS.")])]),e._v(" "),s("li",[s("p",[s("strong",[s("code",[e._v("-a <parmlib>")])]),e._v(" - Target DSN for PARMLIB")]),e._v(" "),s("p",[e._v("This is the data set name of where the PARMLIB "),s("code",[e._v("ZWESIP00")]),e._v(" will be placed.")])]),e._v(" "),s("li",[s("p",[s("strong",[s("code",[e._v("-r <proclib>")])]),e._v(" - Target DSN for PROCLIB (optional)")]),e._v(" "),s("p",[e._v("Target PROCLIB PDS where ZWESVSTC will be placed.  If parameter is omitted the script scans the JES PROCLIB concatenation path and uses the first data set where the user has write access")])]),e._v(" "),s("li",[s("p",[s("strong",[s("code",[e._v("-l <log_directory>")])]),e._v(" - Log directory (optional)")]),e._v(" "),s("p",[e._v("Overrides the default log output directory of "),s("code",[e._v("/global/zowe/logs")]),e._v(", if it is writable, or "),s("code",[e._v("~/zowe/logs")]),e._v(".")])])]),e._v(" "),s("p",[s("strong",[e._v("Example:")])]),e._v(" "),s("p",[e._v("Executing the command "),s("code",[e._v("zowe-install-xmem.sh -d MYUSERID.ZWE -b SYS1.IBM.ZIS.SZISLOAD -a SYS1.IBM.PARMLIB -r USER.PROCLIB")]),e._v(" copies:")]),e._v(" "),s("ul",[s("li",[e._v("the load modules "),s("code",[e._v("MYUSERID.ZWE.SZWEAUTH(ZWESIS01)")]),e._v(" and "),s("code",[e._v("MYUSERID.ZWE.SZWEAUTH(ZWESAUX)")]),e._v(" to the load library "),s("code",[e._v("SYS.IBM.ZIS.SZISLOAD")])]),e._v(" "),s("li",[e._v("the PARMLIB member "),s("code",[e._v("MYUSERID.ZWE.SZWESAMP(ZWESIP00)")]),e._v(" to "),s("code",[e._v("SYS1.IBM.PARMLIB(ZWESIP00)")])]),e._v(" "),s("li",[e._v("the PROCLIB member "),s("code",[e._v("MYUSERID.ZWE.SZWESAMP(ZWESISTC)")]),e._v(" to "),s("code",[e._v("USER.PROCLIB(ZWESISTC")]),e._v(" and "),s("code",[e._v("MYUSERID.ZWE.SZWESAMP(ZWESASTC)")]),e._v(" to "),s("code",[e._v("USER.PROCLIB(ZWESASTC)")])])]),e._v(" "),s("p",[e._v("The user ID "),s("code",[e._v("ZWESIUSR")]),e._v(" that is assigned to the cross memory server started tasks must have a valid OMVS segment and read access to the data sets where the load library and PROCLIB are held. The cross memory server loads the modules to LPA for its PC-cp services.")]),e._v(" "),s("h2",{attrs:{id:"step-2-add-ppt-entries-to-the-system-parmlib"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-2-add-ppt-entries-to-the-system-parmlib"}},[e._v("#")]),e._v(" Step 2: Add PPT entries to the system PARMLIB")]),e._v(" "),s("p",[e._v("The cross memory server and its auxiliary address spaces must run in key 4 and be non-swappable. For the server to start in this environment, add the following PPT entries for the server and address spaces to the SCHEDxx member of the system PARMLIB.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("PPT PGMNAME(ZWESIS01) KEY(4) NOSWAP\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("PPT PGMNAME(ZWESAUX) KEY(4) NOSWAP\n")])])]),s("p",[e._v("The PDS member "),s("code",[e._v("SZWESAMP(ZWESISCH)")]),e._v(" contains the PPT lines for reference.")]),e._v(" "),s("p",[e._v("Then, issue the following command to make the SCHEDxx changes effective:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/SET SCH=xx\n")])])]),s("h2",{attrs:{id:"step-3-add-the-load-libraries-to-the-apf-authorization-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-3-add-the-load-libraries-to-the-apf-authorization-list"}},[e._v("#")]),e._v(" Step 3: Add the load libraries to the APF authorization list")]),e._v(" "),s("p",[e._v("Because the cross memory server provides privileges services, its load libraries require APF-authorization. To check whether a load library is APF-authorized, you can issue the following TSO command:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("D PROG,APF,DSNAME=ZWES.SISLOAD\n")])])]),s("p",[e._v("where the value of DSNAME is the name of the data set that contains the ZWESIS01 and ZWESAUX load modules.")]),e._v(" "),s("p",[e._v("To dynamically add a load library to the APF list if the load library is not SMS-managed, issue the following TSO command:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("SETPROG APF,ADD,DSNAME=ZWES.SISLOAD,VOLUME=volser\n")])])]),s("p",[e._v("If the load library is SMS-managed, issue the following TSO command:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("SETPROG APF,ADD,DSNAME=ZWES.SISLOAD,SMS\n")])])]),s("p",[e._v("where the value of DSNAME is the name of the data set that contains the ZWESIS01 and ZWESAUX load modules.")]),e._v(" "),s("p",[e._v("If you want to authorize the loadlib permanently, then add the following statement to "),s("code",[e._v("SYS1.PARMLIB(PROGxx)")]),e._v(" or equivalent")]),e._v(" "),s("p",[e._v("The PDS member "),s("code",[e._v("SZWESAMP(ZWESIMPRG)")]),e._v(" contains the SETPROG statement for reference.")]),e._v(" "),s("h2",{attrs:{id:"step-4-configure-saf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-4-configure-saf"}},[e._v("#")]),e._v(" Step 4: Configure SAF")]),e._v(" "),s("p",[e._v("The cross memory server performs a sequence of SAF checks to protect its services from unauthorized callers. To do this, it uses the FACILITY class and a "),s("code",[e._v("ZWES.IS")]),e._v(" entry. Valid callers must have READ access to the "),s("code",[e._v("ZWES.IS")]),e._v(" profile. Those callers include the STC user "),s("code",[e._v("ZWESVUSR")]),e._v(" under which the ZWESVSTC started task runs. It is recommended that you also grant READ access to the STC user under which the ZWESASTC started task runs which is "),s("code",[e._v("ZWESIUSR")]),e._v(".")]),e._v(" "),s("p",[e._v("The commands required to configure SAF for the cross memory server are included in a JCL member "),s("code",[e._v("ZWESECUR")]),e._v(" that is delivered with Zowe, see "),s("router-link",{attrs:{to:"/user-guide/configure-zos-system.html#configure-cross-memory-server-for-saf"}},[e._v("Configuring z/OS system")])],1),e._v(" "),s("h2",{attrs:{id:"step-5-configure-security-environment-switching"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-5-configure-security-environment-switching"}},[e._v("#")]),e._v(" Step 5: Configure security environment switching")]),e._v(" "),s("p",[e._v("When responding to API requests, the Zowe desktop node API server running under USS must be able to change the security environment of its process to associate itself with the security context of the logged in user. This is called impersonation.")]),e._v(" "),s("p",[e._v("For commands required to configure impersonation, see "),s("router-link",{attrs:{to:"/user-guide/configure-zos-system.html#configure-security-environment-switching"}},[e._v("Configuring the z/OS system for Zowe")]),e._v(".")],1),e._v(" "),s("h2",{attrs:{id:"starting-and-stopping-the-cross-memory-server-on-z-os"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#starting-and-stopping-the-cross-memory-server-on-z-os"}},[e._v("#")]),e._v(" Starting and stopping the cross memory server on z/OS")]),e._v(" "),s("p",[e._v("The cross memory server is run as a started task from the JCL in the PROCLIB member "),s("code",[e._v("ZWESISTC")]),e._v(". It supports reusable address spaces and can be started through SDSF with the operator start command with the REUSASID=YES keyword:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/S ZWESISTC,REUSASID=YES\n")])])]),s("p",[e._v("The ZWESISTC task starts and stops the ZWESSTC task as needed. Do not start the ZWESASTC task manually.")]),e._v(" "),s("p",[e._v("To end the Zowe cross memory server process, issue the operator stop command through SDSF:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/P ZWESISTC\n")])])]),s("p",[s("strong",[e._v("Note:")])]),e._v(" "),s("p",[e._v("The starting and stopping of the "),s("code",[e._v("ZWESVSTC")]),e._v(" for the main Zowe servers is independent of the "),s("code",[e._v("ZWESISTC")]),e._v(" cross memory server that is an angel process. If you are running more than one "),s("code",[e._v("ZWESVSTC")]),e._v(" instance on the same LPAR, then these will be sharing the same "),s("code",[e._v("ZWESISTC")]),e._v(" cross memory server. Stopping "),s("code",[e._v("ZWESISTC")]),e._v(" will affect the behavior of all Zowe servers on the same LPAR that use the same cross-memory server name, for example ZWESIS_STD. The Zowe Cross Memory Server is designed to be a long-lived address space. There is no requirement to recycle regularly. When the cross-memory server is started with a new version of the ZWESIS01 load module, it abandons its current load module instance in LPA and loads the updated version.")]),e._v(" "),s("p",[e._v("To diagnose problems that may occur with the Zowe "),s("code",[e._v("ZWESVSTC")]),e._v(" being able to attach to the "),s("code",[e._v("ZWESISTC")]),e._v(" cross memory server, a log file "),s("code",[e._v("zssServer-yyyy-mm-dd-hh-mm.log")]),e._v(" is created in the instance directory "),s("code",[e._v("/logs")]),e._v(" folder each time a Zowe "),s("code",[e._v("ZWESVSTC")]),e._v(" instance is started.  More details on diagnosing errors can be found in "),s("router-link",{attrs:{to:"/troubleshoot/app-framework/app-troubleshoot.html#cannot-log-in-to-the-zowe-desktop"}},[e._v("Zowe Application Framework issues")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=o.exports}}]);