// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-homepage",
    title: "Homepage",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "selected publications and manuscripts",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-honors-and-awards",
          title: "Honors and Awards",
          description: "honors and awards",
          section: "Navigation",
          handler: () => {
            window.location.href = "/honors/";
          },
        },{id: "nav-activities",
          title: "Activities",
          description: "leadership, service, and extracurricular activities",
          section: "Navigation",
          handler: () => {
            window.location.href = "/activities/";
          },
        },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%75%68%61%6E%67.%64%61%69@%63%6F%6E%6E%65%63%74.%70%6F%6C%79%75.%68%6B", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/hiteacherIamhumble", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/Peter-DAI", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },];
