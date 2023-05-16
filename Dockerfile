
FROM node AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.18
COPY --from=build /app/build/ /usr/share/nginx/html
RUN chown -R nginx:nginx /usr/share/nginx/html