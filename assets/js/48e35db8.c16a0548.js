"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[24217],{51071:(e,t,o)=>{o.r(t),o.d(t,{CH:()=>g,assets:()=>d,chCodeConfig:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});o(67294);var n=o(85893),r=o(11151),a=o(59794);const i={},c="Authentication",s={unversionedId:"tools/clients/fcl-js/authentication",id:"version-stable/tools/clients/fcl-js/authentication",title:"Authentication",description:"The concept of authentication in FCL is tied closely to FCL's concept of currentUser. In fact fcl.authenticate and fcl.unauthenticate are both aliases to fcl.currentUser.authenticate() and fcl.currentUser.unauthenticate() respectively. So let's look at currentUser.",source:"@site/versioned_docs/version-stable/tools/clients/fcl-js/authentication.mdx",sourceDirName:"tools/clients/fcl-js",slug:"/tools/clients/fcl-js/authentication",permalink:"/docs/tools/clients/fcl-js/authentication",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/tools/clients/fcl-js/authentication.mdx",tags:[],version:"stable",lastUpdatedBy:"Alex",lastUpdatedAt:1694808350,formattedLastUpdatedAt:"Sep 15, 2023",frontMatter:{},sidebar:"tools",previous:{title:"SDK Reference",permalink:"/docs/tools/clients/fcl-js/sdk-guidelines"},next:{title:"How to Configure FCL",permalink:"/docs/tools/clients/fcl-js/configure-fcl"}},d={},u=[{value:"Snapshot of Current User",id:"snapshot-of-current-user",level:3},{value:"Subscribe to Current User",id:"subscribe-to-current-user",level:3}],g={annotations:a.ds,Code:a.EK},l={staticMediaQuery:"not screen, (max-width: 768px)",theme:{name:"nord",type:"dark",semanticHighlighting:!0,colors:{focusBorder:"#3b4252",foreground:"#d8dee9","activityBar.background":"#2e3440","activityBar.dropBackground":"#3b4252","activityBar.foreground":"#d8dee9","activityBar.activeBorder":"#88c0d0","activityBar.activeBackground":"#3b4252","activityBarBadge.background":"#88c0d0","activityBarBadge.foreground":"#2e3440","badge.foreground":"#2e3440","badge.background":"#88c0d0","button.background":"#88c0d0ee","button.foreground":"#2e3440","button.hoverBackground":"#88c0d0","button.secondaryBackground":"#434c5e","button.secondaryForeground":"#d8dee9","button.secondaryHoverBackground":"#4c566a","charts.red":"#bf616a","charts.blue":"#81a1c1","charts.yellow":"#ebcb8b","charts.orange":"#d08770","charts.green":"#a3be8c","charts.purple":"#b48ead","charts.foreground":"#d8dee9","charts.lines":"#88c0d0","debugConsole.infoForeground":"#88c0d0","debugConsole.warningForeground":"#ebcb8b","debugConsole.errorForeground":"#bf616a","debugConsole.sourceForeground":"#616e88","debugConsoleInputIcon.foreground":"#81a1c1","debugExceptionWidget.background":"#4c566a","debugExceptionWidget.border":"#2e3440","debugToolBar.background":"#3b4252",descriptionForeground:"#d8dee9e6","diffEditor.insertedTextBackground":"#81a1c133","diffEditor.removedTextBackground":"#bf616a4d","dropdown.background":"#3b4252","dropdown.border":"#3b4252","dropdown.foreground":"#d8dee9","editorActiveLineNumber.foreground":"#d8dee9cc","editorCursor.foreground":"#d8dee9","editorHint.border":"#ebcb8b00","editorHint.foreground":"#ebcb8b","editorIndentGuide.background":"#434c5eb3","editorIndentGuide.activeBackground":"#4c566a","editorInlayHint.background":"#434c5e","editorInlayHint.foreground":"#d8dee9","editorLineNumber.foreground":"#4c566a","editorLineNumber.activeForeground":"#d8dee9","editorWhitespace.foreground":"#4c566ab3","editorWidget.background":"#2e3440","editorWidget.border":"#3b4252","editor.background":"#2e3440","editor.foreground":"#d8dee9","editor.hoverHighlightBackground":"#3b4252","editor.findMatchBackground":"#88c0d066","editor.findMatchHighlightBackground":"#88c0d033","editor.findRangeHighlightBackground":"#88c0d033","editor.lineHighlightBackground":"#3b4252","editor.lineHighlightBorder":"#3b4252","editor.inactiveSelectionBackground":"#434c5ecc","editor.inlineValuesBackground":"#4c566a","editor.inlineValuesForeground":"#eceff4","editor.selectionBackground":"#434c5ecc","editor.selectionHighlightBackground":"#434c5ecc","editor.rangeHighlightBackground":"#434c5e52","editor.wordHighlightBackground":"#81a1c166","editor.wordHighlightStrongBackground":"#81a1c199","editor.stackFrameHighlightBackground":"#5e81ac","editor.focusedStackFrameHighlightBackground":"#5e81ac","editorError.foreground":"#bf616a","editorError.border":"#bf616a00","editorWarning.foreground":"#ebcb8b","editorWarning.border":"#ebcb8b00","editorBracketMatch.background":"#2e344000","editorBracketMatch.border":"#88c0d0","editorBracketHighlight.foreground1":"#8fbcbb","editorBracketHighlight.foreground2":"#88c0d0","editorBracketHighlight.foreground3":"#81a1c1","editorBracketHighlight.foreground4":"#5e81ac","editorBracketHighlight.foreground5":"#8fbcbb","editorBracketHighlight.foreground6":"#88c0d0","editorBracketHighlight.unexpectedBracket.foreground":"#bf616a","editorCodeLens.foreground":"#4c566a","editorGroup.background":"#2e3440","editorGroup.border":"#3b425201","editorGroup.dropBackground":"#3b425299","editorGroupHeader.border":"#3b425200","editorGroupHeader.noTabsBackground":"#2e3440","editorGroupHeader.tabsBackground":"#2e3440","editorGroupHeader.tabsBorder":"#3b425200","editorGutter.background":"#2e3440","editorGutter.modifiedBackground":"#ebcb8b","editorGutter.addedBackground":"#a3be8c","editorGutter.deletedBackground":"#bf616a","editorHoverWidget.background":"#3b4252","editorHoverWidget.border":"#3b4252","editorLink.activeForeground":"#88c0d0","editorMarkerNavigation.background":"#5e81acc0","editorMarkerNavigationError.background":"#bf616ac0","editorMarkerNavigationWarning.background":"#ebcb8bc0","editorOverviewRuler.border":"#3b4252","editorOverviewRuler.currentContentForeground":"#3b4252","editorOverviewRuler.incomingContentForeground":"#3b4252","editorOverviewRuler.findMatchForeground":"#88c0d066","editorOverviewRuler.rangeHighlightForeground":"#88c0d066","editorOverviewRuler.selectionHighlightForeground":"#88c0d066","editorOverviewRuler.wordHighlightForeground":"#88c0d066","editorOverviewRuler.wordHighlightStrongForeground":"#88c0d066","editorOverviewRuler.modifiedForeground":"#ebcb8b","editorOverviewRuler.addedForeground":"#a3be8c","editorOverviewRuler.deletedForeground":"#bf616a","editorOverviewRuler.errorForeground":"#bf616a","editorOverviewRuler.warningForeground":"#ebcb8b","editorOverviewRuler.infoForeground":"#81a1c1","editorRuler.foreground":"#434c5e","editorSuggestWidget.background":"#2e3440","editorSuggestWidget.border":"#3b4252","editorSuggestWidget.foreground":"#d8dee9","editorSuggestWidget.focusHighlightForeground":"#88c0d0","editorSuggestWidget.highlightForeground":"#88c0d0","editorSuggestWidget.selectedBackground":"#434c5e","editorSuggestWidget.selectedForeground":"#d8dee9","extensionButton.prominentForeground":"#d8dee9","extensionButton.prominentBackground":"#434c5e","extensionButton.prominentHoverBackground":"#4c566a",errorForeground:"#bf616a","gitDecoration.modifiedResourceForeground":"#ebcb8b","gitDecoration.deletedResourceForeground":"#bf616a","gitDecoration.untrackedResourceForeground":"#a3be8c","gitDecoration.ignoredResourceForeground":"#d8dee966","gitDecoration.conflictingResourceForeground":"#5e81ac","gitDecoration.submoduleResourceForeground":"#8fbcbb","gitDecoration.stageDeletedResourceForeground":"#bf616a","gitDecoration.stageModifiedResourceForeground":"#ebcb8b","input.background":"#3b4252","input.foreground":"#d8dee9","input.placeholderForeground":"#d8dee999","input.border":"#3b4252","inputOption.activeBackground":"#5e81ac","inputOption.activeBorder":"#5e81ac","inputOption.activeForeground":"#eceff4","inputValidation.errorBackground":"#bf616a","inputValidation.errorBorder":"#bf616a","inputValidation.infoBackground":"#81a1c1","inputValidation.infoBorder":"#81a1c1","inputValidation.warningBackground":"#d08770","inputValidation.warningBorder":"#d08770","keybindingLabel.background":"#4c566a","keybindingLabel.border":"#4c566a","keybindingLabel.bottomBorder":"#4c566a","keybindingLabel.foreground":"#d8dee9","list.activeSelectionBackground":"#88c0d0","list.activeSelectionForeground":"#2e3440","list.inactiveSelectionBackground":"#434c5e","list.inactiveSelectionForeground":"#d8dee9","list.inactiveFocusBackground":"#434c5ecc","list.hoverForeground":"#eceff4","list.focusForeground":"#d8dee9","list.focusBackground":"#88c0d099","list.focusHighlightForeground":"#eceff4","list.hoverBackground":"#3b4252","list.dropBackground":"#88c0d099","list.highlightForeground":"#88c0d0","list.errorForeground":"#bf616a","list.warningForeground":"#ebcb8b","merge.currentHeaderBackground":"#81a1c166","merge.currentContentBackground":"#81a1c14d","merge.incomingHeaderBackground":"#8fbcbb66","merge.incomingContentBackground":"#8fbcbb4d","merge.border":"#3b425200","minimap.background":"#2e3440","minimap.errorHighlight":"#bf616acc","minimap.findMatchHighlight":"#88c0d0","minimap.selectionHighlight":"#88c0d0cc","minimap.warningHighlight":"#ebcb8bcc","minimapGutter.addedBackground":"#a3be8c","minimapGutter.deletedBackground":"#bf616a","minimapGutter.modifiedBackground":"#ebcb8b","minimapSlider.activeBackground":"#434c5eaa","minimapSlider.background":"#434c5e99","minimapSlider.hoverBackground":"#434c5eaa","notification.background":"#3b4252","notification.buttonBackground":"#434c5e","notification.buttonForeground":"#d8dee9","notification.buttonHoverBackground":"#4c566a","notification.errorBackground":"#bf616a","notification.errorForeground":"#2e3440","notification.foreground":"#d8dee9","notification.infoBackground":"#88c0d0","notification.infoForeground":"#2e3440","notification.warningBackground":"#ebcb8b","notification.warningForeground":"#2e3440","notificationCenter.border":"#3b425200","notificationCenterHeader.background":"#2e3440","notificationCenterHeader.foreground":"#88c0d0","notificationLink.foreground":"#88c0d0","notifications.background":"#3b4252","notifications.border":"#2e3440","notifications.foreground":"#d8dee9","notificationToast.border":"#3b425200","panel.background":"#2e3440","panel.border":"#3b4252","panelTitle.activeBorder":"#88c0d000","panelTitle.activeForeground":"#88c0d0","panelTitle.inactiveForeground":"#d8dee9","peekView.border":"#4c566a","peekViewEditor.background":"#2e3440","peekViewEditorGutter.background":"#2e3440","peekViewEditor.matchHighlightBackground":"#88c0d04d","peekViewResult.background":"#2e3440","peekViewResult.fileForeground":"#88c0d0","peekViewResult.lineForeground":"#d8dee966","peekViewResult.matchHighlightBackground":"#88c0d0cc","peekViewResult.selectionBackground":"#434c5e","peekViewResult.selectionForeground":"#d8dee9","peekViewTitle.background":"#3b4252","peekViewTitleDescription.foreground":"#d8dee9","peekViewTitleLabel.foreground":"#88c0d0","pickerGroup.border":"#3b4252","pickerGroup.foreground":"#88c0d0","progressBar.background":"#88c0d0","quickInputList.focusBackground":"#88c0d0","quickInputList.focusForeground":"#2e3440","sash.hoverBorder":"#88c0d0","scrollbar.shadow":"#00000066","scrollbarSlider.activeBackground":"#434c5eaa","scrollbarSlider.background":"#434c5e99","scrollbarSlider.hoverBackground":"#434c5eaa","selection.background":"#88c0d099","sideBar.background":"#2e3440","sideBar.foreground":"#d8dee9","sideBar.border":"#3b4252","sideBarSectionHeader.background":"#3b4252","sideBarSectionHeader.foreground":"#d8dee9","sideBarTitle.foreground":"#d8dee9","statusBar.background":"#3b4252","statusBar.debuggingBackground":"#5e81ac","statusBar.debuggingForeground":"#d8dee9","statusBar.noFolderForeground":"#d8dee9","statusBar.noFolderBackground":"#3b4252","statusBar.foreground":"#d8dee9","statusBarItem.activeBackground":"#4c566a","statusBarItem.hoverBackground":"#434c5e","statusBarItem.prominentBackground":"#3b4252","statusBarItem.prominentHoverBackground":"#434c5e","statusBarItem.errorBackground":"#3b4252","statusBarItem.errorForeground":"#bf616a","statusBarItem.warningBackground":"#ebcb8b","statusBarItem.warningForeground":"#2e3440","statusBar.border":"#3b425200","tab.activeBackground":"#3b4252","tab.activeForeground":"#d8dee9","tab.border":"#3b425200","tab.activeBorder":"#88c0d000","tab.unfocusedActiveBorder":"#88c0d000","tab.inactiveBackground":"#2e3440","tab.inactiveForeground":"#d8dee966","tab.unfocusedActiveForeground":"#d8dee999","tab.unfocusedInactiveForeground":"#d8dee966","tab.hoverBackground":"#3b4252cc","tab.unfocusedHoverBackground":"#3b4252b3","tab.hoverBorder":"#88c0d000","tab.unfocusedHoverBorder":"#88c0d000","tab.activeBorderTop":"#88c0d000","tab.unfocusedActiveBorderTop":"#88c0d000","tab.lastPinnedBorder":"#4c566a","terminal.background":"#2e3440","terminal.foreground":"#d8dee9","terminal.ansiBlack":"#3b4252","terminal.ansiRed":"#bf616a","terminal.ansiGreen":"#a3be8c","terminal.ansiYellow":"#ebcb8b","terminal.ansiBlue":"#81a1c1","terminal.ansiMagenta":"#b48ead","terminal.ansiCyan":"#88c0d0","terminal.ansiWhite":"#e5e9f0","terminal.ansiBrightBlack":"#4c566a","terminal.ansiBrightRed":"#bf616a","terminal.ansiBrightGreen":"#a3be8c","terminal.ansiBrightYellow":"#ebcb8b","terminal.ansiBrightBlue":"#81a1c1","terminal.ansiBrightMagenta":"#b48ead","terminal.ansiBrightCyan":"#8fbcbb","terminal.ansiBrightWhite":"#eceff4","terminal.tab.activeBorder":"#88c0d0","textBlockQuote.background":"#3b4252","textBlockQuote.border":"#81a1c1","textCodeBlock.background":"#4c566a","textLink.activeForeground":"#88c0d0","textLink.foreground":"#88c0d0","textPreformat.foreground":"#8fbcbb","textSeparator.foreground":"#eceff4","titleBar.activeBackground":"#2e3440","titleBar.activeForeground":"#d8dee9","titleBar.border":"#2e344000","titleBar.inactiveBackground":"#2e3440","titleBar.inactiveForeground":"#d8dee966","tree.indentGuidesStroke":"#616e88","walkThrough.embeddedEditorBackground":"#2e3440","welcomePage.buttonBackground":"#434c5e","welcomePage.buttonHoverBackground":"#4c566a","widget.shadow":"#00000066"},tokenColors:[{settings:{foreground:"#d8dee9ff",background:"#2e3440ff"}},{scope:"emphasis",settings:{fontStyle:"italic"}},{scope:"strong",settings:{fontStyle:"bold"}},{name:"Comment",scope:"comment",settings:{foreground:"#616E88"}},{name:"Constant Character",scope:"constant.character",settings:{foreground:"#EBCB8B"}},{name:"Constant Character Escape",scope:"constant.character.escape",settings:{foreground:"#EBCB8B"}},{name:"Constant Language",scope:"constant.language",settings:{foreground:"#81A1C1"}},{name:"Constant Numeric",scope:"constant.numeric",settings:{foreground:"#B48EAD"}},{name:"Constant Regexp",scope:"constant.regexp",settings:{foreground:"#EBCB8B"}},{name:"Entity Name Class/Type",scope:["entity.name.class","entity.name.type.class"],settings:{foreground:"#8FBCBB"}},{name:"Entity Name Function",scope:"entity.name.function",settings:{foreground:"#88C0D0"}},{name:"Entity Name Tag",scope:"entity.name.tag",settings:{foreground:"#81A1C1"}},{name:"Entity Other Attribute Name",scope:"entity.other.attribute-name",settings:{foreground:"#8FBCBB"}},{name:"Entity Other Inherited Class",scope:"entity.other.inherited-class",settings:{fontStyle:"bold",foreground:"#8FBCBB"}},{name:"Invalid Deprecated",scope:"invalid.deprecated",settings:{foreground:"#D8DEE9",background:"#EBCB8B"}},{name:"Invalid Illegal",scope:"invalid.illegal",settings:{foreground:"#D8DEE9",background:"#BF616A"}},{name:"Keyword",scope:"keyword",settings:{foreground:"#81A1C1"}},{name:"Keyword Operator",scope:"keyword.operator",settings:{foreground:"#81A1C1"}},{name:"Keyword Other New",scope:"keyword.other.new",settings:{foreground:"#81A1C1"}},{name:"Markup Bold",scope:"markup.bold",settings:{fontStyle:"bold"}},{name:"Markup Changed",scope:"markup.changed",settings:{foreground:"#EBCB8B"}},{name:"Markup Deleted",scope:"markup.deleted",settings:{foreground:"#BF616A"}},{name:"Markup Inserted",scope:"markup.inserted",settings:{foreground:"#A3BE8C"}},{name:"Meta Preprocessor",scope:"meta.preprocessor",settings:{foreground:"#5E81AC"}},{name:"Punctuation",scope:"punctuation",settings:{foreground:"#ECEFF4"}},{name:"Punctuation Definition Parameters",scope:["punctuation.definition.method-parameters","punctuation.definition.function-parameters","punctuation.definition.parameters"],settings:{foreground:"#ECEFF4"}},{name:"Punctuation Definition Tag",scope:"punctuation.definition.tag",settings:{foreground:"#81A1C1"}},{name:"Punctuation Definition Comment",scope:["punctuation.definition.comment","punctuation.end.definition.comment","punctuation.start.definition.comment"],settings:{foreground:"#616E88"}},{name:"Punctuation Section",scope:"punctuation.section",settings:{foreground:"#ECEFF4"}},{name:"Punctuation Section Embedded",scope:["punctuation.section.embedded.begin","punctuation.section.embedded.end"],settings:{foreground:"#81A1C1"}},{name:"Punctuation Terminator",scope:"punctuation.terminator",settings:{foreground:"#81A1C1"}},{name:"Punctuation Variable",scope:"punctuation.definition.variable",settings:{foreground:"#81A1C1"}},{name:"Storage",scope:"storage",settings:{foreground:"#81A1C1"}},{name:"String",scope:"string",settings:{foreground:"#A3BE8C"}},{name:"String Regexp",scope:"string.regexp",settings:{foreground:"#EBCB8B"}},{name:"Support Class",scope:"support.class",settings:{foreground:"#8FBCBB"}},{name:"Support Constant",scope:"support.constant",settings:{foreground:"#81A1C1"}},{name:"Support Function",scope:"support.function",settings:{foreground:"#88C0D0"}},{name:"Support Function Construct",scope:"support.function.construct",settings:{foreground:"#81A1C1"}},{name:"Support Type",scope:"support.type",settings:{foreground:"#8FBCBB"}},{name:"Support Type Exception",scope:"support.type.exception",settings:{foreground:"#8FBCBB"}},{name:"Token Debug",scope:"token.debug-token",settings:{foreground:"#b48ead"}},{name:"Token Error",scope:"token.error-token",settings:{foreground:"#bf616a"}},{name:"Token Info",scope:"token.info-token",settings:{foreground:"#88c0d0"}},{name:"Token Warning",scope:"token.warn-token",settings:{foreground:"#ebcb8b"}},{name:"Variable",scope:"variable.other",settings:{foreground:"#D8DEE9"}},{name:"Variable Language",scope:"variable.language",settings:{foreground:"#81A1C1"}},{name:"Variable Parameter",scope:"variable.parameter",settings:{foreground:"#D8DEE9"}},{name:"[C/CPP] Punctuation Separator Pointer-Access",scope:"punctuation.separator.pointer-access.c",settings:{foreground:"#81A1C1"}},{name:"[C/CPP] Meta Preprocessor Include",scope:["source.c meta.preprocessor.include","source.c string.quoted.other.lt-gt.include"],settings:{foreground:"#8FBCBB"}},{name:"[C/CPP] Conditional Directive",scope:["source.cpp keyword.control.directive.conditional","source.cpp punctuation.definition.directive","source.c keyword.control.directive.conditional","source.c punctuation.definition.directive"],settings:{foreground:"#5E81AC",fontStyle:"bold"}},{name:"[CSS] Constant Other Color RGB Value",scope:"source.css constant.other.color.rgb-value",settings:{foreground:"#B48EAD"}},{name:"[CSS](Function) Meta Property-Value",scope:"source.css meta.property-value",settings:{foreground:"#88C0D0"}},{name:"[CSS] Media Queries",scope:["source.css keyword.control.at-rule.media","source.css keyword.control.at-rule.media punctuation.definition.keyword"],settings:{foreground:"#D08770"}},{name:"[CSS] Punctuation Definition Keyword",scope:"source.css punctuation.definition.keyword",settings:{foreground:"#81A1C1"}},{name:"[CSS] Support Type Property Name",scope:"source.css support.type.property-name",settings:{foreground:"#D8DEE9"}},{name:"[diff] Meta Range Context",scope:"source.diff meta.diff.range.context",settings:{foreground:"#8FBCBB"}},{name:"[diff] Meta Header From-File",scope:"source.diff meta.diff.header.from-file",settings:{foreground:"#8FBCBB"}},{name:"[diff] Punctuation Definition From-File",scope:"source.diff punctuation.definition.from-file",settings:{foreground:"#8FBCBB"}},{name:"[diff] Punctuation Definition Range",scope:"source.diff punctuation.definition.range",settings:{foreground:"#8FBCBB"}},{name:"[diff] Punctuation Definition Separator",scope:"source.diff punctuation.definition.separator",settings:{foreground:"#81A1C1"}},{name:"[Elixir](JakeBecker.elixir-ls) module names",scope:"entity.name.type.module.elixir",settings:{foreground:"#8FBCBB"}},{name:"[Elixir](JakeBecker.elixir-ls) module attributes",scope:"variable.other.readwrite.module.elixir",settings:{foreground:"#D8DEE9",fontStyle:"bold"}},{name:"[Elixir](JakeBecker.elixir-ls) atoms",scope:"constant.other.symbol.elixir",settings:{foreground:"#D8DEE9",fontStyle:"bold"}},{name:"[Elixir](JakeBecker.elixir-ls) modules",scope:"variable.other.constant.elixir",settings:{foreground:"#8FBCBB"}},{name:"[Go] String Format Placeholder",scope:"source.go constant.other.placeholder.go",settings:{foreground:"#EBCB8B"}},{name:"[Java](JavaDoc) Comment Block Documentation HTML Entities",scope:"source.java comment.block.documentation.javadoc punctuation.definition.entity.html",settings:{foreground:"#81A1C1"}},{name:"[Java](JavaDoc) Constant Other",scope:"source.java constant.other",settings:{foreground:"#D8DEE9"}},{name:"[Java](JavaDoc) Keyword Other Documentation",scope:"source.java keyword.other.documentation",settings:{foreground:"#8FBCBB"}},{name:"[Java](JavaDoc) Keyword Other Documentation Author",scope:"source.java keyword.other.documentation.author.javadoc",settings:{foreground:"#8FBCBB"}},{name:"[Java](JavaDoc) Keyword Other Documentation Directive/Custom",scope:["source.java keyword.other.documentation.directive","source.java keyword.other.documentation.custom"],settings:{foreground:"#8FBCBB"}},{name:"[Java](JavaDoc) Keyword Other Documentation See",scope:"source.java keyword.other.documentation.see.javadoc",settings:{foreground:"#8FBCBB"}},{name:"[Java] Meta Method-Call",scope:"source.java meta.method-call meta.method",settings:{foreground:"#88C0D0"}},{name:"[Java](JavaDoc) Meta Tag Template Link",scope:["source.java meta.tag.template.link.javadoc","source.java string.other.link.title.javadoc"],settings:{foreground:"#8FBCBB"}},{name:"[Java](JavaDoc) Meta Tag Template Value",scope:"source.java meta.tag.template.value.javadoc",settings:{foreground:"#88C0D0"}},{name:"[Java](JavaDoc) Punctuation Definition Keyword",scope:"source.java punctuation.definition.keyword.javadoc",settings:{foreground:"#8FBCBB"}},{name:"[Java](JavaDoc) Punctuation Definition Tag",scope:["source.java punctuation.definition.tag.begin.javadoc","source.java punctuation.definition.tag.end.javadoc"],settings:{foreground:"#616E88"}},{name:"[Java] Storage Modifier Import",scope:"source.java storage.modifier.import",settings:{foreground:"#8FBCBB"}},{name:"[Java] Storage Modifier Package",scope:"source.java storage.modifier.package",settings:{foreground:"#8FBCBB"}},{name:"[Java] Storage Type",scope:"source.java storage.type",settings:{foreground:"#8FBCBB"}},{name:"[Java] Storage Type Annotation",scope:"source.java storage.type.annotation",settings:{foreground:"#D08770"}},{name:"[Java] Storage Type Generic",scope:"source.java storage.type.generic",settings:{foreground:"#8FBCBB"}},{name:"[Java] Storage Type Primitive",scope:"source.java storage.type.primitive",settings:{foreground:"#81A1C1"}},{name:"[JavaScript] Decorator",scope:["source.js punctuation.decorator","source.js meta.decorator variable.other.readwrite","source.js meta.decorator entity.name.function"],settings:{foreground:"#D08770"}},{name:"[JavaScript] Meta Object-Literal Key",scope:"source.js meta.object-literal.key",settings:{foreground:"#88C0D0"}},{name:"[JavaScript](JSDoc) Storage Type Class",scope:"source.js storage.type.class.jsdoc",settings:{foreground:"#8FBCBB"}},{name:"[JavaScript] String Template Literals Punctuation",scope:["source.js string.quoted.template punctuation.quasi.element.begin","source.js string.quoted.template punctuation.quasi.element.end","source.js string.template punctuation.definition.template-expression"],settings:{foreground:"#81A1C1"}},{name:"[JavaScript] Interpolated String Template Punctuation Functions",scope:"source.js string.quoted.template meta.method-call.with-arguments",settings:{foreground:"#ECEFF4"}},{name:"[JavaScript] String Template Literal Variable",scope:["source.js string.template meta.template.expression support.variable.property","source.js string.template meta.template.expression variable.other.object"],settings:{foreground:"#D8DEE9"}},{name:"[JavaScript] Support Type Primitive",scope:"source.js support.type.primitive",settings:{foreground:"#81A1C1"}},{name:"[JavaScript] Variable Other Object",scope:"source.js variable.other.object",settings:{foreground:"#D8DEE9"}},{name:"[JavaScript] Variable Other Read-Write Alias",scope:"source.js variable.other.readwrite.alias",settings:{foreground:"#8FBCBB"}},{name:"[JavaScript] Parentheses in Template Strings",scope:["source.js meta.embedded.line meta.brace.square","source.js meta.embedded.line meta.brace.round","source.js string.quoted.template meta.brace.square","source.js string.quoted.template meta.brace.round"],settings:{foreground:"#ECEFF4"}},{name:"[HTML] Constant Character Entity",scope:"text.html.basic constant.character.entity.html",settings:{foreground:"#EBCB8B"}},{name:"[HTML] Constant Other Inline-Data",scope:"text.html.basic constant.other.inline-data",settings:{foreground:"#D08770",fontStyle:"italic"}},{name:"[HTML] Meta Tag SGML Doctype",scope:"text.html.basic meta.tag.sgml.doctype",settings:{foreground:"#5E81AC"}},{name:"[HTML] Punctuation Definition Entity",scope:"text.html.basic punctuation.definition.entity",settings:{foreground:"#81A1C1"}},{name:"[INI] Entity Name Section Group-Title",scope:"source.properties entity.name.section.group-title.ini",settings:{foreground:"#88C0D0"}},{name:"[INI] Punctuation Separator Key-Value",scope:"source.properties punctuation.separator.key-value.ini",settings:{foreground:"#81A1C1"}},{name:"[Markdown] Markup Fenced Code Block",scope:["text.html.markdown markup.fenced_code.block","text.html.markdown markup.fenced_code.block punctuation.definition"],settings:{foreground:"#8FBCBB"}},{name:"[Markdown] Markup Heading",scope:"markup.heading",settings:{foreground:"#88C0D0"}},{name:"[Markdown] Markup Inline",scope:["text.html.markdown markup.inline.raw","text.html.markdown markup.inline.raw punctuation.definition.raw"],settings:{foreground:"#8FBCBB"}},{name:"[Markdown] Markup Italic",scope:"text.html.markdown markup.italic",settings:{fontStyle:"italic"}},{name:"[Markdown] Markup Link",scope:"text.html.markdown markup.underline.link",settings:{fontStyle:"underline"}},{name:"[Markdown] Markup List Numbered/Unnumbered",scope:"text.html.markdown beginning.punctuation.definition.list",settings:{foreground:"#81A1C1"}},{name:"[Markdown] Markup Quote Punctuation Definition",scope:"text.html.markdown beginning.punctuation.definition.quote",settings:{foreground:"#8FBCBB"}},{name:"[Markdown] Markup Quote Punctuation Definition",scope:"text.html.markdown markup.quote",settings:{foreground:"#616E88"}},{name:"[Markdown] Markup Math Constant",scope:"text.html.markdown constant.character.math.tex",settings:{foreground:"#81A1C1"}},{name:"[Markdown] Markup Math Definition Marker",scope:["text.html.markdown punctuation.definition.math.begin","text.html.markdown punctuation.definition.math.end"],settings:{foreground:"#5E81AC"}},{name:"[Markdown] Markup Math Function Definition Marker",scope:"text.html.markdown punctuation.definition.function.math.tex",settings:{foreground:"#88C0D0"}},{name:"[Markdown] Markup Math Operator",scope:"text.html.markdown punctuation.math.operator.latex",settings:{foreground:"#81A1C1"}},{name:"[Markdown] Punctuation Definition Heading",scope:"text.html.markdown punctuation.definition.heading",settings:{foreground:"#81A1C1"}},{name:"[Markdown] Punctuation Definition Constant/String",scope:["text.html.markdown punctuation.definition.constant","text.html.markdown punctuation.definition.string"],settings:{foreground:"#81A1C1"}},{name:"[Markdown] String Other Link Description/Title",scope:["text.html.markdown constant.other.reference.link","text.html.markdown string.other.link.description","text.html.markdown string.other.link.title"],settings:{foreground:"#88C0D0"}},{name:"[Perl] Perl Sigils",scope:"source.perl punctuation.definition.variable",settings:{foreground:"#D8DEE9"}},{name:"[PHP] Meta Function-Call Object",scope:["source.php meta.function-call","source.php meta.function-call.object"],settings:{foreground:"#88C0D0"}},{name:"[Python] Decorator",scope:["source.python entity.name.function.decorator","source.python meta.function.decorator support.type"],settings:{foreground:"#D08770"}},{name:"[Python] Function Call",scope:"source.python meta.function-call.generic",settings:{foreground:"#88C0D0"}},{name:"[Python] Support Type",scope:"source.python support.type",settings:{foreground:"#88C0D0"}},{name:"[Python] Function Parameter",scope:["source.python variable.parameter.function.language"],settings:{foreground:"#D8DEE9"}},{name:"[Python] Function Parameter Special",scope:["source.python meta.function.parameters variable.parameter.function.language.special.self"],settings:{foreground:"#81A1C1"}},{name:"[Rust] Entity types",scope:"source.rust entity.name.type",settings:{foreground:"#8FBCBB"}},{name:"[Rust] Macro",scope:"source.rust meta.macro entity.name.function",settings:{fontStyle:"bold",foreground:"#88C0D0"}},{name:"[Rust] Attributes",scope:["source.rust meta.attribute","source.rust meta.attribute punctuation","source.rust meta.attribute keyword.operator"],settings:{foreground:"#5E81AC"}},{name:"[Rust] Traits",scope:"source.rust entity.name.type.trait",settings:{fontStyle:"bold"}},{name:"[Rust] Interpolation Bracket Curly",scope:"source.rust punctuation.definition.interpolation",settings:{foreground:"#EBCB8B"}},{name:"[SCSS] Punctuation Definition Interpolation Bracket Curly",scope:["source.css.scss punctuation.definition.interpolation.begin.bracket.curly","source.css.scss punctuation.definition.interpolation.end.bracket.curly"],settings:{foreground:"#81A1C1"}},{name:"[SCSS] Variable Interpolation",scope:"source.css.scss variable.interpolation",settings:{foreground:"#D8DEE9",fontStyle:"italic"}},{name:"[TypeScript] Decorators",scope:["source.ts punctuation.decorator","source.ts meta.decorator variable.other.readwrite","source.ts meta.decorator entity.name.function","source.tsx punctuation.decorator","source.tsx meta.decorator variable.other.readwrite","source.tsx meta.decorator entity.name.function"],settings:{foreground:"#D08770"}},{name:"[TypeScript] Object-literal keys",scope:["source.ts meta.object-literal.key","source.tsx meta.object-literal.key"],settings:{foreground:"#D8DEE9"}},{name:"[TypeScript] Object-literal functions",scope:["source.ts meta.object-literal.key entity.name.function","source.tsx meta.object-literal.key entity.name.function"],settings:{foreground:"#88C0D0"}},{name:"[TypeScript] Type/Class",scope:["source.ts support.class","source.ts support.type","source.ts entity.name.type","source.ts entity.name.class","source.tsx support.class","source.tsx support.type","source.tsx entity.name.type","source.tsx entity.name.class"],settings:{foreground:"#8FBCBB"}},{name:"[TypeScript] Static Class Support",scope:["source.ts support.constant.math","source.ts support.constant.dom","source.ts support.constant.json","source.tsx support.constant.math","source.tsx support.constant.dom","source.tsx support.constant.json"],settings:{foreground:"#8FBCBB"}},{name:"[TypeScript] Variables",scope:["source.ts support.variable","source.tsx support.variable"],settings:{foreground:"#D8DEE9"}},{name:"[TypeScript] Parentheses in Template Strings",scope:["source.ts meta.embedded.line meta.brace.square","source.ts meta.embedded.line meta.brace.round","source.tsx meta.embedded.line meta.brace.square","source.tsx meta.embedded.line meta.brace.round"],settings:{foreground:"#ECEFF4"}},{name:"[XML] Entity Name Tag Namespace",scope:"text.xml entity.name.tag.namespace",settings:{foreground:"#8FBCBB"}},{name:"[XML] Keyword Other Doctype",scope:"text.xml keyword.other.doctype",settings:{foreground:"#5E81AC"}},{name:"[XML] Meta Tag Preprocessor",scope:"text.xml meta.tag.preprocessor entity.name.tag",settings:{foreground:"#5E81AC"}},{name:"[XML] Entity Name Tag Namespace",scope:["text.xml string.unquoted.cdata","text.xml string.unquoted.cdata punctuation.definition.string"],settings:{foreground:"#D08770",fontStyle:"italic"}},{name:"[YAML] Entity Name Tag",scope:"source.yaml entity.name.tag",settings:{foreground:"#8FBCBB"}}]},lineNumbers:!0,showCopyButton:!0,autoImport:!0,skipLanguages:[],filepath:"/home/runner/work/docs/docs/versioned_docs/version-stable/tools/clients/fcl-js/authentication.mdx"};function p(e){const t=Object.assign({h1:"h1",p:"p",code:"code",ul:"ul",li:"li",h3:"h3",a:"a"},(0,r.ah)(),e.components);return g||f("CH",!1),g.Code||f("CH.Code",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"authentication",children:"Authentication"}),"\n",(0,n.jsxs)(t.p,{children:["The concept of authentication in FCL is tied closely to FCL's concept of ",(0,n.jsx)(t.code,{children:"currentUser"}),". In fact ",(0,n.jsx)(t.code,{children:"fcl.authenticate"})," and ",(0,n.jsx)(t.code,{children:"fcl.unauthenticate"})," are both aliases to ",(0,n.jsx)(t.code,{children:"fcl.currentUser.authenticate()"})," and ",(0,n.jsx)(t.code,{children:"fcl.currentUser.unauthenticate()"})," respectively. So let's look at ",(0,n.jsx)(t.code,{children:"currentUser"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"As a dapp developer, using FCL, our current thought is to enable three main pieces of functionality."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["How to know the ",(0,n.jsx)(t.code,{children:"currentUser"})," and if they are logged in."]}),"\n",(0,n.jsx)(t.li,{children:"How to log a user in."}),"\n",(0,n.jsx)(t.li,{children:"How to log a user out."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Due to the nature of how FCL works, logging a user in and signing a user up are the same thing."}),"\n",(0,n.jsx)(t.h1,{id:"knowing-things-about-the-current-user",children:"Knowing things about the current user"}),"\n",(0,n.jsx)(t.p,{children:"FCL provides two ways of getting the current users information. One way is a promise that returns a snapshot of the info, while the other way allows you to subscribe to info, calling a callback function with the latest info anytime it changes."}),"\n",(0,n.jsx)(t.h3,{id:"snapshot-of-current-user",children:"Snapshot of Current User"}),"\n",(0,n.jsx)(g.Code,{codeConfig:l,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"import * as ",props:{style:{color:"#81A1C1"}}},{content:"fcl ",props:{style:{color:"#8FBCBB"}}},{content:"from ",props:{style:{color:"#81A1C1"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:"@onflow/fcl",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"const ",props:{style:{color:"#81A1C1"}}},{content:"currentUser ",props:{style:{color:"#D8DEE9"}}},{content:"= await ",props:{style:{color:"#81A1C1"}}},{content:"fcl",props:{style:{color:"#D8DEE9"}}},{content:".",props:{style:{color:"#ECEFF4"}}},{content:"currentUser",props:{style:{color:"#D8DEE9"}}},{content:".",props:{style:{color:"#ECEFF4"}}},{content:"snapshot",props:{style:{color:"#88C0D0"}}},{content:"()",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"console",props:{style:{color:"#D8DEE9"}}},{content:".",props:{style:{color:"#ECEFF4"}}},{content:"log",props:{style:{color:"#88C0D0"}}},{content:"(",props:{style:{color:"#D8DEE9FF"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:"The Current User",props:{style:{color:"#A3BE8C"}}},{content:'", ',props:{style:{color:"#ECEFF4"}}},{content:"currentUser",props:{style:{color:"#D8DEE9"}}},{content:")",props:{style:{color:"#D8DEE9FF"}}}]}],lang:"javascript"},annotations:[]}]}),"\n",(0,n.jsx)(t.h3,{id:"subscribe-to-current-user",children:"Subscribe to Current User"}),"\n",(0,n.jsx)(g.Code,{codeConfig:l,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"import * as ",props:{style:{color:"#81A1C1"}}},{content:"fcl ",props:{style:{color:"#8FBCBB"}}},{content:"from ",props:{style:{color:"#81A1C1"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:"@onflow/fcl",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"// Returns an unsubscribe function",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"const ",props:{style:{color:"#81A1C1"}}},{content:"unsubscribe ",props:{style:{color:"#D8DEE9"}}},{content:"= ",props:{style:{color:"#81A1C1"}}},{content:"fcl",props:{style:{color:"#D8DEE9"}}},{content:".",props:{style:{color:"#ECEFF4"}}},{content:"currentUser",props:{style:{color:"#D8DEE9"}}},{content:".",props:{style:{color:"#ECEFF4"}}},{content:"subscribe",props:{style:{color:"#88C0D0"}}},{content:"(",props:{style:{color:"#D8DEE9FF"}}},{content:"currentUser ",props:{style:{color:"#D8DEE9"}}},{content:"=> ",props:{style:{color:"#81A1C1"}}},{content:"{",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"  console",props:{style:{color:"#D8DEE9"}}},{content:".",props:{style:{color:"#ECEFF4"}}},{content:"log",props:{style:{color:"#88C0D0"}}},{content:"(",props:{style:{color:"#D8DEE9FF"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:"The Current User",props:{style:{color:"#A3BE8C"}}},{content:'", ',props:{style:{color:"#ECEFF4"}}},{content:"currentUser",props:{style:{color:"#D8DEE9"}}},{content:")",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"}",props:{style:{color:"#ECEFF4"}}},{content:")",props:{style:{color:"#D8DEE9FF"}}}]}],lang:"javascript"},annotations:[]}]}),"\n",(0,n.jsx)(t.h1,{id:"actually-authenticating-and-unauthenticating",children:"Actually Authenticating and Unauthenticating"}),"\n",(0,n.jsxs)(t.p,{children:["The TL;DR is to call ",(0,n.jsx)(t.code,{children:"fcl.authenticate()"})," and ",(0,n.jsx)(t.code,{children:"fcl.unauthenticate()"})," respectively."]}),"\n",(0,n.jsx)(t.p,{children:"On Flow mainnet, you wont even need to configure anything for this to work, the users of your dapp will go through the authentication process and be able to use any FCL compatible wallet providers."}),"\n",(0,n.jsxs)(t.p,{children:["During development you will probably want to configure your dapp to use ",(0,n.jsx)(t.a,{href:"https://github.com/onflow/fcl-dev-wallet",children:(0,n.jsx)(t.code,{children:"@onflow/dev-wallet"})}),".\nThe ",(0,n.jsx)(t.a,{href:"/docs/guides/flow-app-quickstart",children:"Quick Start"})," guide will walk you through using it."]}),"\n",(0,n.jsxs)(t.p,{children:["We know this can all be fairly overwhelming, we are commited to help though. If you run into any problems, reach out to us on ",(0,n.jsx)(t.a,{href:"https://discord.gg/k6cZ7QC",children:"Discord"}),", we are more than happy to help out."]})]})}const m=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(p,e)})):p(e)};function f(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);