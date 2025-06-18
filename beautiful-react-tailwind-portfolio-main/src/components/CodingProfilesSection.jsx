import React from "react";
import { Code, Star, Trophy } from "lucide-react";

export const CodingProfilesSection = () => {
  return (
    <section
      id="coding-profiles"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Coding Profiles</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Showcasing my competitive programming statistics and profiles on
          various platforms.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* LeetCode Card */}
          <div className="bg-card p-6 rounded-lg shadow-md text-center card-hover">
            <Code className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">LeetCode</h3>
            <p className="text-muted-foreground">Rating: 1488</p>
            <p className="text-muted-foreground">Problems Solved: 150</p>
            <a
              href="https://leetcode.com/u/Deeptanshu6908/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline mt-4 inline-block"
            >
              View Profile
            </a>
          </div>

          {/* Codeforces Card */}
          <div className="bg-card p-6 rounded-lg shadow-md text-center card-hover">
            <Star className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Codeforces</h3>
            <p className="text-muted-foreground">Rating: N/A</p>
            <p className="text-muted-foreground">Contests: N/A</p>
            <a
              href="https://codeforces.com/profile/Deep6908"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline mt-4 inline-block"
            >
              View Profile
            </a>
          </div>

          {/* GeeksforGeeks) */}
          <div className="bg-card p-6 rounded-lg shadow-md text-center card-hover">
            <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">GeeksforGeeks</h3>
            <p className="text-muted-foreground">Institute Rank - 699/4555</p>
            <p className="text-muted-foreground">Problems Solved: 110</p>
            <a
              href="https://www.geeksforgeeks.org/user/deeptangshu758/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline mt-4 inline-block"
            >
              View Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
