# Getting Started with Aurelia and ASP.NET Core

This repository contains the demo app from the Build 2017 talk "Getting Started with Aurelia and ASP.NET Core". It shows how to use the .NET CLI to create an ASP.NET Core web application with an Aurelia frontend.

The Aurelia application is found under the "ClientApp" folder. This project stubs out the `TodosScreen` and its view so that you can practice building the todo application yourself. Should you need help, you can find the final versions of the code in the "final" folder at the root of this repository.

## How This Project Was Created

This demo was created using the .NET CLI and the Microsoft.AspNetCore.SpaTemplates. If you were going to create this project from scratch, you would need to first setup your machine and then create the project.

### Setting Up Your Machine

The following steps must be performed once on the target machine:

* Install the .NET CLI from https://www.microsoft.com/net/core
* Use the .NET CLI to install the ASP.NET Spa Templates. 
  * `dotnet new --install "Microsoft.AspNetCore.SpaTemplates::*"`
* Install Node.js from https://nodejs.org

### Creating The Project

Run the following commands on the console to create a new project:

* `mkdir todo` - Create a project folder named "todo".
* `cd todo` - Change your working directory to the newly created project folder.
* `dotnet new aurelia` - Generate an ASP.NET project configured with Aurelia using the .NET CLI.

## Running This Project Using Command Line Tools

In order to run this demo project, you need to setup your machine, restore the project dependencies, configure the environment and run the application.

### Setting Up Your Machine

The following steps must be performed once on the target machine:

* Install the .NET CLI from https://www.microsoft.com/net/core
* Install Node.js from https://nodejs.org

###  Restoring The Project Dependencies

Since this demo combines both .NET and Aurelia, you will need to install the dependencies for both the backend and the frontend. Here are the commands you need to run on the console:

* `dotnet restore` - This restores the .NET packages for the ASP.NET part of the application.
* `npm install` - This restores the JavaScript packages that comprise Aurelia along with the related frontend build and development tooling, such as Webpack and TypeScript.

### Configuring Your Environment

Before running the application, you will want to configure your environment so that the ASP.NET tooling runs in development mode. This enables auto-rebuild of the Aurelia client and Hot Module Reload. How you setup your environment variables depends on what platform and tools you are running.

* If you are using PowerShell on Windows, execute `$Env:ASPNETCORE_ENVIRONMENT = "Development"`
* If you are using cmd.exe on Windows, execute `setx ASPNETCORE_ENVIRONMENT "Development"`, and then restart your command prompt to make the change take effect.
* If you’re using Mac/Linux, execute `export ASPNETCORE_ENVIRONMENT=Development`

### Starting Up The Application

To run the application, simply execute `dotnet run` on the command line. This will build both the backend and frontend and then start a web server up at `http://localhost:5000` (by default). Simply visit this address using your favorite web browser to see the application running.

## Running This Project Using Visual Studio 2017

If you are on Windows, you have the option to use Visual Studio 2017 for your ASP.NET development. Simply use VS to open the .csproj file provided in this repository. Once you've done that, the IDE will take care of restoring the .NET and NPM dependencies for you.

When your dependencies have finished restoring, press Ctrl+F5 to launch the application in a browser.
