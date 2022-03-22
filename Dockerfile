# build stage
FROM node:lts-alpine as build-stage

# set the current working directory
WORKDIR /app

# copy 'package.json' and 'yarn.lock'
COPY package*.json .
COPY yarn.lock .

# install project dependencies
RUN yarn install

# copy project files and folders to the container
COPY . .

# build app for production
RUN yarn build

# production stage
FROM nginx:stable-alpine as production-stage

# copy built artifacts to production folder
COPY --from=build-stage /app/dist /usr/share/nginx/html

# prepare nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

# make the container port accessible externally
EXPOSE 8080

# start the service
CMD ["nginx", "-g", "daemon off;"]