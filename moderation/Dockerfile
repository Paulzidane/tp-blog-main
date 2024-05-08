# Use the Node.js 14 image as the base image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the application
#RUN npm run build

# Expose the port that the application will run on (in this case, port 4003)
EXPOSE 4003

# Start the application
CMD ["npm", "start"]
