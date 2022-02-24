# Movie Ticketing System

## About

A simple app that manage movie ticketing

### Components

There are 3 components for building the app:

1. server (Backend) - Using NodeJS and Express as the web application Framework.
2. Movie-reservation>src(itself) (Frontend) - Using ReactJS with Tailwindcss as the UI Framework.

## Running in your local environment

### Requirements

- **Docker** ^19.x
- **Docker-Compose** ^1.17

_Note:_ The app's Docker compose configuration will use the following ports:

- **4444** - api
- **4455** - web

### Routes

- **/movies**

If your environment is using the abovementioned ports, then adjust the port mapping defined in the docker-compose.yml file as desired.

### Installation

1.  Clone the repository.
    `git clone https://github.com/angelonino38/movie-ticketing-exercise.git`
2.  Go to project root directory
    `cd movie-ticketing-exercise`
3.  Initialize docker-compose
    `docker-compose up -d`
4.  Open web browser and go to http://localhost:4445/ (web) and the API route http://localhost:4444/ and http://localhost:4444/movies (server)
