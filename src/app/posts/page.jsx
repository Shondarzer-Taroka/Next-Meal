import Link from "next/link";

const page = async () => {
    let postsData = async () => {
        let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
        let data = await res.json()
        return data
    }

    let x = await postsData()

    // console.log(x);
    return (
        <div>
            All posts are got from server: {x.length}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {x.map(post => {
                    return <>

                        <div key={post.id} className="border border-teal-800 rounded-lg p-3">
                            <h2> <span className="font-bold"> Id:</span> {post.id}</h2>
                            <h1> <span className="font-bold"> Post Title:</span>  {post.title}</h1>
                            <p> <span className="font-bold"> Description:</span> {post.body}</p>
                            <Link href={`/posts/${post.id}`}>  <button className="px-3 py-2 bg-slate-800 text-white rounded-lg font-semibold">view details</button></Link>

                        </div>
                    </>
                })}
            </div>
        </div>
    );
};

export default page;