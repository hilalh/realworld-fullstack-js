FROM node:8-slim

# Create app directory
WORKDIR /starter

ENV NODE_ENV development

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./package*.json /starter

RUN npm install -g nodemon
RUN npm install

# If you are building your code for production
# RUN npm install --only=production

COPY . /starter

EXPOSE 3000

CMD ["npm","start"]
