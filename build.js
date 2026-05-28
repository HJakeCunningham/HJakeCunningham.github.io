/*
 * Generates index.html from the content in ./data/*.js
 *
 * Usage:  node build.js   (or: npm run build:html)
 *
 * You should not normally need to edit this file. To change the *content* of
 * the site, edit the files in ./data/. This file only describes the page
 * structure (the repeating HTML for each publication / job / degree).
 */

const fs = require("fs");
const path = require("path");

const site = require("./data/site");
const publications = require("./data/publications");
const experience = require("./data/experience");
const education = require("./data/education");

const ICONS = "./assets/icons/";

function social(item, size) {
  const imgClass = [item.iconClass, size].filter(Boolean).join(" ");
  const img = `<img class="${imgClass}" src="${ICONS}${item.icon}" alt="" />`;
  if (item.type === "email") {
    return `<button onclick="copyToClipboard('${site.email}')">${img}</button>`;
  }
  const href = item.type === "cv" ? site.cv : item.href;
  return `<a href="${href}" target="_blank">${img}</a>`;
}

function socialRow(size) {
  return site.socials.map((s) => social(s, size)).join("\n              ");
}

function authors(list) {
  return list
    .map((name) =>
      name === site.authorName ? `<span class="underline">${name}</span>` : name
    )
    .join(", ");
}

function publication(pub) {
  const links = (pub.links || [])
    .map(
      (l) =>
        `<a class="border border-black p-1 rounded" href="${l.href}" target="_blank">${l.label}</a>`
    )
    .join("\n                  ");

  return `          <!-- Publication -->
          <div class="flex flex-col lg:flex-row md:flex-col sm:flex-col items-center min-h-[40px]">
            <div class="lg:w-[250px] py-4 lg:pr-4">
              <img class="border w-full aspect-[2/1] object-contain bg-white" src="${pub.image}" alt="" />
            </div>
            <div>
              <div class="lg:w-[475px] p-4 lg:pr-0 space-y-1">
                <h1 class="text-sm font-bold">${pub.title}</h1>
                <p class="text-sm">${authors(pub.authors)}</p>
                <p class="text-sm italic">${pub.venue}</p>
                <div class="flex space-x-1 text-xs">
                  ${links}
                </div>
              </div>
            </div>
          </div>`;
}

function experienceItem(job) {
  const bullets = (job.bullets || [])
    .map((b) => `                <li>${b}</li>`)
    .join("\n");
  return `          <!-- Experience -->
          <div class="flex lg:flex-row md:flex-row sm:flex-row">
            <div class="w-14">
              <img src="${job.logo}" alt="" />
            </div>
            <div class="w-full pl-6">
              <h1 class="text-sm font-bold">${job.org}</h1>
              <p class="text-sm">${job.role}</p>
              <p class="text-sm italic">${job.dates}</p>
              <ul class="pl-4 text-sm list-outside list-disc">
${bullets}
              </ul>
            </div>
          </div>`;
}

function educationItem(ed) {
  return `          <!-- Education -->
          <div class="flex lg:flex-row md:flex-row sm:flex-row">
            <div class="w-14">
              <img src="${ed.logo}" alt="" />
            </div>
            <div class="w-full pl-6">
              <h1 class="text-sm font-bold">${ed.org}</h1>
              <p class="text-sm">${ed.detail}</p>
              <p class="text-sm italic">${ed.dates}</p>
            </div>
          </div>`;
}

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>${site.pageTitle}</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./dist/output.css" />
  </head>
  <body class="font-mono pb-20 lg:pb-32">
    <div class="fixed z-50 top-0 lg:bottom-0 md:bottom-0 sm:bottom-0 lg:right-0 md:right-0 sm:right-0 p-4">
      <div id="alert" class="text-sm bg-green-600 p-3 rounded drop-shadow-lg invisible">
        <p class="text-white">Copied to clipboard: ${site.email}</p>
      </div>
    </div>

    <div class="flex justify-center mt-4 mb-4 lg:mt-[64px] md:mt-[64px] sm:mt-[64px] lg:mb-[64px] md:mb-[64px] sm:mb-[64px]">
      <div class="w-[710px] sm:w-[500px] md:w-[600px] lg:w-[750px]">
        <div class="flex flex-col lg:flex-row md:flex-row sm:flex-row">
          <div class="flex flex-row items-center lg:flex-col md:flex-col sm:flex-col w-full p-4 sm:w-[140px] md:w-[170px] lg:w-[225px]">
            <div class="w-1/3 pr-4 lg:pr-0 md:pr-0 sm:pr-0 lg:w-full md:w-full sm:w-full">
              <img class="lg:w-full md:w-full sm:w-full" src="${site.portrait}" alt="Portrait image of ${site.name}" />
            </div>
            <div class="lg:mt-4 md:mt-4 sm:mt-4 w-2/3 lg:w-full md:w-full sm:w-full">
              <h2 class="text-lg font-bold">${site.name}</h2>
              ${site.tagline.map((t) => `<p>${t}</p>`).join("\n              ")}

              <div class="hidden lg:visible md:visible sm:visible lg:flex md:flex sm:flex space-x-1.5 mt-3">
                ${socialRow("h-4 w-4")}
              </div>
            </div>
          </div>

          <div class="flex items-center w-full p-4 sm:w-[360px] md:w-[430px] lg:w-[525px]">
            <p class="pl-1 text-sm">
              ${site.bio}
            </p>
          </div>

          <div class="p-4 lg:hidden md:hidden sm:hidden">
            <div class="flex justify-between">
              ${socialRow("h-7 w-7")}
            </div>
          </div>
        </div>

        <div class="m-4 mt-7">
          <h1 class="font-bold underline">Publications</h1>

          <div>
${publications.map(publication).join("\n\n")}
          </div>

          <div class="mt-4">
            <h1 class="font-bold underline py-4">Experience</h1>
            <div class="space-y-4 pt-2">
${experience.map(experienceItem).join("\n\n")}
            </div>

            <div class="mt-4">
              <h1 class="font-bold underline py-4">Education</h1>
              <div class="space-y-4 pt-2">
${education.map(educationItem).join("\n\n")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script>
      function copyToClipboard(value) {
        navigator.clipboard.writeText(value);

        document.getElementById("alert").classList.remove("invisible");

        setTimeout(() => {
          document.getElementById("alert").classList.add("invisible");
        }, 5000);
      }
    </script>
  </body>
</html>
`;

fs.writeFileSync(path.join(__dirname, "index.html"), html);
console.log("Generated index.html");
