'use client';
import {Suspense, useState} from 'react';
import { useSearchParams } from 'next/navigation';
import {LoggedInNav} from "@/components/LoggedInNav/LoggedInNav";
import {MemberTabs} from "@/components/MemberTabs/MemberTabs";
import {JobsTable} from "@/components/JobsTable/JobsTable";
import {DashboardFooter} from "@/components/DashboardFooter/DashboardFooter";
import {capitalizeEachWord} from "@/app/member-profile/page";
import {MobileFooterDock} from "@/components/MobileFooterDock/MobileFooterDock"; // Using Next.js built-in navigation for search params

function MemberProfileContent() {
    const searchParams = useSearchParams();
    const statusParam = searchParams.get('status');
    const [activeTab, setActiveTab] = useState(capitalizeEachWord(statusParam) || 'All Jobs')

    return (
        <>
            <LoggedInNav/>
            <MemberTabs setActiveTab={setActiveTab} activeTab={activeTab}/>
            <JobsTable activeTab={activeTab}/>
            <DashboardFooter/>
            <MobileFooterDock/>
        </>
    )
}

export default function MemberProfilePage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <MemberProfileContent />
        </Suspense>
    );
}