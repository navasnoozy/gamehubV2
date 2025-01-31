
# GameHub

GameHub is a game discovery application built using React, TypeScript, Chakra UI, and Vite. The app allows users to explore a wide range of video games, filter them by genre and platform, and view detailed game information such as ratings, platforms, and game scores.

## Features

- **Game Grid**: Displays games in a grid layout.
- **Genre Filter**: Allows users to filter games by genre.
- **Platform Filter**: Allows users to filter games by platform.
- **Search**: Search games by name or keyword.
- **Responsive Design**: The app is fully responsive and adapts to various screen sizes.

## Technologies Used

- **React**: For building the UI components and handling state.
- **TypeScript**: For adding type safety and improving code quality.
- **Chakra UI**: For styling and component design.
- **Vite**: For fast and optimized development build.
- **Axios**: For making API requests to fetch game data.
- **React Icons**: For adding icons to the platform filters.

## File Structure

```
gamehub/
├── src/
│   ├── assets/
│   │   ├── logo.webp
│   │   └── noImgThumbnail.jpg
│   ├── components/
│   │   ├── hooks/
│   │   │   ├── useData.ts
│   │   │   ├── useGames.ts
│   │   │   ├── useGenre.ts
│   │   │   └── usePlatforms.ts
│   │   ├── ui/
│   │   ├── ErrorBoundary.tsx
│   │   ├── GameCard.tsx
│   │   ├── GameGrid.tsx
│   │   ├── GameHeading.tsx
│   │   ├── GenreList.tsx
│   │   ├── MetaCriticScore.tsx
│   │   ├── NavBar.tsx
│   │   ├── PlatformFilter.tsx
│   │   ├── PlatformIcons.tsx
│   │   ├── SearchGames.tsx
│   │   ├── Skeletons.tsx
│   │   ├── SortGames.tsx
│   │   └── StartRating.tsx
│   ├── services/
│   │   ├── api-Client.ts
│   │   └── URLImageCrop.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/navasnoozy/game-hub.git
   ```

2. Navigate into the project directory:

   ```bash
   cd game-hub
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

   The app will be accessible at `http://localhost:3000`.

## API  
 baseURL: `https://api.rawg.io/api`,


## Development

To build the project for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## License

This project is open-source and available under the MIT License.