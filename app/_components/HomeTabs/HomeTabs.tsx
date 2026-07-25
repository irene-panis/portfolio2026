"use client";

import { useLayoutEffect, useRef, useState } from "react";

type Tab = "projects" | "shelf";

type HomeTabsProps = {
  projects: React.ReactNode;
  shelf: React.ReactNode;
};

const tabs: { id: Tab; label: string }[] = [
  { id: "projects", label: "projects" },
  { id: "shelf", label: "shelf" },
];

const HomeTabs = ({ projects, shelf }: HomeTabsProps) => {
  const [activeTab, setActiveTab] = useState<Tab>("projects");
  const containerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Partial<Record<Tab, HTMLButtonElement>>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const updateIndicator = () => {
      const container = containerRef.current;
      const activeButton = tabRefs.current[activeTab];

      if (!container || !activeButton) return;

      const containerRect = container.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();

      setIndicator({
        left: buttonRect.left - containerRect.left,
        width: buttonRect.width,
      });
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeTab]);

  return (
    <>
      <div
        ref={containerRef}
        className="relative inline-flex self-center rounded-full bg-accent p-1"
      >
        <div
          aria-hidden
          className="absolute top-1 bottom-1 rounded-full bg-white transition-all duration-200 ease-in-out"
          style={{
            left: indicator.left,
            width: indicator.width,
          }}
        />

        {tabs.map((tab) => (
          <button
            key={tab.id}
            ref={(element) => {
              tabRefs.current[tab.id] = element ?? undefined;
            }}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`relative z-10 rounded-full px-4 py-1 text-sm transition-colors duration-200 ease-in-out ${
              activeTab === tab.id
                ? "text-background"
                : "text-foreground hover:text-background"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {activeTab === "projects" ? projects : shelf}
      </div>
    </>
  );
};

export default HomeTabs;
