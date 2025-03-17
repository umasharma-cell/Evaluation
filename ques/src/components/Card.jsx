import { useEffect,useState } from "react";
import axios from 'axios';

const Card = () =>{
    const[posts,setPosts] = useState([]);
    
 useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response =>{
      setPosts(response.data);
    })
    .catch(error => console.log("error while fetching the data",error));
  },[]);
 


return (<>
<div className="container">
    {posts.map(post =>(
      <div key={post.id} className="post-card">
      <h3>{post.title}</h3>
    <p>{post.body}</p>
     <small>User ID:{post.userId}</small>
     </div> 
    ))}
</div>
</>
);
}

export default Card