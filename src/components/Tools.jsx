import React from "react";

const tools = [
  { src: "/techstackimages/notion-icon.png", alt: "Notion" },
  { src: "/techstackimages/git.png", alt: "Git" },
  { src: "/techstackimages/vscode.png", alt: "VS Code" },
  { src: "/techstackimages/cursor.png", alt: "Cursor" },
  { src: "/techstackimages/claude.png", alt: "Claude" },
  { src: "/techstackimages/gpt2.png", alt: "GPT" },
  { src: "/techstackimages/npm.png", alt: "npm" },
  { src: "/techstackimages/medium.png", alt: "Medium" },
  { src: "/techstackimages/Postman.png", alt: "Postman" },
];

function Tools() {
  return (
    <div className="border border-gray-300 px-4 py-3 flex flex-wrap items-center justify-center gap-3 rounded-md max-w-3xl mx-auto mb-20">
      {tools.map((tool) => (
        <div key={tool.alt} className="relative group">
          <img
            src={tool.src}
            alt={tool.alt}
            className="w-10 h-10 hover:scale-110 flip-hover transition-transform duration-300"
          />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 text-xs text-white bg-gray-700 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            {tool.alt}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Tools;
