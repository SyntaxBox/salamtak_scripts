#!/bin/zsh

# Function to switch to a specific tag
switch_to_tag() {
    local tag=$1
    xdotool key Alt+$tag
    sleep 0.3
}

toggle_screen() {
    xdotool key Alt+period
    sleep 0.3
}


# Function to open a terminal and run a command
open_terminal_run() {
    local command="$1"
    kitty --detach -e zsh -c "$command; exec zsh" &
    sleep 2
}


# Tag 1: Open Thorium Browser
switch_to_tag 1
thorium-browser &
sleep 3

# Tag 2: Open two terminals
switch_to_tag 2
open_terminal_run "cd ~/dev/servers/nodejs/salamtak_server_node && docker-compose run up app_dev"
open_terminal_run "cd ~/dev/servers/nodejs/salamtak_server_node && npm run dev"

# Tag 3: Open two more terminals
switch_to_tag 3
open_terminal_run "cd ~/dev/servers/nodejs/salamtak_server_node && docker-compose run up db"
open_terminal_run "cd ~/dev/servers/nodejs/salamtak_server_node && npx prisma studio"

# Setup for HDMI-1 screen
toggle_screen
# Tag 1: Open Thorium Browser
switch_to_tag 1
thorium-browser &
sleep 1

# Tag 2: Open terminal for salamtak_site
switch_to_tag 2
open_terminal_run "nvim ~/dev/web/salamtak_site"

# Tag 3: Open terminal for salamtak_server_node
switch_to_tag 3
open_terminal_run "nvim ~/dev/servers/nodejs/salamtak_server_node"

