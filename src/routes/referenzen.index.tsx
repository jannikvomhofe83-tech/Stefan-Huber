import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/referenzen/")({
  beforeLoad: () => {
    throw redirect({ to: "/referenzen/neubau" });
  },
});
