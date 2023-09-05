# Use Red Hat Universal Base Image 8 as the base image
FROM registry.access.redhat.com/ubi8/ubi:latest

# Label metadata
LABEL maintainer="hey@okikio.dev"
LABEL description="Red Hat Linux with MEGACmd"

# Install wget and dnf
RUN yum install -y wget

# Manually download and install c-ares library
RUN wget https://rpmfind.net/linux/centos/8-stream/BaseOS/x86_64/os/Packages/c-ares-1.13.0-8.el8.x86_64.rpm && \
  dnf install -y "$PWD/c-ares-1.13.0-8.el8.x86_64.rpm"

# Download and install Mega CMD CLI tool
RUN wget https://mega.nz/linux/repo/CentOS_8/x86_64/megacmd-CentOS_8.x86_64.rpm && \
  dnf install -y "$PWD/megacmd-CentOS_8.x86_64.rpm"

# Clean up
RUN yum clean all && \
  rm -rf /var/cache/yum

# Add a script to automatically login to Mega
COPY ./auto_login.sh /auto_login.sh
RUN chmod +x /auto_login.sh

# Set the entry point to the auto login script
ENTRYPOINT ["/auto_login.sh"]

# Set the entry point to Mega CMD CLI
# ENTRYPOINT ["mega-cmd"]