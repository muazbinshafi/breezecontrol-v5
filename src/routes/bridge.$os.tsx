import { createFileRoute } from "@tanstack/react-router";
import BridgeGuideOS from "@/pages/BridgeGuideOS";

export const Route = createFileRoute("/bridge/$os")({
  component: BridgeGuideOS,
});
