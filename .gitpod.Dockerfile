FROM gitpod/workspace-full

# Install custom tools, runtimes, etc.
# For example "bastet", a command-line tetris clone:
# RUN brew install bastet
#
# More information: https://www.gitpod.io/docs/config-docker/

RUN curl -fsSL https://deno.land/x/install/install.sh | sh
RUN /home/gitpod/.deno/bin/deno completions bash > /etc/bash_completion.d/deno.bash
