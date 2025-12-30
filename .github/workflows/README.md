# GitHub Actions Workflows

## deploy.yml

This workflow automatically builds and deploys the portfolio to EC2 when code is pushed to the `main` branch.

### Workflow Steps

1. **Checkout** - Gets the latest code
2. **Docker Buildx Setup** - Prepares Docker for building
3. **Docker Login** - Authenticates with Docker Hub
4. **Build & Push** - Builds the Docker image and pushes to Docker Hub
5. **Deploy to EC2** - SSHs into EC2 and updates the running container
6. **Verify** - Checks that the container started successfully

### Secrets Required

Make sure these secrets are configured in GitHub:

- `DOCKER_USERNAME` - Docker Hub username
- `DOCKER_PASSWORD` - Docker Hub password/token
- `EC2_SSH_KEY` - Private SSH key for EC2
- `EC2_HOST` - EC2 instance IP/domain
- `EC2_USER` - EC2 SSH username

### Manual Trigger

You can also trigger the workflow manually from the Actions tab using `workflow_dispatch`.

