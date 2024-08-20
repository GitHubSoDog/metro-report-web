ARG BASE_IMAGE=node:20.16.0-alpine3.20

FROM $BASE_IMAGE as builder
RUN apk add --no-cache bash git
WORKDIR /app
COPY ./package.json ./
COPY ./package-lock.json ./

RUN CI=true npm ci
COPY . ./
RUN NODE_ENV=production npm run build

FROM $BASE_IMAGE as production
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
