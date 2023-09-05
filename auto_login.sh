#!/bin/bash

# Read MEGA_USER, MEGA_PASS, and MEGA_SESSION from the secrets
MEGA_USER=$(cat /run/secrets/mega_user)
MEGA_PASS=$(cat /run/secrets/mega_pass)
MEGA_SESSION=$(cat /run/secrets/mega_session)

# Check if MEGA_SESSION is set
if [ -n "$MEGA_SESSION" ]; then
  # Login to MEGA using the session ID
  mega-login --sid="$MEGA_SESSION"
elif [ -n "$MEGA_USER" ] && [ -n "$MEGA_PASS" ]; then
  # Login to MEGA using username and password
  mega-login $MEGA_USER $MEGA_PASS
else
  echo "Either MEGA_SESSION or both MEGA_USER and MEGA_PASS must be set."
  exit 1
fi

# Login to MEGA
mega-login $MEGA_USER $MEGA_PASS

# Keep the container running
exec "$@"
