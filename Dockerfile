# Stage 1: Build the React application
FROM node:20-alpine AS build
WORKDIR /app

# Copy package configuration files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code and build the production bundle
COPY . .
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

# Copy the custom Nginx configuration optimized for pre-compressed static files
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build output from the build stage to Nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
