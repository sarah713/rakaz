interface CampProps {
    backgroundImage: string;
    title: string;
    subtitle: string;
    peopleJoined: string;
}



const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage}`}>
        Camp Site 1
    </div>
}

const Camp = () => {


    return (
        <section className="border-2 border-green-200 2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
            <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-auto lg:h-[400px]  xl:h-[640px]">
                <CampSite backgroundImage="img-1" title="Putuk Truno Camp" subtitle="Prigen,Pasuruan" peopleJoined="599+ Joined" />
            </div>
        </section>
    )
}

export default Camp