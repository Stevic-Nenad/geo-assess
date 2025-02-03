# GeoMovies

Small app that let's you browse the world's best movies. Realistically it doesn't do much but was part of an assessment

## Process
Here i'll tell you a bit about my approach when solving the assessment

### 1. Understanding the assignment
First i read through the assignment, making sense of what is asked. In this stage i make a first time estimate, and try to see which steps are the most difficult  to implement, so i can manage my time better.

### 2. Installed External Dependencies
In my case it was getting the latest Docker Desktop version so i can run the API server

### 3. Experimented with json server
Figured out how the thing works first. Because of a copied "." it was acting not as expected when launching it via docker

### 4. Initialized Project and Dependencies
Used Vite to create a react project and install dependencies (SASS in my case)

### 5. Cleaned up the Repo
Deleted unneeded files, adjusted some variables, trimmed down the style sheets. that type of thing.

### 6. Looked for Inspiration
Looked to find a potential design that i like, how the app should look. Used this as reference:

https://dribbble.com/shots/18034840-Moonton-Movie-Streaming-Dashboard/attachments/13221731?mode=medi'

### 7. Started with the Implementation
Look towards the commit history to see how it came to be step by step

### 8. Setting up Docker for local dev
Set up docker for local dev

## Decisions
Here i outline some design choices

### Prop Drilling vs Contexts
I am not a huge fan of drilling props across multiple layers of components, so i created a context. Maybe overkill for this tiny app but it just seems cleaner to me

### Component library vs Hand-Made, Ethically-Sourced CSS
I am just faster writing my own Styles, and have tighter control over how it looks.

## Improvements for the future
In this section i'll outline some things that can be improved upon for the future

### Pagination
This is perhaps better handled on the backend Layer, but having pagination for the elements would make the UX much more pleasant

### Grid System
The Grid is an arch nemesis of mine. I don't like how it behaves most of the time, but it is the quickest layout system to implement that covers 90% of the use cases. With some more CSS tuning and autistic focus the design could be made more consistent

## How to run it

### Containers are the way
``docker compose up --build``

### Local is more convenient
```
npm install
npm run dev
docker run --rm -it -p 8080:80 clue/json-server https://raw.githubusercontent.com/GeoWerkstatt/coding-assessment-assets/refs/heads/main/db.json.
```

## Reverse Proxy SetUp

The last bonus of the assessment asked about creating a Traefik reverse proxy to serve both applications on a single domain. My experience with Traefik is limited, but i have worked extensively with nginx for this purpose. Research online says the approaches don't differ too much, so i'll quickly outline how i'd do it on a super high level:

### 1. Where does it live?
Depending how we're deploying the application we have a few options. 

- On Kubernetes we can create an nginx-ingress resource. In it we can define the host, and the paths the ingress listens on. Based on the rules we set up, we can redirect traffic to the appropriate pod based on the path the user chooses.
- If we're deploying bare metal on a linux server, we install nginx on the machine. In it's .conf file we can do two things, either redirect traffic to locally run Docker Container with our API or Frontend in it. Another approach is to run the applications locally and have nginx redirect traffic to the appropriate localhost.

### 2. Writing the conf rules
Once we established how to approach it, we write the conf files for it. on nginx this could look like this:

```
server {
    listen 80;
    server_name app.localhost;

    location / {
        proxy_pass http://frontend:5173;
        [...]
    }
}

server {
    listen 80;
    server_name api.localhost;

    location / {
        proxy_pass http://json-server:80;
        [...]
    }
}
```

or

```
server {
    listen 80;
    server_name app.localhost;

    location / {
        proxy_pass http://frontend:5173;
        [...]
    }

    location /api {
        proxy_pass http://json-server:80;
        [...]
    }
}

```
