# Grocery List

This is a simple web-based grocery list application. It allows the user to track a list of grocery items to purchase.

### Install & Launch

Clone the GitHub repository. 

```
    $ git clone https://github.com/jenleap/grocery-list
```

First, launch the API. Open the solution file (.sln) in Visual Studio. From the Package Manager Console, run the command:

```
    $ update-database
```
You should not need to update the default connection string (in appsetting.json) but you may do so if you prefer to use a different database.

Once this has completed, run the project. (Click the IIS Express button with the green arrow.)

Then, launch the frontend. From inside the frontend folder, run the commands:

```
    $ npm install
    $ ng serve
```

You can now access the application from the url: http//localhost:4200.
