import Image from "next/image";
import ExpandableSection from "@/components/candidate/cv/ExpandableSection";
import CandidateNavbar from "@/components/candidate/CandidateNavbar";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-start justify-between p-24">

            <CandidateNavbar></CandidateNavbar>

            <ExpandableSection title='Personal information'>
                <p>personal information</p>
            </ExpandableSection>

            <ExpandableSection title='Profile'>
                <p>profile</p>
            </ExpandableSection>

            <ExpandableSection title='Formation'>
                <p>formation</p>
            </ExpandableSection>

            <ExpandableSection title='Profesionnal Experience'>
                <p>professional experience</p>
            </ExpandableSection>

            <ExpandableSection title='Qualities'>
                <p>qualities</p>
            </ExpandableSection>

            <ExpandableSection title='Hobbies'>
                <p>hobbies</p>
            </ExpandableSection>

        </main>
    );
}
