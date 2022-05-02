---
title: 'Public Virtual Auto-Properties and CodeRush'
date: Sat, 11 Feb 2012 21:36:17 +0000
draft: false
tags: ['C#', 'CodeRush', 'CodeRush', 'Programming', 'Template', 'Virtual']
---

Since starting to make the move towards utilizing NHibernate in most of my projects I have been a little frustrated by the need to make properties virtual. This is by no means a criticism of NHibernate just the tooling, specifically Visual Studio 2010 and CodeRush. Whilst CodeRush has templates for everything the virtual keyword dosn't seem to get a look in, fortunately it's not hard to add support. Thanks to [Rory Becker's article on Creating Virtual Methods](http://community.devexpress.com/blogs/rorybecker/archive/2011/01/19/coderush-template-creating-virtual-methods.aspx) I had everything I needed to create the template. Auto-properties are actually significantly less complex than methods as they are composed of little more than the type, property name and the { get; set; } block. Templates are easy enough to create from the DevExpress Options Menu (DevExpress Menu -> Options) you jump to the templates page quickly with the search in the top left hand corner. I prefer to organize my custom templates into their own folder, then I can easily import and export these between machines via drop box. [![](/uploads/2012/02/CustomTemplates.png "CustomTemplates")](/uploads/2012/02/CustomTemplates.png) 1) Right click your preferred folder and select "New Template" inter "u?Type?" and press enter/OK. 2) Set the Context - I copied the context of my template from a?Type? and removed the InStruct directive, as virtual is not valid in structures, the Use: field should read something like this:

```
**((InClass or InInterface) and OnEmptyLine) but not (InComment or InMethod or InPreprocessorDirective or InProperty or InString or VS2002 or VS2003 or VS2005)**
```

It's not critical you get this right, as it is probably going to work where you want it, if the above is wrong it may work where you don't want it. 3) Enter the expansion

```
**public virtual «?Get(Type)» «Caret»«Field(PropertyName)»«BlockAnchor» { get; set; }**
```

This bit is essential to get right:

*   "public virtual" are string literals
*   the ?Get(Type) StringProvider is a macro that takes the ?Type? part of your template and emits the type of the property
*   Caret is the position of the Caret unsurprisingly
*   Field(PropertyName) gives you a place holder to enter the name of your property
*   BlockAnchor highlights the text between the Caret and BlockAnchor making the PropertyName field instantly replacable
*   { get; set; } is again a string literal

With that you are all set and can save and test out your new template in the code editor. Simply move to an empty line inside a class and type

```
**us<space>**
```

This should then expand to

```
public virtual string PropertyName { get; set; }
```