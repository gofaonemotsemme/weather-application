# Weather App

This is a simple weather application built using the T3 Stack (Next.js, TypeScript, tRPC, Tailwind CSS, Prisma, NextAuth.js - *Note: This project currently utilizes Next.js and TypeScript from the T3 Stack, along with TanStack Query. tRPC, Tailwind CSS, Prisma, and NextAuth.js are part of the T3 Stack but are not actively used in this minimal implementation*), enhanced with TanStack Query for data fetching. It integrates with the OpenWeatherMap API to display current weather and forecast information for a specified city.

## Features

* Enter a city name to get the current weather and a 3-hour forecast.
* Displays temperature in Celsius (°C).
* Handles errors gracefully, showing informative messages for invalid cities or API issues.
* Provides a loading state while fetching data.

## Technologies Used

* **Next.js**: React framework for building server-rendered and statically generated applications. Utilizes the App Router for routing and API endpoints.
* **TypeScript**: Superset of JavaScript that adds static typing for improved code maintainability and developer experience.
* **TanStack Query (`react-query`)**: Powerful asynchronous state management library for fetching, caching, synchronizing, and updating server state in React applications. It simplifies data fetching and provides features like caching, retries, and background updates.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd <your_project_name>
    ```

2.  **Install dependencies:**
    ```bash
    npm install  # or yarn install or pnpm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of the project and add your OpenWeatherMap API key:
    ```
    OPENWEATHERMAP_API_KEY=YOUR_API_KEY
    ```
    **Note:** You need to sign up for a free API key at [https://openweathermap.org/api](https://openweathermap.org/api).

4.  **Run the development server:**
    ```bash
    npm run dev # or yarn dev or pnpm dev
    ```

    Open your browser and navigate to `http://localhost:3000`.

## Temperature Unit

The application currently displays temperature in **Celsius (°C)**. To change this to Fahrenheit (°F), you would need to modify the `units` parameter in the API calls within `src/pages/api/weather.ts` from `metric` to `imperial`.

## Design Decisions

* **Component Separation**: The UI is broken down into reusable components (`CityInput`, `WeatherDisplay`, `LoadingState`, `ErrorMessage`) to promote code organization, maintainability, and reusability. Each component has a specific responsibility.
* **API Route for Key Security**: The OpenWeatherMap API key is handled on the server-side using a Next.js API route. This prevents exposing the API key in the client-side code, enhancing security.
* **TanStack Query for Data Fetching**: `react-query` was chosen for its robust features in managing server state. It simplifies data fetching, caching, and handling loading and error states, leading to a better user experience and cleaner code compared to manual state management.
* **TypeScript for Type Safety**: Using TypeScript ensures type safety throughout the application, catching potential errors during development and improving code readability.
* **Minimal Styling**: The focus of this implementation is on functionality. Basic inline styles are used for layout. More sophisticated styling (e.g., using Tailwind CSS, as initially included in the T3 Stack) could be added in future iterations.
