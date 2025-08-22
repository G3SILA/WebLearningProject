# Display Property

1. block element 
    - takes the entire line
    - no matter the width 
    - e.g. paragraph `<p>`

2. inline-block element
    - as much as space needs
    - e.g. image `<img>`

3. inline element 
    - within a line of text
    - e.g. `<strong>`

## display - switch between block and inline-block element
- block => inline-block
- `display: inline-block`     

- inline-block => block 
- `display: block`


## vertical and horizontal layout 
- nested layout 
- vertical layout: block
- horizontal layout: inline-block
**problem** 
- alignment issue: unwanted space between `<div>` element
- e.g. potential spaces in horizontal layout 


# CSS Grid

``` html 
    <style>
        .div-grid {
            display: grid;
            grid-template-columns: 10px 10px; /* 2 colums */ 
            row-gap: 10px;
            column-gap: 20px; 
        }
    </style>

```

# Flexbox

``` html 
    <style>
        .div-flexbox {
            display: flex;
            flex-direction: row; 
            align-items: center;    /* vertical */ 
            justify-content: start; /* horizontal */
        }
    </style>

```
horizontal: start, end, space-between
vertical: stretch, start, end, center

# Flexbox Vs. Grid 

## Similarities
- 1fr == flex: 1
- auto alignment 

## Differences
Grid:   
- less flexible: layout predetermined by the grid style, elements inside follow
- setup column width in advance    

Flexbox:   
- more flexible: layout determined by each element 
- each element take the space need 
  (similar to inline block but still maintain vertical alignment)   
