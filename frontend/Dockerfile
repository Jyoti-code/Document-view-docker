# Stage 1: Build React application
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY ./package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000
EXPOSE 3000

# Default command to start nginx
CMD ["npm","run","start"]
