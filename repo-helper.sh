#!/bin/bash

# iFreedmen Creative Suite Repository Creation Helper
# Usage: ./repo-helper.sh [command]

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

print_header() {
    echo -e "${BLUE}================================${NC}"
    echo -e "${BLUE}iFreedmen Repository Helper${NC}"
    echo -e "${BLUE}================================${NC}"
    echo
}

show_help() {
    print_header
    echo "Usage: $0 [command]"
    echo
    echo "Commands:"
    echo "  guide       - Show step-by-step creation instructions"
    echo "  generate    - Generate all helper files"
    echo "  html        - Generate HTML helper form"
    echo "  markdown    - Generate markdown guide"
    echo "  open        - Open HTML helper in default browser"
    echo "  validate    - Validate all scripts"
    echo "  help        - Show this help message"
    echo
    echo "Examples:"
    echo "  $0 guide"
    echo "  $0 generate"
    echo "  $0 open"
    echo
}

open_html() {
    if [[ ! -f "repo-creation-helper.html" ]]; then
        echo -e "${YELLOW}Generating HTML helper first...${NC}"
        node create-repos.js html
    fi
    
    echo -e "${GREEN}Opening HTML helper in default browser...${NC}"
    
    # Cross-platform open command
    if command -v xdg-open > /dev/null; then
        xdg-open "repo-creation-helper.html"
    elif command -v open > /dev/null; then
        open "repo-creation-helper.html"
    elif command -v start > /dev/null; then
        start "repo-creation-helper.html"
    else
        echo -e "${YELLOW}Could not auto-open browser. Please open repo-creation-helper.html manually.${NC}"
    fi
}

case "${1:-help}" in
    "guide"|"instructions")
        node create-repos.js instructions
        ;;
    "generate"|"all")
        echo -e "${GREEN}Generating all helper files...${NC}"
        node create-repos.js all
        echo -e "${GREEN}✓ All files generated successfully${NC}"
        ;;
    "html")
        node create-repos.js html
        ;;
    "markdown"|"md")
        node create-repos.js markdown
        ;;
    "open"|"browse")
        open_html
        ;;
    "validate"|"test")
        echo -e "${GREEN}Validating scripts...${NC}"
        node -c create-repos.js
        echo -e "${GREEN}✓ All scripts are valid${NC}"
        ;;
    "help"|"-h"|"--help")
        show_help
        ;;
    *)
        echo -e "${YELLOW}Unknown command: $1${NC}"
        echo
        show_help
        exit 1
        ;;
esac