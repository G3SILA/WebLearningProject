# resonsive design

## media query

1. works when screen size <= 750px
2. works when screen size between 751 and 999    
``` CSS
@media (max-width: 750px) {
    .video-grid {
        grid-template-columns: 1fr 1fr;
    }
}

@media (min-width: 751px) and (max-width: 999px) {
    .video-grid {
        grid-template-columns: 1fr 1fr 1fr;
    }
}
```
**!!! Better to put @media section at the end**
It can be covered by later style

# Inheritance 
- set the style on the outer element would pass down the style down to all elements inside
- not applicable to all style element
- mostly for text:   
    - color
    - font-family
    - font-weight
- **CSS specificity**
- priority: inheritance has lower priority than the specific style of individual element 


# semantic element 
- Have meanings to screen readers, search engines, etc.
- Works same as div
    - header
    - nav (navigate)
    - main (main content)
    - section (section inside main)
