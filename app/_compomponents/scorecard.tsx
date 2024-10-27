export default function Scorecard() {

    const players = Array(10).fill("Player", 0);

    return (
        <div className="h-full flex flex-col gap-2">
            <div className="flex flex-col gap-1 text-center">
                <span className="">SRILANKA</span>
                <span className="">500/10</span>
            </div>

            <div className="flex flex-col gap-2">
                {
                    players.map((player, i) => {
                        return (
                            <div key={i} className="flex flex-row gap-2">
                                {
                                    i !== 9 && <span className="max-w-[13px] w-[13px]">0{i + 1}</span>
                                }
                                {
                                    i === 9 && <span className="max-w-[13px] w-[13px]">{i + 1}</span>
                                }
                                <span className="flex-grow">Player {i + 1}</span>
                                <span className="max-w-[70px] min-w-[55px]">100 (100)</span>
                            </div>
                        )
                    })
                }
            </div>


        </div>
    );
}
