---
title: 'Lack of AutoEllipsis support in ToolStripSystemRenderer'
date: Sun, 07 Mar 2010 21:03:04 +0000
draft: false
tags: ['dotnet', 'C#', 'EVEMon', 'Programming', 'WinForms']
---

[AutoEllipsis](http://msdn.microsoft.com/en-us/library/system.windows.forms.label.autoellipsis%28VS.85%29.aspx) is a property introduced to System.Windows.Forms.Label with .NET 3.0, which in the event of the text overflowing the rendering rectangle of the Label will trim the end and add a Ellipsis ("…"), if this does occur the [ToolTip](http://msdn.microsoft.com/en-us/library/system.windows.forms.tooltip.aspx) for the label will also be set to the full (untrimmed text). Unfortunately this functionality is not available for [ToolStripStatusLabel](http://msdn.microsoft.com/en-us/library/system.windows.forms.toolstripstatuslabel.aspx). To make things worse in the event the text overflows it disappears completely. This bug, oversight, feature or whatever you want to call it cause some confusion after the release of EVEMon 1.3.0.1912. Several people assumed the new more verbose status bar was broken, being empty and all. We put together a kludge fix, which would set the text and if it overflowed try to guess the length with [Graphics.MeasureString](http://msdn.microsoft.com/en-us/library/6xe5hazb.aspx). This worked fairly well, it cause some flickering when resizing the window and would leave a small gap on the right hand side of the [StatusStrip](http://msdn.microsoft.com/en-us/library/system.windows.forms.statusstrip.aspx). I knew there must be a better way, and seeing an article about the [StringFormat](http://msdn.microsoft.com/en-us/library/system.drawing.stringformat.aspx) class reminded me of the need to find it. Searching about a bit found me a post on Joel on Software, I refined the code a little and came up with this (which is basically identical to Tom's solution):

```
public class AutoEllipsisToolStripRenderer : ToolStripSystemRenderer
{
  protected override void OnRenderItemText(ToolStripItemTextRenderEventArgs e)
  {
    ToolStripStatusLabel label = e.Item as ToolStripStatusLabel;

    if (label == null)
    {
      base.OnRenderItemText(e);
      return;
    }

    TextRenderer.DrawText(e.Graphics,
      label.Text,
      label.Font,
      e.TextRectangle,
      label.ForeColor,
      TextFormatFlags.EndEllipsis);
  }
}
```

You need to wire this code into your StatusStrip:

```
this.MainStatusStrip.Renderer = new AutoEllipsisToolStripRenderer();
```

To the ToolStripStatusLabel will also need it's Spring property set to true, and if you want the text left aligned the TextAlign Property will need to be set to MiddleLeft. If you want the ToolTip to work correctly the StatusStrip will need to have ShowItemToolTips set to work, and the ToolStripStatusLabel AutoToolTip set to true. It isn't perfect as the ToolTip is displayed when the text is not truncated, but it is close enough for my purposes. I am exploring WPF at the moment, I was glad to see the default behaviour of a [StatusBar](http://msdn.microsoft.com/en-us/library/system.windows.controls.primitives.statusbar.aspx) was to just stop rendering the text at the bounds of control, an ellipsis could be added with the [TextTrimming](http://msdn.microsoft.com/en-us/library/system.windows.controls.textblock.texttrimming.aspx) and [TextWraping](http://msdn.microsoft.com/en-us/library/system.windows.controls.textblock.textwrapping.aspx) properties:

```
Some Text Goes Here, this text may be very long as demonstrated here. In the event we...
```