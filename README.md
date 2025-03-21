# Ramen Menu App

## Overview
The **Ramen Menu App** is a simple JavaScript application that dynamically displays a list of ramen dishes and allows users to add new ones. Users can click on ramen images to view more details and submit new ramen entries via a form.

## Features
- Displays a list of ramen dishes with images and names.
- Clicking on a ramen image updates the details section.
- Users can add new ramen dishes using a form.
- Automatically updates the displayed menu when a new ramen is added.

## Technologies Used
- HTML
- CSS
- JavaScript (DOM Manipulation)

## Installation & Usage
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/ramen-menu-app.git
   ```
2. Navigate to the project folder:
   ```sh
   cd ramen-menu-app
   ```
3. Open `index.html` in your browser.

## File Structure
```
ramen-menu-app/
│-- images/              # Folder containing ramen images
│-- index.html           # Main HTML file
│-- styles.css           # CSS for styling
│-- script.js            # JavaScript logic
│-- README.md            # Documentation
```

## How It Works
1. The `ramens` array in `script.js` contains an initial list of ramen dishes.
2. `displayRamens()` dynamically creates ramen items and displays them in the menu.
3. Clicking on a ramen item updates the ramen details section.
4. Users can add a new ramen via a form, which updates the `ramens` array and refreshes the menu.

## Future Enhancements
- Allow users to upload custom images.
- Implement local storage to save added ramen dishes.
- Improve UI with more styling and animations.

## License
This project is open-source and available under the MIT License.

