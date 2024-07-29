
export const generateMetadata=async({params})=>{
    const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const postData= await res.json()

    return { 
        title:` ${postData.title}`,
        description: postData.body,
        keywords:[postData.body.split(' ')]
    }
 }

const page = async ({params}) => {
    console.log(params);

   async function getPostById() {
        let res=await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        let data= await res.json()

        return data
    }
// 
    let {id,title,body}= await getPostById();

    return (
        <div>
            <div className="border border-teal-800 rounded-lg p-3">
                <h2> <span className="font-bold"> Id:</span> {id}</h2>
                <h1> <span className="font-bold"> Post Title:</span>  {title}</h1>
                <p> <span className="font-bold"> Description:</span> {body}</p>
            </div>
        </div>
    );
};

export default page;