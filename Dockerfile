FROM nginx:1.17.1-alpine
COPY /dist/my-shiny-new-angular-app /usr/share/nginx/html
