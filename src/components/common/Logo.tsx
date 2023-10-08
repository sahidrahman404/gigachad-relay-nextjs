import Link from "next/link";

export default function Logo({ href }: { href: string }) {
    return (
        <Link href={href}>
            <img
                className="h-10 w-auto"
                src="/logo.svg"
                alt="gigachad"
            />
        </Link>
    )
}
