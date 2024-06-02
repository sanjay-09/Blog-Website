import { Avatar } from '../ui/avatar';
import { Card, CardHeader, CardTitle } from '../ui/card'





const tags = ["Learning"];
export default function BlogCard() {
    return (
        <main
            className="flex h-[100vh] w-full items-center justify-center bg-[#F5D04E] p-5 font-figtree"
        >
            <Card
                className="w-[17.5rem] rounded-2xl border border-black shadow-[0.4rem_0.4rem_0_0_#000]"
            >
                <CardHeader className="gap-2">
                    <img
                        src={"/assets/placeholder.png"}
                        alt="Preview Image"
                        className="h-40 w-64 rounded-xl"
                        style={{ objectFit: "cover" }}
                    />

                    <div className="flex items-center gap-3 text-sm font-bold">
                        {
                            tags.map((tag) => (
                                <span className="rounded bg-[#F5D04E] px-2 py-1 shadow-[1px_1px_1px_0_rgba(0,0,0,.2)]">
                                    {tag}
                                </span>
                            ))
                        }
                    </div>

                    <div className="text-[.7rem] font-[700] text-neutral-600">
                        Published 21 Dec 2023
                    </div>

                    <CardTitle className=" text-lg font-[800]">
                        HTML &amp; CSS Foundations
                    </CardTitle>
                    <div className="p-0 text-xs font-[600] text-neutral-400">
                        These languages are the backbone of every website,
                        definining structure, content, and presentation.
                    </div>
                    <div className="flex items-center gap-3">
                        <Avatar  alt="Avatar Image" className="size-7" />
                        <div className="text-sm font-[800]">Greg Hooper</div>
                    </div>
                </CardHeader>
            </Card>
        </main>
    )
}
