import CharacterLook from "@/components/CharacterLook";
import { looks } from "@/lib/data";

/**
 * Single-page lookbook feed. One character per scroll position.
 * Click any look to expand its "shop the look" grid in place.
 */
export default function HomePage() {
  return (
    <div data-screen-label="01 lookbook">
      {looks.map((look, i) => (
        <CharacterLook key={look.characterName} look={look} priority={i === 0} />
      ))}
    </div>
  );
}
