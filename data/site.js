// Site-wide content: profile card, bio, and social links.
// Edit anything here to update the header/intro of the page.

module.exports = {
  // Browser tab title
  pageTitle: "Jake Cunningham",

  // Profile card (left column)
  name: "Jake Cunningham",
  portrait: "./assets/images/portrait.png",
  // Short lines shown under the name
  tagline: ["Machine Learning", "PhD Student", "UCL/Cartesia"],

  // Used by the email "copy to clipboard" button and the CV link
  email: "jake.cunningham.21@ucl.ac.uk",
  cv: "./assets/cv_jake_cunningham.pdf",

  // The name to <underline> in publication author lists (i.e. you)
  authorName: "HJ Cunningham",

  // Social icons (rendered in both the desktop sidebar and mobile row).
  // type: "link" -> opens href | "email" -> copies site.email | "cv" -> opens site.cv
  // icon files live in ./assets/icons/
  socials: [
    { type: "link", href: "https://github.com/HJakeCunningham", icon: "github.svg" },
    { type: "link", href: "https://twitter.com/HJCunningham97", icon: "twitter.svg" },
    {
      type: "link",
      href: "https://scholar.google.com/citations?user=GEWN-PsAAAAJ&hl=en&oi=sra",
      icon: "google-scholar.svg",
    },
    {
      type: "link",
      href: "https://www.linkedin.com/in/jake-cunningham-a6091018a/?originalSubdomain=uk",
      icon: "linkedin.svg",
      iconClass: "fill-red-900",
    },
    { type: "email", icon: "email-thin.svg" },
    { type: "cv", icon: "cv_2.svg" },
  ],

  // Intro paragraph (right column). HTML is allowed here so you can keep links.
  bio: `Hello! I'm a PhD student in the
        <a class="text-blue-400" href="https://www.ucl.ac.uk/ai-centre/" target="_blank">Foundational AI CDT</a>
        at UCL, supervised by
        <a class="text-blue-400" href="https://deisenroth.cc/" target="_blank">Marc Deisenroth</a>.
        My research interests are in long sequence modelling, Bayesian machine learning and
        Gaussian processes with a particular focus on applications in climate science. I also
        work on language model pretraining at
        <a class="text-blue-400" href="https://cartesia.ai/" target="_blank">Cartesia</a>
        in London. <br /><br />
        Previously, I obtained an MSc. in Computing (AI and Machine Learning) from
        <a class="text-blue-400" href="https://www.imperial.ac.uk/" target="_blank">Imperial College London</a>,
        during which I worked with
        <a class="text-blue-400" href="https://mvdw.uk/" target="_blank">Mark van der Wilk</a>
        on connections between Gaussian processes, stochastic partial differential equations and the
        reproducing kernel Hilbert space. <br /><br />
        Prior to that, I completed an M.Eng. in Engineering Science from the
        <a class="text-blue-400" href="https://www.ox.ac.uk/" target="_blank">University of Oxford</a>
        where I worked with
        <a class="text-blue-400" href="https://sites.google.com/view/tonvandenbremer/" target="_blank">Ton van den Bremer</a>
        to model the global accumulation of floating microplastics.`,
};
