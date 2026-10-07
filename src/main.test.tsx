import { expect, test, vi } from "vitest";
const { render } = vi.hoisted(() => ({ render: vi.fn() }));
vi.mock("react-dom/client", () => ({ createRoot: vi.fn(() => ({ render })) }));

test("entry point mounts the application into its root element", async () => {
  document.body.innerHTML = '<div id="root"></div>';
  await import("./main");
  const { createRoot } = await import("react-dom/client");
  expect(createRoot).toHaveBeenCalledWith(document.getElementById("root"));
  expect(render).toHaveBeenCalledOnce();
});
