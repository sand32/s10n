---
date: '2025-08-06'
title: 'Work History'

cascade:
  showDate: false
  showAuthor: false
---
## Game Programmer - Stormhaven Studios
**{{< icon "calendar" >}} May 2020 to Present**

Stormhaven is an independent game development studio whose debut title, [Embers Adrift {{< icon "globe" >}}](https://embersadrift.com) [{{< icon "steam" >}}](https://store.steampowered.com/app/3336530/Embers_Adrift/) released in 2022 (and on Steam in 2025). Embers Adrift is an MMORPG made in Unity.

My work at Stormhaven involved gameplay programming including systems, UI, {{< tooltip text="Character, Camera, Controls" >}}3C{{< /tooltip >}}, network communication, etc. This was a small team and I wore many hats as needed across design and programming. I built and maintained numerous systems and supported other team-members in their use.
- Implemented and maintained our crafting system, a relatively complex solution allowing flexible use of materials per recipe and allowing those materials to ultimately affect the end stats of an item that may be several crafting steps removed. I worked extensively with one of our designers to add features and capabilities throughout development.
- Responsible for our social service&mdash;which handles chat, groups, raids, {{< tooltip text="Looking For Group / Looking For More: a common abbreviation in genre parlance for the process of formulating a group" >}}LFG/LFM{{< /tooltip >}}, friends, guilds, block lists, invites, mail, and cross-zone player status&mdash;as well as all the associated UIs. This service was implemented in C# using modern .NET, hosted on a Linux machine within a Docker container and utilizing the TPL to perform most action asynchronously.
- Monitored logging and player reports to find and address problems as they arose, including multiple investigations to determine whether certain events were caused by logic errors or player behavior
- Designed and built out quest system and associated UI, integrating inky for writer-provided dialogue, allowing branching, NPC knowledge flags, alternate starts, multiple endings, a variety of possible rewards, a ridiculous number of possible objective types, and not once has a quest bug resulted in lost player progression or reward (83 quests and counting).
- Worked extensively 
layout = 'simple'with multiple writers to bring their work into the game and implement it as quests within the aforementioned quest system, providing assistance and taking feedback for improvements
- Built a bulletin board system to offer bite-sized quests (re-using much of the logic from the main quest system, but with significantly different player interactions)
- Other contributions include the keyboard/mouse rebinding system, the tutorial system, the notification system, and a variety of other stuff that just sort of happens over the years

{{< article link="/projects/embers/" >}}

## Senior Software Engineer - SmartThings
**{{< icon "calendar" >}} January 2019 to January 2020**

SmartThings is a leading IoT / home automation company providing devices and backing cloud services to end
consumers and businesses. These backing services are global and handle extremely high request volume.

At SmartThings, I built, supported, and improved a number of microservices in a highly available cloud environment.
- Brought myself up to speed on a completely foreign stack (Java, Groovy, Ratpack, Gradle, Grails, etc.) while also relearning how to computer (first time using a Mac) and diving into a very complex ecosystem with many different components: modern, legacy, and external
- Worked to transition central platform logic from a legacy monolith to microservices
- Deployed services t
layout = 'simple'o AWS using Terraform and managed those deployments via Spinnaker
- Participated in team triage, tracking down issues presented with information far removed from our team’s problem domain and either fixing them or passing them along to the relevant team
- Implemented diagnostics utilizing SumoLogic for log aggregation and DataDog for metrics, alerting, and dashboarding
- Participated in the on-call rotation for our team: diagnosing and counteracting live production issues in real-time

## Senior Software Engineer (Contract) - Novus Media
**{{< icon "calendar" >}} May 2018 to December 2018**

Novus Media is an advertising and marketing firm which connects advertisers with the publications needed to
advertise their products and provides valuable insight into market trends for those advertisers.

At Novus, I helped the team evaluate and migrate to new front-end and infrastructure tools.
- Provided insight into the benefits and drawbacks of the various options available to the team as they move into modern development practices
- After identifying the team’s desired path, helped the team to achieve that vision utilizing tools such as Azure, Kubernetes, .NET Core, and various other technologies
- Implemented a new d
layout = 'simple'eployment process for projects based on these new technologies utilizing the team’s existing toolchain (Azure DevOps, Octopus Deploy)
- Helped bring the team up to speed on new tools such as Docker, Minikube, Helm, etc.
- Helped outline the plan for how to establish a microservice architecture which fit their needs
- Created exploratory applications in Angular and React to help the team decide what solution to move forward with for front-end development

## Enterprise Architect - Lift Brands
**{{< icon "calendar" >}} May 2016 to May 2018**

Lift Brands is a fitness company which encompasses multiple international brands such as Snap Fitness, 9 Round,
and Yogafit among others.

At Lift Brands, I provided technical guidance for leads and junior developers alike and worked to implement the foundations for the future of the Lift Brands technology stack. I helped support multi-brand franchise management services and helped ship new products across web and mobile.
- Rose from mid-level engineer to senior engineer to architect to accommodate our growing team, becoming a core part of the team offering expertise and mentoring to other developers
- Identified security holes and defined development plans to address them while impacting established deadlines as little as possible
- Participated in the hiring process for a number of candidates in addition to carrying an effort to implement technical phone screenings for incoming candidates to save time for our team
- Implemented an OIDC provider utilizing IdentityServer4 and .NET Core
- Provided guidance to fellow developers regarding the design of RESTful APIs
- Led the effort to simplify configuration and logging practices by properly utilizing stdin/stdout and environment variables thereby placing more power in the hands of our operations team
- Aided in the integration of the ELK stack into our architecture for logging purposes
- Laid the foundation for transitioning our database migration practices to a code-first paradigm using EF Core while allowing for future polyglot persistence
layout = 'simple'
- Worked closely with our Chief Architect to resolve cross-cutting concerns for a microservice-based architecture, including: authentication/authorization, log correlation/aggregation, and microservice delineation/communication/persistence
- Acted as a central point of contact for the rest of our team with regard to microservice design and standardization
- Aided our operations team in their efforts to pursue a container-based architecture

## Software Engineer - Zags
**{{< icon "calendar" >}} October 2015 to May 2016**

Zags is an insurance software company focused on providing solutions for insurance agencies encompassing all
policy, claims, and billing needs.
- Quickly picked up and became productive with our third-party document printing utility whic
layout = 'simple'h involved becoming familiar with specialized tools and a domain-specific scripting language
- Participated in design discussions regarding our printing system to improve the maintainability of document definitions and improving performance
- Implemented UI improvements in ASP.NET MVC and Razor
- Provided formalized UI and UX feedback (in lieu of professional designers) for our application which was particularly challenged in those areas
- Optimized data retrieval routines and authored stored procedures on SQL Server

## Programmer - Saturn Systems
**{{< icon "calendar" >}} June 2013 to June 2015**

Saturn Systems is a rural outsourcing development house focused on staff augmentation with over 50 full-time
developers at the time of my employment. The following two projects are separate contracts that I worked on
alongside other Saturn developers.

### Contract 2
Front-end web developer on a leading eCommerce platform
- Worked with six other Saturn developers alongside existing client staff to respond to the client's customer feature requests
- Implemented UI functionality across multiple product versions in ASPX and Razor with business logic implemented via either ASP.NET pages or ASP.NET MVC
- Followed existing design specifications to implement new front-end features
- Participated in code reviews in a structured source control branching model
- Managed the deployment of new features in a continuous integration environment
- Worked with support staff to guide the testing of new features

### Contract 1
Key web UI developer on a large-scale call center application sold by a Fortune 500 company
- Worked closely with
layout = 'simple' nine other Saturn developers as well as client-company developers on other teams to design and implement new product features
- Implemented UI functionality in Javascript using jQuery and Bootstrap
- Wrote automated functional tests in Java using Selenium
- Created and modified bash and Powershell scripts to automate development tasks (setting up environments, managing remote processes)
- Managed testing environments in order to run automated functional tests on multiple versions and editions of the software
- Manually tested UI for adherence to accessibility best practices

## .NET Developer - United Healthcare
**{{< icon "calendar" >}} October 2011 to May 2013**

Core automation infrastructure developer and resident web service expert
- Developed WinForms, WPF, Windows service, WebForms and WCF applications using the .NET framework (primarily C#, some VB.NET)
- Created supporting database structures and stored procedures for those applications in Microsoft SQL Server
- Scripted the occasional VBA routine to automate common data loading tasks on United Healthcare's internal systems
- Worked in and created multithreaded and multiprocess applications
- Contributed to and occasionally spearheaded the design of new and existing systems
