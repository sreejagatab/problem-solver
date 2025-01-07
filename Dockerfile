# Use an official Node runtime as a parent image
FROM node:16-alpine AS builder

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy project files
COPY . .

# Build production assets
RUN npm run build

# Production stage
FROM node:16-alpine

WORKDIR /usr/src/app

# Copy built assets from builder
COPY --from=builder /usr/src/app .

# Expose port
EXPOSE 3000

# Set environment to production
ENV NODE_ENV=production

# Start the server
CMD ["npm", "start"]