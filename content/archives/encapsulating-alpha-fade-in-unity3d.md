---
title: 'Encapsulating Alpha Fade in Unity3d'
date: Fri, 12 Nov 2010 20:09:31 +0000
draft: false
tags: ['Programming', 'Scripting', 'Unity3d']
---

Several days into my late Unity3d project I realised that the was a bulk of code designed solely to make an object invisible by fading it out of the scene. The code was not complex although because of the way it was all in one class it appeared complex. After doing some research into the best way to go about making this change, realised it was both convenient and logical to extract the code into a separate script and attaching that to the object that I wished to apply the effect to. This meant that instead of nested if-statements for state management in a script attached to the Main Camera I was able to make declarative statements: 

```
GameObject.Find("TargetObject").GetComponent<SmoothAlpha>().MakeVisible();
```

I have named the script SmoothAlpha only by my convention no actual smoothing or damping of the alpha value, it is simply a linear reduction of the materials alpha value. There are many improvements that could be made to the script, some of which I may well do over the coming weeks:

*   Should include a delegate call back to signal when the fade is complete.
*   Should include methods to instantly make an object (in)visible.
*   Should support changing the alpha of child GameObjects in unison with the parent.

In have included the full script below the cut.

```
using UnityEngine;
using System.Collections;

public class SmoothAlpha : MonoBehaviour {
  protected Color origionalColor;
  protected Color transparantColor;
  protected float stage;
  
  private bool m_isVisible = true;
  private bool m_isTransitioning = false;
  
  public float speed = 1;
    
  public bool isVisible
  {
    get { return m_isVisible; }
  }

  // Use this for initialization
  void Start ()
  {
    origionalColor = transform.renderer.material.color;
    transparantColor = new Color(origionalColor.r, origionalColor.g, origionalColor.b, Color.clear.a);
  }
  
  // Update is called once per frame
  void Update ()
  {
    if (!m_isTransitioning)
      return;
    
    stage += Time.deltaTime \* speed;

    if (m_isVisible)
    {
      transform.renderer.material.color = Color.Lerp(origionalColor, transparantColor, stage);
      if (transform.renderer.material.color == transparantColor)
      {
        m_isTransitioning = false;
        m_isVisible = false;
      }
    }
    else
    {
      transform.renderer.material.color = Color.Lerp(transparantColor, origionalColor, stage);
      if (transform.renderer.material.color == origionalColor)
      {
        m_isTransitioning = false;
        m_isVisible = true;
      }
    }
  }
  
  public void MakeInvisible()
  {
    if (m_isTransitioning)
      return;
    
    if (!m_isVisible)
      return;
    
    stage = 0F;
    
    m_isTransitioning = true;
  }
  
  public void MakeVisible()
  {
    if (m_isTransitioning)
      return;
    
    if (m_isVisible)
      return;
    
    stage = 0F;
    
    m_isTransitioning = true;
  }
}

```