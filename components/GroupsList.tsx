import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
type GroupsListProps = {
  groups: Group[];
};

export function GroupsList({ groups }: GroupsListProps) {
  return (
    <ul className="space-y-4">
      {groups.map((group, index) => (
        <li key={index} className="flex justify-between items-center">
          <div>
            <p className="font-semibold text-forest">{group.name}</p>
            <p className="text-sm text-sage">{group.time}</p>
          </div>
          <Button asChild className="bg-forest hover:bg-forest/80 text-white">
            <Link href={group.link}>
              التسجيل <ChevronRight className="mr-2 h-4 w-4" />
            </Link>
          </Button>
        </li>
      ))}
    </ul>
  );
}
