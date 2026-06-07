import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import React from 'react';

const deshboardpage = () => {
    redirect('/deshboard/myListing')
    return (
        <div>
            
                
            
        </div>
    );
};

export default deshboardpage;