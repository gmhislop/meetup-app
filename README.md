# Meetup App
This is a simple Meetup App built with React that allows users to view and add meetups. The app has two pages - the All Meetups page and the Favorites page.

## Technologies Used:
- React
- React Router
- CSS Modules
- Firebase

## Getting Started
To run the app locally, follow these steps:

1. Clone this repository to your local machine using `https://github.com/gmhislop/meetup-app.git`
2. Navigate to the project directory using `cd meetup-app`
3. Install the required dependencies using `npm install`
4. Start the app using npm start
5. Open `http://localhost:3000` in your web browser to view the app

## App Pages
### All Meetups Page
The All Meetups page displays a list of all the meetups stored in the app's database. Each meetup is displayed as a card with its title, image, address, and description.

Users can click on a meetup card to view more details about the meetup, such as the date and time, the number of attendees, and a map showing the location of the meetup.

Users can also add a new meetup by clicking on the "Add Meetup" button at the top of the page. This will take them to the New Meetup page, where they can enter the details of the new meetup.

### Add Meetup Page
The Add Meetup page allows users to add a new meetup to the app's database. The page has input fields for the meetup title, image URL, address, and description.

Users can enter the details of the new meetup and click on the "Add Meetup" button to save the meetup to the database. After the meetup is added, the user is redirected to the All Meetups page, where they can see the new meetup in the list of meetups.

### Favorites Page
The Favorites page displays a list of the user's favorite meetups. Users can add a meetup to their favorites by clicking on the "Add to Favorites" button on the All Meetups page.

If the user has not added any meetups to their favorites yet, a message is displayed prompting them to start adding some.

## Code Structure
The code is organized into the following directories and files:

- src/components/: Contains the reusable UI components used in the app
- src/pages/: Contains the page components used in the app
- src/store/: Contains the context and reducer used for managing the app's state
- src/App.js: The root component of the app
- src/index.js: The entry point of the app
- public/: Contains the static assets of the app

## Contributing
Contributions to this project are welcome. If you find a bug or want to suggest a new feature, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for more information.
