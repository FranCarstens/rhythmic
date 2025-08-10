# Contributing to Rhythmic

Thank you for considering contributing to Rhythmic! This document provides clear guidelines tailored to our project structure and workflow.

## Code of Conduct

Please review our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing. We are committed to fostering an open and welcoming environment.

## How Can I Contribute?

There are many ways to contribute, from reporting bugs to writing code, improving documentation, or helping with translations. It's a small project, but hey, maybe you find a place here, too!

### Translations

We especially welcome translations to make Rhythmic accessible to more users!

1. **Add translation files:** Create or update both `i18n.md` and `help.md` in `src/language/<lang>/`
2. **Update supported languages:** Add your language code to `src/language/supportedLanguages.js`
3. **Submit a Pull Request** following the workflow below

### Questions, Bugs, and Feature Requests

For all inquiries, please **open a new issue** on the [Issues page](https://github.com/FranCarstens/rhythmic/issues) with the appropriate label:

* **Questions** 🤔: Use the "question" label - we'll do our best to help you out!
* **Bugs** 🐛: Use the "bug" label and include:
  - Clear title summarizing the issue
  - Steps to reproduce
  - Expected vs. actual behavior
  - Environment details (OS, browser, Node.js version)
  - Screenshots/error messages if helpful
* **Feature Requests** ✨: Use the "feature" label and describe your idea clearly

**Important**: Check existing issues first to avoid duplicates. **Please do not submit a pull request for a major feature without prior discussion.** We'll use the issue to discuss your idea, its feasibility, and find the best path forward.

## Development Workflow

### Setup
1. **Fork and clone:**
   ```bash
   git clone git@github.com:YOUR_USERNAME/rhythmic.git
   cd rhythmic
   npm install
   ```

2. **Create a branch:**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b bugfix/your-bug-description
   ```

3. **Development commands:**
   - `npm run dev` - Start development server
   - `npm run build` - Build for production  
   - `npm run lint` - Check code style
   - `npm run test` - Run tests

### Your First Code Contribution

If you're new to open source or contributing to this project, look for issues labeled **"good first issue"** on the [Issues page](https://github.com/FranCarstens/rhythmic/issues). New ideas are awesome!
- React components: `src/components/`
- Utilities: `src/utils/`
- Tests: `src/utils/*.test.js`
- Translations: `src/language/<lang>/` (both `i18n.md` and `help.md`)
- Update `src/language/supportedLanguages.js` for new languages
- Static assets: `public/`

### Code Standards
- Follow ESLint rules in `.eslintrc.cjs`
- Use 2-space indentation
- Write tests for new features and bug fixes
- Use clear, present-tense commit messages (e.g., `feat: add font search feature`)

### Submitting Changes
1. **Test your changes:** Run `npm run test` and `npm run lint`
2. **Commit and push:**
   ```bash
   git commit -m "feat: Add font search feature"
   git push origin feature/your-feature-name
   ```
3. **Create a Pull Request** with:
   - Clear title and description
   - Link to relevant issues (`Fixes #123`, `Closes #456`)
   - One logical change per PR

## Review Process

All contributions are reviewed by project maintainers. We aim for prompt reviews and constructive feedback. Please be responsive to review comments.

## Getting Help

Need assistance? Open an issue on GitHub or contact maintainers directly.

## License

By contributing, you agree that your contributions will be licensed under the project's [LICENSE](LICENSE.md).
