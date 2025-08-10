# Rhythmic

Satisfying type made easy

Creating print-like vertical rhythm for the web has always been an absolute pain, requiring tedious adjustments. Rhythmic tries to solve that problem, speeding up the process of lining up type, and other elements, to your baseline grid.

## Table of Contents
1. [Terminology](#terminology)
2. [Tools](#tools) > [Adjust Grid](#adjust-grid)
3. [Tools](#tools) > [Manage Fonts](#manage-fonts)
4. [Tools](#tools) > [Manage Selectors](#manage-selectors)
5. [Tools](#tools) > [Adjust CSS](#adjust-css)

## Terminology {#terminology}

### Baseline Grid
The primary horizontal grid, divided into equal segments based on a user-defined value. All elements ideally align to this grid for consistent vertical rhythm.

### Subgrid
A finer horizontal grid that divides each baseline segment into smaller units, allowing for more precise alignment when the baseline grid spacing is too coarse.

### Sample Baseline
The invisible line your sample text "sits" on in the preview area. Use this as a reference point when aligning type to the baseline or subgrid.

## Tools {#tools}

### Adjust Grid {#adjust-grid}

Adjust your baseline grid and font scaling to suit your design. For a more pleasing vertical rhythm consider using a typographic scale. You can read more about typographic scales at [More Meaningful Typography](https://alistapart.com/article/more-meaningful-typography/).

In short, your typographic scale defines the percentage increase in font size between heading levels.

E.g. if `h4` = `1rem`:
- `h3` = `1.5rem`
- `h2` = `2.25rem`
- `h1` = `3.375rem`

A great resource for exploring more complex typographic scales is [Modular Scale](https://www.modularscale.com/).

| Tool                | Description                                              |
| :------------------ | :------------------------------------------------------- |
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

### Manage Fonts {#manage-fonts}

Load your fonts from a hosted service like Google Fonts or CDN Fonts, or use your own hosted URL.

| Tool               | Description                                                                                                                |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------- |
| **Family**         | Set the font family, e.g. `Open Sans` or `Bachelor`                                                                        |
| **URL**            | Set the font URL, e.g. `https://fonts.googleapis.com/css?family=Open+Sans` or `https://fonts.cdnfonts.com/css/bachelor-2` |
| **Selected Fonts** | A list of selected fonts with actions<br /> - set default font family, indicated by ✢<br /> - remove font family           |

### Manage Selectors {#manage-selectors}

Add and update CSS Selectors for your project. Start with your core typographic elements (like h1, p, ul, etc.), but you can add any CSS selector you need.

| Tool                | Description                               |
| :------------------ | :---------------------------------------- |
| **Add Selector**    | Add a new CSS selector                    |
| **Select Selector** | Select the CSS Selector you want to style |

### Adjust CSS {#adjust-css}

This is where the magic happens. We're adjusting our sample text as follows:

- The line height is visually pleasing.
- All the lines lie on our baseline or subgrid.
- The top margin is minimized.
- And the next element's top margin aligns cleanly with the baseline of the last line of text.

| Tool              | Description                                                                                    |
| :---------------- | :--------------------------------------------------------------------------------------------- |
| **Text Sample**   | A sample of the text you are styling.                                                          |
| **font-family**   | Select the font family you want to use for this selector, matching one of your preloaded fonts |
| **font-size**     | Set the font size in rem                                                                       |
| **Unit**          | Switch between rem and px, output is in rem                                                    |
| **Magic**         |                                                                                                |
| **line-height**   | Adjust the element's line height                                                               |
| **top**           | Adjust the relative top of the element                                                         |
| **padding-top**   | Adjust the element's top padding                                                               |
| **margin-bottom** | Adjust the element's bottom margin                                                             |

### Text Sample

- Adjusting multiline text will generate more accurate results.
- Type "Lorem" to automatically generate some sample text.
- Supports html tags, so you can e.g. provide `li`s for your `ol` or `ul` selectors.

#### Line Height

  - **Adjust until**
  - The sample text’s baseline runs parallel to the baseline grid
  - Each line of text is equidistant from the baseline or subgrid, whichever matches your intent
    - For comfortable reading consider somewhere between 120%-180% of the font-size
  - After this adjustment, your sample text's baseline spacing should match the grid — even if it's not aligned to it yet.

#### Top 

  - Adjust the top offset (not margin) until the sample text's baseline is on the baseline grid
  - This will more often than not be a negative value

#### Padding Top

  - Set the top padding in pixels
  - Adjust the top padding so the sample text's baseline is on the closest subgrid line to the top, without leaving the white space

#### Margin Bottom

  - Set the bottom margin in pixels
  - Adjust the bottom margin until the sample text's baseline is on the red box