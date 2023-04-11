# FROM node:alpine
# WORKDIR '/app'
# COPY package.json .
# RUN npm install
# COPY . .
# CMD ["npm", "start"]

FROM node:16 AS ui-build
WORKDIR "./app"
COPY package.json .
RUN npm install && npm run build
COPY . .

EXPOSE 3080

CMD ["DISABLE_ESLINT_PLUGIN=true", "npm", "start"]