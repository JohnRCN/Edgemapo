#!/bin/bash

# Initialize git if it hasn't been already
git init

# Link to GitHub repository
git remote add origin https://github.com/JohnRCN/Edgemapo.git

# Pull existing code (allow unrelated histories if this is a fresh repo)
git pull origin main --allow-unrelated-histories

# Stage, commit, and push your local changes
git add .
git commit -m "Add EdgeMap outcome flow data and component"
git push -u origin main
