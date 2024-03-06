# Rhythmic

Satisfying type made easy

## Grid

### Adjust Grid

Adjust your baseline grid and font scaling to suit your design. For a more pleasing vertical rhythm consider using a typographic scale. You can read more about typographic scales at [More Meaningful Typography](https://alistapart.com/article/more-meaningful-typography/).

In short, your typographic scale determines by which percentage each heading will increase in size.

E.g. if `h4` = `1rem`, `h3` = `1.5rem`, `h2` = `2.25rem`, `h1` = `3.375rem`

A great resource for exploring more complex typographic scales is [Modular Scale](https://www.modularscale.com/).

| Tool                | Description                                              |
| ------------------- | -------------------------------------------------------- |
| **Trash**           | Reset app to defaults                                    |
| **Droplet**         | Load sample configuration                                |
| **Golden**          | Convenient golden ratio typographic scale preset         |
| **Minor Third**     | Convenient minor third ratio typographic scale preset    |
| **Custom Scale**    | Adjust the scale to match your design                    |
| **Set REM px**      | Set your root font size in pixels                        |
| **Heading at Root** | Set which heading will share a font size with your p tag |
| **Generate**        | Generate a typographic scale based on your settings      |
| **Baseline**        | Set the pixel value of your baseline                     |
| **Subgrid**         | Set the number of subgrid rows                           |

## Fonts

### Manage fonts

Load your front fonts from a hosted service like Google Fonts or CDN Fonts, or use your own hosted link.

| Tool               | Description                                                                                                                |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------- |
| **Family**         | Set the font family, e.g. `Open Sans` or `Bachelor`                                                                        |
| **Link**           | Set the font link, e.g. `https://fonts.googleapis.com/css?family=Open+Sans` or `https://fonts.cdnfonts.com/css/bachelor-2` |
| **Selected Fonts** | A list of selected fonts with actions<br /> - set default font family, indicated by ✢<br /> - remove font family           |

## Selectors

### Manage selectors

Add and update CSS Selectors for your project. It's a good idea to start with your basic typographic elements, but you can add any CSS selector you need to style.

| Tool                | Description                               |
| :------------------ | :---------------------------------------- |
| **Add Selector**    | Add a new CSS selector                    |
| **Select Selector** | Select the CSS Selector you want to style |

## CSS

### Adjust Selector

This is where the magic happens. We're adjust our sample text so:

- The line height is visually pleasing.
- All the lines lie on our baseline or subgrid.
- The top margin is minimized.
- And the next element's top margin butts up nicely to the baseline of our last text line.

| Tool              | Description                                                                                                                                                |
| :---------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Text Sample**   | A sample of the text you are styling. Adjusting multiline text will generate more usable results. Type "Lorem" to automatically generate some sample text. |
| **Font Family**   | Select the font family you want to use for this selector, matching one of your preloaded fonts                                                             |
| **Font Size**     | Set the font size in rem                                                                                                                                   |
| **Unit**          | Switch between rem and px, output is in rem                                                                                                                |
| **Magic**         |                                                                                                                                                            |
| **Line Height**   | Adjust the line height                                                                                                                                     |
| **Top**           | Adjust the relative top of the selector                                                                                                                    |
| **Padding Top**   |                                                                                                                                                            |
| **Margin Bottom** |                                                                                                                                                            |

#### Line Height

  - **Adjust until**
  - Your sample baseline is parallel to the baseline grid
  - Each line of text is equidistant from the baseline or subgrid, whichever matches your intent
    - For comfortable reading consider somewhere between 120-180% of the font-size
  - At this stage your sample baseline does not have to be on the baseline grid, but it should be parallel

#### Top 

  - Adjust the top offset (not margin) until the sample baseline is on the baseline grid
  - This will more often than not be a negative value

#### Padding Top

  - Set the top padding in pixels
  - Adjust the top padding to so the sample baseline is on the closest subgrid line to the top, without leaving the white space

#### Margin Bottom

  - Set the bottom margin in pixels
  - Adjust the bottom margin until the sample baseline is on the red box