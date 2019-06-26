FROM zenika/alpine-node as build

COPY package.json package-lock.json ./
RUN npm i
COPY . . 
RUN npm run build

FROM nginx:alpine
ENV PORT 8080
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
CMD sh -c "sed -i -e 's/80;/${PORT};/g' /etc/nginx/conf.d/default.conf \
    && exec nginx -g 'daemon off;'"