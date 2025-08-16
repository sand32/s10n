---
date: 2022-10-15
title: 'Embers Adrift'
description: 'An indie MMO made in Unity, released in 2022'
tags: ['Game Development', 'Projects', 'Unity', 'C#']
---
<!-- <iframe src="https://store.steampowered.com/widget/3336530/" frameborder="0" width="646" height="190"></iframe> -->

{{< lead >}}[{{< icon "globe" >}}](https://embersadrift.com) [{{< icon "steam" >}}](https://store.steampowered.com/app/3336530/Embers_Adrift/){{< /lead >}}

### Brief History
I joined the Stormhaven team in May 2020. This is a project that had started as a passion project by a small group of Everquest fans, had already gone through several personnel shifts through its history, and by the time I joined the project had made some significant progress and had received the funding required to expand the team.

The project, then called Saga of Lucimia, had a solid technological foundation, but still lacked a majority of its key systems both in terms of gameplay and user experience. The game was still somewhat of a proof-of-concept; I was brought on to help bring the game to a release-able state.

### Always Shipping
One unique aspect of this project was that we were developing in full view of a community of players. From before I started and through to release, we shipped changes to our players on a weekly basis. After launch, we adopted a monthly cadence with full and descriptive patch notes provided every month. This cadence has been kept through to today.

Due to this visibility, we were provided with much, often quite vocal, feedback from players and this has helped us course correct along the way.

### Top-to-Bottom Feature Work
Among myself and our CTO, our working relationship naturally fell into a feature-ownership paradigm. While there's always times when work overlaps, and we continually consult each other to ensure alignment, we generally pass tasks between us based on who is most familiar with a given system. For the remainder of this article, I'll be diving into the features I was chiefly responsible for. As such, you can safely assume that I performed the vast majority of programming involved in each system, including: back-end, UI, network communication, and tooling.

### Social Features
When I joined the project, there were only rudimentary social features implemented. The game had an external Python service that handled chat and rudimentary group management. I was tasked with fleshing this out and given my past experience with back-end service development in C#, we decided to build a new service from the ground up for our social features. Given the fact that we already had players engaging with the game, I was also directed to not disrupt the existing JSON-over-TCP protocol the project already had established.

![A screenshot of the in-game social window. The window is divided in two, the left half dedicated to the Looking For Group tools, the right half dedicated to managine in-game relationships spread across multiple tabs.](/images/ea-social-window.png)

What has followed is now a reliable social service handling server-side logic for the following:

- Chat, with configurable channels, and supports channels for global communication, zone-based communication, group/guild/raid communication as well as world-position based communication (using an in-memory [KD-Tree](https://en.wikipedia.org/wiki/K-d_tree))
- Groups, including leader management and seamless restoration in the event of service or connection failure
- Guilds, including ranks, rank-based permissions, general and officer chat, {{< tooltip text="Guild Master: the top-most rank in any guild which holds absolute power over the structure of the guild." >}}GM{{< /tooltip >}} transfer, etc.
- Raids (comprised of multiple normal groups)
- {{< tooltip text="Looking For Group / Looking For More: a common abbreviation in genre parlance for the process of formulating a group" >}}LFG/LFM{{< /tooltip >}}, allowing players to find and join group or find new group members based on desired activities and roles
- Friends and Block lists, allowing players to manage 1-to-1 relationships in-game
- Mail, including both the in-game postal service as well as invites for the aforementioned features
- Cross-Zone player status, being the only non-zone-specific back-end we have, the social service also propagates player status changes including social status (Online/Away/Do Not Disturb), role/specialization, level, location, etc.

![A screenshot of the in-game mailbox.](/images/ea-mailbox-window.png)

This service maintains real-time connections with all in-game players over TCP and processes commands sent to it in an asynchronous fashion. It uses a MongoDB server for player data persistence which is shared with the zone servers. It makes heavy use of in-memory caching and pre-caches player data on startup to avoid hammering the database during mass-connection events. Due to the niche nature of our product, we decided to run only a single instance of this service at a time. If we ever need to restart the server while players are connected, the game client will continually try to reconnect them until the server comes back up, when they reconnect, the social service will already have restored all their data and player state from the database and they often won't have even noticed any service interruption. Naturally, such disruptions are extremely rare.

![An animated gif of the in-game chat windowing system demonstrating how chat tabs can be dragged out into their own windows or recombined into a single window.](/images/ea-tab-dragging.gif)

### Crafting System
Implemented and maintained our crafting system, a relatively complex solution allowing flexible use of materials per recipe and allowing those materials to ultimately affect the end stats of an item that may be several crafting steps removed. I worked extensively with one of our designers to add features and capabilities throughout development.

![A screenshot of the in-game crafting window used in this system. Left side is a recipe list with a \"Light Cooked Meat\" recipe selected, right side shows a detail pane containing the name and level of the recipe, a components selection area, an item preview, and buttons to activate the crafting process.](/images/ea-crafting-window.png)

### Quest System
Designed and built out quest system and associated UI, integrating inky for writer-provided dialogue, allowing branching, NPC knowledge flags, alternate starts, multiple endings, a variety of possible rewards, a ridiculous number of possible objective types, and not once has a quest bug resulted in lost player progression or reward (83 quests and counting).

![Quest Log](/images/ea-quest-window.png)

### Other
- Monitored logging and player reports to find and address problems as they arose, including multiple investigations to determine whether certain events were caused by logic errors or player behavior
- Worked extensively with multiple writers to bring their work into the game and implement it as quests within the aforementioned quest system, providing assistance and taking feedback for improvements
- Built a bulletin board system to offer bite-sized quests (re-using much of the logic from the main quest system, but with significantly different player interactions)
- Other contributions include the keyboard/mouse rebinding system, the tutorial system, the notification system, and a variety of other stuff that just sort of happens over the years
