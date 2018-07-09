# Grocery List

This is a simple web-based grocery list application. It allows the user to track a list of grocery items to purchase.

### Install & Launch

To run this application, please ensure you have Visual Studio (up-to-date with .Net Core 2.0) and Angular CLI installed on your computer.

Clone the GitHub repository. 

```
    $ git clone https://github.com/jenleap/grocery-list.git
```

There will be two folders, one for the backend API and one for the frontend: GroceryAPI and frontend.

First, launch the API. Open the project in Visual Studio by selecting the solution file (.sln) from the GroceryAPI folder. Once the project is open, from the Package Manager Console, run the command:

```
    $ update-database
```
You should not need to update the default connection string (in appsetting.json) but you may do so if you prefer to use a different database.

Once this has completed, run the project. (Click the IIS Express button with the green arrow.)

The browser will open and the API is running at localhost:64018.

Now, launch the frontend. From the command prompt, cd into the frontend folder, run the commands:

```
    $ npm install
    $ ng serve
```

You can now access the application from the url: localhost:4200.
