# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /docs

# Copy the current directory contents into the container at /docs
COPY . /docs

# Install MkDocs and other dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose port 8000 to the outside world
EXPOSE 8000

# Run mkdocs serve command by default when the container starts
CMD ["mkdocs", "serve", "--dev-addr=0.0.0.0:8000"]
