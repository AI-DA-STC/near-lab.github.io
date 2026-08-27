// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "Robust Physical AI for autonomous robotic systems operating in real-world, resource-constrained environments.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-people",
          title: "people",
          description: "Members of the lab",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "news-physical-ai-booth-at-st-engineering-innotech-conference-2025-cna-feature-business-times-josephine-teo",
          title: '🤖 Physical AI booth at ST Engineering InnoTech Conference 2025. CNA Feature ·...',
          description: "",
          section: "News",},{id: "news-robust-physical-ai-talk-by-william-at-dssg-google-developers-space-event-info-linkedin",
          title: '🎤 Robust Physical AI talk by William at DSSG, Google Developers Space. Event...',
          description: "",
          section: "News",},{id: "news-the-near-lab-team-showcased-our-physical-ai-research-at-the-st-engineering-innovation-showcase-during-singapore-airshow-2026-demonstrating-robot-learning-dexterous-manipulation-and-edge-deployable-autonomy",
          title: 'The NEAR Lab team showcased our Physical AI research at the ST Engineering...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
