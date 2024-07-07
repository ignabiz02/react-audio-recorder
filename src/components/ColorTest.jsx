export default function ColorTest() {
  return (
    <div className="p-4 space-y-2">
      <p className="bg-background text-foreground p-2">
        Background and Foreground
      </p>
      <p className="bg-card text-card-foreground p-2">
        Card and Card Foreground
      </p>
      <p className="bg-popover text-popover-foreground p-2">
        Popover and Popover Foreground
      </p>
      <p className="bg-primary text-primary-foreground p-2">
        Primary and Primary Foreground
      </p>
      <p className="bg-secondary text-secondary-foreground p-2">
        Secondary and Secondary Foreground
      </p>
      <p className="bg-muted text-muted-foreground p-2">
        Muted and Muted Foreground
      </p>
      <p className="bg-accent text-accent-foreground p-2">
        Accent and Accent Foreground
      </p>
      <p className="bg-destructive text-destructive-foreground p-2">
        Destructive and Destructive Foreground
      </p>
    </div>
  );
}
