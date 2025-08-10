# Rhythmic

Satisfying type made easy. 

Creating print-like vertical rhythm for the web has always been an absolute pain, requiring tedious adjustments. Rhythmic tries to solve that problem, speeding up the process of lining up type, and other elements, to your baseline grid.

## Documentation

Documentation for supported languages can be found at `/src/language/[lang]/help.md`.

## Contributions Welcome!

We appreciate all contributions to this project! Before you get started, please take a moment to review our **[contribution guidelines](CONTRIBUTING.md)**.

---

### General Contributions

For general contributions, please follow these steps:

1.  **Open an issue:** Create a new issue and apply the "feature" label.
2.  **Describe your idea:** Explain the new feature or update you're considering.
3.  **Let's discuss:** We'll talk it through to find a good path forward.
4.  **Create a PR:** Once we're on the same page, submit a pull request.

---

### Translations 🌍

Translations are especially helpful in making this project accessible to a wider audience. If you'd like to contribute a translation:

1.  **Create translation files:** Add your translated content to `i18n.md` and `help.md`.
2.  **Update `supportedLanguages.js`:** Include your language code in this file.
3.  **Submit a Pull Request:** Create a pull request with your changes for review.

---

## Installation & Development

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Install Dependencies

```bash
npm install
```

### Start Development Server

This project uses [Vite](https://vitejs.dev/) for rapid development. To start a local development server with hot reloading:

```bash
npm run dev
```

The app will be available at the URL printed in your terminal (typically [http://localhost:5173](http://localhost:5173)).

### Building for Production

To create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist` directory.

### Previewing the Production Build

To preview the production build locally:

```bash
npm run preview
```

### Linting

To check for code style issues:

```bash
npm run lint
```

### Running Tests

To run the test suite:

```bash
npm test
```

---

## License 📜

This project is licensed under the terms of the **GNU Affero General Public License v3.0**. See the **[LICENSE](LICENSE)** file for full details.
