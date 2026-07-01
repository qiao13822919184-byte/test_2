import { MeshGradient } from "@paper-design/shaders-react";

/**
 * 首页英雄区流光底图（用户指定的明亮色板：钴蓝 → 青 → 米 → 金橙 → 赤）。
 * — 去掉了原 demo 的所有 chrome 与 wireframe 线框层，单层平滑网格，避免扫描线「土」感；
 * — 仅作背景层：外层 Astro 提供 SSR 渐变兜底 + 暗场蒙版，保证文字可读与首屏不依赖 WebGL；
 * — client:idle / client:only 懒挂载。
 */
export default function SteelShader({ className = "" }: { className?: string }) {
  return (
    <div className={`h-full w-full ${className}`} aria-hidden="true">
      <MeshGradient
        className="absolute inset-0 h-full w-full"
        colors={["#0a3bd0", "#0f6fd0", "#16a3cf", "#8fcdd6", "#e7e0cb", "#f3b32a", "#f0731a", "#6e1800"]}
        speed={0.3}
        backgroundColor="#0a3bd0"
      />
    </div>
  );
}
