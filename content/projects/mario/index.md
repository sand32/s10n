---
date: 2020-01-01
title: Mario Implementation
description: An implementation of SMB1 written in C using SDL
tags: ['Game Development', 'Spare-Time', 'Project', 'C', 'SDL']
---

### Rationale
Every once in a while as a developer, it's wise to test one's assumptions about how software should be built. After a few years reading about data-oriented design and trying to delve further into more performance-aware programming, I felt it would be a good idea to try a project where I shed a lot of my usual approaches to development. I chose to write this project in C23 (using a C compiler, not just C-style C++) and try to write something purely procedurally, without the usual object-oriented principles that I'd been taught since I started programming.

With that in mind, I chose to try and write this project in the simplest way possible, trying my best to resist being clever, just doing the most direct and most basic thing at all times. While this was prompted by my interest in data-oriented design and generally more performant approaches to development, I wouldn't call the resulting application a good example of either. It's, at best, a baby-step out of my comfort-zones.

### Tools
This project, as mentioned above, is written in C23. It utilizes [SDL](https://www.libsdl.org/) (originally SDL2, recently migrated to SDL3). It utilizes SDL's 2D renderer which is a thin shim over any number of platform-specific graphics APIs (and exposes an OpenGL-like interface for the application developer). I also utilize SDL_Mixer to simplify the amount of logic required to get audio up and running. That might be less necessary now with SDL3's sweet new audio sub-system, but that's an investigation for a later time.

{{< alert "circle-info" >}}SDL is a tool I've used on a number of other small game projects in the past and I highly recommend it no matter the platform you're developing on. It was started as a cross-platform answer to DirectX and provides an excellent platform abstraction layer for multimedia applications. Its primary maintainer is [Sam Lantinga](https://github.com/slouken) of Valve Software. I've also [made a modest contribution of my own](https://github.com/libsdl-org/SDL/pull/12123).{{< /alert >}}

### Project Organization
This project, due to it being a pursuit of simplicity, follows a simple structure. Its various sub-systems are generally file-scoped. Video/rendering lives in video.c/.h, input lives in input.c/.h, game simulation logic lives in simulation.c/.h, so on and so forth. Things meant to be internal to those systems are prefixed with underscores, encapsulation is not enforced by anything other than convention. If I find that one subsystem needs a utility function that lives in another system, I remove the underscore and call it; I don't dramatically reorganize things, I don't build five new classes to handle cross-cutting concerns, I just call the thing. You might think this would make things sloppy or hard to find, but we have tools for that: I can follow calls via my IDE (VS Code, btw), I can quickly search across the whole project, and for the most part I remember where things are anyways.

### Level Editor
This project has a built-in level editor that allows me to modify the scene tiles as desired (both backgroun and foreground tiles), place enemy spawners, and switch the scene type (Overworld, Underground, Underwater, Castle, Mushroom, Night, and Cold). The scene type determines the background color and the types of blocks available to place.

{{< figure src="/images/mario-editor-palette.gif" alt="A capture of this mario game in editor mode with the tile palette open. The tile palette contains many of the blocks used in constructing SMB1 levels and in a separate section it contains a selection of enemies that can be placed. Behind the UI is a test level containing a few different types of blocks, a spawner for Mario and a spawner for a goomba. The animation shows the user selecting a block in the palette and placing it multiple times to create a wall." caption="Level Editor Palette" >}}

I can press <kbd>Ctrl</kbd>+<kbd>O</kbd> to open a scene by its number (e.g.: 0-0 for the test scene, 1-1 for the first SMB1 level). This will load the level from disk where it is stored in a simple binary format. Likewise, <kbd>Ctrl</kbd>+<kbd>S</kbd> will save the scene to disk using the same nomenclature. <kbd>Ctrl</kbd>+<kbd>N</kbd> will switch to a "blank" scene, this brings up a scene type selector. The selected scene type will determine what the "blank" scene looks like, with scene types like Castle having a "blank" scene comprised entirely of castle brick with an open-air strip at the top.

### Design Observations
Replicating the SMB1 design was fun and interesting. From how the camera moves in response to Mario's movement, to handling Mario's walk and run cycles (and the fun skid he does when turning around), to how high he jumps, to how he collides with objects in the scene. On that last point, an interesting interaction that you might not consider until you try to replicate it is how Mario collides with blocks above and below him. When traveling upward, he only collides with the block if the center of his sprite contacts the block, any offset where the center is not below the block moves him to whichever side of the block he's closer to and allows him to keep moving upward. If traveling downward (or standing on the block), Mario will collide with the block if even the very edge of his sprite is over the block. In this way, SMB1 allows the player to more easily treat blocks as platforms but allows him to jump up through single-block gaps with ease.

<video src="/videos/movement.mp4" controls></video>

### Technical Takeaways
The most salient takeaways from this project have been:
1. This way of programming is way more fun.
1. This way of programming is way faster, at least for a project at this scale.

That second point might require some elaboration. What I've observed in this project is that by not creating neatly encapsulated objects, carefully curating object relationships, or coming up with neat generic abstractions for the things I'm doing, I ended up shedding a lot of extra cruft that was not the underlying problem I was trying to solve. Perhaps this is just a fluke and this way of working wouldn't work in a larger team setting or maybe it would but with some additional considerations. I won't claim to be able to state either case definitively. But I will say that this is not an original thought on my part; other much more seasoned programmers than myself have made similar claims and this was merely my effort to test said claims. All I can really say is that there is at lease some merit to this approach.

{{< figure src="/images/mario-1-1.png" alt="A screenshot of the start of my version of level 1-1." caption="World 1-1" >}}
