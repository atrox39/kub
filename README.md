# Kubernetes GitOps Demo: Vite Landing Page with Argo CD

This repository contains a production-ready GitOps demonstration project featuring a fast Frontend application deployed on a local Kubernetes cluster (**Kind**). It leverages the modern web development experience of **Vite** combined with the robust continuous delivery capabilities of **Argo CD**.

## 🚀 Project Overview

The project automatically builds and serves a responsive landing page using a multi-stage containerization strategy and maintains high availability through Kubernetes replica management.

*   **Frontend Application:** Built using **Vite**, **Node v24.15.0**, and managed via **pnpm** for ultra-fast, efficient dependency handling.
*   **Web Server:** Production-ready **Nginx** serving static web assets.
*   **Infrastructure Management:** Managed entirely via a declarative GitOps workflow.

---

## 🏗️ Architecture & Features

*   **High Availability:** Configured with **2 replicas** (twin Pods running in parallel) managed by a Kubernetes Deployment to ensure zero downtime.
*   **Multi-Stage Docker Build:** A clean, optimized Docker workflow that installs dependencies, builds static assets using `pnpm build`, and transfers the output to a minimal Nginx container image.
*   **GitHub Container Registry (GHCR):** Automated CI pipeline using GitHub Actions that builds and pushes container images to `ghcr.io` securely and for free.
*   **Continuous Delivery:** **Argo CD** constantly monitors this repository. Whenever changes are pushed to `main`, Argo CD automatically syncs and triggers a rolling update in the cluster.
*   **Self-Healing Capabilities:** Automated drift detection is active; any unauthorized structural mutations manually done in the cluster are instantly reverted by Argo CD back to the Git source of truth.

---

## 📁 Repository Structure

```text
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions Automated CI Pipeline
├── k8s/
│   └── nginx.yaml          # Declarative Deployment & Service Manifests
├── src/                    # Vite Application Source Code
├── Dockerfile              # Multi-stage Docker Compilation Rules
├── .dockerignore           # Excludes node_modules and local cache from builds
├── package.json            # Project Metadata & Scripts
├── pnpm-lock.yaml          # Rigid Dependency Tree Lockfile
└── README.md               # Project documentation
```

---

## 🛠️ Local Development Workflow

### 1. Daily Frontend Programming
To develop your frontend locally with features like Instant Hot Module Replacement (HMR), bypass Kubernetes and run Vite natively:
```bash
# Install dependencies
pnpm install

# Run the development server
pnpm dev
```
Open `http://localhost:5173` in your browser.

### 2. Testing the Container Production Build Locally
If you want to manually test how Docker bundles your application using Node v24 and Nginx before sending it to GitHub:
```bash
# Build the image locally
docker build -t kub:local .

# Optional: Inject directly into Kind without internet
kind load docker-image kub:local
```

---

## 🎡 Deployment Guide (GitOps Workflow)

1.  **Commit and Push Changes:** When you finish editing your Vite code or your Kubernetes manifests, push the changes to your main branch:
    ```bash
    git add .
    git commit -m "feat: complete automated pipeline"
    git push origin main
    ```
2.  **Automated CI Build:** The GitHub Action intercepts the push, builds the fresh container image under `ghcr.io`, and overwrites the `:latest` tag.
3.  **Argo CD Automated Sync:** Argo CD discovers the updated state, validates the application layout against the `/k8s` directory, and schedules a seamless rollout across your 2 running Pods.

### Accessing the Web Application
Since the infrastructure exposes the internal workloads through a `NodePort` Service, establish a secure proxy tunnel from your local machine to your Kind cluster:

```bash
kubectl port-forward svc/nginx-service 8081:80
```

Keep that terminal tab active and navigate to your production landing page inside your web browser:
👉 **[http://localhost:8081](http://localhost:8081)**
