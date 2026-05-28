// Publications, shown top-to-bottom in the order listed here.
//
// To add a paper, copy one block and fill it in:
//   {
//     title:   "Paper title",
//     authors: ["First Author", "HJ Cunningham", "Last Author"], // your name is auto-underlined
//     venue:   "Conference / Journal, Year",
//     image:   "./assets/images/your_thumbnail.png",
//     links:   [{ label: "Paper", href: "https://..." }, { label: "Poster", href: "./assets/posters/..." }],
//   }
//
// `links` is optional; omit it for none. Put thumbnails in ./assets/images/.

module.exports = [
  {
    title: "Infinite Neural Operators: Gaussian processes on functions",
    authors: ["D Augusto de Souza", "Y Zhu", "HJ Cunningham", "YF Saporito", "D Mesquita", "MP Deisenroth"],
    venue: "Neural Information Processing Systems (NeurIPS), 2025",
    image: "./assets/images/infinite_neural_operators.png",
    links: [
      {
        label: "Paper",
        href: "https://proceedings.neurips.cc/paper_files/paper/2025/file/bb74d3d956cc960f693716b3595593d7-Paper-Conference.pdf",
      },
    ],
  },
  {
    title: "Composite Attention: A Framework for Combining Sequence Mixing Primitives",
    authors: ["HJ Cunningham", "MP Deisenroth"],
    venue: "NeurIPS Efficient Natural Language and Speech Processing Workshop, 2024",
    image: "./assets/images/composite_attention.png",
    links: [{ label: "Paper", href: "./assets/papers/composite_attention_2024.pdf" }],
  },
  {
    title: "Reparameterized Multi-Resolution Convolutions for Long Sequence Modelling",
    authors: ["HJ Cunningham", "G Giannone", "M Zhang", "MP Deisenroth"],
    venue: "Neural Information Processing Systems (NeurIPS), 2024",
    image: "./assets/images/mrconv_icon.png",
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2408.09453" },
      {
        label: "Poster",
        href: "./assets/posters/icml_reparameterized_multi-resolution_convolutions_for_long_sequence_modelling.pdf",
      },
    ],
  },
  {
    title: "RotRNN: Modelling Long Sequences with Rotations",
    authors: ["R Dolga", "K Biegun", "HJ Cunningham", "D Barber"],
    venue: "ICML Next Generation of Sequence Modeling Architectures Workshop, 2024",
    image: "./assets/images/rotrnn_icon.png",
    links: [{ label: "Paper", href: "https://arxiv.org/abs/2407.07239" }],
  },
  {
    title: "Actually Sparse Variational Gaussian Processes",
    authors: ["HJ Cunningham", "D Augusto de Souza", "S Takao", "M van der Wilk", "MP Deisenroth"],
    venue: "Artificial Intelligence and Statistics (AISTATS), 2023",
    image: "./assets/images/ASVGP_resized.png",
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2304.05091" },
      {
        label: "Poster",
        href: "./assets/posters/AISTATS_Actually_Sparse_Variational_Gaussian_Processes.pdf",
      },
    ],
  },
  {
    title:
      "The Role of the Unsteady Surface Wave-Driven Ekman\u2013Stokes Flow in the Accumulation of Floating Marine Litter",
    authors: ["HJ Cunningham", "C Higgins", "T van den Bremer"],
    venue: "Journal of Geophysical Research: Oceans, 2022",
    image: "./assets/images/Aliche_Maps.png",
    links: [
      {
        label: "Paper",
        href: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2021JC018106",
      },
    ],
  },
];
