"use client";

import React, { useEffect, useState } from "react";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
};

type User = {
  avatar_url: string;
  html_url: string;
};

export default function ProjectsSection() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const userRes = await fetch("https://api.github.com/users/JeetVasani");
        const userData = await userRes.json();
        setUser(userData);

        const repoRes = await fetch("https://api.github.com/users/JeetVasani/repos");
        const repoData = await repoRes.json();

        const sorted = repoData.sort(
          (a: Repo, b: Repo) => b.stargazers_count - a.stargazers_count
        );
        setRepos(sorted);
      } catch (error) {
        console.error("GitHub fetch error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <section id="projects" className="w-full bg-[#0F0A1A] text-white py-20 px-6 flex justify-center">
      <div className="w-full max-w-6xl mx-auto">

        {user && (
          <div className="flex justify-center mb-6">
            <a href={user.html_url} target="_blank">
              <img
                src={user.avatar_url}
                alt="GitHub Profile"
                className="w-28 h-28 rounded-full border border-[#7C3AED40] shadow-lg hover:scale-105 transition"
              />
            </a>
          </div>
        )}

        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#A78BFA]">
          Projects
        </h2>

        {loading ? (
          <p className="text-gray-400 text-center">Loading projects...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                className="block bg-[#1A1328] border border-[#7C3AED40] p-5 rounded-xl shadow-lg hover:scale-[1.02] transition"
              >
                <h3 className="text-xl font-semibold mb-2 text-[#A78BFA]">
                  {repo.name}
                </h3>

                <p className="text-gray-300 text-sm mb-4">
                  {repo.description || "No description provided."}
                </p>

                <div className="flex justify-between text-xs text-gray-400">
                  <span>⭐ {repo.stargazers_count}</span>
                  <span>{repo.language || "Unknown"}</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
