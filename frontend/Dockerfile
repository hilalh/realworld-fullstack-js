FROM node:8-slim
# Setup enviornment
WORKDIR /starter
ENV NODE_ENV development
# Copy file for npm install first
COPY ./package*.json /starter/
# Perform installations
RUN npm install -g create-react-app
RUN npm install
# Copy the rest of the files
COPY . /starter/

# Expose web and hot reloading ports
EXPOSE 4100
EXPOSE 35729

CMD ["npm","start"]
