---
title: 'Orchard Placement ID Strings Must Match'
date: Tue, 31 May 2011 19:12:04 +0000
draft: false
tags: ['Programming']
---

I spent far too long trying to fix a error while developing an Orchard Module. To explain further Orchard CMS derives a lot of its flexibility by representing content in highly abstracted terms called shapes, these shapes are dispatched by the module that wishes to output content then rendered at the end. In between these shapes can be manipulated by themes or modules to change how the information is displayed. It takes a while to get your head around it, but its a great system... _until you make a mistake!_ Modules define where shapes are placed through a file called **placement.info** your module dispatches shapes through it's Driver (a class inherited from ContentPartDriver)

```
public class DefinitionListPartDriver : ContentPartDriver<DefinitionListPart> {

    ...

    protected override DriverResult Display(
        DefinitionListPart part,
        string displayType,
        dynamic shapeHelper) {

        return ContentShape("Parts\_DefinititionList", 
            () => shapeHelper.Parts\_DefinitionList(
                        ContentPart: part, 
                        DefinitionList: part.Entries));
    }

    ...

}

```

You may have seen the mistake already, but just in case your not sure here is my placement.info file:

```
<Placement>
    <Place Parts\_DefinitionList\_Edit="Content:11"/>
    <Place Parts\_DefinitionList="Content:11"/>
</Placement>
```

Yep, when I dispatched the shape it had an extra it in Definition... oh well, remember to check that first next time.