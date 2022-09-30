##### DEVELOPMENT #####
# Use Node version 16
FROM node:16.16.0

# Set work dir as /app
WORKDIR /app

# Copy package.json to current dir
COPY package.json .

# Install all npm packages
RUN npm install

# Install nodemon
RUN npm install nodemon -g
# Copy all code
COPY . ./

# Export port
EXPOSE 8000

#
CMD ["nodemon", "index.js"]
#######################