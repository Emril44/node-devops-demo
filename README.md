# Node DevOps Demo

A small DevOps-focused project demonstrating containerization, infrastructure provisioning, and automated deployment of a Node.js application.

The application itself is intentionally simple. The goal of this project is to showcase modern DevOps practices including Docker, Terraform, and CI/CD pipelines.


## Stack

Application
- Node.js
- PostgreSQL

DevOps
- Docker
- Docker Compose
- Terraform
- AWS EC2
- GitHub Actions CI/CD



## Architecture

GitHub → CI Pipeline → Docker Image → AWS EC2 Deployment

Components:

- Node.js service (API)
- PostgreSQL database
- Docker containerization
- Terraform-managed infrastructure
- GitHub Actions CI/CD pipeline



## Project Goals

This repository demonstrates:

- Containerizing a Node.js application with Docker
- Running multi-service environments using Docker Compose
- Provisioning infrastructure using Terraform
- Automating build and deployment with GitHub Actions
- Deploying containers to AWS EC2



## Planned Features

- Dockerized Node.js service
- PostgreSQL container with persistent volume
- CI/CD pipeline building and pushing Docker images
- Terraform infrastructure provisioning
- Automated EC2 deployment
- Health check endpoint
- Architecture diagram



## Repository Structure
```
node-devops-demo/
│
├── README.md
├── LICENSE
├── .gitignore
│
├── app/
│   ├── index.js
│   └── package.json
│
├── docker/
│   ├── Dockerfile
│   └── docker-compose.yml
│
├── infra/
│   └── terraform/
│
├── .github/
│   └── workflows/
│
└── docs/
    └── architecture.md
```

## Architecture Diagram

![Architecture Diagram](docs/architecture.png)


## Future Improvements

- Nginx reverse proxy
- HTTPS support
- Monitoring with Prometheus/Grafana
- Container security scanning