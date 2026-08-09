# agent.md

This file provides guidance when working with code in this repository.

## Development Commands

This portfolio is a static HTML/CSS/JS website. To work with it:

- **View projects**: Simply open any HTML file in a browser
- **No build process**: All files are served as-is
- **Dependency management**: Uses CDN links for Bootstrap, jQuery, and Google Fonts
- **Testing**: Manual testing in browser - open HTML files and interact with projects

## Project Structure

```
/
├── index.html                 # Main portfolio landing page
├── resume.html                # Developer resume
├── style.css                  # Global styles
├── styles.css                 # Additional styles (possibly legacy)
├── tindog.html                # TinDog project page
├── mondrian.html              # Mondrian art project
├── /images                    # Image assets
│   ├── ZeynelCV.jpeg          # Profile photo
│   ├── Various SVG icons      # Skill icons
│   ├── Dice images            # Dice game assets
│   ├── Sound files            # Audio for games
│   └── Project screenshots    # Project thumbnails
├── /Simon Game                # Simon memory game
│   ├── index.html             # Game interface
│   ├── styles.css             # Game styles
│   ├── game.js                # Game logic
│   └── /sounds                # Game audio files
├── /Drum Kit                  # Interactive drum kit
│   ├── index.html             # Interface
│   ├── styles.css             # Styles
│   ├── index.js               # Drum logic
│   └── /sounds                # Drum samples
├── /Dicee                     # Dice rolling game
│   ├── dicee.html             # Interface
│   ├── styles.css             # Styles
│   └── index.js               # Game logic
���└── README.md                  # Minimal project description
```

## Architecture Overview

This is a collection of standalone web projects showcasing different web development skills:

### Core Technologies
- **HTML5**: Semantic markup with proper structure
- **CSS3**: Styling with custom styles and Bootstrap 5
- **JavaScript**: Vanilla JS with jQuery for Simon Game
- **Bootstrap 5**: Used in main portfolio and TinDog for responsive layout
- **Google Fonts**: Custom typography (GFS Didot, Press Start 2P, Arvo, Indie Flower, Lobster, Arvo)

### Project Types
1. **Interactive Games**:
   - Simon Game: Memory pattern game using jQuery
   - Drum Kit: Keyboard-triggered drum sounds
   - Dicee: Two-player dice rolling game

2. **Showcase Pages**:
   - TinDog: Dating app concept for dogs (Bootstrap theme)
   - Mondrian: Abstract art recreation
   - Resume: Professional CV

### Common Patterns
- **Modular JavaScript**: Each game has self-contained logic
- **Event Handling**: Mix of jQuery (.click, .keypress) and vanilla JS (addEventListener)
- **Audio Integration**: HTML5 Audio API for sound effects
- **CSS Animations**: Visual feedback for button presses
- **Responsive Design**: Bootstrap grid system for mobile compatibility

## Common Tasks

### Adding a New Project
1. Create a new folder in root directory
2. Add index.html, styles.css, and script.js
3. Link to portfolio from index.html projects section
4. Add appropriate icons and screenshots to /images

### Modifying Styles
- Edit style.css for global portfolio styles
- Edit project-specific CSS files for individual components
- Bootstrap classes handle layout and responsiveness

### Updating Content
- Update resume.html for CV changes
- Modify index.html for bio/project description updates
- Edit images in /images folder for new screenshots/icons

## Code Quality Notes
- Consistent naming conventions (snake_case for files/functions)
- Separation of concerns (HTML/CSS/JS)
- External library usage via CDN (no build tools needed)
- Accessibility consideration (alt text, semantic elements)
- Mobile-first responsive design with Bootstrap

## Maintenance
- Check CDN links periodically for updates
- Test games across browsers for compatibility
- Optimize images for web performance
- Keep sound files compressed for faster loading