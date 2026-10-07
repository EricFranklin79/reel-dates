import { Drawer } from "@mantine/core";
import { HelpIllustration } from "./HelpIllustration";
export function HelpDrawer({
  opened,
  onClose,
}: Readonly<{
  opened: boolean;
  onClose: () => void;
}>) {
  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      position="right"
      size={420}
      title="How Reel Dates works"
      closeButtonProps={{ "aria-label": "Close instructions" }}
      overlayProps={{ backgroundOpacity: 0.25, blur: 2 }}
      classNames={{
        content: "instructions-drawer",
        header: "instructions-drawer-header",
        title: "instructions-drawer-title",
        body: "instructions-content",
      }}
    >
      <div className="eyebrow">A DIFFERENT KIND OF MOVIE MATCH</div>
      <h3>It’s all in the story.</h3>
      <p>
        A day in the plot. A date on a time machine. A memorable line. We match
        your date to something inside the film, never its release date or
        awards.
      </p>
      <ol>
        <li>
          Choose a date and select <strong>Find my movie</strong>.
        </li>
        <li>Read the pick’s story connection and follow its source.</li>
        <li>Make it a movie night.</li>
      </ol>
      <p className="instructions-note">
        Matches repeat on the same month and day each year. Explanations may
        reveal plot details.
      </p>
      <HelpIllustration />
    </Drawer>
  );
}
