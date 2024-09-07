# Pizza Ordering App

This is a React-based pizza ordering web application, built with Vite and styled using Tailwind CSS. It displays a list of pizzas, allows users to view details for each pizza, and place an order. The app is integrated with a backend API that provides pizza data.

## Features

- Browse a list of pizzas with images, names, prices, and ingredients.
- View detailed information about each pizza.
- Add pizzas to the cart and proceed with the checkout process.

## Technologies Used

- **Frontend**: Vite (React), React Router, Tailwind CSS
- **Backend API**: Flask (Python)
- **State Management**: React Hooks
- **Styling**: Tailwind CSS

## Getting Started

### Prerequisites

To run this project locally, you need to have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/pizza-ordering-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd pizza-ordering-app
   ```

3. Install the necessary dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   The app will now be running on `http://localhost:5173`.

### Tailwind CSS

This project is styled using **Tailwind CSS**, a utility-first CSS framework. No additional setup is needed as it's already configured in the project. You can directly use Tailwind's utility classes in your React components.

## API Integration

This React app fetches pizza data from a custom-built API. The API provides information such as pizza name, price, ingredients, and image.

The API repository is available [here](https://github.com/Rutiktorambe/PizzaOrderAPI).

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode. Open `http://localhost:5173` to view it in the browser.
- `npm run build`: Builds the app for production.
- `npm run serve`: Serves the production build locally.

## License

This project is licensed under the MIT License.
