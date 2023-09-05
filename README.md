
# Red Hat MEGACmd Docker Container 🐳

Hey there! 👋 Welcome to this Docker project that sets you up with a Red Hat-based environment, complete with MEGACmd installed.

## What's This All About? 🤷‍♀️

This is a Docker container built on Red Hat Universal Base Image (UBI). It comes with MEGACmd, a command-line tool for MEGA cloud storage, pre-installed. So, if you're into automating your cloud storage on MEGA and you're a fan of Red Hat, you're in the right place!

## Why Should I Care? 🤔

Well, if you need to interact with MEGA storage but don't want to install a bunch of stuff on your machine, this container is for you. It's also super handy for CI/CD pipelines or any automated tasks that need to talk to MEGA.

## Who's This For? 👥

Developers, sysadmins, or really anyone who needs to manage files on MEGA from a Red Hat environment. No prior MEGA experience required!

## When to Use This? 🕒

Use this container when you want to:
- Automate uploads or downloads to/from MEGA.
- Integrate MEGA into your CI/CD pipeline.
- Mess around with MEGA storage without affecting your local setup.

## How Do I Get Started? 🚀

### Prerequisites
- Make sure you've got Docker installed. If not, [get it here](https://docs.docker.com/get-docker/).

### Build the Container
Open your terminal, navigate to the folder with the Dockerfile, and run:

```bash
docker build -t docker-megacmd .
```

### Run It With Username and Password
To log in with your MEGA username and password, do this:

```bash
docker run -e MEGA_USER='your_username_here' -e MEGA_PASS='your_password_here' docker-megacmd
```

### Or Use a Session ID
If you've got a MEGA session ID, you can use that instead:

```bash
docker run -e MEGA_SESSION='your_session_id_here' docker-megacmd
```

### Keeping Secrets Safe 🤫
If you're not using Docker Swarm but still want to keep your secrets, well, secret, you can mount them as read-only volumes like so:

```bash
docker run \
  -v /path/to/your/mega_user.txt:/run/secrets/mega_user:ro \
  -v /path/to/your/mega_pass.txt:/run/secrets/mega_pass:ro \
  docker-megacmd
```

### Using Docker Swarm? 🐝
Create Docker secrets and deploy the service like this:

```bash
echo "your_username" | docker secret create mega_user -
echo "your_password" | docker secret create mega_pass -
docker service create \
  --name docker-megacmd \
  --secret mega_user \
  --secret mega_pass \
  docker-megacmd:latest
```
