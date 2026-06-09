

import MyRequestCard from '@/component/cards/MyRequestCard';
import { deletMyRequest } from '@/lib/action';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';



const myRequestsPage = async() => {
   const session = await auth.api.getSession({
          headers: await headers()
      })
      //  
      const email = session?.user?.email
      console.log(email)
      
      const res = await fetch(`https://petzeno-server.vercel.app/myRequest/${session?.user?.email}`)
      const data = await res.json()
      console.log(data)
    
    return (
    
       <div>
        {data.map(d=> <MyRequestCard key={d?._id} data={d} deletMyRequest={deletMyRequest}></MyRequestCard>)}
       
       </div>


    );
};

export default myRequestsPage;