import MemberProfilePage from "@/app/member-profile/member-profile";

export function capitalizeEachWord(str) {
    return str?.replace(/\b\w/g, char => char.toUpperCase());
}

export default function HomeownersPage() {
    return (
        <>
            <MemberProfilePage/>
        </>
    )
}