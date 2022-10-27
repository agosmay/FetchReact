import React , { useState, useEffect } from 'react';


const FetchingDataConFetch = () => {
	
	
	const [posts, setPosts]= useState([]); 
	
	useEffect(()=> {
		fetch('https://jsonplaceholder.typicode.com/posts')
			
				
				
  .then(response => response.json())
  .then(data => {
	  console.log(data)
	  setPosts(data)
  })
				
		
			
			.catch(err =>{
				console.log(err)
			})
		
	},[])
	
	return (
		<>
			<ul>
			{
				posts.map((post)=> (
					<li key={post.id}>{post.id}</li>
				
				))
				
			}
			</ul>
		</>
	);
	
}
export default FetchingDataConFetch;