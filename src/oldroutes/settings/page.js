import {LoggedInNav} from "@/components/LoggedInNav/LoggedInNav";
import {MobileFooterDock} from "@/components/MobileFooterDock/MobileFooterDock";
import {UserSettings} from "@/components/UserSettings/UserSettings";

export default function Settings() {
    return (
        <>
            <LoggedInNav/>
            <UserSettings/>
            <MobileFooterDock/>
        </>
    )
}