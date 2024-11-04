#!/bin/zsh

# Function to switch to a specific tag with error handling
switch_to_tag() {
    local tag=$1
    xdotool key Alt+$tag
    sleep 0.3
}

# Function to open a new kitty tab with error handling
open_kitty_tab() {
    local title="$1"
    local command="$2"

    # Try to launch the tab and capture any errors
    if ! kitty @ launch --type=tab --title "$title" zsh -c "$command; exec zsh"; then
        return 1
    fi
    sleep 2.5  # Increased sleep time
}

# Tag 1: Open Thorium Browser
switch_to_tag 1
thorium-browser &
sleep 3

# Tag 4: Development environment
switch_to_tag 4
kitty &
sleep 2  # Wait for kitty to initialize

# Open development tabs
open_kitty_tab "App Dev" "cd ~/dev/servers/nodejs/salamtak_server_node && docker compose up app_dev"
open_kitty_tab "Salamtak Site" "cd ~/dev/web/salamtak_site && npm run dev"
open_kitty_tab "Database" "cd ~/dev/servers/nodejs/salamtak_server_node && docker compose up db"
open_kitty_tab "Prisma Studio" "cd ~/dev/servers/nodejs/salamtak_server_node && npx prisma studio"

# Tag 3: Editor environment
switch_to_tag 3
kitty &
sleep 2
open_kitty_tab "Salamtak Site (Editor)" "nvim ~/dev/web/salamtak_site"
open_kitty_tab "Salamtak Server Node (Editor)" "nvim ~/dev/servers/nodejs/salamtak_server_node"
