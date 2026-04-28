import { Github, Mail, Rss, Twitter } from "lucide-react";

// [修改部分] 添加 "steam" 到 SOCIAL_PLATFORM_KEYS 数组中
export const SOCIAL_PLATFORM_KEYS = [
  "github",
  "twitter",
  "discord",
  "bilibili",
  "email",
  "rss",
  "steam", // 新增 Steam 平台
  "custom",
] as const;

export type SocialPlatform = (typeof SOCIAL_PLATFORM_KEYS)[number];

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  icon?: string; // R2 path, only for "custom"
  label?: string; // tooltip, only for "custom"
}

function DiscordIcon({
  size = 24,
  strokeWidth: _strokeWidth,
}: {
  size?: number;
  strokeWidth?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function BilibiliIcon({
  size = 24,
  strokeWidth: _strokeWidth,
}: {
  size?: number;
  strokeWidth?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498.134.756.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373z" />
    </svg>
  );
}

// [新增部分] 添加 Steam 图标组件
function SteamIcon({
  size = 24,
  strokeWidth: _strokeWidth,
}: {
  size?: number;
  strokeWidth?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.893 10.208c-.002 1.88-1.525 3.402-3.404 3.402-.522 0-1.019-.119-1.463-.333l-1.363 1.616c.586.35 1.266.558 1.995.558 2.617 0 4.736-2.119 4.736-4.736 0-.564-.1-1.103-.288-1.6zm-8.192-.003c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25zm5.6-3.32l-.812.425c-.315-.584-.785-1.077-1.37-1.425l.425.812c.348.585.841 1.055 1.425 1.37l.812-.425c-.348-.585-.841-1.055-1.425-1.37zm-4.625 7.437c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm-2.5-3.125c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm-3.063 1.875c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm-1.875-2.5c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z"/>
    </svg>
  );
}

export function resolveSocialHref(
  platform: SocialPlatform,
  url: string,
): string {
  if (platform === "email") {
    return url.startsWith("mailto:") ? url : `mailto:${url}`;
  }
  if (
    platform === "rss" ||
    url.startsWith("http://") ||
    url.startsWith("https://") ||
    url.startsWith("/")
  ) {
    return url;
  }
  return `https://${url}`;
}

interface PlatformMeta {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  label: string;
}

export const SOCIAL_PLATFORMS: Record<
  Exclude<SocialPlatform, "custom">,
  PlatformMeta
> = {
  github: { icon: Github, label: "GitHub" },
  twitter: { icon: Twitter, label: "Twitter / X" },
  discord: { icon: DiscordIcon, label: "Discord" },
  bilibili: { icon: BilibiliIcon, label: "Bilibili" },
  email: { icon: Mail, label: "Email" },
  rss: { icon: Rss, label: "RSS" },
  steam: { icon: SteamIcon, label: "Steam" }, // [修改部分] 添加 Steam 平台配置
};
