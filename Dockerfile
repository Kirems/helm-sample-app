
FROM node:alpine 
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]

#FROM nginx:1.18
#COPY --from=build /app/build/ /usr/share/nginx/html
#RUN chown -R nginx:nginx /usr/share/nginx/html