---
date: 2014-04-10
title: 3AKM LAN Party Site
description: A website for a local LAN party
tags: ['Web Site', 'Spare-Time', 'Project', 'Javascript']
---

{{< github repo="sand32/3akm-next" >}}

### Rationale
The {{< tooltip text="An acronym comprised of the last initials of the LAN's hosts." >}}3AKM{{< /tooltip >}}&nbsp;{{< tooltip text="Local Area Network Party: An event where folks bring their computers to a location, connect them all to a network, and play computer games." >}}LAN party{{< /tooltip >}}&nbsp;is an annual LAN party hosted by myself, my brothers and some friends. Around 2014, I decided to set up a site for our LAN. This site would provide information about the upcoming LAN, accept RSVPs for the upcoming LAN (and show a list of who has RSVPed), and provide an admin interface for the hosts which would, among other things, allow the hosts to send requests to certain game servers during the LAN.

We've been between infrastructures in recent years, so the site is currently unavailable. Chances are high that when the site does resurface, it will have a new implementation.

### Structure
This site was constructed in the relatively early days of Node.js. The codebase is primarily a Node.js application that exposes an API via ExpressJS and a frontend constructed in AngularJS 1.x using the Pug templating system. Minification was provided via browserify. This site was also constructed prior to official Javascript promises or async/await, so uses the bluebird promise library for async logic.

MongoDB is used for the backing database. Originally, users were managed entirely within the MongoDB database but eventually were managed via Active Directory via LDAP (at my brother's request, he hosted the site for quite some time).

| Runtime Dependency | Description |
| ------------------ | ----------- |
| MongoDB | <b>Required.</b> The primary backing-store for this service.
| Active Directory | <b>Optional.</b> An alternative user storage. If enabled, user records will be synced between the MongoDB database and AD, with credentials only stored in AD.
| SMTP Provider | <b>Optional.</b> If enabled, will be used to send emails for forgotten passwords or password change confirmations. If disabled, these features are also disabled.
| Call of Duty 4 Dedicated Server | <b>Optional.</b> If enabled, an admin interface will be provided to configure map rotations, view current players, switch maps, switch game modes, etc. Communicates over UDP using the game server's RCON protocol.
| Teamspeak 3 Server | <b>Optional. Incomplete.</b> If enabled, an admin interface will be provided to manage Teamspeak users and channels. (last left with only a channel viewer implemented) Communicates over TS3's telnet-based ServerQuery interface.

One aspect I'm proud of with this site is the minimal tooling required to run it. This pre-dated a lot of tooling complexity in the era of Webpack, etc. and relied on a minimal number of npm packages. After setting up its database and other optional dependencies (any of which could be enabled in configuration), running the actual site consisted only of pulling npm dependencies and running the node process.

{{< figure src="images/3akm_10th.jpg" alt="A poster for the 10th Annual 3AKM LAN (then referred to as 3AK)" caption="10th Annual LAN Poster" >}}
