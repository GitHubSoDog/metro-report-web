# Base image
ARG BASE_IMAGE=node:20.16.0-alpine3.20
FROM $BASE_IMAGE as builder

# Install bash, git, and yarn
RUN apk add --no-cache bash git curl && \
    curl -o- -L https://yarnpkg.com/install.sh | bash

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY ./package.json ./
COPY ./yarn.lock ./

# Install dependencies using Yarn
RUN yarn install --frozen-lockfile

# Copy all other files
COPY . ./

# Build the project
RUN NODE_ENV=production yarn build

# Production stage
FROM $BASE_IMAGE as production

# Update and upgrade APK packages
RUN apk update && apk upgrade

# Set working directory
WORKDIR /app

# Copy the necessary files from the builder stage
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/data ./data
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Set environment to production
ENV NODE_ENV=production

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
