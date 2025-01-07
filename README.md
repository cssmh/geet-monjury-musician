# React + Vite Project

This template provides a minimal setup to get **React** working with **Vite** for fast development. It includes **Hot Module Replacement (HMR)** and some **ESLint rules** to get you started quickly.

## About This Project

This project is a **music streaming platform** designed to provide users with an immersive experience of listening to the latest tracks, watching music videos, and exploring artists' profiles. The platform is built using **React** and **Vite** to ensure fast performance and smooth user interaction.

Key features of the platform include:

- **Music Videos**: Users can watch featured music videos in high-quality playback.
- **Music Shorts**: Short music videos for quick entertainment and engagement.
- **Responsive Design**: The website is fully responsive, ensuring a smooth experience across devices of all sizes.
- **User-Friendly Interface**: Easy navigation, a sleek and modern design, and intuitive features for a better user experience.

## Features

- React 18.x
- Vite 4.x for fast bundling and HMR
- ESLint configuration for code linting and consistency
- Support for JSX and modern JavaScript features
- Support for Fast Refresh using Vite plugins

## Official Vite Plugins

### 1. `@vitejs/plugin-react`

This plugin enables React Fast Refresh with **Babel**:

- It uses **Babel** to handle JSX transformation.
- Provides fast hot module replacement for a better development experience.

To learn more about the `@vitejs/plugin-react` plugin, check out its [documentation](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md).

### 2. `@vitejs/plugin-react-swc`

An alternative to the `@vitejs/plugin-react` plugin, it uses **SWC** (a Rust-based compiler) for faster JSX transformation:

- Provides **Fast Refresh** using **SWC** for better performance.
- It’s an excellent choice for projects requiring speed and performance.

Learn more about `@vitejs/plugin-react-swc` [here](https://github.com/vitejs/vite-plugin-react-swc).