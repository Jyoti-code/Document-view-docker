# Use a specific Node.js version
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies with retries and longer timeout
RUN npm install --fetch-retries=5 --fetch-retry-factor=2 --fetch-retry-mintimeout=10000 --fetch-timeout=600000

# Copy rest of the application
COPY . .

# Expose the port your app runs on
EXPOSE 5001

# Start the application
CMD ["npm", "start"]
